const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "+";
client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});


client.on("guildMemberAdd", member => {
  client.channels.find('id', '538374661143134218').send(`**welcome to Test server : [ ${member} ]**`)
});






client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
