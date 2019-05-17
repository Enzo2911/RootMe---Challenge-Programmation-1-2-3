const irc = require('irc');
var base64 = require("base64it");

var client = new irc.Client('irc.root-me.org', 'Clary', {
    channels: ['#root-me_challenge'],
	debug: true
});
client.addListener('registered', function (message) {
   	client.say("Candy", "!ep2");
    });
	
client.addListener('pm', function (from, message) {
	console.log("connected")
	var sep1 = message;
    var rez = base64.decode(sep1);
    client.say("Candy", "!ep2 -rep " + rez);
	
});

