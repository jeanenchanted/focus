module.exports = {
  name: "say",
  aliases: ["s", 'echo'],
  code: `
$replaceText[$replaceText[$replaceText[$message;{;<;-1];};>;-1];!dt;;-1]

$replaceText[$replaceText[$checkCondition[$authorID!=690173341104865310];true;– <@$authorID>;-1];false;;-1]

$replaceText[$replaceText[$checkContains[$message;!dt];true;$deletecommand;-1];false;;-1]

	`
};