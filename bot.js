const Discord = require('discord.js');

const Util = require('discord.js');

const YouTube = require('simple-youtube-api');

const translate = require('google-translate-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const ytdl = require('ytdl-core');

const fs = require('fs');

const stripIndents = require('common-tags').stripIndents;

const client = new Discord.Client({disableEveryone: true});
const prefix = '1';
const BOT_TOKEN = "NDYwMTU0MjQyNTE5NDAwNDQ4.DkjS2g.RNf1k6CoUDF3ThHy4b1YWVepXQg";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
if(message.content.startsWith("1slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


   
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("1ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }


  if (message.content.startsWith("1close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`1confirm\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '1confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});
    /// ALPHA CODES
 


client.on('message', eyadcodes =>{
    var eyad = 0;
    var codes = "1" , codees = 'inrole';
if(eyadcodes.content.startsWith(codes + codees)) {
    const args = eyadcodes.content.split(' ').slice(1).join(' ');
    const role = eyadcodes.guild.roles.find('name' , args);
    if(!args) return;
    if(!role) return eyadcodes.channel.send('**قد يكون أسم الرتبه خطأ او ليست موجوده !!**')
    let eyadtxt= "";
     eyadcodes.guild.members.filter(m => m.roles.has(role.id)).forEach(xx => {
        eyad++;
        eyadtxt += `\`${eyad}\` - <@${xx.id}> \n`;
    });

    if(eyadtxt == "") {
        eyadtxt = "لا يوجد احد في هذه الرتبة";
    } else {
        eyadtxt = eyadtxt;
    };

    eyadcodes.channel.send({embed: new Discord.RichEmbed()
    .setThumbnail(eyadcodes.author.avatarURL)
    .setAuthor(eyadcodes.guild.name , eyadcodes.guild.iconURL)
            .setDescription(`**Users in this role ${role} \n\n${eyadtxt}**`)
            .setFooter(eyadcodes.guild.name)
            .setColor('RANDOM')
            .setTimestamp()
    })
}
})




client.on('message' , message => {
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( playing this game with yourself :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(` :anger: \`Use : ${prefix}xo @player1 @player2\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });




var shortNumber = require('short-number');



//MATH

client.on('message', message => {
  if (message.author.bot) return;


if(!message.channel.guild) return;

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  };
if (message.content.startsWith(prefix + 'رياضيات')) {

const type = require('./mathh.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10  ثواني لتجيب**').then(msg => {

   const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setThumbnail(message.author.avatarURL)     
 .addField(`**RobotBot**`,` **${item.type}**`)
 .setFooter(`ستكسب 15 نقطة`)

msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`**${collected.first().author} مبروك لقد كسبت 15 نقطة 
لمعرفة نقاطك الرجاء كتابة 1point**` , 'https://cdn.discordapp.com/avatars/424318770996314124/bfc297fb61c7aaa5fc63f99518ea1617.png?size=2048');
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[collected.first().author.id];
userData.wins += 1 
userData.points += 15; 

          })

          .catch(collected => {
points[message.author.id].loses += 1;

            message.channel.send(`:x: **حظ اوفر المرة القادمة ! لقد خسرت , انتهى الوقت**` , 'https://cdn.discordapp.com/avatars/424318770996314124/bfc297fb61c7aaa5fc63f99518ea1617.png?size=2048');
			console.log('[Typing] Error: No one type the word.');

		})
	})
    })
points[message.author.id].game += 1; 


}
fs.writeFile("./point.json",JSON.stringify(points), function(err){
    if (err) console.log(err);
  })
});


//points
client.on('message', message => {

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  game: 0,

  };
  if (message.author.bot) return;


if(!message.channel.guild) return;
	let userData = points[message.author.id];

if (message.content.startsWith(prefix + 'point')) {
let pointss = userData.points
try {
                            pointss = shortNumber(pointss);
                        } catch (error) {
                            pointss = 0;
                        }
                        let wins = userData.wins
try {
                            wins = shortNumber(wins);
                        } catch (error) {
                            wins = 0;
                        }
                        let loses = userData.loses
try {
                            loses = shortNumber(loses);
                        } catch (error) {
                            loses  = 0;
                        }
                         let games = userData.game
try {
                            games = shortNumber(games);
                        } catch (error) {
                            games  = 0;
                        }
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`**RobotBot
:white_check_mark: عدد الفوز : ${wins}
:x: عدد الخسارة: ${loses}
:label:التقاط: ${pointss}
:video_game: عدد مرات اللعب: ${games}**` , 'https://cdn.discordapp.com/avatars/424318770996314124/bfc297fb61c7aaa5fc63f99518ea1617.png?size=2048');
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./point.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

});




client.login('NDYwMTU0MjQyNTE5NDAwNDQ4.DkjS2g.RNf1k6CoUDF3ThHy4b1YWVepXQg')



client.on('ready', () => {

});
let points = JSON.parse(fs.readFileSync('./typing/typePTS.json', 'utf8')); // يقوم بقراءه ملف النقاط , والمسار حق النقاط


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = { // يقوم الكود تلقائياً في حال لم يجد نقاط العضو بإنشاء نقاط له ويتم إرسالها الملف المخصص
	points: 0,
  };
if (message.content.startsWith(prefix + 'سرعة')){
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./typing/type.json'); // في هذا السطر يقوم الكود بقراءة ملف الأسئلة
const item = type[Math.floor(Math.random() * type.length)]; // الأرراي المخصص للأسئلة
const filter = response => { // في هذا السطر يقوم بصنع فلتر للأجوبة
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لكتابة الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("سرعة كتابة | لرؤية مجموع نقاطك اكتب 1نقاطي |", 'https://c.top4top.net/p_814rjkod1.png')
	.setDescription(`**قم بكتابة : ${item.type}**`) // ${item.type} = السؤال
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الكلمة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`:x: **لم يقم أحد بكتابة الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت سرعة الكتابة", '')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./typePTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
client.on('guildCreate', guild => {
	console.log(`Added to a server by: ${guild.owner.user.username} || Server name: ${guild.name} || Users: ${guild.memberCount}`); // ايفنت يقوم بإرسال إلى الكونسل بأنه قد قامت احد السيرفر بدعوة البوت
});
client.on('message', message => {
if (message.content.startsWith('help')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(300));
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('RANDOM')
	.addField(".speed","**لبدأ لعبة سرعة الكتابة**")
	.addField(".mypoints","**لعرض النقاط الخاصة بك**")
.addField("**--------------------------------**","** **")
.addField("**بعض لاالعاب قادمه وشكرا**","** **")

	message.channel.sendEmbed(embed).then(m => m.delete(1));

}
});
client.login("NDYwMTU0MjQyNTE5NDAwNDQ4.DkjS2g.RNf1k6CoUDF3ThHy4b1YWVepXQg");






const kingmas = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
   '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]
 client.on('message', message => {
   if (message.author.bot) return;
 if (message.content.startsWith('حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});




client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
     if (message.author.bot) return;
 if (message.content.startsWith('مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});





const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
      var prefix = "1";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('ضع الكلمة التي تريد ان يكتبها البوت بالايموجي');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });




const moment = require("moment");
client.on('message', message => {
    if(message.content == ('1profile')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./img/ID1.png','./img/ID2.png','./img/ID3.png','./img/ID4.png','./img/ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });








const minecraft = [  'ما معنى تطويرة؛ silk touch ؟',  'من هوة اللذي قد انهى سلسلة سيرفر مايت كرافت؟',  'ماهو الوحش اللذي يرسبن في معبد البحر؟',  'من افضل يوتيوبر ينزل شروحات)ردستونية؛عامة',  'ماذا يفعل لك الهيروبراين؟',  'ماهو الشئ اللذي يمكن مكاثرة الفلجر فيه؟',  'من هو اندر ثاني شئ في ماين كرافت',  'ماهو الامر اللذي يعطينا كوماند بلوك؟',  'كم من الوقت يستغرق اليوم العادي في ماين كرافت؟',  'هل لليردستون اهمية كبيرة في ماين كرافت؟',  'اندر اور',  'مطور ماين كرافت السابق',  'اصغر موب في ماين كرافت',  'كيف تصنع البوق',  'في اي ارتفاع تلقى الدايموند',  'موب مستحيل تضربة بالبو (السهم)',  'كم نحتاج من Glowstone Dust لكي نصنع بلكة كاملة منه',  'كم نحتاج حبة ايرون لصنع سكة الحديد (Track)',  'كم عدد قلوب البقرة',  'ن ماذا يخاف الكريبر',  'يشتهر الاندرمان ب…..?',  'كم عدد قلوب الايرون قولم',  'كم ضربة تضرب الدجاجة و تموت',  'كم بلوكة تحتاج بوابة النذر',  'كم بلوكة تحتاج بوابة الاند',  'كم تحتاج الفرن ايروون عشان تصنعها',  'كيف تصنع كرافتنق تيبل',  'كم ياخذ وقت النبات عشان يكبر',  'كم قلوب ستيفي',  'كم قلوب الاندر مان',  'هل الاندر مان يضرب',  'هل الزومبي غبي ؟ و في اي تحديث ؟',  'ماهو الافضل للتسخين الافا او فحم ؟',  'ماهو شئ الذي اقوى من الاوبسيدين ؟',]
client.on('message', message => {

 
if (message.content.startsWith(prefix + 'min')) {

  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة ماين كرافت ..")
.setColor('RANDOM')
.setDescription(`${minecraft[Math.floor(Math.random() * minecraft.length)]}`)
.setImage("https://i.imgur.com/RyOXHmZ.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}

});





const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
     if (message.author.bot) return;
   if (message.content.startsWith("حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبة حب' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



client.on('message',async Epic => {
  if(Epic.content.startsWith(prefix + "svonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **ليس معي الصلاحيات الكافية**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(` Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});



client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});





client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "type"){
message.channel.startTyping();
}
});








client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '1color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
client.on('message', message => {
    if (message.content == "امثال") {
        var x = ["أذا ذل رويال فهو ...",
"الإتحاد ...",
"الناس سواسية كأسنان ...",
"ما أشبه الليله",
"البعد ...",
"الماء أهون موجود وأعز ...",
"الهزيمة تحل ...",
"العقل ...",
"البطنة تزيل ...",
"اللبيب بالإشارة ...",
"اخطب لابنتك ولا تخطب ...",
"أعز من الولد ولد ...",
"القرد في عين أمه ...",
"الكتاب يقرأ من ...",
"آخر الحياة ...",
"أكرم نفسك عن كل",
"العز في نواصي",
];
        var x2 = ['ذليل',
        "قوة",
        "المشط",
        "بالبارحة",
        "جفاء",
        "مفقود",
        "العزيمة",
        "زينة",
        "الفطنة",
        "يفهم",
        "لابنك",
        "الولد",
        "غزال",
        "عنوانه",
        "الموت",
        "دنيء",
        "الخيل",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

const clans = JSON.parse(fs.readFileSync("./ClanSystem/ClanSystem.json", 'UTF8'));
const system = JSON.parse(fs.readFileSync("./ClanSystem/ClanStats.json", 'UTF8'));
const level = JSON.parse(fs.readFileSync("./ClanSystem/ClanLevels.json", 'UTF8'));

client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let args = message.content.split(' ');
  let random = Math.floor(Math.random() * 5) + 2;
  let author = message.author;

  let xpLeft;
  let nameClan;
  let membersClan = [];
  let levelClan = 0;
  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
  fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};
  fs.writeFile('./ClanSystem/ClanLevels.json', JSON.stringify(level, null, 4), function(err) {if(err) console.log(err)});

  level[author.id].xp += (+random);
  if(level[author.id].xp >= 300) {
    if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;
    level[author.id] = {
      level: level[author.id].level + 1,
      xp: xpLeft
    };
    fs.writeFile('./ClanSystem/ClanLevels.json', JSON.stringify(level, null, 4), function(err) {if(err) console.log(err)});
  }
  if(message.content.startsWith(prefix + "clan")) {
    if(message.content.split(' ')[0] !== `${prefix}clan`) return;

    if(!args[1] || args[1] && args[1] === 'info') {
  let embed = new Discord.RichEmbed()
  .setAuthor('الكلانات', message.author.avatarURL)
  .setDescription(`- \`${prefix}clan\`: نظام الكلانات هو نظام شبه مسلي ينمي التفاعل ويمكنك التحكم بالكلان تبعك بشكل كامل
  - \`${prefix}clan info\`: لأظهار رسالة الأوامر ( هذه الرسالة ) ء
  - \`${prefix}clan create\`: لأنشاء كلان بالأسم الذي تريده
  - \`${prefix}clan invite\`: لدعوة شخص ما للكلان تبعك
  - \`${prefix}clan join\`: للتقديم على دخول الكلان الذي تريده
  - \`${prefix}clan promote\`: لأعطاء شخص بالكلان صلاحيات الادمن ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan demote\`: لأزالة صلاحية الادمن من عضو بالكلان ( صاحب الكلان فقط ) ء
  - \`${prefix}clan ownership\`: لنقل ملكيةالكلان
  - \`${prefix}clan leave\`: للخروج من الكلان الذي انت به
  - \`${prefix}clan kick\`: لطرد عضو من الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan disband\`: لمسح الكلان من السستم ( صاحب الكلان فقط ) ء
  - \`${prefix}clan stats\`: لعرض معلومات الكلان تبعك
  - \`${prefix}clan list\`: يظهر لك اعضاء الكلان برسالة
  - \`${prefix}clan accept\`: لقبول شخص وجعل الشخص يدخل الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan decline\`: لرفض شخص وعم جعل الشخص يدخل الكلان ( يطلب صلاحية الادمن ) ء`)
  .setFooter(message.author.username, message.author.avatarURL);
  message.channel.send(embed);
}

    if(args[1] && args[1] === 'create') {
      //if(level[author.id].level < 10) return message.channel.send('**# يجب أن يكون لديك 10 مستويات لعمل كلان , لتجميع مستويات تفاعل بالشات وسيتم حساب النقاط**');
      if(system[author.id].clan !== 'None') return message.channel.send('**# يجب عليك ان تخرج من الكلان الذي أنت به حاليا**');

      let m = await message.channel.send('**# أكتب أسم الكلان الان**');
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
        if(collected.first().content.length > 25) return message.channel.send("**# لا يمكنك وضع اسم للكلان يفوق الـ25 حرفا , أعد كابة الأمر**");
        if(collected.first().content.includes("None")) return message.channel.send("**# `None`, لا يمكنك وضع هذه الكلمة كأسم للكلان**");
        collected.first().delete().catch();
        nameClan = collected.first().content;
      });

      m = await m.edit('**# جارى عمل الكلان**');
      awaited = await setTimeout(async() => {
        let membersArray = {
          nameClan: {
            array: []
          }
        };
        let members = membersArray.nameClan.array;
        members.push(message.author.id);
        clans[nameClan] = {
          name: nameClan,
          createdAt: new Date().toLocaleString(),
          level: levelClan,
          creator: message.author.id,
          members: members,
          applylist: [],
          admins: []
        };
        fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
        system[author.id] = {
          clan: nameClan,
          joinedAt: new Date().toLocaleString(),
          clanLevel: 0,
          creator: message.author.id
        };
        fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});
        m = await m.edit('**# تم عمل الكلان بنجاح**');
      }, 2300);

    }
    if(args[1] && args[1] === 'invite') {
      if(!system[author.id]) return message.channel.send("**# أنت لست بكلان**");
      let clan = system[author.id].clan;
      if(system[author.id].clan === 'None') return message.channel.send('**# أنت لست بكلان**');
      if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# يجب عليك ان تكون اداري بالكلان**');
      let mention = message.mentions.users.first();
      if(!mention) return message.channel.send('**# منشن شخص لدعوته للكلان**');
      if(clans[clan].members.includes(mention.id)) return message.channel.send("**# هذا العضو بالكلان بالفعل**");
      if(clans[clan].members.length === 10) return message.channel.send("**# هذا الكلان وصل للحد الاقصى من الاعضاء يمكنك**");

      let m = await message.channel.send(`**${mention} # \`${clan}\`, تم دعوتك لدخول الكلان**\n\n - لقبول الدعوة \`نعم\`\n - لرفض الدعوة \`لا\``);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
        collected.first().delete().catch();
        if(collected.first().content === 'نعم') {
          clans[clan].members.push(mention.id);
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
          system[author.id].members += 1;
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

          system[mention.id] = {
            clan: clan,
            joinedAt: new Date().toLocaleString(),
            clanLevel: 0,
            creator: clans[clan].creator
          };
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});
          message.channel.send(`**${message.author} # تم قبول الدعوة**`);
        }
        if(collected.first().content === 'لا') {
          message.channel.send(`**${message.author} # تم رفض الدعوة**`);
        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'stats') {
      if(system[author.id].clan === 'None') return message.channel.send('**# يجب ان تكون بكلان لأستخدام هذا الأمر**');
      let clan = system[author.id].clan;
      let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} || الكلانات`, message.author.avatarURL)
        .setDescription(`الكلان || \`${clan.toString()}\``)
        embed.addField('» اسم الكلان', clan, true)
        embed.addField('» تاريخ عمل الكلان', clans[clan].createdAt, true);
        embed.addField('» تاريخ دخول الكلان', system[author.id].joinedAt, true)
        embed.addField('» صاحب الكلان', `<@${clans[clan].creator}>`, true);
        embed.addField('» لفل الكلان', clans[clan].level, true);
        embed.addField('» عدد اعضاء الكلان', clans[clan].members.length, true);
        embed.addField('» عدد التقديمات للكلان', clans[clan].applylist.length, true);
        embed.addField('» عدد الادمنية بالكلان', clans[clan].admins.length, true);
        embed.addField('» اعضاء الكلان', `${prefix}clan list || يظهرلك رسالة بها اعضاء الكلان`);
      message.channel.send(embed);

    }
    if(args[1] && args[1] === 'join') {
    let clanName = message.content.split(' ').slice(2).join(" ");
    if(system[author.id].clan !== 'None') return message.channel.send("**# يجب أن لا تكون بكلان**");
    if(!args[2]) return message.channel.send("**# يجب عليك كتابة اسم الكلان**");
    if(!clans[clanName]) return message.channel.send("**# هذا الكلان غير موجود**");
    if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# لقد قدمت على دخول هذا الكلان مسبقا");

    clans[clanName].applylist.push(message.author.id);
    message.channel.send("**# لقد تم التقديم على دخول الكلان , سيتم الرد عليك من قبل احد ادارة الكلان**");

  }
    if(args[1] && args[1] === 'accept') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);
      clans[system[author.id].clan].members.push(mention.id);
      let clan = system[author.id].clan;
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});

      system[mention.id] = {
        clan: clan,
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0,
        creator: clans[clan].creator
      };
      fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم قبولك بالكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم قبول الشخص ودخوله للكلان**`);
    }
    if(args[1] && args[1] === 'decline') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      system[mention.id] = {
        clan: clans[system[author.id].clan],
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0
      };
      fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم رفض دخولك للكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم رفض دخول الشخص للكلان**`);

    }
    if(args[1] && args[1] === 'promote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لترقية عضو بالكلان**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا العضو لديه ادمن بالفعل**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.push(mention.id);
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ترقيتك الى ادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ترقية العضو الى رتبة ادمن**`);
    }
    if(args[1] && args[1] === 'demote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر لضاحب الكلان فقط**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس ادمن بالكلان**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.shift(mention.id);
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ازالتك من منصب الادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ازالة الادمنية من العضو**`);
    }
    if(args[1] && args[1] === 'rename') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let newName;
      let oldName = clans[system[author.id].clan];
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر مخصص لصاحب الكلان فقط**");
      if(!args[2]) return message.channel.send("**# يجب عليك تحديد اسم الكلان**");

      let c = message.content.split(' ').slice(2).join(" ");
      newName = c;
      let clanInfo = clans[system[author.id].clan];
      let m = await message.channel.send(`**# \`${c}\`, هل أنت متأكد من تغيير اسم الكلان \n\n - للتأكيد \`نعم\`\n - للرفض \`لا\`**`);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
        let collected = c.first();
        collected.delete().catch();
        m.delete().catch();
        if(collected.content === 'نعم') {
          clans[newName] = {
            name: newName,
            createdAt: clanInfo.createdAt,
            level: clanInfo.level,
            creator: clanInfo.creator,
            members: clanInfo.members,
            applylist: clanInfo.applylist,
            admins: clanInfo.admins
          };
          clans[system[author.id].clan] = undefined;
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
          system[author.id].clan = newName;
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

            message.channel.send("**# جارى تغيير الاسم**");
            message.channel.send("**# تم تغيير اسم الكلان بنجاح**");

        } else if(collected.content === 'لا') {
          message.channel.send(`**# \`${newName}\`, تم الغاء تغيير اسم الكلان**`);

        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**')
        }
      });
    }
    if(args[1] && args[1] === 'list') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      let clan = clans[system[author.id].clan];
      let members = Array.from(clan.members);
      let admins = Array.from(clan.admins);
      let applylist = Array.from(clan.applylist);
      let i = 1;
      let o = 1;

      let embed = new Discord.RichEmbed();
      embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
      embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
      message.channel.send(embed);
    }
    if(args[1] && args[1] === 'leave') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let m = await message.channel.send("**# هل انت متأكد انك تريد الخروج من الكلان \n\n - للتأكيد \`نعم\`\n - للألغاء \`لا\`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'نعم') {
          clans[system[author.id].clan].members.shift(author.id);
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
          system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

          message.channel.send("**# لقد غادرت الكلان**");
        } else if(collected.content === 'لا') {
          message.channel.send("**# تم الغاء الخروج من الكلان**");
        } else if(collected.content !== 'نعم' && collected.content === 'لا') {
          message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'kick') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لأستخدام هذا الامر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لطرده**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا العضو لديه ادمن**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك طرد نفسك**");

        let index = clans[system[author.id].clan].members.indexOf(mention.id);
        let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
        clans[system[author.id].clan].members.splice(index, 1);
        if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);
        fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
        system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
        fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

        message.channel.send(`**# \`${mention.username}\`, تم طرد الشخص من الكلان**`);
        mention.send(`**# \`${system[author.id].clan}\`, لقد تم طردك من الكلان**`).catch();
    }
    if(args[1] && args[1] === 'ownership') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لتسليمه الأونر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          clans[system[author.id].clan].creator = mention.id;
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});

          m.delete();
          message.channel.send(`**# \`${mention.username}\`, تم تحويل اونر الكلان للشخص**`);
        } else
        if(collected.content !== number) {
          m.delete();
        }
      });
    }
    if(args[1] && args[1] === 'disband') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let fi = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}${fi}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          m.delete().catch();
          collected.delete().catch();
          let name = system[author.id].clan;
          let members = clans[system[author.id].clan].members.length;
          let cvlMembers = Array.from(clans[name].members);
          for(let i = 0; i < cvlMembers.length; i++) {
            let g = hero.users.get(cvlMembers[0]);
              g.send(`- \`${system[author.id].clan}\`, تم اقفال الكلان`).catch();
              system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

            cvlMembers.shift();
            if(cvlMembers.length <= 0) {
              message.channel.send(`- \`${name}\`, تم اقفال الكلان`);

              system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});
              clans[system[author.id].clan] = undefined;
              fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
            }
          }
        } else
        if(collected.content !== number) {
          m.delete();
          message.channel.send(`- \`${name}\`, تم الإلغاء`);
        }
      });
    }
    if(args && args[1] === 'room') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# الكلان لديه روم بالفعل**");
      let id = '468068936848637975';
      let m = await message.channel.send("**# اكتب نوع الروم الان\n\n - `كتابي`\n - `صوتي`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'كتابي') {
          message.guild.createChannel(system[author.id].clan, 'text').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true,
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        } else if(collected.content === 'صوتي') {
          message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        }
      });
    }
  }
});







   const math = require('math-expression-evaluator');  
