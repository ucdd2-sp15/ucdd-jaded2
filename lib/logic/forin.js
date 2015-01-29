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


    //for(var field in node.locals) -- field = 'skills'

    console.log(node.val)

    var localsArray = []
    for(var field in node.locals){
        var array = node.locals[field] //skills

        // console.log(array)

        for(var i in array){

            // console.log(array[i])


            if (array) {

                for(var property in array[i]){

                    console.log(property)
                    console.log(array[i][property])

                    localsArray.push({
                        skill: array[i].property
                    })
                }
            }
        }
    }

    return localsArray
}