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
    if (node.locals[node.obj]) {
        var length = node.locals[node.obj].length;
        for (var i = 0; i < length; i++) {
            var obj = {};
            obj[node.val] = node.locals[node.obj][i];
            localsArray.push(obj);
        }
    }

    return localsArray;
}