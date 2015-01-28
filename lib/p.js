module.exports = function(lib, node){
	var attributes = lib.parseAttributes(node);
	var contents = lib.parseContent(node);

	return '<p' + attributes + '>' + contents + '</p>';
}