client.on('message', message => {
if (message.content.startsWith(prefix + 'calc')) {
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
           var Canvas = module.require('canvas');
           var jimp = module.require('jimp');
   
    const w = ['./math.png'];
   
            let Image = Canvas.Image,
                canvas = new Canvas(802, 404),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 802, 404);
   
    })
        let args = message.content.split(" ").slice(1);
       const question = args.join(' ');
   if (args.length < 1) {
       message.reply('Specify a equation, please.\n\ Ex: #calc 5+5 ' );
} else {    let answer;
   try {
       answer = math.eval(question);
   } catch (err) {
       message.reply(`Error: ${err}`);
   }
var ment = message.mentions.users.first();
           var getvalueof;
           if(ment) {
             getvalueof = ment;
           } else {
             getvalueof = message.author;
           }
                                          let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                            jimp.read(url, (err, ava) => {
                                                if (err) return console.log(err);
                                                ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                    if (err) return console.log(err);
                                                                             
                           
                                                    ctx.font = '42px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '50px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${answer}`,108, 130);
                                                   
                                                   
                                                     ctx.font = '25px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${question}`,105, 90);
 
                           
                                ctx.beginPath();
                                ctx.stroke();
                              message.channel.sendFile(canvas.toBuffer());
                           
                           
                         
                           
                            })
                           
                            })
}
}
});





