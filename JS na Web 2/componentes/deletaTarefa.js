const deletaTarefa = (atualiza, id) => {
    const tarefas = JSON.parse(localStorage.getItem("dados")) || [];

    tarefas.splice(id, 1);

    localStorage.setItem("dados", JSON.stringify(tarefas));
    atualiza();
}

const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletaTarefa(atualiza, id))

    return botaoDeleta
}

// const deletarTarefa = (evento) => { 
//     const botaoDeleta = evento.target

//     const tarefaCompleta = botaoDeleta.parentElement

//     tarefaCompleta.remove()

//     return botaoDeleta

// }

export default BotaoDeleta