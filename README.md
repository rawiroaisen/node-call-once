# Nodejs call-once
Simply call only one time a function
<br>
<br>
## Install
`npm install call-once`
<br>
<br>
## Usage
```js
var once = require('call-once')

var fn = function(){
	console.log('hello')
}

var fn_once = once(fn)

fn_once() // logs 'hello'
fn_once() // does nothing
fn_once() // does nothing
```