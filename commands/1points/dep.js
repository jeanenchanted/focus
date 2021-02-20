module.exports = {
  name: "dep",
  aliases: ["deposit"],
  code: `
    $onlyIf[$getGlobalUserVar[Credits;$authorID]>=$replaceText[$message[1];all;$getGlobalUserVar[Credits;$authorID];-1];You can't deposit more than you have!]
$argsCheck[1;Try this: \`.dep {amount}\`]

$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$replaceText[$message[1];all;$getGlobalUserVar[Credits;$authorID];-1]];$authorID]

$setGlobalUserVar[Credits;$sub[$getGlobalUserVar[Credits;$authorID];$replaceText[$message[1];all;$getGlobalUserVar[Credits;$authorID];-1]];$authorID]

$description[Deposited **$replaceText[$message[1];all;$getGlobalUserVar[Credits;$authorID];-1]** credits to the bank!]
$author[$username;$authorAvatar]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};

