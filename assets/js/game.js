var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// String Data type
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// Number Data type
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round
    //window.alert('Welcome to Robot Gladiators!');

    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to choose.");

    // if player chooses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
        }
        else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
        }
        else {
            window.alert(playerName + ' still has '  + playerHealth + ' health left.');
        }
        // allows to continuously fight enemy until death
        while(enemyHealth > 0) {
            fight(enemyName);
        }

    }
    // if player chooses to skip
    else if (promptFight === 'skip' || promptFight === 'SKIP') {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true)m leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has chosen to skip this fight. Goodbye!');
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask the question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert('You need to choose a valid option. Try Again!');
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = "50";
    // call fight function with enemy-robot
    fight(enemyNames[i]);
}

