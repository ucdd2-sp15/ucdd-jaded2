module.exports = function(lib, node){
	var attributesHtml ='';
	var attributes = node.attrs;
	for(index in attributes)
		attributesHtml += " " +  attributes[index].name + "="  + attributes[index].val.replace(/'/g, "\"");;
	var contents = node.text
	return '<h1' + attributesHtml + '>' + node.text + '</h1>'
}