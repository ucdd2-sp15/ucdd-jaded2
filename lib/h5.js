module.exports = function(lib, node){
	var contents = lib.parseContents(node)
  var attributes = lib.parseAttributes(node)

	return '<h5' + attributes + '>' + contents + '</h5>'
}
