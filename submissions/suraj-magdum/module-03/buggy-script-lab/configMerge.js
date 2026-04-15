const defaults = {
  host: "api.example.com",
  retries: 3,
  timeout: 5000
};

const overrides = readOverrides(process.env.CONFIG_OVERRIDES);

const consolidated = { ...defaults, ...overrides };
console.log("Merged configuration:", consolidated);

function readOverrides(rawOverrides) {
  if (!rawOverrides) {
    return {};
  }

  try {
    return JSON.parse(rawOverrides);
  } catch (error) {
    throw new Error(`CONFIG_OVERRIDES must be valid JSON: ${error.message}`);
  }
}
