module.exports = {
  name: "with",
  aliases: ["withdraw"],
  code: `
$onlyIf[$getGlobalUserVar[Bank;$authorID]>=$replaceText[$message[1];all;$getGlobalUserVar[Bank;$authorID];-1];You can't withdraw more than you have!]
$argsCheck[1;Try this: \`.with {amount}\`]

$setGlobalUserVar[Credits;$sum[$getGlobalUserVar[Credits;$authorID];$replaceText[$message[1];all;$getGlobalUserVar[Bank;$authorID];-1]];$authorID]

$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$replaceText[$message[1];all;$getGlobalUserVar[Bank;$authorID];-1]];$authorID]

$description[Withdrew **$replaceText[$message[1];all;$getGlobalUserVar[Bank;$authorID];-1]** credits to your wallet!]
$author[$username;$authorAvatar]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};
