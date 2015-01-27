var fs = require('fs'),
    chalk = require('chalk')

// load our and their template engine libraries
var jaded = require('./lib/jaded.part2'),
    jade = require('jade')

var locals

locals = {
    article: {
        title: 'Fun with Jade',
        author: 'Emily',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
}

renderAndCompare('test6', locals)
renderAndCompare('test7', locals)

locals = {
    image: {
        title: 'My Dog',
        url: 'dog.png'
    }
}

renderAndCompare('test8', locals)

locals = {
    skills: [{
        name: 'Javascript',
        years: 5
    }, {
        name: 'Python',
        years: 3
    }]
}

renderAndCompare('test9', locals)

locals = {
    languages: [{
        name: 'Javascript',
        years: 5
    }, {
        name: 'Python',
        years: 3
    }, {
        name: 'C++',
        years: 2
    }]
}

renderAndCompare('test10', locals)


function renderAndCompare(name, locals) {
    var jadeFile = 'templates/' + name + '.jade'
    var jsonFile = 'templates/' + name + '.json'

    // load the content of the jade template file for the test case into 'text'
    var text = fs.readFileSync(jadeFile, 'utf8')

    // load the precomputed tree representation of the jade template file into 'tree'
    var tree = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))

    // render the template using their and our implementation
    var theirResult = jade.render(text, locals)
    var ourResult = jaded.renderWithLocals(tree, locals)

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