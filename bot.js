const Discord = require("discord.js");
const client = new Discord.Client();

let guildBot = "";
let newRole = "";
let roleRules = "";
let modoRole = "";
var membersRole = new Array();

client.on("ready", () => {

  console.log("I am ready!");

});

client.on("message", message => {

  console.log("Oui");
  guildBot = message.member.guild;
  newRole = guildBot.roles.find("name", "Touriste");
  modoRole = guildBot.roles.find("name", "Staff");

  if(message.author.bot) return;
  
  if(message.channel.id === "676820473480216577"){
  
    if(message.content === "J'ai lu et j'approuve le règlement"){

        message.channel.bulkDelete(99);
        message.member.addRole(newRole);
        message.channel.send('Lisez les règles !');

      } else {

        message.channel.send("Veuillez relire les règles s'il vous plaît!");

      }
  }

  if(message.member.roles.has("235870151231143936")) {
    
    if(message.content === "!clear"){
    
      message.channel.bulkDelete(99);
      message.channel.send("Lisez les règles !");
      
    } else {
  
    return;
      
    }

  }

});

client.login(process.env.BOT_TOKEN);
