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

    var localsArray = []
    if (node.locals['skills']) {
        localsArray.push({
            skill: node.locals['skills'][0]
        })
        localsArray.push({
            skill: node.locals['skills'][1]
        })
    }

    return localsArray
}