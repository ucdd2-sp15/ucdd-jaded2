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
    
    // if the node has obj
    if (node.locals[node.obj]) {
        // console.log(obj)
        // for the length of that obj, do a for loop
        for (var i = 0; i < node.locals[node.obj].length; i++) {
            var element = {};
            element[node.val] = node.locals[node.obj][i];
            localsArray.push(element)
        }
    }

    // if (node.locals["skills"]) {
    //     localsArray.push({
    //         skill: node.locals["skills"][0]
    //     })

        // skill[0]: 
        // { name: 'Javascript',
        // years: 5}

    //     localsArray.push({
    //         skill: node.locals["skills"][1]
    //     })
    // }


    return localsArray
}