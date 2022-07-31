let input = document.getElementById("inputTasks");

let addTasksBtn = document.getElementById("addTasks-btn");

let main = document.getElementById("list-area");

let counter = 0;

function addTasks() {
    //Pegar o valor digitado no input

    let inputValue = input.value;

    //Se o input for difernte de vazio, nulo e indefinido

    if ((inputValue !== "") && (inputValue !== null) && inputValue !== undefined) {

        ++counter;
        
        let newItem = `<div id="${counter}" class="item">
        <div class="item-icone">
            <i class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome">
            ${inputValue}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="toDelete(${counter})"><i class="mdi mdi-delete"></i> Delete </button>
        </div>
    </div>`; 
        //Adicionar novo item no main
        main.innerHTML += newItem;

        //Limpar o campo do input
        input.value = "";
        input.focus();
    }

}

function toDelete(id) {
    var task = document.getElementById(id);
    task.remove();
}
   
input.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        addTasksBtn.click();  
    }
});


