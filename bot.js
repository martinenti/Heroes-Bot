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



//first we need to create an object
const serverStats = { 
    guildID: '468778849480474639',
    totalUsersIS: '468779034302480384',
    memberCountID: '468779433692758016',
    botCountID: '468779680632274963',    
}; //this is thefirst




client.on('guildMemberAdd', member => {
 
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.bot).size}`);  
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.bot).size}`); 
    
    
});
















client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
