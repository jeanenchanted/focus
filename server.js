const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('');
});
server.listen(3000);

//
//
//

const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: (process.env.TOKEN), 
prefix: "." 
})

//my status
bot.status({
  text: "akis.glitch.me",
  type: "LISTENING",
  status: "dnd",
  time: 13
});

//npm install sqlite-to-json sqlite3@5.0.0

//my variables
bot.variables({
  Points: "2",
	/*levelling*/
  Level: "0",
  CurrentXP: "0",
  NextXP: "100",
  Rank: "0",
	/*end levelling*/
  lvlUpMessage: "GG, **{user}**, you levelled up to **level {level}**!",
  Colour: "mediumpurple",
  DeMerits: "0",
  ManagerRole: "770200519914291200",
  timetable:
    "https://www.coolgenerator.com/Data/Textdesign/202011/939574c08043981132a7e9a5771d7aa7.png",
  Card: "1",
  Credits: "0",
  eval: "$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]",
  join: "743128328705409076",
});

//my commands
bot.onMessage();

bot.loadCommands('./commands/')

bot.joinCommand({
channel: "$getVar[join]",
code: `$dm[$authorID]
**Welcome, <@$authorID>!**
Please make sure you go to <#745195582280171571> and verify that we know you.`
})
bot.onJoined()

bot.musicStartCommand({ 
    channel: "$channelID", //$channelID allows it to send where the user ran the play command from
    code: `
    $title[Now Playing]
    $description[
    [$songInfo[title]\\]($songInfo[url]) | <@$songInfo[userID]>
    ]
    
    $color[$getRoleColor[$highestRole[784688234672160788]]]
`
})






// express
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
