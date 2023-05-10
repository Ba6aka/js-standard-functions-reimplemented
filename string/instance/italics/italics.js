String.prototype.italics = function italics() {
  let result = "";
  let openTag = "<i>";
  let closeTag = "</i>";
  let inTag = false;

  for (let i = 0; i < this.length; i++) {
    const char = this[i];

    if (char === "<") {
      result += openTag;
      inTag = true;
    } else if (char === ">") {
      result += closeTag;
      inTag = false;
    } else if (!inTag) {
      result += openTag + char + closeTag;
    } else {
      result += char;
    }
  }

  return result;
}