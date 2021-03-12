module.exports = {
  name: "say",
  aliases: ["s", 'echo'],
  code: `
$replaceText[$replaceText[$replaceText[$message;{;<];};>];!dt;]

${/* if user included !dt in command, delete command */''}
$if[$checkContains[$message;!dt]]
    $deletecommand
$endif

${/* if user isn't dev, then mention them */''}
$if[$authorID!=690173341104865310]
	– <@$authorID>
$endif
	`
};