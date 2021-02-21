module.exports = {
  name: "help",
  aliases: ["h", "commands", "command"],
  code: `

$color[$getRoleColor[$highestRole[784688234672160788]]]

$if[$message[1]!=]


		$if[$toLowercase[$message[1]]==$getObjectProperty[a1name]]

			$title[
			$toLocaleUppercase[$message[1]]
			]

			$description[
				\`\`\`$getObjectProperty[a1commands]\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).

			]


		$else

			$title[Hermes | Modules]

			$description[
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

			Module not found. ($message[1]!=$getObjectProperty[a1name])

		$endif


$else
	
	$title[Hermes | Modules]

	$description[
	Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
	]

	No arguments provided. $message[1]

$endif


$addField[❓ $toLocaleUppercase[$getObjectProperty[a1name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a1name]\`;yes]

$addField[🚨 $toLocaleUppercase[$getObjectProperty[a2name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a2name]\`;yes]

$addField[🛠 $toLocaleUppercase[$getObjectProperty[a3name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a3name]\`;yes]

$addField[🎶 $toLocaleUppercase[$getObjectProperty[a4name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a4name]\`;yes]

$addField[🎖 $toLocaleUppercase[$getObjectProperty[a5name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a5name]\`;yes]

$addField[💰 $toLocaleUppercase[$getObjectProperty[a6name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a6name]\`;yes]

 

$argsCheck[<2;Try this: \`.help <module>*\`]

$createObject[{

 "a1": "You can start changing module and command names here!",
 "a2": "Enter your values below the labels and replace the blanks.",

 "a1name": "info",
 "a1commands": "Nothing here yet!",

 "a2name": "moderation",
 "a2commands": "",

 "a3name": "config",
 "a3commands": ".setcolour .setcard .setranking",

 "a4name": "music",
 "a4commands": ".play .skip",

 "a5name": "levelling",
 "a5commands": ".ranks .topranks",

 "a6name": "points",
 "a6commands": ".credits .topcredits .give .dep .with .beg .daily .weekly",

 "prefix": "."

}]

`
};
