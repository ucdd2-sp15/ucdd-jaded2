module.exports = function(lib, node){
	var contents	
	if (node.code && node.locals){	
		contents = lib.evalWithLocals(node.code, node.locals)
	}else {
		contents = node.text
	}

	if (node.attrs){
		var attributes = node.attrs[0].name +'="'+ node.attrs[0].val.substr(1,node.attrs[0].val.length-2)+ '"'
		return '<p '+ attributes +'>' + contents + '</p>'
	} else {
		return '<p>' + contents + '</p>';
	} 


}