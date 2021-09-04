const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "Deletar";
    botaoDeleta.classList.add("delete-button");

    botaoDeleta.addEventListener("click", deletaTarefa);
    return botaoDeleta;
}

const deletaTarefa = (event) => {
    //console.log("deletado!");
    const tarefaCompleta = event.target.parentElement;
    tarefaCompleta.remove();
}

export default BotaoDeleta;