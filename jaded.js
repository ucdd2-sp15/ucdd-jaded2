var debug = require('debug')('jaded')

// load generator functions from individual js files
// each file exports a 'generator' function that takes two arugments 'lib' and 'tag'
// 'lib' provides access to the library functions, such as render()
// 'node' is the node we wish to generate HTML text for
var a = require('./a.js'),
    h1 = require('./h1.js'),
    h2 = require('./h2.js'),
    div = require('./div.js')


var lib = module.exports = {}

// main function to export
lib.render = function(node) {

    if (node.children) {
        var htmlParts = []

        node.children.forEach(function(childNode) {

            var part = generateHTML(childNode)
            htmlParts.push(part)

        })

        return htmlParts.join('')

    } else {

        return ''
    }

}

// private helper function to generate HTML text for a node
// it uses the name of the node to decide with generator function
// to invoke
function generateHTML(node) {
    
    if (node.name === 'h1') {

        html = h1(lib, node)

    }
    else if (node.name === 'h2') {

        html = h2(lib, node)

    } else if (node.name === 'div') {

        html = div(lib, node)

    } else if (node.name === 'a') {

        html = a(lib, node)

    } else {

        html = '<' + node.name + ' not-yet-supported/>'
    }

    debug('generate <%s> --> %s', node.name, html)

    return html
}