const dbd = require("dbd.js")

const bot = new dbd.Bot({
    token: process.env.TOKEN,
    prefix: ".",
})

//my status
bot.status({
    text: "akis.glitch.me",
    type: "LISTENING",
    status: "dnd",
    time: 13,
})

//my variables
bot.variables({
    Points: "2", // levelling
    Level: "0",
    CurrentXP: "0",
    NextXP: "100",
    Rank: "0", // end levelling
    lvlUpMessage: "GG, **{user}**, you levelled up to **level {level}**!",
    Colour: "mediumpurple",
    DeMerits: "0",
    ManagerRole: "770200519914291200",
    timetable: "https://imgur.com/a/FnOWNiA",
    Card: "1",
    Credits: "0",
    eval:
        "$onlyIf[$channelID!=743128328705409077;You can't use that command here!]",
    join: "743128328705409076",
})

// for in-code functions, add stuff here using javascript objects
// ${func.sampleFunction(args)}
const func = {
    sampleFunction: function (text, moreText) {
        return `<@$authorID> Returning ${text} and ${moreText}.`
    },
}
// note: not working yet

//my commands
bot.onMessage()

bot.loadCommands("./commands/")

bot.joinCommand({
    channel: "$getVar[join]",
    code: `
	$dm[$authorID]
	**Welcome, <@$authorID>!**
	Please make sure you go to <#745195582280171571> and verify that we know you.
	`,
})
bot.onJoined()

bot.musicStartCommand({
    channel: "$channelID",
    //$channelID allows it to send where the user ran the play command from
    code: `
    $title[Now Playing]
    $description[
    [$songInfo[title]\\]($songInfo[url]) | <@$songInfo[userID]>
    ]
    
    $color[$getRoleColor[$highestRole[784688234672160788]]]
	`,
})
