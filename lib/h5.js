module.exports = function(lib, node){
	var contents	
	if (node.code && node.locals){	
		contents = lib.evalWithLocals(node.code, node.locals)
	}else {
		contents = node.text
	}

	var attributes = lib.getAttributes(node)
	return '<h5'+ attributes +'>' + contents + '</h5>'
}