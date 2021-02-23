  module.exports = {
  name: "resetranks",
  code: `
	$argsCheck[0;Try this: \`.resetranks\`]

$resetUserVar[Level]
$resetUserVar[CurrentXP]
$resetUserVar[NextXP]
$resetUserVar[Rank]

$author[$username | Success;$userAvatar[$authorID]]
$description[Successfully resetted all ranks!

$onlyIf[$userID[$username]==690173341104865310]

$color[$getRoleColor[$highestRole[784688234672160788]]]
`
};

/* CurrentXP: "0",
  NextXP: "100",
  Rank: "0", */