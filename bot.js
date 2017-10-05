console.log('bot started');

let Twit = require('twit');
let config = require('./config.js');
let $ = require('jquery');

let T = new Twit(config);
let basedUrl = 'http://developer.wordnik.com/v4';
let q = 'ikan';


console.log($)
/*$.ajax({
	url: basedUrl + '/search/' + q,
	success(a,b,c){
		console.log('success', {a,b,c})
	},
	error(){
		console.log('error')		
	}
})*/

//post a tweet
/*T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
});*/
