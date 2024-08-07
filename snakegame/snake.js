const gamebord = document.querySelector("#gamebord");
const ctx = gamebord.getContext("2d");
const scoretext = document.querySelector("#scoretext");
const resetbtn = document.querySelector("#resetbtn");
const gamewidth = gamebord.width;
const gameheight = gamebord.height;
const bordbackground = "white";
const snakecolor = "lightgreen";
const snakeborder = "black";
const foodColor = "red";
const unitsize = 25;
let running = false;
let xVelocity = unitsize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x: unitsize * 4, y: 0},
    {x: unitsize * 3, y: 0},
    {x: unitsize * 2, y: 0},
    {x: unitsize, y: 0},
    {x: 0, y: 0}
];

window.addEventListener("keydown", changeDirection);
resetbtn.addEventListener("click", resetGame);
gamestart();

function gamestart() {
    running = true;
    scoretext.textContent = score;
    createfood();
    drawfood();
    nextTick();
}

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearbord();
            drawfood();
            movesnake();
            drawsnake();
            checkGameover();
            nextTick();
        }, 80);
    } else {
        displayGameOver();
    }
}

function clearbord() {
    ctx.fillStyle = bordbackground;
    ctx.fillRect(0, 0, gamewidth, gameheight);
}

function createfood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitsize) * unitsize;
        return randNum;
    }
    foodX = randomFood(0, gamewidth - unitsize);
    foodY = randomFood(0, gameheight - unitsize);
}

function drawfood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitsize, unitsize);
}

function movesnake() {
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);

    // Check if snake has eaten the food
    if (head.x === foodX && head.y === foodY) {
        score += 1;
        scoretext.textContent = score;
        createfood();
    } else {
        snake.pop();
    }
}

function drawsnake() {
    ctx.fillStyle = snakecolor;
    ctx.strokeStyle = snakeborder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitsize, unitsize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitsize, unitsize);
    });
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = yVelocity === -unitsize;
    const goingDown = yVelocity === unitsize;
    const goingRight = xVelocity === unitsize;
    const goingLeft = xVelocity === -unitsize;

    switch (true) {
        case (keyPressed === LEFT && !goingRight):
            xVelocity = -unitsize;
            yVelocity = 0;
            break;
        case (keyPressed === UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitsize;
            break;
        case (keyPressed === RIGHT && !goingLeft):
            xVelocity = unitsize;
            yVelocity = 0;
            break;
        case (keyPressed === DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitsize;
            break;
    }
}

function checkGameover() {
    const head = snake[0];
    const hitLeftWall = head.x < 0;
    const hitRightWall = head.x >= gamewidth;
    const hitTopWall = head.y < 0;
    const hitBottomWall = head.y >= gameheight;

    if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall) {
        running = false;
    }

    for (let i = 4; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            running = false;
        }
    }
}

function displayGameOver() {
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", gamewidth / 2, gameheight / 2);
}

function resetGame() {
    score = 0;
    xVelocity = unitsize;
    yVelocity = 0;
    snake = [
        {x: unitsize * 4, y: 0},
        {x: unitsize * 3, y: 0},
        {x: unitsize * 2, y: 0},
        {x: unitsize, y: 0},
        {x: 0, y: 0}
    ];
    gamestart();
}
