var dummyFunc = require('dummy-func')

module.exports = function(callback){
	
	if(typeof callback !== 'function')
		return dummyFunc;
	
	var call = true
	
	return function(){
		if(call){
			call = false
			callback.apply(this, arguments)
		}
	}
}