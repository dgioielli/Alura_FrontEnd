import { Tarefa } from "./criarTarefas.js";

export const criarData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem("dados")) || [];

    const dataTopo = document.createElement("li");
    const dataFormatada = data.format("DD/MM/YYYY");
    const conteudo = `<p class="content-data">${dataFormatada}</p>`;

    dataTopo.innerHTML = conteudo;

    tarefas.forEach((tarefa, id) => {
        if (tarefa.dataFormatada == dataFormatada) {
            dataTopo.appendChild(Tarefa(tarefa, id));
        }
    });

    return dataTopo;
}