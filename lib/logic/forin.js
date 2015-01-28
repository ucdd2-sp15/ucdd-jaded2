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
    for(key in node.locals) {
        if(node.locals.hasOwnProperty(key)) {
            var arr = node.locals[key];
            var len = arr.length;
            // loop through sub-array
            for(var i = 0; i < len; i++) {
                var obj = {};
                obj[node.val] = arr[i];
                localsArray.push(obj);
            }
        }
    }
    
    /* Hard-coded version (test #9)
    if (node.locals['skills']) {
        localsArray.push({
            skill: node.locals['skills'][0]
        })
        localsArray.push({
            skill: node.locals['skills'][1]
        })
    }
    */

    return localsArray
}
