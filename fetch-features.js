// fetch-features.js
const fs = require('fs');
const https = require('https');

const API_URL = "https://cdn.growthbook.io/api/features/sdk-XMk9xUOPk7FcLilC";

console.log('Fetching GrowthBook features...');

https.get(API_URL, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      // We save the entire object or just .features
      // The React SDK 'features' prop expects the content of json.features
      fs.writeFileSync('./growthbook-features.json', JSON.stringify(json.features || {}));
      console.log('✅ Success: growthbook-features.json created.');
    } catch (e) {
      console.error('❌ Failed to parse GrowthBook response:', e.message);
      process.exit(1);
    }
  });
}).on("error", (err) => {
  console.error("❌ Network error fetching features: " + err.message);
  process.exit(1);
});