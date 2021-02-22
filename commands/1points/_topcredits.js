
module.exports = {
  name: "topcredits",
  code: `
    $title[Credits Leaderboard]
$description[$globalUserLeaderboard[Credits;asc]]

$argsCheck[0;Try this: \`.topcredits\`]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]

$color[$getRoleColor[$highestRole[784688234672160788]]]
	`
};
