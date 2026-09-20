/**
 * Submits to the HubSpot Forms API with a safety net around attribution.
 *
 * HubSpot rejects the whole submission with a 400 if it contains a property
 * that does not exist in the portal. The attribution fields are custom
 * properties, so a typo or a property that was never created would silently
 * stop every lead from arriving. A lost lead costs far more than lost
 * attribution, so on that specific failure we retry immediately with the core
 * contact fields only and report that attribution was dropped.
 */

const ENDPOINT = "https://api.hsforms.com/submissions/v3/integration/submit";

const isPropertyError = (body) => {
  if (!body) return false;
  const text = typeof body === "string" ? body : JSON.stringify(body);
  return /does not exist|INVALID_PROPERT|PROPERTY_DOESNT_EXIST/i.test(text);
};

/**
 * @param {string} portalId
 * @param {string} formId
 * @param {Array}  coreFields        fields that must always be sent
 * @param {Array}  attributionExtras fields that may be dropped on retry
 * @param {object} context           HubSpot context (hutk, pageUri, pageName)
 * @returns {Promise<{ok: boolean, attributionDropped: boolean, error?: any}>}
 */
export const submitHubspotForm = async ({
  portalId,
  formId,
  coreFields,
  attributionExtras = [],
  context = {},
}) => {
  const url = `${ENDPOINT}/${portalId}/${formId}`;

  const send = (fields) =>
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, context }),
    });

  let response;
  try {
    response = await send([...coreFields, ...attributionExtras]);
  } catch (error) {
    return { ok: false, attributionDropped: false, error };
  }

  if (response.ok) return { ok: true, attributionDropped: false };

  let body = null;
  try {
    body = await response.json();
  } catch {
    /* non-JSON error body */
  }

  if (attributionExtras.length && isPropertyError(body)) {
    console.warn(
      "[tracking] HubSpot rejected the attribution properties — resubmitting " +
        "without them. Create the pb_* contact properties; see docs/TRACKING.md.",
      body
    );
    try {
      const retry = await send(coreFields);
      if (retry.ok) return { ok: true, attributionDropped: true };
      return { ok: false, attributionDropped: true, error: await retry.json().catch(() => null) };
    } catch (error) {
      return { ok: false, attributionDropped: true, error };
    }
  }

  return { ok: false, attributionDropped: false, error: body };
};
