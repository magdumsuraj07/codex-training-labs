const requestedRetries = Number(process.argv[2]);
const maxRetries = Math.max(1, Number.isFinite(requestedRetries) ? Math.floor(requestedRetries) : 3);
const windows = new Array(maxRetries).fill(1000);

console.log("Retry windows:", windows);
