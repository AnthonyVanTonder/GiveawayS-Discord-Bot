module.exports = {
    name: 'edit',
    description: 'Edit a giveaway',

    options: [
        {
            name: 'giveaway',
            description: 'The giveaway that you want to edit (message ID)',
            type: 'STRING',
            required: true
        },
        {
            name: 'prize',
            description: 'Edit the prize of the giveaway what it should be',
            type: 'STRING',
            required: true
        }
    ],

    run: async (client, interaction) => {

        // If the member doesn't have enough permissions
        if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return interaction.reply({
                content: '❌ | You need to have the manage messages permissions to start giveaways.',
                ephemeral: true
            });
        }
        const gid = interaction.options.getString('giveaway');
        const prize = interaction.options.getString('prize');
        
        await interaction.deferReply({
         ephemeral: true
        })
        // Edit the giveaway
        try {
        await client.giveawaysManager.edit(gid, {
            newPrize: prize
        })
        } catch(e) {
return interaction.editReply({
            content:
                `No giveaway found with the given message ID: \`${gid}\``,
            ephemeral: true
        });
        }
        interaction.editReply({
            content:
                `This giveaway has now been edited!`,
            ephemeral: true
        });
    }

};
