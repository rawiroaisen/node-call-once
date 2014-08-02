var dummyFunc = new Function

module.exports = function(callback){
	
	if(typeof callback !== 'function')
		return dummyFunc;
	
	var call = true
	
	return function(){
		if(call){
			call = false
			return callback.apply(this, arguments)
		}
	}
}