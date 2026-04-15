const userPayload = process.argv[2];
const user = parseUserPayload(userPayload);

function describeAccess(u) {
  const roles = Array.isArray(u?.roles) ? u.roles : [];
  return roles.map((role) => String(role).toUpperCase()).join(", ");
}

if (!user) {
  console.log("No user payload supplied. Provide a JSON object with a 'roles' array.");
} else {
  console.log("User access:", describeAccess(user));
}

function parseUserPayload(payload) {
  if (!payload) {
    return undefined;
  }

  try {
    return JSON.parse(payload);
  } catch (error) {
    throw new Error(`User payload must be valid JSON: ${error.message}`);
  }
}
