// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new tank(600, 300, 'up', 3);
const enemyTank = new Enemytank(500, 500, 'down', 3);

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
        case 'Arrowleft': 
            playerTank.moveLeft(); 
            break;
        case 'Arrowright': 
            playerTank.moveRight();
            break;
        case 'Arrowup': 
            playerTank.moveUp(); 
            break;
        case 'Arrowdown': 
            playerTank.moveDown(); 
            break;
    }
});

function updateGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(playerTank);
    drawEnemyTank(enemyTank);
    requestAnimationFrame(updateGame);
}

updateGame(); 

