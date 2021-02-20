
module.exports = {
  name: "weekly",
  code: `
$setGlobalUserVar[Points;$sum[$getGlobalUserVar[Points;$authorID];3];$authorID]
$setGlobalUserVar[Credits;$sum[$getGlobalUserVar[Credits;$authorID];2000];$authorID]

$author[$username | Success;$userAvatar[$authorID]]
$description[You recieved your weekly reward:
**merits**: 3
**credits**: 2,000]

$argsCheck[0;Try this: \`.weekly\`]

$cooldown[7d;Try again in **%time%**!]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};

