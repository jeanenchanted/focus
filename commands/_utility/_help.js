module.exports = {
    name: "help",
    aliases: ["h", "commands", "command"],
    code: `
new one
${/* set the embed colour to the highest role colour */''}
$color[$getRoleColor[$highestRole[784688234672160788]]]

${/* if message isn't empty */''}
$if[$message[1]!=]

    ${/* info module */''}
	$if[$toLowercase[$message[1]]==info]

		${helpFunc.module(1)}

    ${/* moderation module */''}
	$elseIf[$toLowercase[$message[1]]==moderation]

        ${helpFunc.module(2)}

	$endelseIf

    ${/* config module */''}
	$elseIf[$toLowercase[$message[1]]==config]

        ${helpFunc.module(3)}

	$endelseIf

    ${/* music module */''}
	$elseIf[$toLowercase[$message[1]]==music]

        ${helpFunc.module(4)}

	$endelseIf

    ${/* levelling module */''}
	$elseif[$toLowercase[$message[1]]==levelling]

        ${helpFunc.module(5)}

	$endelseIf
    
    ${/* points module */''}
	$elseif[$toLowercase[$message[1]]==points]

        ${helpFunc.module(6)}

	$endelseIf

    ${/* if module was invalid */''}
	$else
			
		$title[Hermes | Modules]
			
		$description[
		Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

		$footer[Module not found.]

	$endif

${/* if no arguments were provided */''}
$else
	
	$title[Hermes | Modules]

	$description[
	Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
	]

$endif

${/* module list */''}
$addField[❓ $toLocaleUppercase[$getObjectProperty[a1name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a1name]\`;yes]

$addField[🚨 $toLocaleUppercase[$getObjectProperty[a2name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a2name]\`;yes]

$addField[🛠 $toLocaleUppercase[$getObjectProperty[a3name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a3name]\`;yes]

$addField[🎶 $toLocaleUppercase[$getObjectProperty[a4name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a4name]\`;yes]

$addField[🎖 $toLocaleUppercase[$getObjectProperty[a5name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a5name]\`;yes]

$addField[💰 $toLocaleUppercase[$getObjectProperty[a6name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a6name]\`;yes]

${/* make sure less than 2 arguments are used */''}
$argsCheck[<2;Try this: \`.help <module>*\`]

${/* command settings */''}
$createObject[{

 "a1": "You can start changing module and command names here!",
 "a2": "Enter your values below the labels and replace the blanks.",

 "a1name": "info",
 "a1commands": "Nothing here yet!",

 "a2name": "moderation",
 "a2commands": "Nothing here yet",

 "a3name": "config",
 "a3commands": ".setcolour .setcard",

 "a4name": "music",
 "a4commands": ".play .skip",

 "a5name": "levelling",
 "a5commands": ".ranks .topranks",

 "a6name": "points",
 "a6commands": ".credits .topcredits .give\\n.roll .gamble .daily",

 "prefix": "."

}]
`,
}

const helpFunc = {
    module: (number) => {
        return `$title[
            $toLocaleUppercase[$getObjectProperty[a${number}name]] | Commands
            ]
    
            $description[
                \`\`\`$getObjectProperty[a${number}commands]\`\`\`
                Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
            ]`
    },
    moduleList: (emoji, number) => {
        return `
        $addField[${emoji} $toLocaleUppercase[$getObjectProperty[a${number}name]]; \`$getObjectProperty[prefix]help $getObjectProperty[a${number}name]\`;yes]
        `
    }
}