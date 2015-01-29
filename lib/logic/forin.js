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



    // console.log(node.val)

    var localsArray = []
    for(var field in node.locals){
        var array = node.locals[field] //e.g. skills

        // console.log(array)

        for(var i in array){ //e.g. each item (skill) in skills array

            // console.log(array[i])

            if (array) {
                var obj1 = {}

                for(var property in array[i]){ //e.g. each property of skill object (name and years)

                    // console.log(property)
                    // console.log(array[i][property])

                    obj1[property] = array[i][property]
                }

                var obj2 = {}
                obj2[node.val] = obj1
                localsArray.push(obj2)
            }
        }
    }

    // console.log(localsArray)

    return localsArray
}
