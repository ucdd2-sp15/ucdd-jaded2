module.exports = function(lib, node){
	var attributes = lib.getAttributes(node)//node.attrs[0].name +'="'+ node.attrs[0].val+ '"'
	var contents    
    if (node.code && node.locals){  
        contents = lib.evalWithLocals(node.code, node.locals)
    }else {
        contents = node.text
    }
        
    return '<' + node.name + attributes + '>' + contents + '</'+node.name+'>'
}