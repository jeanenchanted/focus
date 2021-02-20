module.exports = {
  name: "rank",
  code: `
$image[https://api.no-api-key.com/api/v2/rank?user_image=$replaceText[$userAvatar[$mentioned[1;yes]];webp?size=2048;png]&text_heading=hey%20there%20lol&username=$replaceText[$username[$mentioned[1;yes]]; ;+]&level=$getUserVar[Level;$mentioned[1;yes]]&rank=$getLeaderboardInfo[Level;$mentioned[1;yes];user;top]&total_xp=$getUserVar[NextXP;$mentioned[1;yes]]&current_xp=$getUserVar[CurrentXP;$mentioned[1;yes]]&usertag=$discriminator[$mentioned[1;yes]]&primary=white&secondary=$getGlobalUserVar[Colour;$mentioned[1;yes]]&background=https://cdn.discordapp.com/attachments/743128328705409080/771288922222231552/unknown.png]

$argsCheck[<1;Try this: \`.rank <@user>\`]
`
};