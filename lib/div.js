module.exports = function(lib, node){
	if (node.children) {
        var contents = lib.render(node)
        return '<div>' + contents + '</div>'
    }else{
    	return '<div></div>'
    }
}