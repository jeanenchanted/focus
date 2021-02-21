module.exports = {
  name: "help2",
  aliases: ["h", "commands", "command"],
  code: `

$color[$getRoleColor[$highestRole[784688234672160788]]]


$if[$message[1]!=;]

	$if[$checkContains[$message[1];$getObjectProperty[1 name];$getObjectProperty[2 name];$getObjectProperty[3 name];$getObjectProperty[4 name];$getObjectProperty[5 name];$getObjectProperty[6 name];]==true]

		$title[
		$toLocaleUppercase[$message[1]]
		]

		$if[$message[1]==$getObjectProperty[1 name]]

			$description[
				\`\`\`
				$getObjectProperty[1 commands]
				\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

		$elseIf[$message[1]==$getObjectProperty[2 name]]

			$description[
				\`\`\`
				$getObjectProperty[2 commands]
				\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

		$elseIf[$message[1]==$getObjectProperty[3 name]]

			$description[
				\`\`\`
				$getObjectProperty[3 commands]
				\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

		$elseIf[$message[1]==$getObjectProperty[4 name]]

			$description[
				\`\`\`
				$getObjectProperty[4 commands]
				\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

		$elseIf[$message[1]==$getObjectProperty[5 name]]

			$description[
				\`\`\`
				$getObjectProperty[5 commands]
				\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

		$elseIf[$message[1]==$getObjectProperty[6 name]]

			$description[
				\`\`\`
				$getObjectProperty[6 commands]
				\`\`\`
				Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
			]

		$endif

	$else

		$title[Hermes | Modules]

		$description[
		Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
		]

	$endif


$else

	$title[Hermes | Modules]

	$description[
		Visit the Study Group [website\\](https://akis.glitch.me) or check out the [docs\\](https://akis.glitch.me/docs.html).
	]

$endif


$addField[❓ $toLocaleUppercase[$getObjectProperty[1 name]]; \`$getObjectProperty[prefix]help $getObjectProperty[1 name]\`;yes]

$addField[🛠 $toLocaleUppercase[$getObjectProperty[2 name]]; \`$getObjectProperty[prefix]help $getObjectProperty[2 name]\`;yes]

$addField[🎶 $toLocaleUppercase[$getObjectProperty[3 name]]; \`$getObjectProperty[prefix]help $getObjectProperty[3 name]\`;yes]

$addField[🏆 $toLocaleUppercase[$getObjectProperty[4 name]]; \`$getObjectProperty[prefix]help $getObjectProperty[4 name]\`;yes]

$addField[🎖 $toLocaleUppercase[$getObjectProperty[5 name]]; \`$getObjectProperty[prefix]help $getObjectProperty[5 name]\`;yes]

$addField[💰 $toLocaleUppercase[$getObjectProperty[6 name]]; \`$getObjectProperty[prefix]help $getObjectProperty[6 name]\`;yes]


$footer[$randomText[Tons of useful commands for server management!;
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

$createObject[{
	"//1": "You can start changing module and command names here!",
	"//2": "Enter your values below the labels and replace the blanks.",

	"1 name": \`info\`,
	"1 commands": \`\`,

	"2 name": \`moderation\`,
	"2 commands": \`\`,

	"3 name": \`config\`,
	"3 commands": \`.setcolour .setcard .setranking\`,

	"4 name": \`music\`,
	"4 commands": \`.play .skip\`,

	"5 name": \`levelling\`,
	"5 commands": \`.ranks .topranks\`,

	"6 name": \`points\`,
	"6 commands": \`.credits .topcredits
.give .dep .with .beg
.daily .weekly\`,

	"prefix": \`.\`,
	
}]

`
};
