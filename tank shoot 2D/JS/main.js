// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

canvas.width = utilsObj.RoundTablero(canvas.width);
canvas.height = utilsObj.RoundTablero(canvas.height); 

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
}, 1000)

const escenario = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function drawEscenario (ctx, escenario){ 
    for (let row = 0; row < escenario.length; row++){
        for (let col = 0; col < escenario[row].length; col++){
            const cell = escenario [row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;

            switch (cell){ 
                case 0: //espacio vacio
                    ctx.fillstyle = 'white'; 
                    ctx.fillRect (x,y, game.anchoCelda, game.altoCelda);
                
                case 1: //pared
                    ctx.fillstyle = 'grey'; 
                    ctx.fillRect (x,y, game.anchoCelda, game.altoCelda); 

                    break; 
                default:
                    break;
            }
        }
    }
}

function updateGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEscenario(ctx, escenario);

    playerTank.drawTank(ctx);
    enemyTank1.drawEnemyTank(ctx);
    enemyTank2.drawEnemyTank(ctx); 
    enemyTank3.drawEnemyTank(ctx);
    requestAnimationFrame(updateGame);
}

updateGame();

