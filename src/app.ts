import * as fs from 'fs';
import { requireFile, projectDir, writeJson } from 'discord-bot-quickstart';
import { IRhythmBotConfig, RhythmBot } from './bot';

const configPath = projectDir('../bot-config.json');
if (!fs.existsSync(configPath)) {
    writeJson({ discord: { token: '<NzQ0Njc3ODM2MjMyNzIwNDY0.XzmtRw.axXoNbXhbfvGm7ocmnojP04UCg0>' } }, configPath);
}

let config: IRhythmBotConfig = requireFile('../bot-config.json');

const bot = new RhythmBot(config);

if (!!config && config.discord.token === '<NzQ0Njc3ODM2MjMyNzIwNDY0.XzmtRw.axXoNbXhbfvGm7ocmnojP04UCg0>') {
    bot.logger.debug('Invalid Token - Create valid token in the Discord Developer Portal');
    console.log('Invalid Token - Create valid token in the Discord Developer Portal');
    process.exit(0);
}

bot.connect()
    .then(() => {
        bot.logger.debug('Rhythm Bot Online');
        bot.listen();
    })
    .catch(err => bot.logger.error(err));
