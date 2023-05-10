String.prototype.anchor = function anchor(name) {
  return '<a name="' + name + '">' + this + '</a>'
}