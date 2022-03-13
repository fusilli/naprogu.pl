module.exports = function(content) {
  return content.replace(/([ ](<em>)?(<strong>)?[\(]?[„]?[a|i|o|u|w|z])([ ])/gi, "\$1&nbsp;");
}