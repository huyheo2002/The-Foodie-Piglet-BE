function makeKeyword(str) {
    const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Thay thế "đ" thành "d"
    const processedStr = normalizedStr.replace(/đ/g, "d");

    // Thay thế khoảng trắng thành dấu "-" && chuyển chữ hoa thành chữ thường
    const finalStr = processedStr.replace(/\s+/g, "-").toLowerCase();

    return finalStr;
}

module.exports = makeKeyword