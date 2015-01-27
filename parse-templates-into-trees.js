var lex = require('jade-lexer'),
    parse = require('jade-parser'),
    fs = require('fs'),
    _ = require('lodash')


var glob = require("glob")

glob("templates/*.jade", function (er, files) {
  
    files.forEach(function(file){

        var text = fs.readFileSync(file, 'utf8')

        var ast = parse(lex(text))
        var ast_simplified = simplify(ast)

        var dest = file.replace('.jade','.json')
        fs.writeFileSync(dest, JSON.stringify(simplify(ast), null, ' '))

        console.log('%s -> %s', file, dest)
    })
})

function simplify(block) {
    var b = {}
    b.type = block.type
    b.children =
        block.nodes.map(function(node) {
            var n = {
                type: node.type,
                name: node.name,
                val: node.val,
            }
            console.log(node)
            if (node.code) {
                n.code = node.code.val
            }
            if (node.obj) {
                n.obj = node.obj
            }
            if (node.attrs && node.attrs.length > 0) {
                n.attrs = _.map(node.attrs, function(at) {
                    return _.pick(at, ['name', 'val'])
                })
            }
            if (node.block) {
                nodes = simplify(node.block).children

                // simplify text node
                if (nodes.length === 1 && nodes[0].type === 'Text') {
                    n.text = nodes[0].val
                } else if (nodes.length > 0) {
                    n.children = nodes
                }
            }
            return n
        })
    return b
}