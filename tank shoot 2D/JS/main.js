const canvas = document.getElementById ("gameCanvas"); 
const ctx = canvas.getContext('2d'); 

function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9; 
    canvas.height = window.innerHeight * 0.9; 

}

resizeCanvas(); 

window.addEventListener('resize', resizeCanvas);

const game = new Game (canvas.width, canvas.height,'start'); 

const playerTank = new tank (100, 100, 'up', 3); 
const enemyTank = new Enemytank (500, 100, 'down', 3);

function drawTank (tank) {
    ctx.fillstyle = 'green'; 
    ctx.fillRect(tank.posX, tank.posY, 50, 50); 
}

function drawEnemyTank (enemyTank){
    ctx.fillstyle = 'red'; 
    ctx.fillRect (enemyTank.posX, enemyTank.posY, 50,50);
}

function updateGame(){
    ctx.clearRect(0,0, canvas.width, canvas.height); 

    drawTank(playerTank); 
    drawEnemyTank (enemyTank); 

    requestAnimationFrame(updateGame); 

}

updateGame(); 
