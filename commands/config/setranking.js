module.exports = {
  name: "setranking",
  aliases: ["setrankingmessage", "setrankmessage", "setrankmsg"],
  code: `
$argsCheck[>1;Try this: \`.setranking {message}\`]

$setUserVar[lvlUpMessage;$message]

$author[$username | Success;$userAvatar[$authorID]]
$description[Check if this is your message: 
\`$message\`.

[Documentation\\](https://sites.google.com/view/akis-studygroup/studybot/config#h.1xwkptz34n7p)]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};
