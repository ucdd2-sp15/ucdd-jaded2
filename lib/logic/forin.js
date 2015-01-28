// render multiple times
// for [val] in [obj]
module.exports = function(node) {

    // e.g., for skill in skills
    //
    // node:
    //
    // { type: 'Each',
    // 	 val: 'skill',
    //   obj: 'skills'
    //

    // TODO: replace the following hard-coded output
    // with a funtional implementation. This hard-coded
    // output only works for test9
    //console.log(node.locals)
    var localsArray = []
    for (element in node.locals)
    {
        for (var i = 0; i < node.locals[element].length; i++)
        {
            var bullshit = {}
            bullshit[node.val] = node.locals[element][i]
            localsArray.push(bullshit)
        }
    }
    return localsArray
}