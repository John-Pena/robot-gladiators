// fight function
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');

        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 5);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }
  
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
  
      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
      
  
      // leave while() loop since enemy is dead
      break;
    }

    else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }
  
    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    }

    else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// startGame() function
var startGame = function() {
  for (var i = 0; i <enemyInfo.length; i++) {
    // reset player stats
    playerInfo.reset();

    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);
      console.log(pickedEnemyObj.health);
      
      fight(pickedEnemyObj);

      // if we're not at last enemy in array
      if (i < enemyInfo.length - 1) {

        // if player is still alive and we're not at the last enemy
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
          // ask if player wants to use the store before the next round
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          if (storeConfirm) {
            shop();
          }
        }
      }
    }

    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // runs the endGame function 
  endGame();
};

var endGame = function() {
  window.alert("The game has now ended. Let's see how you did?");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you survived the game! you how have a score of " + playerInfo.money + " .");
  }
  
  else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they want to play again
  var playAgainConfirm = window.confirm("Would you like to play again?")

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }

  else {
    window.alert("Thank you for playing robot gladiators! Come back soon!");
  }
};

var shop = function () {
  // notifies player they have entered the store
  window.alert("entered the shop");

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?"
  );

  // REFILL
  // UPGRADE
  // LEAVE
  // use switch to carry out options in shop
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.")
      // do nothing so break the function and end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.")
      // call shop() to force player to pick a valid option
      shop();
      break;
  }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min +1) + min);

  return value;
}

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(playerInfo) {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling the player's health by 20 for 7 dollar.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You Don't have enough money!");
    } 
  }, //comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading the player's attack by 6 for 7 dollars.")
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: 'Valkrie',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Maverick',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Zero',
    attack: randomNumber(10, 14)
  }
];


startGame();