String.prototype.fixed = function fixed() {
  var result = "";
  for (var i = 0; i < this.length; i++) {
    var charCode = this.charCodeAt(i);
    if (charCode >= 0x20 && charCode <= 0x7E) {
      result += String.fromCharCode(charCode + 0xFEE0);
    } else {
      result += this.charAt(i);
    }
  }
  return result;
}