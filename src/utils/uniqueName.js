function generateUniqueId() {
  // Get the current timestamp (milliseconds since Jan 1, 1970)
  const timestamp = Date.now();

  // Generate a random number (between 0 and 1) and convert it to a string
  const random = Math.random().toString(36).substr(2);

  // Combine the timestamp and random string to create a unique ID
  const uniqueId = timestamp.toString(36) + random;

  return uniqueId;
}

module.exports = generateUniqueId;
