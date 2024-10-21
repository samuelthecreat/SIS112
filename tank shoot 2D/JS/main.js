const canvas = document.getElementById ("gameCanvas"); 
const ctx = canvas.getContetx("2d"); 

function resizeCanvas(){
    convas.width = window.innerWidth *0.9; 
    canvas.height = window.innerHeight * 0.9; 

}

resizeCanvas(); 

window.addEventListener("resize", resizeCanvas);
