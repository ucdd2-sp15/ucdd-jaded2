var debug = require('debug')('jaded.part2')

var h4 = require('./h4'),
    h5 = require('./h5'),
    img = require('./img'),
    p = require('./p')

var once = require('./logic/once'),
    forin = require('./logic/forin')

var lib = module.exports = {}

// main function to export
lib.renderWithLocals = function(node, locals) {
    node.locals = locals
    return render(node)
}

function render(node) {

    // We want to render 'node' zero, once, or several times
    // following certain logic. The 'locals' object may need
    // to be different. We first generate 'localsArray' to be
    // a list of such 'locals' object
     var localsArray

    // lookup and invoke the appropriate logic function to
    // generate a 'localsArray'
    if (node.type == 'Each') {

        localsArray = forin(node)

    } else {

        localsArray = once(node)
    }

    // array to collect generated html parts
    var htmlParts = []

    // for each 'locals' object in 'localsArray',
    localsArray.forEach(function(locals) {

        if (node.children) {

            node.children.forEach(function(child) {

                // assign to this child the current 'locals' object
                child.locals = locals
                var part = render(child)
                htmlParts.push(part)
            })

        } else {

            var part = generateHTML(node)
            htmlParts.push(part)
        }
    })

    return htmlParts.join('')

}


// private helper function to generate HTML text for a node
// it uses the name of the node to decide with generator function
// to invoke
function generateHTML(node) {

    if (node.name === 'h4') {

        html = h4(lib, node)

    } else if (node.name === 'h5') {

        html = h5(lib, node)

    } else if (node.name === 'img') {

        html = img(lib, node)

    } else if (node.name === 'p') {

        html = p(lib, node)

    } else if (node.name === 'p'){

        html = p(lib, node)

    } else {
        
        html = '<' + node.name + ' not-yet-supported/>'
    }

    debug('generate <%s> --> %s', node.name, html)

    return html
}

lib.parseAttributes = function(node) {
    attributes = '';

    if (!node.attrs){
        return attributes
    }

    for (var i = 0 ; i < node.attrs.length ; i++){
        var name = node.attrs[i].name;
        // Account for stupid extra quotes
        var attrI = node.attrs[i]['val'].replace(/'/g,"");
        attr = attrI

        // Need to make sure there are valid values to be evaluated in locals
        if (lib.evalWithLocals(attrI, node.locals)){
            var attr = lib.evalWithLocals(attrI, node.locals);
        }
        attributes += ' ' + name + '="' + attr + '"';
    }
    return attributes;
}

lib.parseContents = function(node) {
    contents = ''
    return lib.evalWithLocals(node.code, node.locals)
}

/*
 *  Eval an expression with given local variables
 *  e.g.,
 *
 *  evalInScope('article.title', {article: {title: 'title'}})
 *  // => title
 */
lib.evalWithLocals = function(expression, locals) {

    var expressionWithScope = addPrefixToVariableNames(expression, 'locals.')
    var func = new Function('locals', 'return ' + expressionWithScope)
    return func(locals)

    function addPrefixToVariableNames(expression, prefix) {
        var toks = expression.split(' ')
        return toks.map(function(tok) {
            // if tok matches a valid variable name
            if (tok.match(/[A-Za-z0-9$_].*/)) {

                // prefix it
                tok = prefix + tok
                return tok
            } else {
                return tok
            }
        }).join(' ')
    }
}
