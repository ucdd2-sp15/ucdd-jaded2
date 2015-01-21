var util = require('util')
module.exports = function(lib, node)
{
	var contents = node.text
	var child = false
	if (node.attrs) 
	{
		child = true
		var attributes = node.attrs[0]
		var name = attributes.name
		var value = attributes.val
		value = value.substring(1,(value.length)-1)
	}
	if (child == true)
	{
		return '<h1 '+name+'='+'"'+value+'"'+'>' + node.text + '</h1>'	
	}
	return '<h1>' + node.text + '</h1>'
}