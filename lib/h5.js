module.exports = function(lib, node){
	var contents
	if (node.code && node.locals){
		contents = lib.evalWithLocals(node.code, node.locals)
	}else {
		contents = node.text
	}
    // TODO: Implement attributes here
	return '<h5>' + contents + '</h5>'
}
