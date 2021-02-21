/*

All-In-One Help Command
by Jean_Enchanted#7207 ( 690173341104865310 )

What you need to know before you edit (except for the $textSplit bits):
- $replaceText
- $checkContains
- $splitText
- $textSplit

We will be using $textSplit and $splitText to make life much easier for you.
This help command has 6 different modules that you can edit. 
If you need more, you'll need to code it yourself. 

Scroll ALL the way down to the bottom where the $textSplit is to edit content (module and command names).
Don't make a command's name match any of your modules' names or it will look weird. You should also make sure that the modules only have one-word names or there could be some bugs.

Make sure you understand the code first before editing ANYTHING.

Would like it if you gave some credit!

*/

module.exports = {
  name: "help",
  aliases: ["h", "commands", "command"],
  code: `$title[ $toUppercase[commands | $replaceText[$replaceText[$checkContains[query$messagequery;$splitText[4];$splitText[11];$splitText[18];$splitText[25];$splitText[25];$splitText[32];$splitText[39]];false;modules];true;$message[1]] ] ]

$color[$getRoleColor[$highestRole[784688234672160788]]]

$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$checkContains[query$messagequery;$splitText[4];$splitText[11];$splitText[18];$splitText[25];$splitText[28];$splitText[32];$splitText[39]];false;modules];true;$message[1]];modules;];$splitText[4];\`\`\`
$splitText[7]
\`\`\`];$splitText[11];\`\`\`
$splitText[14]
\`\`\`];$splitText[18];\`\`\`
$splitText[21]
\`\`\`];$splitText[25];\`\`\`
$splitText[28]
\`\`\`];$splitText[32];\`\`\`
$splitText[35]
\`\`\`];$splitText[39];\`\`\`
$splitText[42]
\`\`\`]
Visit the Study Group [website\\](https://sites.google.com/view/akis-studygroup/home) or check out the [docs\\](https://sites.google.com/view/akis-studygroup/studybot).
]


$addField[❓ $toLocaleUppercase[$splitText[4]]; \`$splitText[47]help $splitText[4]\`;yes]
$addField[🛠 $toLocaleUppercase[$splitText[11]]; \`$splitText[47]help $splitText[11]\`;yes]
$addField[🎶 $toLocaleUppercase[$splitText[18]]; \`$splitText[47]help $splitText[18]\`;yes]
$addField[🏆 $toLocaleUppercase[$splitText[25]]; \`$splitText[47]help $splitText[25]\`;yes]
$addField[🎖 $toLocaleUppercase[$splitText[32]]; \`$splitText[47]help $splitText[32]\`;yes]
$addField[💰 $toLocaleUppercase[$splitText[39]]; \`$splitText[47]help $splitText[39]\`;yes]



$footer[$randomText[Tons of useful commands for server management!;
Made by Gabrielle Ilagan specially for this server!;
Let's get this server active again!;
Check out these commands!;
Cool commands to avoid boredom.;
I hope you're not procrastinating!;
Stay home, stay safe during the COVID-19 pandemic.;
Make sure to be respectful and follow the rules.;
How many times do you open this command?;
Love y'all for using this bot!;
Have a great day, whatever you're doing!;
Have you studied for your assessments yet?;
Wow, you discovered this messages!;
Honestly, what can I even say everytime?] ]
 
$argsCheck[<2;Try this: \`.help <module>*\`]

$textSplit[You can start changing module and command names here!
- Enter your values below the labels and replace the blanks.
- ⟨4⟩ MODULE 1 NAME:
- info
- 
- ⟨7⟩ MODULE 1 COMMANDS:
- NONE HERE YET
- 
- 
- ⟨11⟩ MODULE 2 NAME:
- config
- 
- ⟨14⟩ MODULE 2 COMMANDS:
- .setcolour .setcard .setranking
- 
- 
- ⟨18⟩ MODULE 3 NAME:
- music
- 
- ⟨21⟩ MODULE 3 COMMANDS:
- .play
- 
- 
- ⟨25⟩ MODULE 4 NAME:
- levelling
- 
- ⟨28⟩ MODULE 4 COMMANDS:
- .rank .topranks
- 
- 
- ⟨32⟩ MODULE 5 NAME:
- rewards
- 
- ⟨35⟩ MODULE 5 COMMANDS:
- .merits .topmerits
.gift .award .daily .weekly
- 
- 
- ⟨39⟩ MODULE 6 NAME:
- points
- 
- ⟨42⟩ MODULE 6 COMMANDS:
- .credits .topcredits
.give .dep .with .beg
- 
- 
- ⟨47⟩ YOUR PREFIX:
- .
;
- ]

`
};
