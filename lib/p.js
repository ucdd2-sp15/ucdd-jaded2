module.exports = function(lib, node){
	var contents
    console.log('code');
    console.log(node.code);
    console.log(node);
	if (node.code && node.locals){
		contents = lib.evalWithLocals(node.code, node.locals)
	}else {
		contents = node.text
	}
	return '<p' + '>' + contents + '</p>'
}
