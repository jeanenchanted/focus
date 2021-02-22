module.exports = {
  name: "help",
  aliases: ["h", "commands", "command"],
  code: `
$color[$getRoleColor[$highestRole[784688234672160788]]]

$if[$message[1]!=]

	$if[$toLowercase[$message[1]]==info]

		$title[
		$toLocaleUppercase[$getObjectProperty[a1name]] | Commands
		]

		$description[
			\`\`\`$getObjectProperty[a1commands]\`\`\`
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$elseIf[$toLowercase[$message[1]]==moderation]

		$title[
		$toLocaleUppercase[$getObjectProperty[a2name]] | Commands
		]

		$description[
			\`\`\`$getObjectProperty[a2commands]\`\`\`
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$endelseIf

	$elseIf[$toLowercase[$message[1]]==config]

		$title[
		$toLocaleUppercase[$getObjectProperty[a3name]] | Commands
		]

		$description[
			\`\`\`$getObjectProperty[a3commands]\`\`\`
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$endelseIf

	$elseIf[$toLowercase[$message[1]]==music]

		$title[
		$toLocaleUppercase[$getObjectProperty[a4name]] | Commands
		]

		$description[
			\`\`\`$getObjectProperty[a4commands]\`\`\`
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$endelseIf

	$elseif[$toLowercase[$message[1]]==levelling]

		$title[
		$toLocaleUppercase[$getObjectProperty[a5name]] | Commands
		]

		$description[
			\`\`\`$getObjectProperty[a5commands]\`\`\`
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$endelseIf

	$elseif[$toLowercase[$message[1]]==points]

		$title[
		$toLocaleUppercase[$getObjectProperty[a6name]] | Commands
		]

		$description[
			\`\`\`$getObjectProperty[a6commands]\`\`\`
			Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$endelseIf

	$else
			
		$title[Hermes | Modules]
			
		$description[
		Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

		$footer[Module not found.]

	$endif

$else
	
	$title[Hermes | Modules]

	$description[
	Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
	]

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
 "a2commands": "Nothing here yet",

 "a3name": "config",
 "a3commands": ".setcolour .setcard .setranking",

 "a4name": "music",
 "a4commands": ".play .skip",

 "a5name": "levelling",
 "a5commands": ".ranks .topranks",

 "a6name": "points",
 "a6commands": ".credits .topcredits .give\\n.dep .with .beg\\n.daily .weekly",

 "prefix": "."

}]
`
};
