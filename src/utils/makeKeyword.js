function makeKeyword(str) {
  const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const processedStr = normalizedStr.replace(/đ/g, "d");

  const finalStr = processedStr.replace(/\s+/g, "-").toLowerCase();

  return finalStr;
}

module.exports = makeKeyword;
