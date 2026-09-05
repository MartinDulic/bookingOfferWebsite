import React from "react";

/**
 * Plain <picture>/<img> so the statically exported site serves the exact files
 * we ship — no server-side optimiser is available on a static export.
 *
 * Pass `mobileSrc` alongside `desktopSrc` to art-direct: only the matching
 * source is fetched, unlike two <img> elements toggled with `hidden`.
 * `fill` (the default) keeps the absolutely positioned cover behaviour the
 * background/hero callers rely on; pass `fill={false}` for inline images and
 * give them `width`/`height` so they reserve space before they load.
 */
const ResponsiveImage = ({
  alt,
  mobileSrc,
  desktopSrc,
  fallbackSrc,
  className = "",
  type = "image/avif",
  mobileType,
  desktopType,
  loading = "lazy",
  priority = false,
  fill = true,
  width,
  height,
  ...imgProps
}) => {
  const artDirected = Boolean(mobileSrc) && mobileSrc !== desktopSrc;

  return (
    <picture>
      {artDirected && (
        <>
          <source
            srcSet={desktopSrc}
            media="(min-width: 768px)"
            type={desktopType ?? type}
          />
          <source
            srcSet={mobileSrc}
            media="(max-width: 767px)"
            type={mobileType ?? type}
          />
        </>
      )}
      <img
        src={fallbackSrc ?? desktopSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${fill ? "absolute h-full w-full object-cover " : ""}${className}`}
        // If priority is true, we set loading to "eager" and use fetchpriority
        loading={priority ? "eager" : loading}
        fetchPriority={priority ? "high" : "auto"}
        // This is crucial for Speed Index
        decoding={priority ? "sync" : "async"}
        {...imgProps}
      />
    </picture>
  );
};

export default ResponsiveImage;
