module.exports = {
  name: "daily",
  code: `
    $setGlobalUserVar[Points;$sum[$getGlobalUserVar[Points;$authorID];2];$authorID]
$setGlobalUserVar[Credits;$sum[$getGlobalUserVar[Credits;$authorID];500];$authorID]

$author[$username | Success;$userAvatar[$authorID]]
$description[You recieved your daily reward:
**merits**: 2
**credits**: 500]

$argsCheck[0;Try this: \`.daily\`]

$cooldown[18h;Try again in **%time%**!]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};
