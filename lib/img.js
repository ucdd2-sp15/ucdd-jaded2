module.exports = function(lib, node){
	var attributes = ''
	for (i in node.attrs) {
		attributes += node.attrs[i].name + '="' + lib.evalWithLocals(node.attrs[i].val, node.locals) + '"'
	}
	return '<img ' + attributes + '/>'
}