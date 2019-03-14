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


//first we need to create an object
const serverStats = { 
    guildID: '538374660707057696',
    totalUsersID: '555698190792523780',
    memberCountID: '555698217363308544',
    botCountID: '555698322359320587',    
}; //this is thefirst




client.on('guildMemberAdd', member => {
 
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.bot).size}`);  
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.bot).size}`); 
    
    
});




client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
