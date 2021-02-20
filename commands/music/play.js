module.exports = {
  name: "play",
  aliases: ["start", "p", "add"],
  code: `
$title[Added to queue:]
$description[
	$playSong[$message;7d;yes;Couldn't play the current song!]
]
$onlyIf[$voiceID!=;{color:$getRoleColor[$highestRole[784688234672160788]]}{description:You aren’t in voice channel.Please enter and try again.}]
$onlyIf[$message!=;{color:$getRoleColor[$highestRole[784688234672160788]]}{description:Enter a link or song name.}]

$color[$getRoleColor[$highestRole[784688234672160788]]]
    
	`
};