const irc = require('irc');

function rot(s) {
   return s.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}
var client = new irc.Client('irc.root-me.org', 'Clary', {
    channels: ['#root-me_challenge'],
	debug: true
});
client.addListener('registered', function (message) {
   	client.say("Candy", "!ep3");
    });
	
client.addListener('pm', function (from, message) {
	console.log("connected")
	var sep1 = message;
    var rez = rot(sep1);
  
    client.say("Candy", "!ep3 -rep " + rez);
	
});

