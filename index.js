let sword,
	hammer,
	necromancer,
	shield,
	heal,
	freeze,
	attackerChar,
	defenderChar,
	attackPower,
	defensePower,
	winner,
	damage,
	healthPoint = 100;

const weaponsIcons = document.querySelectorAll("input[type=checkbox]");

//* WHEN CLICK FIGHT BUTTON CALCULATE ALL POINTS AND VERIFY THE WINNER
document.getElementById("fight").onclick = () => {
	//* ATTACKER CHARACTER
	document.getElementById("attackChar").value !== ""
		? (attackerChar = document.getElementById("attackChar").value)
		: (attackerChar = "Player 01");

	//* DEFENDER CHARACTER
	document.getElementById("defenderChar").value !== ""
		? (defenderChar = document.getElementById("defenderChar").value)
		: (defenderChar = "Player 02");

	//* CALCULATE THE DAMAGE VALUE & VERIFY THE WINNER
	if (attackPower > defensePower && shield === false) {
		damage = attackPower - defensePower;
		healthPoint = healthPoint - damage;
		winner = attackerChar;
	}

	if (attackPower > defensePower && shield === true) {
		damage = (attackPower - defensePower) / 2;
		healthPoint = healthPoint - damage;
		winner = attackerChar;
	}

	if (attackPower <= defensePower) {
		damage = 0;
		winner = defenderChar;
	}

	//* OUTPUTTING RESULT
	document.getElementById("attackChar").value = attackerChar;
	document.getElementById("defenderChar").value = defenderChar;
	// document.getElementById("defense-healthPoints").value = healthPoint;
	// document.getElementById("attack-healthPoints").value = healthPoint;
	document.getElementById("winner").innerText = winner;
	document.getElementById("attacker").innerText = attackerChar;
	document.getElementById("defender").innerText = defenderChar;
	document.getElementById("damage").innerText = damage;
};

//* SET THE POINTS BASED ON THE CLICKED WEAPONS
for (let i = 0; i < weaponsIcons.length; i++) {
	weaponsIcons[i].onclick = () => {
		weaponsIcons[i].checked
			? weaponsIcons[i].parentNode.classList.add("habiliteActivated")
			: weaponsIcons[i].parentNode.classList.remove("habiliteActivated");

		document.getElementById("sword").checked ? (sword = 75) : (sword = 0);

		document.getElementById("hammer").checked ? (hammer = 80) : (hammer = 0);

		document.getElementById("necromancer").checked
			? (necromancer = 98)
			: (necromancer = 0);

		document.getElementById("shield").checked
			? (shield = true)
			: (shield = false);

		document.getElementById("heal").checked ? (heal = 50) : (heal = 0);

		document.getElementById("freeze").checked ? (freeze = 96) : (freeze = 0);

		attackPower = sword + hammer + necromancer;
		defensePower = heal + freeze;

		document.getElementById("attackPower").innerText = attackPower;
		document.getElementById("defensePower").innerText = defensePower;
	};
}
