// Tables for mapping code points
const nfcTable = new Map();
const nfdTable = new Map();
const nfkcTable = new Map();
const nfkdTable = new Map();

// Example mappings for NFC:
nfcTable.set(0x1234, 0x5678);
nfcTable.set(0xabcd, 0xef01);

// Example mappings for NFD:
nfdTable.set(0x1234, 0x9abc);
nfdTable.set(0xdef0, 0x2345);

// Example mappings for NFKC:
nfkcTable.set(0x5678, 0x90ab);
nfkcTable.set(0xcdef, 0x4567);

// Example mappings for NFKD:
nfkdTable.set(0x9abc, 0xdef0);
nfkdTable.set(0x2345, 0x6789);

String.prototype.normalize = function normalize(form) {
  const codePoints = [];
  let currentIndex = 0;

  while (currentIndex < this.length) {
    const codePoint = this.codePointAt(currentIndex);
    codePoints.push(codePoint);

    currentIndex += codePoint > 0xFFFF ? 2 : 1;
  }

  let result = "";
  let codePointIndex = 0;

  while (codePointIndex < codePoints.length) {
    const codePoint = codePoints[codePointIndex];
    let normalizedCodePoint = codePoint;

    if (form === "NFC") {
      normalizedCodePoint = nfcTable.get(codePoint) || codePoint;
    } else if (form === "NFD") {
      normalizedCodePoint = nfdTable.get(codePoint) || codePoint;
    } else if (form === "NFKC") {
      normalizedCodePoint = nfkcTable.get(codePoint) || codePoint;
    } else if (form === "NFKD") {
      normalizedCodePoint = nfkdTable.get(codePoint) || codePoint;
    }

    result += String.fromCodePoint(normalizedCodePoint);
    codePointIndex += codePoint > 0xFFFF ? 2 : 1;
  }

  return result;
};