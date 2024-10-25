// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

canvas.width = Math.round(canvas.width/50) * 50; 
canvas.height = Math.round(canvas.height/50) * 50;

console.log ('width', canvas.width);
console.log ('height', canvas.height);
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new tank(600, 300, 'up', 3, game.ancho, game.alto);
const enemyTank1 = new Enemytank(500, 500, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new Enemytank(700, 600, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new Enemytank(400, 700, 'down', 3, game.ancho, game.alto);

// Dibujamos los elementos en el canvas
function drawTank(tank) {
ctx.fillStyle = 'green';
// Representamos el tanque como un cuadrado
ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(enemyTank) {
ctx.fillStyle = 'red';
// Representamos el tanque enemigo como un cuadrado
ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);
}

window.addEventListener('keydown' , function(e) {
    switch (e.key){
        case 'ArrowLeft': 
            playerTank.moveLeft();
            break;
        case 'ArrowRight': 
            playerTank.moveRight();
            break;
        case 'ArrowUp': 
            playerTank.moveUp();
            break;
        case 'ArrowDown': 
            playerTank.moveDown();
            break;
    }
});


function moveEnemyTankRandomly(enemyTank){
    const directions = ['left', 'right', 'up', 'down']; 
    const randomDirection = directions[Math.floor(Math.random()* directions.length)];

    console.log (randomDirection)
    switch (randomDirection){
        case 'left': 
            enemyTank.moveLeft();
            break;
        case 'right': 
            enemyTank.moveRight();
            break;
        case 'up': 
            enemyTank.moveUp();
            break;
        case 'down': 
            enemyTank.moveDown();
            break;
    }
}

setInterval(() => {
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
    moveEnemyTankRandomly(enemyTank3);
}, 500)


function updateGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(playerTank);
    drawEnemyTank(enemyTank1);
    drawEnemyTank(enemyTank2);
    drawEnemyTank(enemyTank3);
    requestAnimationFrame(updateGame);
}

updateGame();

