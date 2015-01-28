var debug = require('debug')('jaded.part2')

var h4 = require('./h4'),
    h5 = require('./h5'),
    img = require('./img')
    p = require('./p')

var once = require('./logic/once'),
    forin = require('./logic/forin')

var lib = module.exports = {}

// main function to export
lib.renderWithLocals = function(node, locals) {
    node.locals = locals
    return render(node)
}

lib.parseAttributes = function(node){
  var toReturn = ""
  if (node.attrs){
    node.attrs.forEach(function (attribute){
        if (node.locals.val){
        }
      //Special case becasue sometimes the src will need substituted
      if (attribute.name == "src"){
        toReturn += " " + attribute.name + "=" + "\"" + lib.evalWithLocals(attribute.val, node.locals) + "\""
      } else{
        toReturn += " " + attribute.name + "=" + "\"" + attribute.val.replace(/^\'|\'$/g, "") + "\""
      }
    });
  }
  return toReturn
}

lib.parseContent = function(node){
  var contents
  if (node.code && node.locals){
    contents = lib.evalWithLocals(node.code, node.locals)
  }else{
    contents = node.text
  }
  return contents
}

function iter(obj) {
  for (var key in obj) {
    if (typeof(obj[key]) == 'object') {
      iter(obj[key]);
        } else {
        console.log("Key: " + key + " Values: " + obj[key]);
        }
                                  }
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
    } else if (node.name === 'h1') {
      html = h1(lib, node)
    } else if (node.name === 'h2') {
      html = h2(lib, node)
    } else if (node.name === 'h5') {
        html = h5(lib, node)
    } else if (node.name === 'img') {
        html = img(lib, node)
    } else if (node.name === 'a') {
        html = a(lib, node)
    } else if (node.name === 'p'){
      html = p(lib, node)
    } else if (node.name === 'div'){
      html = div(lib, node)
    }
    else {
        html = '<' + node.name + ' not-yet-supported/>'
    }

    debug('generate <%s> --> %s', node.name, html)

    return html
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
