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
    var objVal = node.val
    var objName = node.obj
    var localsArray = []
    if (node.locals[objName]) {
        var objLocals = node.locals[objName]
        objLocals.forEach(function(objLocal) {
            var local = {}
            local[objVal] = objLocal
            localsArray.push(local)
        })
    }
    return localsArray
}
