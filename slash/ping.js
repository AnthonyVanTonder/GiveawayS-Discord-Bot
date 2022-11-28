module.exports = {
  name: "ping",
  description: "Check the bot’s websocket latency!",
  toggleOff: false,
  run: async (client, interaction) => {
    interaction.reply({
      content: `Latency: ${Date.now() - interaction.createdTimestamp}ms | API Latency: ${Math.round(client.ws.ping)}ms`,
     ephemeral: true
    });
  },
};
