console.log('bot started');

let Twit = require('twit');
let config = require('./config.js');
let T = new Twit(config);
let request = require('request');
let fs = require('fs');


var statuses = [
	'hai aku node js robot',
	'tugasku membuat tweet otomatis',
	'aku adalah hasil pembelajaran pemula',
	'kedepannya aku berharap bisa jadi kaya sim simi',
	'wkwkwkwkwkwk',
	'atau web scrapper yang bisa bikin tulisan orang jadi tweet2',
	'keren kan aku',
	'dan banyak lagi tweet2 lain yang bisa aku proses'
];

let basedUrl = 'http://api.wordnik.com/v4';
let search = '/words.json/search/';
let q = 'ikan';

let api_key = '7fa8276c9c7757e77a2030024a50a663f2becd2e42cf9b8dd';

let options = {
	url : basedUrl+ '/words.json/randomWords' + '?api_key=' + api_key	
}


function gotData(error, response, body){
	// fs.appendFile('./file.json', JSON.stringify({error, response, body}, null, "\t") )
	sendTweet( JSON.parse(body) );
	// console.log(body);
}


//function post a tweet
function sendTweet(statuses){
	
	let status = statuses[0].word;
	console.log( status )


	T.post('statuses/update', { status: status }, function(err, data, response) {
	  console.log(data.text, 'posted')
	});

}

setInterval( function(){
	request( options , gotData );
} , 5 * 1000)