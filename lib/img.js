module.exports = function(lib, node){
	var attributes = lib.getAttributes(node)//node.attrs[0].name +'="'+ node.attrs[0].val+ '"'
	return '<img' + attributes + '/>'
}