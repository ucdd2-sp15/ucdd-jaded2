module.exports = function(lib, node){
  return '<h5' + lib.parseAttributes(node) + '>' + lib.parseContent(node) + '</h5>'
}
