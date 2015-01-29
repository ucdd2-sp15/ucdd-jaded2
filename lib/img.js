module.exports = function(lib, node){
    var attributes = lib.parseAttributes(node);
	return '<img' + attributes + '/>'
}
