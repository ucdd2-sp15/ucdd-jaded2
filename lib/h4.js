module.exports = function(lib, node){
  return '<h4' + lib.parseAttributes(node) + '>' + lib.parseContent(node) + '</h4>'
}
