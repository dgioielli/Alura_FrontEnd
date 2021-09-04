import BotaoConcluir from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

(() => {

    const criarTarefa = (event) => {
        event.preventDefault();
        //console.log("Fui clicado!");

        console.log(formInput.value);
        const lista = document.querySelector("[data-list]");

        const tarefa = document.createElement("li");
        tarefa.classList.add("task");
        const conteudo = `<p class="content">${formInput.value}</p>`;

        tarefa.innerHTML = conteudo;
        tarefa.appendChild(BotaoConcluir());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);


        formInput.value = "";
    };


    const formButton = document.querySelector("[data-form-button]");
    const formInput = document.querySelector("[data-form-input]");

    //console.log(formButton);

    formButton.addEventListener("click", criarTarefa);

    // const BotaoConcluir = () => {
    //     const botaoConclui = document.createElement("button");

    //     botaoConclui.classList.add("check-button");
    //     botaoConclui.innerText = "Concluir"

    //     botaoConclui.addEventListener("click", concluirTarefa);

    //     return botaoConclui;
    // }

    // const concluirTarefa = (event) => {
    //     const botaoConclui = event.target;

    //     const tarefaCompleta = botaoConclui.parentElement;

    //     tarefaCompleta.classList.toggle("done");
    // }

    // const BotaoDeleta = () => {
    //     const botaoDeleta = document.createElement("button");

    //     botaoDeleta.innerText = "Deletar";
    //     botaoDeleta.classList.add("delete-button");

    //     botaoDeleta.addEventListener("click", deletaTarefa);
    //     return botaoDeleta;
    // }

    // const deletaTarefa = (event) => {
    //     //console.log("deletado!");
    //     const tarefaCompleta = event.target.parentElement;
    //     tarefaCompleta.remove();
    // }

})();