module.exports = {
  name: "skip",
  aliases: ["next", "s", "n"],
  code: `
$description[Skipped the current song.]
$onlyIf[$voiceID!=;{color:$getRoleColor[$highestRole[784688234672160788]]}{description:You aren’t in voice channel.Please enter and try again.}]
$skipSong
$color[$getRoleColor[$highestRole[784688234672160788]]]
    
	`
};