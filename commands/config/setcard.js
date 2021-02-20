module.exports = {
  name: "setcard",
  aliases: ["setcreditcard"],
  code: `
$argsCheck[1;Try this: \`.setcard {number}\`]

$setGlobalUserVar[Card;$message[1];$authorID]

$author[$username | Success;$userAvatar[$authorID]]

$description[Check if the card is correct:]

$image[https://araven.sirv.com/api/credit-cards/Credit-Card-$getGlobalUserVar[Card;$mentioned[1;yes]].png?profile=card&text.0.text=%24$getGlobalUserVar[Credits;$mentioned[1;yes]]&text.1.text=%24$getGlobalUserVar[Bank;$mentioned[1;yes]]&text.2.text=$replaceText[$username[$mentioned[1;yes]]; ;%20;-1]%23$discriminator[$mentioned[1;yes]]&text.0.width=250&text.1.width=250&text.2.width=250&text.0.height=50&text.1.height=50&text.2.height=75]

[Documentation\\](https://sites.google.com/view/akis-studygroup/studybot/config#h.peflucfna51d)]

$color[$getRoleColor[$highestRole[784688234672160788]]]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]
	`
};