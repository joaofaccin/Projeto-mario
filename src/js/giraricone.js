
const rotated = document.getElementById('rotate');

rotated.addEventListener('mouseenter', entrar)
rotated.addEventListener('mouseout', sair)



function entrar()
{   
    
    rotated.style.transform = 'rotateY(360deg)';
   
}

function sair()
{  
    rotated.style.transform = 'rotateY(720deg)';
}
