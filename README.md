# ucdd-jaded

UCDD II class's effort to re-implement the jade template engine

# Install

	$ npm install

# Test

	$ node test.js

# Example

```
var jaded = require('./lib/jaded')

var tree = {
    "type": "Block",
    "children": [{
        "type": "Tag",
        "name": "h1",
        "text": "Welcome to Jaded"
    }]
}

jaded.render(tree)
// --> <h1>Welcome to Jaded</h1>
```