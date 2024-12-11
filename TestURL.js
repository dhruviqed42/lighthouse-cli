// TestURL.js
const { executeLighthouseCLI } = require("./execution");

const urls = ["https://drreddysproducts.drreddys.acsitefactory.com/", "https://drreddysproducts.drreddys.acsitefactory.com/otcproducts/new-otc-product"];

// Execute Lighthouse CLI with local test URLs
executeLighthouseCLI(urls);
