module.exports = function(lib, node){
  var attributes = lib.parseAttributes(node)
  var contents = lib.parseContents(node)
  
	return '<p' + attributes + '>' + contents + '</p>'
}
