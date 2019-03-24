var sketchProc = function(processingInstance) {
     
with (processingInstance) {
        
    // var player1, player2;
    // var dirX1 = 0, dirY1 = 0;    //RIGHT right, LEFT left
    // var dirX2 = 0, dirY2 = 0;    //UP up, DOWN down, 0 none
    // var squares = new ArrayList(); //ground
    // var bullets = new ArrayList(); //bullets
    // var player1Alive = true, player2Alive = true;
    // var playAgain = false, start = false; // to run the game
    // var loading = true;
    // var respawnTime, speed;
    // var timer, reload, bulletSpeed, squareSize, countDownSec;
    // var color1, color2, white = color(255), black = color(0);
    // var endScreen; 


    // setup= function() {
    // size(1000, 700);                  //SIZE OF GAME
    // squareSize = 10;                  //PIXEL SIZE (keep it dividable with w & h) 
    // frameRate(60);                    //FRAMERATE
    // timer = 30;                       //TIME (SEC)
    // speed = 3.5;                      //PLAYER'S MOVEMENT SPEED
    // reload = 5;                       //BULLET RELOAD SPEED (smaller=faster)
    // bulletSpeed = 6;                  //BULLET TRAVELING SPEED
    // respawnTime = 1.5;                //TIME IT TAKES TO RESPAWN (SEC)
    // countDownSec = 3;                 //TIME IT TAKES TO START (SEC)
    // color1 = color(255, 73, 130);     //PLAYER 1'S COLOR
    // color2 = color(20, 225, 22);      //PLAYER 2's COLOR
    // noStroke();
    // player1 = new Player(100, 100, 1); //parameters(initial posX, initial posY, player #)
    // player2 = new Player(width-100, height-100, 2);
    // endScreen = loadImage("endScreen.jpg");
    // System.out.println(millis());
    
    // }

    // draw=function() {

    //     if (!playAgain) {
    //     mainMenu();
    //     } else {
    //     drawSquares();
    //     countDown();
    //     drawPlayer();
    //     if (start) {
    //         drawBullets();
    //         drawTimer();
    //         drawScore();
    //     }
    //     }
    // }

    // mainMenu= function(){ 
    // setGradient(color1, color2); //Background
    // var center = width/2;
    // writeText("POCO-TOON", center, 150, 100, white, CENTER); //TITLE
    // writeText("Rules", center, 250, 55, white, CENTER);      //RULES
    // writeText("Player 1: Use the WASD keys to move.", center, 290, 25, white, CENTER);
    // writeText("Player 2: Use the Arrow keys to move.", center, 320, 25, white, CENTER);
    // writeText("This is a territory control game. Try to fill the screen with your color.", center, 350, 25, white, CENTER);
    // writeText("Don't get hit by the opponents bullets!", center, 410, 25, white, CENTER);
    // writeText("You will die and respawn after "+respawnTime+" seconds.", center, 440, 25, white, CENTER);
    // writeText("Press the SPACE bar to start!", center, 550, 55, white, CENTER);
    // writeText("A Poco Project", width-50, 650, 20, white, RIGHT); //SUBSCRIPT
    // writeText("Taishi Hayakawa, Shota Shimizu, Keita Shimizu", width-50, 670, 20, white, RIGHT);
    // }
    // setGradient = function(c1, c2) {
    // for (var i = 0; i <= width; i++) {
    //     stroke(lerpColor(c1, c2, map(i, 0, width, 0, 1)));
    //     line(i, 0, i, height);
    // }
    // }
    // //ground
    // initializeSquares = function() {  
    // for (var i = 0; i < squares.size(); i++) {
    //     squares.get(i).playerNum = 0;
    // }
    // for (var i=0; i<height/squareSize; i++) {
    //     for (var j=0; j<width/squareSize; j++) {
    //     squares.add(new Square(j*squareSize, i*squareSize, squareSize)); //(x, y, size)
    //     }
    // }
    // }
    // drawSquares = function(){
    // for (var i=0; i<height/squareSize; i++) {
    //     for (var j=0; j<width/squareSize; j++) {
    //     squares.get(i*(width/squareSize)+j).draw();
    //     }
    // }
    // }
    // countDown= function(){
    // if (!start) {
    //     writeText(""+countDownSec, width/2, height/2, 150, black, CENTER);
    //     if (frameCount%60 == 0) {
    //     countDownSec--;
    //     }
    //     if (countDownSec <= 0) {
    //     start = true;
    //     countDownSec = 3;
    //     }
    // }
    // }
    // //player 1 & 2
    // drawPlayer = function() {
    // strokeWeight(3);
    // stroke(50);
    // if (player1Alive) {
    //     player1.draw();
    //     player1.checkHit();
    // }
    // if (player2Alive) {
    //     player2.draw();
    //     player2.checkHit();
    // }
    // if (!player1Alive) {
    //     player1.revive();
    // }
    // if (!player2Alive) {
    //     player2.revive();
    // }
    // }

    // //bullet, depend on the direction player is going, autofire
    // drawBullets=function() {
    // if (frameCount%reload==0 && timer > 0) { 
    //     if (player1Alive) {
    //     bullets.add(new Bullet(player1.x, player1.y, dirX1, dirY1, 1));
    //     }
    //     if (player2Alive) {
    //     bullets.add(new Bullet(player2.x, player2.y, dirX2, dirY2, 2));
    //     }
    // }
    // for (var i = 0; i < bullets.size(); i++) {
    //     strokeWeight(2);  //black outlinddds de
    //     stroke(20);
    //     bullets.get(i).draw();
    //     if (bullets.get(i).duration()) {
    //     bullets.remove(i);
    //     }
    // }
    // }

    // //timer
    // drawTimer = function() {
    // if (frameCount%60 == 0 && timer > 0) {
    //     timer--;
    // }
    // textSize(50); //black 50px bottom left text
    // if (timer > 3) {
    //     writeText(""+timer, 0, height-10, 80, black, LEFT);
    // } else {
    //     writeText(""+timer, width/2, height/2 + 2, 85, color(0), CENTER);
    //     writeText(""+timer, width/2, height/2, 80, color(255,0,0), CENTER);
    // }
    // }

    // //score in percentile
    // drawScore = function() {
    // var player1Score = 0;
    // var player2Score = 0;
    // if (timer == 0) {
    //     player1Alive = false;                      //remove players
    //     player2Alive = false;
    //     for (var i = 0; i < bullets.size(); i++) { //remove bullets
    //     bullets.remove(i);
    //     }
    //     for (var i = 0; i< squares.size(); i++) {  //count the colors
    //     if (squares.get(i).playerNum == 1) {
    //         player1Score++;
    //     }  
    //     if (squares.get(i).playerNum == 2) {
    //         player2Score++;
    //     }
    //     }
    //     image(endScreen, 0, 0, width, height);
    //     //parameters ("message", x, y, size, color, textAlign)
    //     writeText("Player 1 Score:", 10, 50, 50, color2, LEFT);
    //     writeText(nf(player1Score/squares.size()*100, 0, 1)+"%", 10, 150, 100, color2, LEFT);

    //     writeText("Player 2 Score:", width-10, 50, 50, color1, RIGHT);
    //     writeText(nf(player2Score/squares.size()*100, 0, 1)+"%", width-10, 150, 100, color1, RIGHT);
    //     if (player1Score > player2Score) {
    //     writeText("Player 1 Wins!", 20, 350, 50, color2, LEFT);
    //     } else if (player1Score < player2Score) {
    //     writeText("Player 2 Wins!", width-20, 400, 50, color1, RIGHT);
    //     } else {
    //     writeText("It's a Tie!", width/2, height/2, 80, white, CENTER);
    //     }
    //     writeText("Press Space to Continue", width/2, height-20, 50, black, CENTER);
    // }
    // }
    // writeText = function( message,  x,  y,  size, textColor,  align) {
    // textAlign(align);
    // fill(textColor);
    // textSize(size);
    // text(message, x, y);
    // }

    // //classes
    // Square = class {
    // constructor( x,  y,  size) {
    //     this.x = x;
    //     this.y = y;
    //     this.size = size;
    // }
    // draw = function() {
    //     noStroke();
    //     if (playerNum == 0) { //starting color
    //     fill(255);
    //     rect(x, y, size, size);
    //     }
    //     if (playerNum == 1) { //player 1
    //     fill(color1); 
    //     rect(x, y, size, size);
    //     }
    //     if (playerNum == 2) { //player 2
    //     fill(color2); 
    //     rect(x, y, size, size);
    //     }
    // }
    // checkCollision = function( bulletX,  bulletY,  playerNum) {
    //     if (bulletX >= x && bulletX <= x+size && bulletY >= y && bulletY <= y+size) {
    //     this.playerNum = playerNum;
    //     }
    // }
    // }

    // Player = class {
    // constructor( x,  y,  playerNum) {
    //     this.x = x;
    //     this.y = y;
    //     this.playerNum = playerNum;
    // }
    // draw = function() {
    //     if (playerNum == 1) {
    //     fill(color1);
    //     }
    //     if (playerNum == 2) {
    //     fill(color2);
    //     }
    //     ellipse(x, y, playerSize, playerSize);    //player body
    //     if (start) {
    //     move();
    //     }
    // }
    // move = function() {
    //     if (playerNum == 1) {
    //     if (dirX1 == RIGHT && x < width) {
    //         x += speed;
    //     }
    //     if (dirX1 == LEFT && x > 0) {
    //         x -= speed;
    //     }
    //     if (dirY1 == UP && y > 0) {
    //         y -= speed;
    //     }
    //     if (dirY1 == DOWN && y < height) {
    //         y += speed;
    //     }
    //     }
    //     if (playerNum == 2) {
    //     if (dirX2 == RIGHT && x < width) {
    //         x += speed;
    //     }
    //     if (dirX2 == LEFT && x > 0) {
    //         x -= speed;
    //     }
    //     if (dirY2 == UP && y > 0) {
    //         y -= speed;
    //     }
    //     if (dirY2 == DOWN && y < height) {
    //         y += speed;
    //     }
    //     }
    // }
    // checkHit = function() {
    //     for (var i = 0; i < bullets.size(); i++) {
    //     if (bullets.get(i).checkHit(x, y, playerSize, playerNum)) {
    //         lastDied = frameCount; //note when it died
    //         if (playerNum ==1) {
    //         player1Alive = false;
    //         }
    //         if (playerNum == 2) {
    //         player2Alive = false;
    //         }
    //     }
    //     }
    // }
    // revive = function() {
    //     if (frameCount-lastDied > frameRate*respawnTime) {
    //     if (playerNum == 1) {
    //         player1Alive = true;  //relocate and repawn
    //         x = 100;
    //         y = 100;
    //     }
    //     if (playerNum == 2) {
    //         player2Alive = true;
    //         x = width-100;
    //         y = height-100;
    //     }
    //     }
    // }
    // }

    // Bullet = class {
    // constructor( x,  y,  dirX,  dirY,  player) {
    //     this.x = x;
    //     this.y = y;
    //     this.dirX = dirX;
    //     this.dirY = dirY;
    //     this.player = player;
    // }
    // draw = function() {
    //     if (player == 1) {
    //     fill(color1);
    //     }
    //     if (player == 2) {
    //     fill(color2);
    //     }
    //     ellipse(x, y, 10, 10);
    //     for (var i =0; i<squares.size(); i++) {
    //     squares.get(i).checkCollision(x, y, player);
    //     }
    //     move();
    //     duration++;
    // }
    // move = function() {
    //     if (dirX == RIGHT) {
    //     x += bulletSpeed;
    //     } else if (dirX == LEFT) {
    //     x -= bulletSpeed;
    //     }
    //     if (dirY == UP) {
    //     y -= bulletSpeed;
    //     } else if (dirY == DOWN) {
    //     y += bulletSpeed;
    //     }
    //     if (dirX == 0 && dirY == 0) { //if there is no keyboard input, shoot up
    //     y -= bulletSpeed;
    //     }
    // }
    // duration = function() {    //how long the bullet stays
    //     if (duration == 45) {
    //     return true;
    //     }
    //     return false;
    // }
    // checkHit = function( playerX,  playerY,  playerSize,  player) {
    //     if (this.player == 1 && player == 2) { //if bullet1 is touching player2
    //     if (dist(x, y, playerX, playerY) < playerSize) {
    //         return true;
    //     }
    //     }
    //     if (this.player == 2 && player == 1) { //if bullet2 is touching player1
    //     if (dist(x, y, playerX, playerY) < playerSize) {
    //         return true;
    //     }
    //     }
    //     return false;
    // }
    // }

    // //controls, WASD and arrow key only
    // keyPressed = function() {
    // if (key == CODED) {          //player 2
    //     if (keyCode == RIGHT) {
    //     dirX2 = RIGHT;
    //     }
    //     if (keyCode == LEFT) {
    //     dirX2 = LEFT;
    //     }
    //     if (keyCode == UP) {
    //     dirY2 = UP;
    //     }
    //     if (keyCode == DOWN) {
    //     dirY2 = DOWN;
    //     }
    // }
    // if (key == 'd' || key == 'D') {            //player 1
    //     dirX1 = RIGHT;
    // }
    // if (key == 'a' || key == 'A') {
    //     dirX1 = LEFT;
    // }
    // if (key == 'w' || key == 'W') {
    //     dirY1 = UP;
    // }
    // if (key == 's' || key == 'S') {
    //     dirY1 = DOWN;
    // }
    // if (key == ' ') {
    //     if (!playAgain) {
    //     initializeSquares();
    //     playAgain = true;
    //     start = false;
    //     countDownSec = 3;
    //     }
    //     if (timer == 0) {
    //     timer = 30;
    //     playAgain = false;
    //     }
    // }
    // }
    // keyReleased = function() {
    // if (key == CODED) {                          //player 2
    //     if (keyCode == RIGHT && dirX2 == RIGHT) {
    //         dirX2 = 0;
    //     }
    //     if (keyCode == LEFT && dirX2 == LEFT) {
    //         dirX2 = 0;
    //     }
    //     if (keyCode == UP && dirY2 == UP) {
    //         dirY2 = 0;
    //     }
    //     if (keyCode == DOWN && dirY2 == DOWN) {
    //         dirY2 = 0;
    //     }
    // }
    // if (key == 'd' && dirX1 == RIGHT) {          //player 1
    //     dirX1 = 0;
    // }
    // if (key == 'a' && dirX1 == LEFT) {
    //     dirX1 = 0;
    // }
    // if (key == 'w' && dirY1 == UP) {
    //     dirY1 = 0;
    // }
    // if (key == 's' && dirY1 == DOWN) {
    //     dirY1 = 0;
    // }
// }

}} 
// Get the canvas that Processing-js will use
    
var canvas = document.getElementById("mycanvas"); 
  
  // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    
var processingInstance = new Processing(canvas, sketchProc); 

