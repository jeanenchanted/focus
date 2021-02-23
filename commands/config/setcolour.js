module.exports = {
  name: "setcolour",
  aliases: ["setmycolour"],
  code: `
$argsCheck[1;Try this: \`.setcolour {colourname}\`]

$setGlobalUserVar[Colour;$message[1];$authorID]

$author[$username | Success;$userAvatar[$authorID]]

$description[Check if the colour is correct: 
\`$message[1]\`.

$image[https://api.no-api-key.com/api/v2/color?color=$message[1]]

$color[$getRoleColor[$highestRole[784688234672160788]]]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]
	`
};