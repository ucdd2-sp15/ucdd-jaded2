var fs = require('fs'),
    chalk = require('chalk')

// load our and their template engine libraries
var jaded = require('./lib/jaded'),
    jade = require('jade')

renderAndCompare('test1')
renderAndCompare('test2')
renderAndCompare('test3')
renderAndCompare('test4')
renderAndCompare('test5')

function renderAndCompare(name) {    
    var jadeFile = 'templates/' + name + '.jade'
    var jsonFile = 'templates/' + name + '.json'

    // load the content of the jade template file for the test case into 'text'
    var text = fs.readFileSync(jadeFile, 'utf8')
    
    // load the precomputed tree representation of the jade template file into 'tree'
    var tree = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))

    // render the template using their and our implementation
    var theirResult = jade.render(text)
    var ourResult = jaded.render(tree)

    // compare results
    var isMatched = theirResult == ourResult

    // visualize
    console.log("---------------------------------------------")
    console.log(chalk.bold(name))
    console.log(chalk.magenta(text))
    console.log(chalk.grey("Jade:") + "\n" + theirResult)
    console.log(chalk.grey("Jaded:") + "\n" + ourResult)
    console.log(chalk.grey("Matched? ") + (isMatched ? chalk.green('Yes') : chalk.red('No')))
}