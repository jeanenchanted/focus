module.exports = ({
name: "$alwaysExecute",
code: `

$if[$checkCondition[$sum[$getUserVar[CurrentXP];$getObjectProperty[random]]>=$getUserVar[NextXP]]==true]

	$setUserVar[NextXP;$sum[100;$multi[$sum[$getUserVar[Level];1];25]]]
	
	$setUserVar[CurrentXP;0]

	$setUserVar[Level;$sum[1;$getUserVar[Level]]]

$else

	$setUserVar[CurrentXP;$sum[$getUserVar[CurrentXP];$getObjectProperty[random]]]
	
$endif

$createObject[{
	"random": "$random[13;22]"
}]

$cooldown[15s;]

`
})
// 	$replaceText[$replaceText[$replaceText[$getUserVar[lvlUpMessage];{user};$username];{mention};<@$authorID>];{level};$sum[$getUserVar[Level];1]]