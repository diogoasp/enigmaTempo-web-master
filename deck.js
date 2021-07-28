var id1 = 0;
var id2 = 0;

class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards
	}


	get numberOfCards() {
		return this.cards.length
	}

	shuffle() {
		for (let i = this.numberOfCards - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1))
			const oldValue = this.cards[newIndex]
			this.cards[newIndex] = this.cards[i]
			this.cards[i] = oldValue
		}
	}
}
class MinionCard {
	constructor(attack, health, mana, info, imageString, name, rarity) {
		this.imageString = imageString;
		this.attack = attack;
		this.health = health;
		this.info = info;
		this.name = name;
		this.mana = mana;
		this.rarity = rarity;
	}
	getComputerHTML() {
		const computerCardDiv = document.createElement('div')
		const computerAttackValueBackground = document.createElement('div')
		const computerHealthValueBackground = document.createElement('div')
		const computerAttackValue = document.createElement('div')
		const computerHealthValue = document.createElement('div')
		computerCardDiv.id = "cpuCardInPlay" + id2
		computerCardDiv.classList.add("cardinplay")
		computerCardDiv.classList.add("computer-cardinplay")
		computerCardDiv.classList.add('placeCardAnim')
		computerAttackValue.classList.add("attackValue")
		computerHealthValue.classList.add("healthValue")
		computerAttackValueBackground.classList.add("attackValueBackground")
		computerHealthValueBackground.classList.add("healthValueBackground")
		computerCardDiv.appendChild(computerAttackValueBackground)
		computerCardDiv.appendChild(computerHealthValueBackground)
		computerAttackValueBackground.appendChild(computerAttackValue)
		computerHealthValueBackground.appendChild(computerHealthValue)
		computerAttackValue.innerText = this.attack
		computerHealthValue.innerText = this.health
		computerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		id2 += 1
		return computerCardDiv
	}
	getPlayerHTML() {
		const playerCardDiv = document.createElement('div')
		const playerAttackValueBackground = document.createElement('div')
		const playerHealthValueBackground = document.createElement('div')
		const playerAttackValue = document.createElement('div')
		const playerHealthValue = document.createElement('div')
		playerCardDiv.id = "playerCardInPlay" + id1
		playerCardDiv.classList.add("cardinplay")
		playerCardDiv.classList.add("player-cardinplay")
		playerCardDiv.classList.add('placeCardAnim')
		playerAttackValue.classList.add("attackValue")
		playerHealthValue.classList.add("healthValue")
		playerAttackValueBackground.classList.add("attackValueBackground")
		playerHealthValueBackground.classList.add("healthValueBackground")
		playerCardDiv.appendChild(playerAttackValueBackground)
		playerCardDiv.appendChild(playerHealthValueBackground)
		playerAttackValueBackground.appendChild(playerAttackValue)
		playerHealthValueBackground.appendChild(playerHealthValue)
		playerAttackValue.innerText = this.attack
		playerHealthValue.innerText = this.health
		playerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		id1 += 1
		return playerCardDiv
	}
	getPlayerCardsInHandHTML() {
		const playerCardInHandDiv = document.createElement('div')
		const playerCardFaceInHandDiv = document.createElement('div')
		const playerCardBorderInHandDiv = document.createElement('div')
		const playerAttackValueInHand = document.createElement('div')
		const playerHealthValueInHand = document.createElement('div')
		const playerManaValueInHand = document.createElement('div')
		const playerInfoValueInHand = document.createElement('div')
		const playerNameValueInHand = document.createElement('div')
		playerCardInHandDiv.classList.add("card")
		playerCardFaceInHandDiv.classList.add("card-face")
		playerCardBorderInHandDiv.classList.add("card-border")
		playerAttackValueInHand.classList.add("cardAttackValue")
		playerHealthValueInHand.classList.add("cardHealthValue")
		playerManaValueInHand.classList.add("cardManaValue")
		playerInfoValueInHand.classList.add("cardInfoValue")
		playerNameValueInHand.classList.add("cardNameValue")
		playerCardInHandDiv.appendChild(playerCardFaceInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerAttackValueInHand)
		playerCardFaceInHandDiv.appendChild(playerHealthValueInHand)
		playerCardFaceInHandDiv.appendChild(playerManaValueInHand)
		playerCardFaceInHandDiv.appendChild(playerInfoValueInHand)
		playerCardFaceInHandDiv.appendChild(playerCardBorderInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerNameValueInHand)
		playerAttackValueInHand.innerText = this.attack
		playerHealthValueInHand.innerText = this.health
		playerManaValueInHand.innerText = this.mana
		playerInfoValueInHand.innerText = this.info
		playerNameValueInHand.innerText = this.name
		playerCardFaceInHandDiv.style.backgroundImage = "url('" + this.imageString + "')";
		return playerCardInHandDiv
	}
}

