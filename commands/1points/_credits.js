module.exports = {
  name: "credits",
	aliases: ['bal'],
  code: `
    $image[https://araven.sirv.com/api/credit-cards/Credit-Card-$getGlobalUserVar[Card;$mentioned[1;yes]].png?profile=card&text.0.text=%24$getGlobalUserVar[Credits;$mentioned[1;yes]]&text.1.text=%24$getGlobalUserVar[Bank;$mentioned[1;yes]]&text.2.text=$replaceText[$username[$mentioned[1;yes]]; ;%20;-1]%23$discriminator[$mentioned[1;yes]]&text.0.width=250&text.1.width=250&text.2.width=250&text.0.height=50&text.1.height=50&text.2.height=75]

$argsCheck[<2;Try this: \`.credits <@user>\`]

$onlyIf[$channelID!=743128328705409077;You can't use that command here!\]
	`
};
