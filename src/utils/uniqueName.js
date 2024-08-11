function generateUniqueId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2);
  const uniqueId = timestamp.toString(36) + random;

  return uniqueId;
}

module.exports = generateUniqueId;
