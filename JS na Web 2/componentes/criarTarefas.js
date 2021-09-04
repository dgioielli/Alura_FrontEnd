import { carregaTarefas } from './carregaTarefas.js';
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (evento) => {
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem("dados")) || [];

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector("[data-form-datetime]");
    const data = moment(calendario.value);

    const dataFormatada = data.format("DD/MM/YYYY");
    const horario = data.format("HH:mm");
    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida,
    }
    //lista.appendChild(Tarefa(dados));

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem("dados", JSON.stringify(tarefasAtualizadas));
    carregaTarefas();

    input.value = " "
}

export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if (concluida) {
        tarefa.classList.add('done');
    }
    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefas, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefas, id));

    return tarefa;
}