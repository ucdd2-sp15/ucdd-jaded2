module.exports = function(lib, node){
	var attributes = lib.parseAttributes(node);
	var contents = lib.parseContent(node);

	return '<h1' + attributes + '>' + contents + '</h1>';
}
