let body = document.querySelector("body");

let txt = document.querySelector("P");

let btnred = document.getElementById("btnred");

 btnred.addEventListener('click', redBtn);


function redBtn() {
    body.style.backgroundColor = ("red");

    txt.innerHTML = "Background Color : Red"; 
};


let dblueBtn = document.getElementById("btnblue");

    dblueBtn.addEventListener('click', darkblueBtn);

function darkblueBtn() {
    body.style.backgroundColor = ("darkblue")

    txt.innerHTML = "Background Color : Darkblue"
}
