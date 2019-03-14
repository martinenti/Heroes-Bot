const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "+";
client.on('ready', () => {
    console.log('I am ready!');
});

//test bot

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

// welcome code

client.on("guildMemberAdd", member => {
  client.channels.find('id', '538374661143134218').send(`**welcome to Test server : [ ${member} ]**`)
});


//first we need to create an object
const serverStats = { 
    guildID: '538374660707057696',
    totalUsersID: '555698190792523780',   
}; //this is thefirst




client.on('guildMemberAdd', member => {
 
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`عدد الاعضاء : ${member.guild.memberCount}`);
    
});


client.on("guildMemberRemove", (member) => {
   
 if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`عدد الاعضاء : ${member.guild.memberCount}`);
    
});

//clear code


client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  }); //Julian


client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
