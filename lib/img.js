module.exports = function(lib, node){
	var attributes	
	if (node.attrs[0].val && node.locals){	
		attributes = node.attrs[0].name + "=\"";
		attributes += lib.evalWithLocals(node.attrs[0].val, node.locals);
		attributes += "\""
	}
	return '<img ' + attributes + '/>'
}