
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");
const linkvideo = video.src;

function alterarModal(){
    modal.classList.toggle("aberto"); 
}

botaoTrailer.addEventListener("click", () => {   
    alterarModal();
    video.setAttribute("src", linkvideo);

});

fecharModal.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", "");

});




