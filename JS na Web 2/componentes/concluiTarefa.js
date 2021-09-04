const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui

}

// const concluirTarefa = (evento) => {
//     const botaoConclui = evento.target




//     const tarefaCompleta = botaoConclui.parentElement

//     tarefaCompleta.classList.toggle('done')
// }

const concluirTarefa = (atualiza, id) => {
    const tarefas = JSON.parse(localStorage.getItem("dados")) || [];

    tarefas[id].concluida = !tarefas[id].concluida;

    localStorage.setItem("dados", JSON.stringify(tarefas));
    atualiza();
}

export default BotaoConclui

