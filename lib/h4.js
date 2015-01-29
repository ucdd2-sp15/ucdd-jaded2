module.exports = function(lib, node){
	var contents	
	if (node.code && node.locals){	
		contents = lib.evalWithLocals(node.code, node.locals)
	}else {
		contents = node.text
	}
	var attributesHtml ='';
	var attributes = node.attrs;
	for(index in attributes)
		attributesHtml += " " +  attributes[index].name + "="  + attributes[index].val.replace(/'/g, "\"");
	return '<h4' +  attributesHtml + '>' + contents + '</h4>'
}