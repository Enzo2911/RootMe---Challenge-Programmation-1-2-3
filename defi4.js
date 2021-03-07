const irc = require('irc');
const { unzip } = require('zlib');

var client = new irc.Client('irc.root-me.org', 'Clary', {
    channels: ['#root-me_challenge'],
	debug: true
});
client.addListener('registered', function (message) {
 	client.say("Candy", "!ep4");
  });
	
client.addListener('pm', function (from, message) {
	console.log("connected")
  const regex = /[a-zA-Z=0-9]/gm;
  const msg = message.match(regex);
  const deux = msg.join("")
  const buffer = Buffer.from(deux, 'base64');
  
  unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('Erreur décompression: ', err);
  } else {
    client.say("Candy", "!ep4 -rep " + buffer.toString())
  }
  });
});
