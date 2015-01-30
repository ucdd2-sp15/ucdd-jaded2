module.exports = function(lib, node){
	var attributes = node.attrs[0].name+'="'+lib.evalWithLocals(node.attrs[0].val, node.locals)+'"'
	return '<img ' + attributes + '/>'
}