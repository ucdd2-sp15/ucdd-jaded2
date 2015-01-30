module.exports = function(lib, node){
  //return '<h5' + lib.parseAttributes(node) + '>' + lib.parseContent(node) + '</h5>'
  var contents
  var attributes = ""

  if (node.code && node.locals){	
		contents = lib.evalWithLocals(node.code, node.locals)
	}else {
		contents = node.text
	}

  if (node.attrs){
  	var attrs_name = node.attrs[0].name;
  	var attrs_val = node.attrs[0].val;

  	attributes = " " + attrs_name + "=\"" + attrs_val.substring(1,attrs_val.length -1) + "\""
  }

  return "<h5" + attributes +">" + contents + "</h5>"
}
