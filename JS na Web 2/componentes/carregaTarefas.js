import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criarData } from "./criarData.js";
import { Tarefa } from "./criarTarefas.js";


export const carregaTarefas = () => {
    const lista = document.querySelector("[data-list]");
    lista.innerHTML = "";

    const tarefasCarregadas = JSON.parse(localStorage.getItem("dados")) || [];

    const datasUnicas = removeDatasRepetidas(tarefasCarregadas);
    //console.log(datasUnicas);
    ordenaDatas(datasUnicas);
    //console.log(datasUnicas);

    datasUnicas.forEach(dataTxt => {
        const data = moment(dataTxt, "DD/MM/YYYY");
        lista.appendChild(criarData(data));
    });
}