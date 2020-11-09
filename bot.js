const Discord = require("discord.js");
const client = new Discord.Client();
const guildBot = client.guilds.get('id');

let newRole = "";
let roleRules = "";
let modoRole = "";
let number = "";
var membersRole = new Array();

client.on("ready", () => {

  console.log("I am ready!");

});

client.on("message", message => {

  console.log("Oui");
  newRole = guildBot.roles.find("name", "Touriste");
  modoRole = guildBot.roles.find("name", "Staff");

  if(message.author.bot) return;
  
  if(message.channel.id === "676820473480216577"){
  
    if(message.content === "J'ai lu et j'approuve le règlement"){

        message.channel.bulkDelete(99);
        message.member.addRole(newRole);
        message.channel.send('VOUS NE PASSEREZ PAS ! (Lisez le règlement)');

      } else {

        message.channel.send("VOUS NE PASSEREZ PAS ! (Lisez le règlement)");

      }
  }

  if(message.member.roles.has("235870151231143936")) {
    
    if(message.content.startsWith("!clear")){
      
      number = message.content.substring(7,9);
      console.log(number);
      if(number === ""){
      
        number = 99;
      
      }
      message.channel.bulkDelete(number);
      if(message.channel.id === "676820473480216577"){
        
        message.channel.send("VOUS NE PASSEREZ PAS ! (Lisez le règlement)");
        
      }
      
    } else {
  
    return;
      
    }

  }

});

client.login(process.env.BOT_TOKEN);