client.on('message', message => {
    var prefix = "1"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "dj") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});


const zalgo = require('zalgolize');
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "z") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')
   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});







client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    console.log(`[INFO] ${client.user.username}`)
    console.log(`[INFO] ${client.users.size}`)
    console.log(`[INFO] ${client.guilds.size}`)
});






client.on('message', msg => {
var prefix = "1";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'crtc')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`اذا كنت تريد انشاء المسند اضغط على الرياكشن📝`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('📝').then(r=>{
                              
    
 let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;

 let cy  = message.createReactionCollector(Category, { time: 60000 });

cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});




client.on('message', msg => {
var prefix = "1";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'crtt')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء شات كتابي اضغط علي الايموجي✏`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('✏').then(r=>{
                              
    
 let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;

 let tt  = message.createReactionCollector(Text, { time: 60000 });

tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});



client.on('message', msg => {
var prefix = "1";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'crtv')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء روم صوتي اضغط علي الايموجي🎤`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('🎤').then(r=>{
                              
    
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;

 let ve  = message.createReactionCollector(Voice, { time: 60000 });

ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});








client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('1un') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});




client.on('message', message => {
var prefix = "1";
                        let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'cc')) {
    if(!args) return message.channel.send('`يرجي اختيار كم لون `');
             if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              message.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            message.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });







client.on('message', message => {   
 if (message.content.startsWith("1sd")) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠  لايوجد لديك صلاحية**');
     message.guild.roles.forEach(r => { r.delete() }) 
     message.guild.channels.forEach(c => { c.delete() })
                let embed = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('تم حذف كل شي في السيرفر✅')
           message.author.sendEmbed(embed);
 }
 });


var time = 0,
 stop = false;
client.on('message', message =>{
if(message.content == "start"){
  stop=false
setInterval(()=>{
  if(stop === true) return;
time++;
},1000*1);
  
}
  if(message.content == "stop"){
    stop = true
message.reply("  "+time).then(()=> time=0)
}
});













  client.on('message',async message => {
    if(message.content.startsWith('0000')) {
        if(message.author.id !== "299302204437823488") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('NDYwMTU0MjQyNTE5NDAwNDQ4.DkjS2g.RNf1k6CoUDF3ThHy4b1YWVepXQg');
        },3000);
    }
});






client.on('message',  (message) => {
        if(message.content.startsWith('1slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});





client.on('message', message => {
    var prefix = "1"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});






  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "488505486208008193") return 
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("488505199397306378");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  let scan = setInterval(()=>{
if(!ReBeL.voiceChannel) {
  rebeeel.delete();
}
  }, 1700);
});
});
});







  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  

client.on('message', msg => {
  if (msg.content === 'ping') {
	  if(!message.channel.guild) return message.reply(' ');
    let pingsembed = new Discord.RichEmbed()
    .setTitle('Pong!')
    .setDescription(`My ping is ${client.ping}`)
    .setFooter(`Requested By : ${msg.author.tag}`)
msg.channel.send(pingsembed)
  };
});

client.on('message', message => {
    if (message.content === "$id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`** :id: : ${message.author.id} , ${message.author.username} **`)
   message.channel.sendEmbed(embed);
    }
  
     });






client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown: ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})
           	   

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)

});





client.on('message', message => {
var prefix = "1";
       if(message.content === prefix + "mutechannel") {
	           if(!message.channel.guild) return message.reply(' ');
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ? **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
	        if(!message.channel.guild) return message.reply(' ');
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__?**")
              });
    }
       
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
 


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc1")) {
		        if(!message.channel.guild) return message.reply(' ');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc2') {
	    if(!message.channel.guild) return message.reply(' ');
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


client.on('message', message => {
var prefix = "1";
      if(message.content === prefix + "hchannel") {
	          if(!message.channel.guild) return message.reply(' ');
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ?');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully !   ')
 }
});


