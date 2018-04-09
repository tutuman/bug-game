// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.y = y;
    this.x = x;
    this.speed = Math.random() * 2;
    this.width = 83;
    this.height = 75;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.



    this.x += this.speed * 50 * dt;
    if (this.x > 505) {
        this.x = -100;
    }

};


Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var player = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    var temp = null;
    this.sprite = 'images/char-boy.png';
};



player.prototype.update = function() {


    if (this.temp == "up") {


        if (this.y <= 100) {
            play[0].x = 200;
            play[0].y = 400;
            console.log("score");
        } else {
            this.y -= 80;
        }
    }
    if (this.temp == "down") {

        if (this.y > 330) {
            play[0].x = play[0].x;
            play[0].y = play[0].y;

        } else {
            this.y += 80;
        }


    }
    if (this.temp == "right") {
        if (this.x > 300) {
            play[0].x = play[0].x;
            play[0].y = play[0].y;

        } else {
            this.x += 100;
        }


    }
    if (this.temp == "left") {
        if (this.x < 100) {
            play[0].x = play[0].x;
            play[0].y = play[0].y;

        } else {
            this.x -= 100;
        }


    }
};

player.prototype.handleInput = function(input) {
    if (input == "up") {
        this.temp = "up";
        this.update();
    } else if (input == "down") {
        this.temp = "down";
        this.update();
    } else if (input == "right") {
        this.temp = "right";
        this.update();
    } else if (input == "left") {
        this.temp = "left";
        this.update();
    }
};


player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

function checkCollisions() {

    for (enemy in allEnemies) {
        if (play[0].x < allEnemies[enemy].x + allEnemies[enemy].width &&
            play[0].x + play[0].width > allEnemies[enemy].x &&
            play[0].y < allEnemies[enemy].y + allEnemies[enemy].height &&
            play[0].height + play[0].y > allEnemies[enemy].y) {
            console.log("hit");
            play[0].x = 200;
            play[0].y = 400;
            play[0].render();
        }
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var play = [new player(200, 400)];



var allEnemies = [new Enemy(0, 65), new Enemy(0, 150), new Enemy(0, 230), new Enemy(0, 230), new Enemy(0, 150), new Enemy(0, 65)];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    play[0].handleInput(allowedKeys[e.keyCode]);
});
