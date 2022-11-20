const register = require("../../utils/slashsync");
const chalk = require("chalk");

module.exports = async (client) => {
  await register(
    client,
    client.register_arr.map((command) => ({
      name: command.name,
      description: command.description,
      options: command.options,
      type: "CHAT_INPUT",
    })),
    {
      debug: true,
    }
  );

  console.log(
    chalk.greenBright(`[ / | Slash Command ] - ✅ Loaded all slash commands!`)
  );
  let invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`;
  let uptime = `https://stats.uptimerobot.com/2qzQ4TVgjD`;
  console.log(
    chalk.greenBright(
      `[Status] ${client.user.tag} is now online!\n[Invite Link] ${invite}\n[Bot Uptime Status] ${uptime}`
    )
  );
  const activities = [
    `/help`,
  ];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "LISTENING" });
  }, 20000);
};
