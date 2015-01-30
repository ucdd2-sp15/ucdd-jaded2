module.exports = function(lib, node){
  return '<img' + lib.parseAttributes(node) + '/>'
}