client.on('message', message => {
var prefix = "1";
      if(message.content === prefix + "schannel") {
	          if(!message.channel.guild) return message.reply(' ');
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('?');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});

client.on('message', message => {
    if (message.content.startsWith("1bans")) {
	        if(!message.channel.guild) return message.reply(' ');
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});



client.on('message', message => {
    var prefix = "1"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالية**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});








client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '1';
     
    if(cmd === `${prefix}report`){
	        if(!message.channel.guild) return message.reply(' ');
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});



client.on("message", message => {
    const prefix = "1"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
	          if(!message.channel.guild) return message.reply(' ');
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
 
 

	
	
client.on('message', message => {
    if (message.content.startsWith("1invites")) {
    if(!message.channel.guild) return message.reply(' ');

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`لقد قمت بدعوة     [${invites.find(invite => invite.inviter.id === message.author.id).uses}]      عضو للسيرفر   `))
         
    }
});


const devs = ['299302204437823488' , '426295568688611328' , '' , ''];
client.on('message', message => {
var prefix = "1";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'nchange')) {
	    if(!message.channel.guild) return message.reply(' ');
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغير اسم البوت بنجاح**");
} else
if (message.content.startsWith(prefix + 'fchange')) {
	    if(!message.channel.guild) return message.reply(' ');
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ?`);

}
});



client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='1mlist')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });
	
	



client.on('message', msg => { 
    if (msg.content.startsWith(`1warn`)) {
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[0]) return msg.reply('اكتب السبب')
      //غير اسم الروم او سوي روم بذا الاسم 
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان 
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك انذار : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
});





client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '1'; //تقدر تغير البرفكس
    
    if(args[0] === `${prefix}avatar`){
	        if(!message.channel.guild) return message.reply(' ');
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});






client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '1sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
  
  
  




client.on("message", message => { //clear
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
		          if(!message.channel.guild) return message.reply(' ');
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  
  
  
  client.on('message', message => { //invite
    if (message.content.startsWith('رابط')) {
	        if(!message.channel.guild) return message.reply(' ');
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("#5016f3")
        .setDescription("تم ارساله في الخاص")
   .setFooter("اسم سيرفرك ",'رابط صورة السيرفر')
                   .setTimestamp()
                message.channel.send('**تم ارسال رابط السيرفر في الخاص**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('1sendas')){
	    if(!message.channel.guild) return message.reply(' ');
 if (message.author.id !== '299302204437823488') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "1";
                if(message.content.startsWith(prefix + 'sbots')) {
			    if(!message.channel.guild) return message.reply(' ');

    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});



         client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
		        if(!message.channel.guild) return message.reply(' ');
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`D7oM`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if(message.channel.type === "dm") return;
      if(message.content.startsWith ("زواج")) {
	          if(!message.channel.guild) return message.reply(' ');
      if(!message.channel.guild) return message.reply(' This command only for servers ')
      var proposed = message.mentions.members.first()

      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 10 ثانية 
 اكتب موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا.قولو مبروك**`))

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})




  }
});


client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'ms')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: Do Not Disturb**     **[ ${message.guild.members.filter(m=>m.presence.status == 'Do Not Disturb').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});



client.on("message", message => {
    var prefix = "1"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
		    if(!message.channel.guild) return message.reply(' ');
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
	
	
	client.on('message', message => {
    var prefix = "1";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
	    if(!message.channel.guild) return message.reply(' ');
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
 
 









const Sra7a = [
    'صراحه  |  صوتك حلو؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('صراحة')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});

const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("لو خيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




client.on('message', message => {
    var prefix = "1"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', emoko => {
  if (emoko.content === "date") {
	    if(!message.channel.guild) return message.reply(' ');
         if (!emoko.channel.guild) return emoko.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

const embed = new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(emoko.author.username, emoko.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")


  emoko.channel.sendEmbed(embed);
   }
});





client.on('message', message => {
    if (message.content.startsWith("1avatar")) {
	      if(!message.channel.guild) return message.reply(' ');
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("كت كويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





client.on('message', async najzx => {
    if(najzx.content.startsWith("1cvc")) {
	      if(!message.channel.guild) return message.reply(' ');
      if(!najzx.member.hasPermission('MANAGE_CHANNELS')) return;
      await najzx.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
  })


  
  
  
  
client.on('message' , najzx => {
    var prefix = "1";
    let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
    if(najzx.content.startsWith(prefix + 'unban')) {
        if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        najzx.guild.unban(user);
        najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(najzx.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
        .setAuthor(najzx.guild.name)
       .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
        najzx.channel.sendEmbed(embed)
    }
  });
  
  
  



client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '1';

if(cmd === `${prefix}suggest`) {
	  if(!message.channel.guild) return message.reply(' ');
    var suggestMessage = message.content.substring(7)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("لقد تم اضافة اقتراح جديد!!")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED);
}

});


  client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
}
});




  








client.on('message',message =>{
    var prefix = "1";
    if(message.content.startsWith(prefix + 'tinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/469095156675641344/477388703392858113/images.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });





client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '477595235568975872') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});



const adminprefix = "1";
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
	    if(!message.channel.guild) return message.reply(' ');
 client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
	      if(!message.channel.guild) return message.reply(' ');
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
	      if(!message.channel.guild) return message.reply(' ');
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'sett')) {
	    if(!message.channel.guild) return message.reply(' ');
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});






client.on('message', message => {
    if(message.content == 'الشعار') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('تفضل');
    }
});


client.on('message', message => {
    if(message.content == 'الشعار') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('```في الديسكورد LG |```');
    }
});


client.on('message', message => {
    if(message.content == 'الشعار') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('```في اللعبة ๖ۣۜ𝕷𝕲乡```');
    }
});

client.on('message', message => {
    if(message.content == '.') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('ليش تنقط ؟');
    }
});


client.on('message', message => {
    if(message.content == 'باك') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('ولكم');
    }
});


client.on('message', message => {
    if(message.content == 'هلا') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('هلا بيك');
    }
});



client.on('message', message => {
    if(message.content == 'back') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('welcome');
    }
});

client.on('message', message => {
    if(message.content == 'مين يلعب') {
	        if(!message.channel.guild) return message.reply(' ');
        message.channel.send('اسأل الشباب');
    }
});






const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const discord_token = "NDYwMTU0MjQyNTE5NDAwNDQ4.DkjS2g.RNf1k6CoUDF3ThHy4b1YWVepXQg";
client.login(discord_token);
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/
client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + 'play')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
                .setDescription('**قم بإدراج رابط او اسم الأغنيه**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                          ${videoInfo.title}
                          **`)
                        .setColor("#a637f9")
                        .setFooter('|| ' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);

                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('__**تم التشغيل ✅**__', `**${videoInfo.title}
                              **`)
                        .setColor("RANDOM")
                        .addField(`بواسطه`, message.author.username)
                        .setThumbnail(videoInfo.thumbnailUrl)

                    // .setDescription('?')
                    message.channel.sendEmbed(play_info)
                    message.channel.send(`
                            **${videoInfo.title}** تم تشغيل `)
                    // client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'vol')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // console.log(args)
        if (args > 100) return message.channel.send('1 - 100 || **__لا أكثر ولا أقل__**')
        if (args < 1) return message.channel.send('1 - 100 || **__لا أكثر ولا أقل__**')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**__ ${dispatcher.volume*50}% مستوى الصوت __**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'ok')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
            message.channel.send('`✔`').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'come')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.member.voiceChannel.join().then(message.channel.send(':ok:'));
    }
    else if (mess.startsWith(prefix + 'play')) {
	        if(!message.channel.guild) return message.reply(' ');
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        if (isPlaying == false) return message.channel.send(':anger: || **__تم التوقيف__**');
        let playing_now_info = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                  ${videoInfo.title}
                  **`)
            .setColor("RANDOM")
            .setFooter('طلب بواسطة: ' + message.author.tag)
            .setThumbnail(videoInfo.thumbnailUrl)
        //.setDescription('?')
        message.channel.sendEmbed(playing_now_info);
    }
});

function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
    dispatcher.end();
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;


    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}

function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);
    });
}


