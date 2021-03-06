declare const _default: {
    BASE_URL: string;
    BASE_HOST: string;
    CDN_URL: string;
    CHANNEL: (chanID: string) => string;
    CHANNEL_BULK_DELETE: (chanID: string) => string;
    CHANNEL_INVITES: (chanID: string) => string;
    CHANNEL_MESSAGE_REACTION: (chanID: string, msgID: string, reaction: string) => string;
    CHANNEL_MESSAGE_REACTION_USER: (chanID: string, msgID: string, reaction: string, userID: string) => string;
    CHANNEL_MESSAGE_REACTIONS: (chanID: string, msgID: string) => string;
    CHANNEL_MESSAGE: (chanID: string, msgID: string) => string;
    CHANNEL_MESSAGES: (chanID: string) => string;
    CHANNEL_PERMISSION: (chanID: string, overID: string) => string;
    CHANNEL_PERMISSIONS: (chanID: string) => string;
    CHANNEL_PIN: (chanID: string, msgID: string) => string;
    CHANNEL_PINS: (chanID: string) => string;
    CHANNEL_RECIPIENT: (groupID: string, userID: string) => string;
    CHANNEL_TYPING: (chanID: string) => string;
    CHANNEL_WEBHOOKS: (chanID: string) => string;
    CHANNELS: string;
    GATEWAY: string;
    GATEWAY_BOT: string;
    GUILD: (guildID: string) => string;
    GUILD_AUDIT_LOGS: (guildID: string) => string;
    GUILD_BAN: (guildID: string, memberID: string) => string;
    GUILD_BANS: (guildID: string) => string;
    GUILD_CHANNELS: (guildID: string) => string;
    GUILD_EMBED: (guildID: string) => string;
    GUILD_EMOJI: (guildID: string, emojiID: string) => string;
    GUILD_EMOJIS: (guildID: string) => string;
    GUILD_INVITES: (guildID: string) => string;
    GUILD_INTEGRATION: (guildID: string, integrationID: string) => string;
    GUILD_INTEGRATIONS: (guildID: string) => string;
    GUILD_MEMBER: (guildID: string, memberID: string) => string;
    GUILD_MEMBER_NICK: (guildID: string, memberID: string) => string;
    GUILD_MEMBER_ROLE: (guildID: string, memberID: string, roleID: string) => string;
    GUILD_MEMBERS: (guildID: string) => string;
    GUILD_PRUNE: (guildID: string) => string;
    GUILD_ROLE: (guildID: string, roleID: string) => string;
    GUILD_ROLES: (guildID: string) => string;
    GUILD_VOICE_REGIONS: (guildID: string) => string;
    GUILD_WEBHOOKS: (guildID: string) => string;
    GUILDS: string;
    INVITE: (inviteID: string) => string;
    OAUTH2_APPLICATION: (appID: string) => string;
    USER: (userID: string) => string;
    USER_CHANNELS: (userID: String) => string;
    USER_GUILD: (userID: string, guildID: string) => string;
    USER_GUILDS: (userID: string) => string;
    USERS: string;
    VOICE_REGIONS: string;
    WEBHOOK: (hookID: string) => string;
    WEBHOOK_SLACK: (hookID: string) => string;
    WEBHOOK_TOKEN: (hookID: string, token: string) => string;
    WEBHOOK_TOKEN_SLACK: (hookID: string, token: string) => string;
};
export default _default;
