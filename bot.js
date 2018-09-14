

const client = new Discord.Client({disableEveryone: true});
const prefix = '1';
const BOT_TOKEN = "NDYwMTU0MjQyNTE5NDAwNDQ4.DkjS2g.RNf1k6CoUDF3ThHy4b1YWVepXQg";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
var prefix = "#";
	if(!message.content.satrtsWith(prefix + "cr"))
	if(!message.channel.guild) return message.reply('*** This Command Only For Server ***')
let embed = new Discord.RichEmbed()
     let args = msg.content.split(" ").slice(1);
.setThumbnail(msg.author.avatarURL)

.setDescription(`اذا كنت تريد انشاء المسند اضغط على الرياكشن📝`)                                                                                                                                                                       
.setFooter('لديك 10 ثواني للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('📝').then(r=>{
                              
    
 let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;

 let cy  = message.createReactionCollector(Category, { time: 10000 });

cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
	
		




client.login(process.env.BOT_TOKEN);
