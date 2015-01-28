module.exports = function(lib, node){
    console.log(node);

    var attributes = lib.parseAttributes(node);

	return '<img' + attributes + '/>'
}