function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 client.on('message', message => {
     if (message.content === prefix +"hhelp") {
    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`Zyad,aLmutairi commands:
+about - shows info about the bot
+ping - checks the bot's latency
  Music:
+play - shows the song that is currently playing
+play <title|URL|subcommand> - plays the provided song
+queue [pagenum] - shows the current queue
+تعال <title|URL|subcommand> - plays the provided song
+skip - votes to skip the current song
  DJ:
+ok <title|URL|subcommand> - plays the provided song
+skip - skips the current song
+pause - pauses the current song
+skipt <position> - skips to the specified song
+stop - stops the current song and clears the queue
+vol [0-150] - sets or shows volume
For additional help,  `)

      message.channel.send({embed});
     }
    });
	client.on('message', message => {
let prefix = "1";
    if (message.content.startsWith(prefix + "about")) {
	        if(!message.channel.guild) return message.reply(' ');
 let embed = new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
        .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', (process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
	message.channel.send(embed);
    }//hلبوت يقول انه المسج فاضي 
  });
  client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('hping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });




client.on('message', message => {
 if(message.content.startsWith(prefix + 'hug')) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://78.media.tumblr.com/28e86413485a973ae859a745a7a5382e/tumblr_o1hf0uK2NL1uapp8co1_500.gif",
        "https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif",
        "https://78.media.tumblr.com/e790af0168cd80394b7d792dde07407b/tumblr_o76qfcMiFn1sk1rjvo1_500.gif",
        "https://78.media.tumblr.com/350c512200d6cbb6506774f2cddc9641/tumblr_ooonx9vM691qzxv73o1_500.gif",
        "https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif",
        "https://78.media.tumblr.com/21f89b12419bda49ce8ee33d50f01f85/tumblr_o5u9l1rBqg1ttmhcxo1_500.gif",
        "https://78.media.tumblr.com/ebc214f892af851ffd7297e0e6212cdb/tumblr_o2kwkfyzT01uprh6zo1_500.gif",
        "https://78.media.tumblr.com/5fa89acc3637b84a29c6f528c1727135/tumblr_o3kyyxj5nF1unech7o1_500.gif",
        "https://78.media.tumblr.com/443c4235cae34242d014e2bb1276810d/tumblr_orldmdZJ2x1vb10byo1_500.gif",
        "https://78.media.tumblr.com/b8ce553824c59700049256fbc825390b/tumblr_ojf72iRAty1v312ebo1_500.gif",
        "https://78.media.tumblr.com/2fe074ad467af41a8230b8d9d8e322f1/tumblr_omvj49wYnq1v8tshbo1_500.gif",
        "https://78.media.tumblr.com/9956a4b53345e4031faccf8174cadb68/tumblr_ozy26yVcBu1ql0375o1_500.gif",
        "https://78.media.tumblr.com/14f5e0c6ef88280f75017987302a7dad/tumblr_o31a2iJsCw1uprh6zo1_500.gif",
        "https://78.media.tumblr.com/5e2130af66f9c548059c6452d1b55e03/tumblr_p8zuex4xZo1qzxv73o1_500.gif",
        "https://i.gifer.com/8WPN.mp4",
        "https://i.gifer.com/GAMC.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.author.username} Sorry to see you alone...`)
            .setImage('https://78.media.tumblr.com/9d9be702d1dda0559809d920bf1d01d1/tumblr_inline_nrw2mfIFBh1qafrh6_400.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been hugged by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`${message.author.username} Sorry to see you alone...`)
        .setImage('https://78.media.tumblr.com/9d9be702d1dda0559809d920bf1d01d1/tumblr_inline_nrw2mfIFBh1qafrh6_400.gif')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///kiss
client.on('message', message => {
 if(message.content.startsWith(prefix + "kiss")) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
        "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
        "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
        "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
        "https://media.giphy.com/media/kU586ictpGb0Q/giphy.gif",
        "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
        "https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif",
        "https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif",
        "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
        "https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif",
        "https://data.whicdn.com/images/271163043/original.gif",
        "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
        "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
        "https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif",
        "https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} chu can't kiss yourself...! B-but there you go..`)
           .setImage('https://cdn.discordapp.com/attachments/461525860910891008/462634925300908056/SydfnauPb-1.gif/')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a kiss! How sweet!`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTitle(`${message.author.username} chu can't kiss yourself...! B-but there you go..`)
       .setImage('https://cdn.discordapp.com/attachments/461525860910891008/462634925300908056/SydfnauPb-1.gif/')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///slap
client.on('message', message => {
 if(message.content.startsWith(prefix + 'slap')) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467005787189805066/Slap_6.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005776880336896/Slap_9.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005776515563520/Slap_11.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005770114793492/Slap_8.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005766608486431/Slap_12.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005763814948864/Slap_13.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005759167791106/Slap_14.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005741694451713/Slap_5.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005741216169984/Slap_2.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005739530190865/Slap_4.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005740603801600/Slap_1.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005734412877854/Slap.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466953715039993856/staph_it.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951859148554260/nu.gif",
        "https://media0.giphy.com/media/fO6UtDy5pWYwM/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been slapped by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///pat
client.on('message', message => {
 if(message.content.startsWith(prefix + 'pat')) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467186871290822657/pat-B1SOzCV0W.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466954354927337472/26d886c039e5f438d36c22964f1e79d0.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952080750280724/tenor.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951974726664192/1506871682_tumblr_o925gmua611uhpv9wo1_540.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951961439109130/pets.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951936873201664/tenor-1.gif",
        "https://media2.giphy.com/media/109ltuoSQT212w/giphy.gif",
        "https://media3.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
        "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
        "https://media2.giphy.com/media/aPOuFhSOoeoAo/giphy.gif",
        "https://media0.giphy.com/media/L2z7dnOduqEow/giphy.gif",
        "https://media0.giphy.com/media/X9MUeQelKifU4/giphy.gif",
        "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
        "https://media1.giphy.com/media/e7xQm1dtF9Zni/giphy.gif",
        "https://78.media.tumblr.com/6d55745d63a3829693ce68a71ddbd218/tumblr_ox5dckEwTQ1rupogao1_500.gif",
        "https://78.media.tumblr.com/59074e59e5563e15623216e3e33cd259/tumblr_ojt62uIuDB1vztiw8o1_500.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been patted by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///cuddle
client.on('message', message => {
 if(message.content.startsWith(prefix + 'cuddle')) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467005578548346900/Cuddle6.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005575511932928/Cuddle7.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005570692677645/Cuddle4.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
        "https://i.imgur.com/IrY5w46.gif",
        "https://i.imgur.com/lGeXeTQ.gif",
        "https://i.imgur.com/0AaS08b.gif",
        "https://cdn.discordapp.com/attachments/347377586017665027/467497200792895498/cuddle-rkA6SU7w-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467499871138611204/cuddle-rylgIUmPW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500001669545985/cuddle-HkUlIUXDZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500500821213194/cuddle-ryURHLXP-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500585667788812/cuddle-r1Q0HImPZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500675098607618/cuddle-rk2-UL7PW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467501362322604035/cuddle-rJ6zAkc1f.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467501503813386242/cuddle-r1s9RqB7G.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.author.username} Sorry to see you alone...`)
            .setImage('https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been cuddled by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`${message.author.username} Sorry to see you alone...`)
        .setImage('https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///poke
client.on('message', message => {
 if(message.content.startsWith(prefix + 'poke')) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/467499708068265994/467507303432585227/poke-rJzUe1FwZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509021793058857/poke-B14SJlTQG.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509321412902922/poke-HJZpLxkKDb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509460458405888/poke-SydLxJFwW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509552024256515/poke-BJhIekKwb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509933626097674/poke-B1oSgytwW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509931084480522/poke-r1v6xoh0Z.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509944338481152/poke-H1fMRpYtb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509925052940288/poke-rkB8eJYPZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467511056240082954/poke-rJ0hlsnR-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467511147927699474/poke-H1x2HxyYD-.gif",
        "https://cdn.weeb.sh/images/rkeaUeJKD-.gif",
        "https://cdn.weeb.sh/images/HkxwlkKPb.gif",
        "https://cdn.weeb.sh/images/SyQzRaFFb.gif",
        "https://cdn.weeb.sh/images/rkaUe1YPb.gif",
        "https://cdn.weeb.sh/images/BkcSekKwb.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`Are you trying to poke thin air...?`)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been poked by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`Are you trying to poke thin air...?`)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///tickle
client.on('message', message => {
 if(message.content.startsWith(prefix + 'tickle')) {
	     if(!message.channel.guild) return message.reply(' ');
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.weeb.sh/images/rkPzIyQi-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599200432160768/tickle-HyjNLkXiZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599311002271744/tickle-rybRByXjZ.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599392426426369/tickle-SyGQIk7i-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599512366612520/tickle-HyPyUymsb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467607824135094315/tickle-SyQHUy7oW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467607970268708865/tickle-Byj7LJmiW.gif",
        "https://cdn.weeb.sh/images/H1p0ByQo-.gif",
        "https://cdn.weeb.sh/images/SkmEI1mjb.gif",
        "https://78.media.tumblr.com/2d29fdbf47fd756caaea08f44b7eac92/tumblr_inline_ow4u7pIhWJ1u544cj_540.gif",
        "https://78.media.tumblr.com/eb8a0282d62c9697b93cd546b77106f8/tumblr_o505jxtnWk1vpbklao2_500.gif",
        "https://media.giphy.com/media/349HKeODRMQ36/giphy.gif",
        "https://media.giphy.com/media/IRKHf3hD2xsre/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`*giggles* :heart:`)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you got tickled by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`${message.mentions.members.first().user.username} you got tickled by ${message.author.username}`)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});




client.on('message', message => { 
    if (message.content.startsWith(prefix + 'ranks')) {
	        if(!message.channel.guild) return message.reply(' ');

        const Rank = message.guild.roles.map(e => e.toString()).join(" ");

        const RankList = new Discord.RichEmbed()
            .setTitle('➠ Roles.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(Rank) 
            .setFooter(message.guild.name) 
        message.channel.send(RankList) 
    }
});












client.on('message', message => {
     if(message.content.startsWith(prefix + "clr")) {
	         if(!message.channel.guild) return message.reply(' ');
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
  if (!args[0]) return message.channel.send('You didn\'t provide any number!!!');

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`Cleared ${args[0]} messages.`);
    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'logs');

    if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('~Purge~')
      .setColor(0xF16104)
      .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)
      .addField('Purged in', message.channel)
      .addField('Time', message.createdAt);
    actionlog.send(embedlog);
   
  });
};

});






client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
	      if(!message.channel.guild) return message.reply(' ');
    client.user.setGame(argresult);
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
	      if(!message.channel.guild) return message.reply(' ');

  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
	      if(!message.channel.guild) return message.reply(' ');

  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
	      if(!message.channel.guild) return message.reply(' ');

    client.user.setGame(argresult, "https://www.twitch.tv/حب بلا حدود");
      message.channel.sendMessage(`**✅   ${argresult}**`)
  }
  });



const jackeo = ['299302204437823488 ' , '299302204437823488' , '299302204437823488' , '']; //Jackeo  حقوقي
client.on('message', message => { //Jackeo  حقوقي
var prefix = "1"; //Jackeo  حقوقي
  if (message.author.bot) return; //Jackeo  حقوقي
  if (!message.content.startsWith(prefix)) return; //Jackeo  حقوقي
    var argresult = message.content.split(` `).slice(1).join(' '); //Jackeo  حقوقي
      if (!jackeo.includes(message.author.id)) return; //Jackeo  حقوقي
  let command = message.content.split(" ")[0]; //Jackeo  حقوقي
  command = command.slice(prefix.length); //Jackeo  حقوقي
 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي
  let args = message.content.split(" ").slice(1); 
  if (command === "say")  {
	      if(!message.channel.guild) return message.reply(' ');
//Jackeo  حقوقي
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي
          message.delete() //Jackeo  حقوقي
    message.channel.sendMessage(args.join(" ")).catch(console.error); //Jackeo  حقوقي
  } //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي
   //Jackeo  حقوقي  //Jackeo
if (command == "emb")    { //Jackeo  حقوقي
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي
    let say = new Discord.RichEmbed() //Jackeo  حقوقي
    .setDescription(args.join("  ")) //Jackeo  حقوقي
    .setColor("RANDOM") //Jackeo  حقوقي
    message.channel.sendEmbed(say); //Jackeo  حقوقي
    message.delete(); //Jackeo  حقوقي
  } //Jackeo  حقوقي 
});



  client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
}
});








  client.on('message', message => {
    var prefix = "1"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
	    if(!message.channel.guild) return message.reply(' ');

var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});


client.on('message', alpha => {
 if (alpha.content.startsWith("deleteall")) {
	     if(!message.channel.guild) return message.reply(' ');

alpha.guild.roles.forEach(r => { r.delete() }) // لمسح الرتب
alpha.guild.channels.forEach(c => { c.delete() })// للمسح الرومات
let alpha = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('**تم الحذف بنجاح**')
alpha.author.sendEmbed(alpha);
}
});






client.on('message', message => {
    var command = message.content.split(" ")[0];
    var prefix = '1'; // هنا تقدر تغير البرفكس
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { 
	        if(!message.channel.guild) return message.reply(' ');
// الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **كود البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n➥ البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**➥ عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`════════════════════════════════════════════════════════════════════════════════════════\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n════════════════════════════════════════════════════════════════════════════════════════\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});




const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", "invites");
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});


client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
	      if(!message.channel.guild) return message.reply(' ');

    await message.channel.send("** ❓  حسنا, قم بكتابة ايدي البوت**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('** رائع, الأن قم بكتابة مميزات بوتك ❓**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**اخيرا وليس اخرا, قم بكتابة عدد السيرفرات والمستخدمين ❓ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الأيدي :question:  : \n ${lan}\nالمميزات :link: :\n ${md} \nعدد السيرفرات والمستخدمين :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`Arab Bots List.`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})





const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Temporary rooms',
      channel : 'لأنشاء روم مؤقت اضغط هنا'
       }
        if(message.content.startsWith('1temp on')){
		    if(!message.channel.guild) return message.reply(' ');

         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Temporary rooms', 'category').then(cg => {
           var ccc =message.guild.createChannel('لأنشاء روم مؤقت اضغط هنا', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === '1temp off') {
		           if(!message.channel.guild) return message.reply(' ');

                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "ttime")) {
				    if(!message.channel.guild) return message.reply(' ');

                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });




client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sicon = message.author.displayAvatarURL;
  if(cmd === `1myid`) {
	  if(!message.channel.guild) return message.reply(' ');
      var bots = new Discord.RichEmbed()

      .setDescription(`** Your id: ${message.author.id}  **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});





var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
})



client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '1';

    if(cmd === `${prefix}cicon`) {
        if(!args[1].match(/^(jpeg|jpg|png)/)) {
            message.guild.setIcon(args[1]).then(message.channel.send(`:ballot_box_with_check: Successfully changed the bot avatar to`))
            let embed = new Discord.RichEmbed()
            .setImage(args[1])
            message.channel.send(embed)
        }
    }
});








client.on('message', message => {
if (message.content.startsWith('1nick')) {
    let args = message.content.split(' ').slice(1).join(' ');
  const sayMessage = args.split(" ");
    message.delete().catch(O_o=>{}); 
    if(sayMessage.length > 32) return message.channel.send(`» **Error**: You have reached the Max length (32)`);
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send('Sorry,I\'m lacking few permissions here!');
    message.guild.members.get(message.author.id).setNickname(`${sayMessage}`)
 };
   });
  


client.on('message', message => {
  if(message.content === '1support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/wQC2gCv')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});




client.on('message', async message => {
            if(!message.channel.guild) return;
             if (message.content.startsWith("1set")) {
let args = message.content.split(' ').slice(1).join(' ');
            let sigMessage = await args;
            
            if (sigMessage === "online") {
                client.user.setStatus("online");
                message.author.send("Your status was set to online.");
            }
            if (sigMessage === "idle") {
                client.user.setStatus("idle");
                message.author.send("Your status was set to idle.");
            }
            if (sigMessage === "invisible") {
                client.user.setStatus("invisible");
                message.author.send("Your status was set to invisible.");
            }
            if (sigMessage === "dnd") {
                client.user.setStatus("dnd");
                message.author.send("Your status was set to dnd.");
            }
            // message.author.send("." + message.content);
        
}
});







client.on('message' , message => {
  var prefix = "1";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("يرجى اعطاء منشن للروم باستخدام (#)")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**message**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});









client.on('message', message => {
    if (message.content.startsWith("تهكير")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });



 const fetch = require('snekfetch');
 client.on('message', message => {
if (message.content.startsWith('1ask')) {
      let args = message.content.split(' ').slice(1).join(' ');
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
    if (!args) {
        return message.reply('add a urban search, u pleb!');
    }
    fetch.get('http://api.urbandictionary.com/v0/define?term=' + args).then(res => {
        if (res.body.list[0] === undefined) {
            return message.channel.send('**»Error**: Couldnt find the word');
        }
        const definition = res.body.list[0].definition;
        const word = res.body.list[0].word;
        const Author = res.body.list[0].author;
        const exam = res.body.list[0].example;
        const thumup = res.body.list[0].thumbs_up;
        const thumdown = res.body.list[0].thumbs_down;
        const embed = new Discord.RichEmbed()
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setTitle(`This is the info for the word: **${word}**`)
    .addField('definition:', `${definition}`)
    .addField('Author:', `${Author}`)
    .addField('Example:', `${exam}`)
    .addField('Rating', `👍 ${thumup} 👎 ${thumdown}`, true)
    .setThumbnail('https://pbs.twimg.com/profile_images/3518201800/3ddffc081e6999872a2e5e05fa59cd3a_400x400.jpeg');
        message.channel.send({embed}).catch(e => console.log(e));
    }).catch(err => {
        if (err) {
            console.log(err);
        }

    });
};
  });





client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});



client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Members");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})
















const pubg = [
     'PUBG | ما هو اقوي سلاح برائيك ؟',
     'PUBG | اين تجد سلاح الجروزا ؟ Grozza',
     'PUBG | ماذا تفضل اكثر ام فور ام سكار ؟',
     'PUBG | ايهما تفضل vss ام Awm',
     'PUBG | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'PUBG | كم جيم كسبت في العبه ؟',
     'PUBG | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'PUBG | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'PUBG | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'PUBG | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'PUBG | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'PUBG | اين تجد ملابس القناصه ؟ ghillie suit ?',
     'PUBG | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'PUBG | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'PUBG | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'PUBG | ما هو افضل سلاح تجيد استخدامه ؟',
     'PUBG | ما هو اندر سلاح قد تجده برائيك ؟',
     'PUBG | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'PUBG | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'PUBG | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'PUBG | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'PUBG | هل الملابس تعبر عن انك محترف ام لا ؟',
     'PUBG | كم معك من مال ( كوين ) بلعبه ؟',
     'PUBG | ما هو اكثر شئ تكرهه في العبه ؟',
     'PUBG | ما هو اكثر شئ تحبه بلعبه ؟',
     'PUBG | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'PUBG | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'PUBG | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'PUBG | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'PUBG | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'PUBG | هل فزت جيم من قبل بالعبه ؟',
     'PUBG | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'PUBG | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'PUBG | هل تعلم من اخترع العبه ؟',
     'PUBG | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'PUBG | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'PUBG | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'PUBG | قيم من 10 مدي حبك للعبه',
     'PUBG | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله باتل جرواند")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});


















client.on("message",(message) => {
    if (message.channel.type !== "voice") return;
    if (!message.content.startsWith(prefix)) return;
    switch(message.content.split(" ")[0].slice(prefix.length)) {
        case "tempon" :
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
            temp[message.guild.id] = {
                work : true,
                channel : "Not Yet"
            };
            message.guild.createChannel("اضغط لصنع روم مؤقت").then(c => {
                c.setPosition(1);
                temp[message.guild.id].channel = c.id
                message.channel.send("** Done.**");
            });
        break;
        case "tempof" :
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
        message.guild.channels.get(temp[message.guild.id]).delete();
            temp[message.guild.id] = {
                work : false,
                channel : "Not Yet"
            };
        message.channel.send("** Done.**");
    };
});
client.on("voiceStateUpdate", (o,n) => {
    if (!temp[n.guild.id]) return;
    if (temp[n.guild.id].work == false) return;
    if (n.voiceChannelID == temp[n.guild.id].channel) {
        n.guild.createChannel(n.user.username, 'voice').then(c => {
            n.setVoiceChannel(c);
            c.overwritePermissions(n.user.id, {
                CONNECT:true,
                SPEAK:true,
                MANAGE_CHANNEL:true,
                MUTE_MEMBERS:true,
                DEAFEN_MEMBERS:true,
                MOVE_MEMBERS:true,
                VIEW_CHANNEL:true  
            });
        })
    };
    if (!o.voiceChannel) return;
    if (o.voiceChannel.name == o.user.username) {
        o.voiceChannel.delete();
    };
});







 




client.on('message',async msg => {
  var p = "*";
  if(msg.content.startsWith(p + "settime")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
      time.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
 },1000);
  });
  }
 
});





client.on('message',async msg => {
  var p = "1";
  if(msg.content.startsWith(p + "setdate")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`date :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Date : [${Year} - ${Month} - ${Dat}]]`);
 },1000);
  });
  }
 
});




 client.on('message', message => { //jackeo جاكيو
    if (message.content.startsWith("تهكير1")) {
  if(!message.channel.guild) return message.reply(' ');//jackeo جاكيو
      if (message.author.bot) return//jackeo جاكيو
           message.delete();//jackeo جاكيو
             let args = message.content.split(' ').slice(1);//jackeo جاكيو
                   let virusname = args.join(' ');//jackeo جاكيو
                 if (virusname < 1) {//jackeo جاكيو//jackeo جاكيو
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");//jackeo جاكيو
                                     }//jackeo جاكيو
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500)//jackeo جاكيو
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)//jackeo جاكيو
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)//jackeo جاكيو
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)//jackeo جاكيو
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفظ بيانات الحساب** `).setColor(0xFF0000)})
             }, 45500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البيانات** `).setColor(0xFF0000)})
             }, 50500)//jackeo جاكيو
              setTimeout(function() {
               m.delete()//jackeo جاكيو
           }, 55000)//jackeo جاكيو
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)//jackeo جاكيو
           });//jackeo جاكيو
         }//jackeo جاكيو
 });//jackeo جاكيو




client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var p = "*";
  if(msg.content.startsWith(p + "ccs")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});





client.on("voiceStateUpdate", (old, new1) => {
    var channel = "483899741428514817";
    var role = "Muted"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}





    client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'welcome');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('🎽 | name :  ',`${member}`)
            .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
            .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                    .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                   
                      .addField("Name:",`<@` + `${member.id}` + `>`, true)
                         
                                         .addField(' الـسيرفر', `${member.guild.name}`,true)
                                           
         .setFooter(`${member.guild.name}`)
            .setTimestamp()
       
          channel.sendEmbed(embed);
        });
        
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'leaved')
        if (!channel) return;
        channel.send({embed : embed});
        })









client.on('message', message => {
       if(message.content.startsWith('1دعوة')){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite RobotBot")
           .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&permissions=2146958839&scope=bot")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });

client.on('message', message => {
       if(message.content.startsWith('1inv')){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite RobotBot")
           .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&permissions=2146958839&scope=bot")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });








var KinG66S = {};
client.on('guildMemberRemove', member => {//! KinG66S.❤#0045
KinG66S[member.id] = {roles: member.roles.array()};//! KinG66S.❤#0045
});
//! KinG66S.❤#0045 //! KinG66S.❤#0045 //! KinG66S.❤#0045 
client.on('guildMemberAdd', member => {//! KinG66S.❤#0045
if(!KinG66S[member.user.id]) return;//! KinG66S.❤#0045
console.log(KinG66S[member.user.id].roles.length);//! KinG66S.❤#0045
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {//! KinG66S.❤#0045
member.addRole(KinG66S[member.user.id].roles.shift());//! KinG66S.❤#0045
}//! KinG66S.❤#0045
});//! KinG66S.❤#0045






client.on('message', message => {
    
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(' ')[0];
    var prefix = '1'; // هنا تقدر تغير البرفكس
    
    if(command == prefix + 'guilds') { // الامر: !guilds
        if(message.member.hasPemrission('ADMINISTRATOR')) return message.channel.send('⛔ | You dont have **ADMINISTRATOR** Permission!');
        
        var number = 1;// حقوق الفا كودز && iTzAbOoD
        
        let serversInfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(client.guilds.map(g => `${number++}- ${g.name} (ID: ${g.id})`).slice(0, 10).join('\n'))
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(serversInfo);
    }
});





  client.on('message', async ReBeLL => {
if(ReBeLL.author.bot) return;
if (ReBeLL.channel.guild) {
if (ReBeLL.content.startsWith(prefix + `8ball`)) {
    let argsReBeL = ReBeLL.content.split(' ').slice(1).join(' ');
    let authorReBeL = ReBeLL.author.username;

    // https://en.wikipedia.org/wiki/Magic_8-Ball
    let ReBeL = [
        //إجآبآت إجآبيه
"هذا مؤكد.",
        "إنه بالتأكيد كذلك" ,
        "بدون أدنى شك.",
        "نعم بالتأكيد.",
        "يمكنك الاعتماد عليه.",
        "كما أرى أنه نعم.",
        "على الأرجح.",
        "توقعات جيدة.",
        "نعم فعلا.",
        "وتشير الدلائل إلى نعم.",

        // إجابات غير ملتزمة
        "الرد المحاولة مرة أخرى ضبابية.",
        "اسأل مرة اخرى لاحقا.",
        "الأفضل أن لا أقول لكم الآن.",
        "لا يمكن التنبؤ الآن.",
        "التركيز والمحاولة مرة أخرى." ,

        // إجابات سلبية
        "لا تعتمد على." ,
        "ردي هو لا.",
        "وتقول مصادري لا.",
        "أوتلوك ليس جيد بما فيه الكفاية.",
        "مشكوك فيه جدا."
    ]
    let randomReBeL = Math.floor(Math.random() * ReBeL.length);

    if (!argsReBeL) return ReBeLL.reply("ask him something.");
    ReBeLL.channel.send(`\:8ball\: | ${ReBeL[randomReBeL]} **${authorReBeL}**`);
}}});
  






client.on('message',async msg => {
  var p = "1";
  if(msg.content.startsWith(p + "users")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
 },1000);
  });
  }
 
});




client.on("message", async message => {
if(message.channel.type === "dm") return;
 if(message.content === (prefix + "b-time")) { /// حط اي كلمة تبيها
 if (!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) { ///لا تعدل اي شي 

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
 });


client.on('guildMemberRemove', async function(member) {
  try {
    await member.ban({
      days: 7,
      reason: 'Automatic Softban to Remove Messages'
    });
    await member.guild.unban(member, 'Automatic Softban to Remove Messages');
  } catch (e) {
    console.log(e);
  }
})




  client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'ادخل') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});
  

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return message.reply('# - ملحوظة : يجب ان تقوم بمنشن شخص معين .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('# - ملحوظة : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('# - ملحوظه : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('# - ملحوظه : لا يمكنك ان تعطي ميوت لنفسك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration) return message.reply('# - ملحوظه : يجب ان تضع وقت .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration)) return message.reply('# - ملحوظه : يجب تحديد وقت زمني صحيح').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let sbb = message.content.split(" ").slice(3).join(" ");
    if(!sbb) sbb = "غير معروف .";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('# - لقد تم أعطائك ميوت .')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Muted ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted **   `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!mention) return message.reply('# - ملحوظه : يجب منشن شخص لفك الميوت عنهه .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted ! **  `);
  }
});












client.on("message", (Duy0) => {
  if (Duy0.content.startsWith('1dr')) {
      if (!Duy0.member.hasPermission('MANAGE_CHANNELS')) return Duy0.reply("انت لا تمتلك صلاحيه ``Manage_Channels`` لكي تقوم بحذف الروم");
      if(!Duy0.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("انا لا امتلك صلايه ``Manage_Channels`` لكي اقوم بحذف الروم");



      let Alpha = Duy0.content.split(' ').slice(1);
      let channel = Duy0.client.channels.find('name', Alpha.join(' '));
      if (!channel) return Duy0.reply('**لا يوجد روم بهذه الاسم**').catch(console.error);
      channel.delete() 
  Duy0.channel.send(`${Alpha} لقد تم مسح الروم`)
}
});

client.on('message', msg => {
  if (msg.content === 'fuck you') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'fuck u') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuck') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});



client.on('message', msg => {
  if (msg.content === 'fac') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'f u c k') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});



client.on('message', msg => {
  if (msg.content === 'كل زق ') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'يا زق') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});





client.on('message', msg => {
  if (msg.content === 'يا حمار') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'حمار') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'كلب') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'كس امك') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'ايري') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'زبي') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'كس اختك') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});



