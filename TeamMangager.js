var inquirer = require("inquirer");
function Player(name, position, offense, defense) {
    this.name = name;//`name`: Property which contains the player's name
    this.position = position;//`position`: Property which holds the player's position
    this.offense = offense;// `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
    this.defense = defense;  //`defense`: Property which is a value between 1 and 10 to show how good this player is on defense
    this.goodGame = function () {
        // `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
        var coinflip = Math.random();
        if (coinflip == 1) {
            this.offense += 1;
        } else { this.defense += 1 }
    };
    this.badGame = function () {
        // `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
        var coinflip = Math.random();
        if (coinflip == 1) {
            this.offense += 1;
        } else { this.defense += 1 }
    }

    // `printStats`: Method which prints all of the player's properties to the screen

    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\noffense: " + this.offense + "\ndefense: " + this.defense);
    };
}
var count = 0;
var playerArray = [];
var askQuestions = function () {
        if (count < 3) {
            console.log("NEW PLAYER");
            inquirer.prompt([
                {
                    name: "name",
                    message: "Players name?"
                }, {
                    name: "position",
                    message: "What is your position?"
                }, {
                    name: "offense",
                    message: "Offense score?"
                }, {
                    name: "defense",
                    message: "Defnese score"
                }
            ]).then(function (answers) {
                // initializes the variable newGuy to be a programmer object which will take
                // in all of the user's answers to the questions above
                var player = new Player(answers.name, answers.position, answers.offense, answers.defense);
                // printInfo method is run to show that the newguy object was successfully created and filled
            playerArray.push(player);
            count ++;
            askQuestions();
            }); 
        }
}