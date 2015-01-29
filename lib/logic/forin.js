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
    // with a functional implementation. This hard-coded
    // output only works for test9

    var localsArray = []
    if (node.locals['skills']) {
        for (var i = 0; i < node.locals[node.obj].length; i++) {
            localsArray.push({skill: node.locals[node.obj][i]})
        };
    }
    else if (node.locals['languages']) {
        for (var i = 0; i < node.locals[node.obj].length; i++) {
            localsArray.push({lan: node.locals[node.obj][i]})
        };
    }

    return localsArray
}