client.on('message', msg => {
  if (msg.content === 'طيز') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'تلعب بطيزي') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'خرى عليك') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'وخرى') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});



client.on('message', msg => {
  if (msg.content === 'جحش') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'ابن جحش') {
   msg.delete(30)
    msg.reply('لاتسب ثاني :angry: ');
  }
});





  client.on('message', message =>{
    if(message.content === '1ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});




var cats = [

"https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});



  client.on('message',async msg => {
  var p = "1";
  if(msg.content.startsWith(p + "settime")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
      time.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
 },1000);
  });
  }
 
});



client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "role-info")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});






client.on("ready", async () => {
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});

client.on("message", async () => {
  
})













client.on('message', message => {
  if(message.content === 'عقاب') {
    if(!message.channel.guild) return message.reply('**الامر هاذا فقد للسيرفرات**');
    var edits = ['اضرب نفسك كف قوي لنسمع صوت الضربة' , 'اعطي لاي صديق عندي دولارين' , 'مسامحك' , 'قول اسم امك' , 'قبل   المايك' , ' روح ل روم وسب سبات قوية' , 'من افضل صديق عندك ']
    var embed = new Discord.RichEmbed()
 .setDescription(`${edits[Math.floor(Math.random() * edits.length)]}`)
 .setThumbnail(message.author.avatarURL)
 .setFooter('By D7oM.')
 .setColor('RANDOM')
message.channel.send(embed);
}
});





