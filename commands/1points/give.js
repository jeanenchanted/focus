
module.exports = {
  name: "give",
  code: `
    $setGlobalUserVar[Credits;$sum[$getGlobalUserVar[Credits;$mentioned[1]];$message[2]];$mentioned[1]]
$setGlobalUserVar[Credits;$sub[$getGlobalUserVar[Credits;$authorID];$message[2]];$authorID]

$author[$username | Success;$userAvatar[$authorID]]
$description[You gave <@$mentioned[1]> **$numberSeparator[$message[2]]** credits!]

$argsCheck[>2;Try this: \`.give {@user} {amount}\`]

$onlyIf[$mentioned[1]!=$authorID;You can't give credits to yourself!]

$onlyIf[$message[2]<=$getGlobalUserVar[Points;$authorID];Don't be too generous.]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};