function freshDeck() {
	// deck in use by the player and computer
	let mal_ganis = new MinionCard(9, 7, 9, "Your other Demons have +2/+2. Your hero is Immune.", "src/cards/mal_ganis.jpg", "Mal'ganis", "Legendary")
	let elven_archer = new MinionCard(1, 1, 1, "Battlecry: Deal 1 damage.", "src/cards/elven_archer.jpg", "Elven Archer", "Common")
	let voodoo_doctor = new MinionCard(2, 1, 1, "Battlecry: Restore 2 Health.", "src/cards/voodoo_doctor.jpg", "Voodoo Doctor", "Common")
	let king_krush = new MinionCard(8, 8, 9, "Charge", "src/cards/king_krush.jpg", "King Krush", "Legendary")
	let ragnaros_the_firelord = new MinionCard(8, 8, 8, "Can't attack. At the end of your turn, deal 8 damage to a random enemy.", "src/cards/ragnaros_the_firelord.png", "Ragnaros the Firelord", "Legendary")
	let ragnaros_the_lightlord = new MinionCard(8, 8, 8, "At the end of your turn, restore 8 Health to a damaged friendly character.", "src/cards/ragnaros_the_lightlord.jpg", "Ragnaros the Lightlord", "Legendary")
	let acidic_swamp_ooze = new MinionCard(3, 2, 2, "Battlecry: Destroy your opponent's weapon.", "src/cards/acidic_swamp_ooze.jpg", "Acidic Swamp Ooze", "Common")
	let bloodfen_raptor = new MinionCard(3, 2, 2, "", "src/cards/bloodfen_raptor.jpg", "Bloodfen Raptor", "Common")
	let kobold_geomancer = new MinionCard(2, 2, 2, "Spell Damage +1", "src/cards/kobold_geomancer.png", "Kobold Geomancer", "Common")
	let razorfen_hunter = new MinionCard(2, 3, 3, "Battlecry: Summon a 1/1 Boar.", "src/cards/razorfen_hunter.jpg", "Razorfen Hunter", "Common")
	let shattered_sun_cleric = new MinionCard(3, 2, 3, "Battlecry: Give a friendly minion +1/+1.", "src/cards/shattered_sun_cleric.png", "Shattered Sun Cleric", "Common")
	let chillwind_yeti = new MinionCard(4, 5, 4, "", "src/cards/chillwind_yeti.jpg", "Chillwind Yeti", "Common")
	let gnomish_inventor = new MinionCard(2, 4, 4, "Battlecry: Draw a card.", "src/cards/gnomish_inventor.jpg", "Gnomish Inventor", "Common")
	let senjin_shieldmasta = new MinionCard(3, 5, 4, "Taunt", "src/cards/senjin_shieldmasta.jpg", "Sen'jin Shieldmasta", "Common")
	let gurubashi_berserker = new MinionCard(2, 8, 5, "Whenever this minion takes damage, gain +3 Attack.", "src/cards/gurubashi_berserker.png", "Gurubashi Berserker", "Common")
	let archmage = new MinionCard(4, 7, 6, "Spell Damage +1", "src/cards/archmage.jpg", "Archmage", "Common")
	let boulderfist_ogre = new MinionCard(6, 7, 6, "", "src/cards/boulderfist_ogre.jpg", "Boulderfist Ogre", "Common")
	let stormwind_champion = new MinionCard(7, 7, 7, "Your other minions have +1/+1.", "src/cards/stormwind_champion.png", "Stormwind Champion", "Common")

	return [
	// player's deck
	mal_ganis,
	mal_ganis,
	elven_archer,
	elven_archer,
	voodoo_doctor,
	voodoo_doctor,
	king_krush,
	king_krush,
	ragnaros_the_firelord,
	ragnaros_the_firelord,
	ragnaros_the_lightlord,
	ragnaros_the_lightlord,
	acidic_swamp_ooze,
	acidic_swamp_ooze,
	bloodfen_raptor,
	bloodfen_raptor,
	kobold_geomancer,
	razorfen_hunter,
	razorfen_hunter,
	shattered_sun_cleric,
	shattered_sun_cleric,
	chillwind_yeti,
	chillwind_yeti,
	gnomish_inventor,
	senjin_shieldmasta,
	gurubashi_berserker,
	archmage,
	boulderfist_ogre,
	boulderfist_ogre,
	stormwind_champion,

	// computer's deck
	mal_ganis,
	mal_ganis,
	elven_archer,
	elven_archer,
	voodoo_doctor,
	voodoo_doctor,
	king_krush,
	king_krush,
	ragnaros_the_firelord,
	ragnaros_the_firelord,
	ragnaros_the_lightlord,
	ragnaros_the_lightlord,
	acidic_swamp_ooze,
	acidic_swamp_ooze,
	bloodfen_raptor,
	bloodfen_raptor,
	kobold_geomancer,
	razorfen_hunter,
	razorfen_hunter,
	shattered_sun_cleric,
	shattered_sun_cleric,
	chillwind_yeti,
	chillwind_yeti,
	gnomish_inventor,
	senjin_shieldmasta,
	gurubashi_berserker,
	archmage,
	boulderfist_ogre,
	boulderfist_ogre,
	stormwind_champion
	]
}