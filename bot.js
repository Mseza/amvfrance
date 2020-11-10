const Discord = require('discord.js');
const client = new Discord.Client();

let number = "";

client.on("ready", () => {

  console.log("I am ready!");

});

client.on('message', msg => {
  if(msg.author.bot) return;

  let { cache } = msg.guild.roles;
  let newRole = cache.find(role => role.name === "Touriste");
  let modoRole = cache.find(role => role.name === "Staff");

  if(msg.channel.id === "676820473480216577"){

    if(msg.content==="J'ai lu et j'approuve le règlement"){

      msg.member.roles.add(newRole);
      msg.channel.bulkDelete(99);
      msg.channel.send('VOUS NE PASSEREZ PAS ! (Lisez le règlement)');
    } else {

        msg.channel.send("VOUS NE PASSEREZ PAS ! (Lisez le règlement)");

      }
  }

  if (modoRole){

    if(msg.member.roles.cache.has(modoRole.id)){

      if(msg.content.startsWith("!clear")){

      number = msg.content.substring(7,9);
      console.log(number);
      if(number === ""){

        number = 99;

      }

      msg.channel.bulkDelete(number);

    } else {

    return;

    }

  }

}

});

client.login(process.env.BOT_TOKEN);
