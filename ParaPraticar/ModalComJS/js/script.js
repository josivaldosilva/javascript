let openModalButton = document.getElementById("open-modal");
let closeModalbutton = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let fade = document.getElementById("fade");


function toggleModal() {
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
};


[openModalButton, closeModalbutton, fade].forEach((el) => {
    el.addEventListener("click", toggleModal)
})