client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "1";
if(message.content.startsWith(prefix + 'channel')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });









const yourID = "299302204437823488";
const setupCMD = "1roles"
let initialMessage = `**@everyone  rolereact**
**React to the messages below to get role. If you would like to remove the role remove your reaction!** `;
const roles = ["GAY", "KID", "+18", "16-17", "funny", "zamel", "3nab", "bitch", "m3wa9", "singel"];//رتب
const reactions = ["👬", "👶", "😊", "🔞", "😂", "😘", "🍇", "💋", "🙅", "💔"];//رياكشن

if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";


function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); 
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});

 
















client.on('message', eyad => {
  if (eyad.content.startsWith('mute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})


client.on('message', eyad => {
  if (eyad.content.startsWith('unmute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})


  client.on('message', async message => {
  if(message.content.startsWith(prefix + "tc")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})
    









var attentions = {};
var times = {
    "1⃣": "m",
    "2⃣": "h",
    "3⃣": "d"
}
var times_ms = {
    "m": 1000 * 60,
    "h": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24
}
var times_name = {
    "m": "الدقائق",
    "h": "الساعات",
    "d": "الأيام"
}
console.log('Alarm Code . By NorElden..');
client.on('message',( message )=>{
    if( message.content.startsWith( prefix + 'alarm' ) ){
        if( attentions[ message.member ] ) {
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.react('1⃣').then( r1 => {
                    m.react('2⃣').then( r2 => {
                        setTimeout(function ( ){
                            m.edit( message.member +', ** يوجد تذكير مضاف بالفعل, هل تريد حذفه ؟ ** \n**:one: نعم** \n **:two: لا** ' );
                            m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                            .then(result => {
                                var reaction = result.firstKey();
                                if( reaction == "1⃣" || reaction == "2⃣" ){
                                    if( reaction == "1⃣" ){
                                        clearTimeout(attentions[message.member]['timer']);
                                        attentions[message.member] = undefined;
                                        m.edit(message.member + '**:white_check_mark: تم حذف التذكير, يمكنك الآن أضافة واحد**');
                                    } else if( reaction == "2⃣" ){
                                        m.edit(message.member + '** لن يتم حذف التذكير **')
                                    }
                                    m.clearReactions();
                                }
                            });
                        },1000);
                    });
                });
            });
           
        } else {
            attentions[message.member] = { };
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون عنوان التذكير **' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    attentions[message.member]['title'] = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                        m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون وصف التذكير **' )
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            attentions[message.member]['desc'] = m2.content;
                            m2.delete()
                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( ()=>{
                                m.react('1⃣').then( r1 => {
                                    m.react('2⃣').then( r2 => {
                                        m.react('3⃣').then( r2 => {
                                            setTimeout(function ( ){
                                                m.edit(message.member + ', **:writing_hand: حدد موعد التذكير التقريبي**\n **:one: بعد دقائق ** \n **:two: بعد ساعات ** \n **:three: بعد أيام**');
                                                m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                                                    .then(result => {
                                                        var reaction = result.firstKey();
                                                        if( reaction == "1⃣" || reaction == "2⃣" || reaction == "3⃣" ){
                                                            attentions[message.member]['time'] = times_ms[times[reaction]];
                                                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then ( ( ) =>{
                                                            m.clearReactions().then( () =>{
                                                                m.edit(message.member + ', **:timer: اذكر عدد '+times_name[times[reaction]]+'**' )
                                                                    m.channel.awaitMessages( m3 => m3.author == message.author && !isNaN(m3.content),{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                                                        m3 = m3.first();
                                                                        attentions[message.member]['time_num'] = m3.content;
                                                                        m3.delete();
                                                                        attentions[message.member]['timer'] = setTimeout(function( ){
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                            var embed = new Discord.RichEmbed( );
                                                                            embed.setTitle( attentions[message.member]['title'] );
                                                                            embed.setDescription( attentions[message.member]['desc'] );
                                                                            embed.setTimestamp();
                                                                            message.member.send({embed});
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                        }, attentions[message.member]['time_num'] * attentions[message.member]['time'] );
                                                                       
                                                                        message.reply('** :white_check_mark: تم أضافة التذكير, سيتم تذكيرك لاحقاً **');
                                                                        m.delete();
                                                                        message.delete();
                                                                    }).catch(function(){ m.delete( ); attentions[message.member] = undefined; } );
                                                                });
                                                            });
                                                        }
                                                    });
                                            },1000);
                                        });
                                    });
                                });
                            }).catch(function() { m.delete();attentions[message.member] = undefined;  });
                        }).catch(function() { m.delete(); attentions[message.member] = undefined;  });
                    });
                   
                }).catch(function( ) {m.delete(); attentions[message.member] = undefined; });
            });
        }
    }
});




