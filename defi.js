const irc = require('irc');

var client = new irc.Client('irc.root-me.org', 'Clary:p', {
    channels: ['#root-me_challenge'],
	debug: true
});
client.addListener('registered', function (message) {
   	client.say("Candy", "!ep1");
    });
	
client.addListener('pm', function (from, message) {
	console.log("connected")
    var uno = message.split(" / ");
	var sep1 = uno[0];
	var sep2 = uno[1]
    var rez1 = Math.sqrt(sep1);
    var total = rez1*sep2;
	var rez = total;
	client.say("Candy", "!ep1 -rep " + rez);
	
});

