const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shardinfo",
  description: "Get info about the bot's shards",

  options: [
    {
      name: "id",
      description: "Guild ID",
      type: "STRING",
      required: false,
    },
  ],

  run: async (client, interaction) => {
    let guild =
      client.guilds.cache.get(interaction.options.getString("id")) ||
      interaction.guild;
    client.shard
      .broadcastEval((client, interaction) => [
        client.shard.ids,
        client.ws.status,
      ])
      .then((results) => {
        const embed = new MessageEmbed()
          .setThumbnail(client.user.displayAvatarURL())

          .setTitle(`Bot Shards (${interaction.client.shard.count})`)
          .setColor("RANDOM")
          .setTimestamp()
          .setFooter(
            `Requested by ${interaction.user.username} | ${client.user.username}`,
            interaction.user.displayAvatarURL()
          );

        results.map((data) => {
          embed.addField(
            `${data[0]}`,
            `Shard **${data[0]}** guilds: **${data[1]}**\n**${guild.name}** is on shard: **${guild.shardId}**`
          );
        });
        interaction.reply({ embeds: [embed] });
      })
      .catch((error) => {
        console.error(error);
        interaction.reply({ content: `❌ An error occured!`, ephermal: true });
      });
  },
};