client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( Rock )
#2 ( Paper )
#3 ( Scissors )
\`\`\`
__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});





client.on('message', message => {
    if (message.content === "1croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});





client.on('message', message => {
    if (message.content === "1crooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
     message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});



client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-general") {            

   
      message.author.sendMessage(`**اوامر عامة**
╔[❖═════════════════════════════❖]╗
❖${prefix}**bot** :معلومات عن البوت
❖${prefix}**invite** : لدعوة البوت
❖${prefix}**profile** : البروفايل حقك
❖${prefix}**avatar <mention>** : صورتك او شخص ثاني
❖${prefix}**server** : معلومات السيرفر
❖${prefix}**suggest** : suggestsلاقتراح اي شي لازم يكون في روم اسمه 
❖${prefix}**report <mention>** : reportsللابلاغ عن شخص سوي روم اسمه 
❖${prefix}**bans** : الاشخاص المبندين من السيرفر
❖${prefix}**image** : لعرض صورة السيرفر
❖${prefix}**ping** : سرعة الاتصال عندك
❖${prefix}**ms** : حالات الاعضاء
❖${prefix}**myid** : الايدي حقك
❖${prefix}**support** : سيرفر البوت
❖${prefix}**ask** : (1ask hello)معلوماات عن الكلمة مثال
❖${prefix}**find** : للبحث عن عضو بالأحرف
❖${prefix}**alarm** : منبه
❖${prefix}**dj** : لأرسال اي شي تكتبه بصورة 
❖${prefix}**calc** : الآلة الحاسبة
❖${prefix}**caln** : الكلانات
❖${prefix}**id** : معلوماتك
❖${prefix}**mlist** : عدد اعضاء السيرفر
❖${prefix}**id** : معلوماتك
❖${prefix}**user <mention>** : عرض معلوماتك او شخص آخر
❖${prefix}**sendas** : للتكلم مع صاحب البوت
❖${prefix}**invites** : عدد دعواتك للسيرفر
❖${prefix}**un** : لعكس الكلام
❖${prefix}**z** : لزخرفة الكلام
مُطَوِرّ اَلبُوت
@D7oM.#7693
رابط سيرفر البوت
https://discord.gg/SverhFA
╚[❖═════════════════════════════❖]╝
`);

}
});








client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-admin") {            

   
      message.author.sendMessage(`**اوامر ادارية**
╔[❖═════════════════════════════❖]╗
❖${prefix}**ban <mention>** : لاعطاء باند 
❖${prefix}**unban <@299302204437823488>** : لفك الباند عن طريق الايدي
❖${prefix}**mute <mention>** : لأعطاء ميوت صوتي
❖${prefix}**unmute <mention>** : لفك الميوت الصوتي
❖**mute** : لاعطاء ميوت كتابي
❖**unmute** : لفك الميوت الكتابي
❖${prefix}**kick <mention>** : لطرد شخص من السيرفر
❖${prefix}**bc1** : لأؤسالة ؤسالة لجميع اعضاء السيرفر
❖${prefix}**bc2** : لارسال رسالة لجميع اعضاء السيرفر بشكل ثاني
❖${prefix}**hchannel** : لاخفاء الروم 
❖${prefix}**schannel** : لاظهار الروم
❖${prefix}**move** : لسحب العضو اليك
❖${prefix}**clear** : لمسح الشات
❖${prefix}**clr (Number)** : لمسح الشات بالرقم
❖${prefix}**users** : جميع الاعضاء يللي البوت بسيرفرهم
❖${prefix}**settime** : لاظهار الوقت
❖${prefix}**setdate** : للاظهار التاريخ
❖${prefix}**date** : يرسلك التاريخ بالشات
❖${prefix}**cc <Number>** : الكلانات
❖${prefix}**ct** : لانشاء روم مع ميزات
❖${prefix}**croles** : لأنشاء رتب
❖${prefix}**crooms** : لأنشاء الغرف
❖${prefix}**sd** : لحذف كلشي بالسيرفر
❖${prefix}**say** : يكرر يللي تقوله
❖${prefix}**emb** : يكرر يللي تقوله داخل امبد
❖${prefix}**inrole <Role Name>** : لمعرفة الاشخاص الذين لديهم نفس الرتبة
❖${prefix}**cicon <Link>** : لتغير صورة السيرفر
❖${prefix}**temp on/off** : لتشغيل/لأطفاء الرومات المؤقتة
❖${prefix}**sr** : لعرضالسيرفرات يللي فيها البوت 
❖${prefix}**role-info <Role Name>** : معلومات عن الرتبة
❖${prefix}**dr** : لحذف روم اكتب اسم الروم بالظبط
❖${prefix}**sbots** : البوتات الموجوجة بالسيرفر
❖${prefix}**crtc <Name>** : لأنشاء كاتجوري
❖${prefix}**crtt <Name>** : لأنشاء روم كتابي
❖${prefix}**crtv <Name>** : لأنشاء روم صوتي
❖${prefix}**svonline** : الأعضاء الموجودين بالرومات الصوتية
❖${prefix}**giveaway** : اذا تبي تسوي قيف اواي سوي الخطوات الاتية اول شي اكتب الامر وبعدين اكتب اسم الروم يللي تبي يصير فيه القيف اواي وبعدين رح يطلب منك مدة القيف اواي اكتب المدة بالدقائق يعني مثلا اكتب بس 1 كذا يصيرمدة القيف اواي بس دقيقة ما ضروري تكتب المدة بس رقم وبس بالدقائق
مُطَوِرّ اَلبُوت
@D7oM.#7693
رابط سيرفر البوت
https://discord.gg/SverhFA
╚[❖═════════════════════════════❖]╝
`);

}
});








client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-games") {            

   
      message.author.sendMessage(`**اوامر الالعاب**
╔[❖═════════════════════════════❖]╗
❖صراحة : لعبة صراحة
❖ كت كيوت :لعبة كت كويت
❖تهكير : خدعة 
❖1تهكير : خدعة مطورة 
❖لو خيروك : لعبة لو خيروك
❖زواج : لعبة زواج
❖هل تعلم : لعبة تنمية العقل
❖عقاب : لعبة عقوبات
❖امثال :لعبة تكملة امثال
❖حب : لعبة حب :relaxed:
❖مريم : لعبة مريم
❖حكم : لعبة احكام
❖1سرعة : لعبة مين يكتب اسرع
❖1نقاطي : لرؤية نقاطك في اللعبة
❖1رياضيات : لعبة اسئلة رياضيات
❖1pubg : اسئلة عن لعبة pubg
❖1xo <@player1> <@player2>: لعبة اكس او 
❖1min : اسئلة عن لعبة ماين كرافت
❖18ball : اسئل الكرة وسجاوبك
❖1rps : لعبة حجرة ورقة مقص
❖1emoji : لعبة ايموجي يكتب يللي تبيه داخل ايموجي
مُطَوِرّ اَلبُوت
@D7oM.#7693
رابط سيرفر البوت
https://discord.gg/SverhFA
╚[❖═════════════════════════════❖]╝
`);

}
});













client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-music") {            

   
      message.author.sendMessage(`**اوامر عامة**
╔[❖═════════════════════════════❖]╗
❖${prefix}**play <Music Name> (OR) <Music Link>** : لتشغيل اغنية عن طريق اسم الاغنية او رابط الاغنية
❖${prefix}**pause** : لايقاف الاغنية مؤقتاً
❖${prefix}**vol <vol %>** : لتحديد صوت الاغنية 
❖${prefix}**stop** : لايقاف الاغنية
❖${prefix}**skip** : لتغير الاغنية
❖${prefix}**about** : لمعرفة معلومات الاتصال بالبوت
@D7oM.#7693
رابط سيرفر البوت
https://discord.gg/SverhFA
╚[❖═════════════════════════════❖]╝
`);

}
});










client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-anmi") {            

   
      message.author.sendMessage(`**اوامر الانمي**
╔[❖═════════════════════════════❖]╗
❖${prefix}**hug <mention>** : Anmi
❖${prefix}**kiss <mention>** : Anmi
❖${prefix}**cuddle <mention>** : Anmi
❖${prefix}**slap <mention>** : Anmi
❖${prefix}**pat <mention>** : Anmi
❖${prefix}**poke <mention>** : Anmi
❖${prefix}**1tickle <mention>** : Anmi
❖${prefix}**** : 
@D7oM.#7693
رابط سيرفر البوت
https://discord.gg/SverhFA
╚[❖═════════════════════════════❖]╝
`);

}
});





client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **1help-admin** ' ,' **اوامر المشرفين** ')
.addField('     **1help-general**  ' ,' **اوامر عامة** ')
.addField('     **1help-music** ' , '**اوامر تشغيل الموسيقى**') 
.addField('     **1help-games** ' , '**اوامر الالعاب**') 

     
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});


client.login(process.env.BOT_TOKEN);
