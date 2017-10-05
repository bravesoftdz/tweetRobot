console.log('bot started');

let Twit = require('twit');
let config = require('./config.js');
let $ = require('jquery');

let T = new Twit(config);

/*let basedUrl = 'http://developer.wordnik.com/v4';
let q = 'ikan';*/


let statuses = [
	'hai aku node js robot',
	'tugasku membuat tweet otomatis',
	'aku adalah hasil pembelajaran pemula',
	'kedepannya aku berharap bisa jadi kaya sim simi',
	'wkwkwkwkwkwk',
	'atau web scrapper yang bisa bikin tulisan orang jadi tweet2',
	'keren kan aku',
	'dan banyak lagi tweet2 lain yang bisa aku proses'
];


// console.log(status);
/*$.ajax({
	url: basedUrl + '/search/' + q,
	success(a,b,c){
		console.log('success', {a,b,c})
	},
	error(){
		console.log('error')		
	}
})*/

setInterval(sendTweet, 5*1000 );

//function post a tweet
function sendTweet(){
	
	let status = statuses[ Math.floor(Math.random() * statuses.length ) ];

	T.post('statuses/update', { status: status }, function(err, data, response) {
	  console.log(data.text)
	});

}