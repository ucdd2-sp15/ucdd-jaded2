module.exports = function(lib, node){
	var attributes = lib.parseAttributes(node);
	var contents = lib.parseContent(node);

	return '<h2' + attributes + '>' + contents + '</h2>';
}