

const filterInput = document.querySelector("#filtro-nome");

filterInput.addEventListener("input", (event) => {
    const filter = event.target;
    const pacientes = document.querySelectorAll(".paciente");
    const regex = new RegExp(filter.value, "i");

    for (let i = 0; i < pacientes.length; i++) {
        const pacienteTr = pacientes[i];
        const paciente = getPaciente(pacienteTr);

        if (filter.value == "") {
            pacienteTr.classList.remove("invisivel");
        } else if (regex.test(paciente.nome)) {
            pacienteTr.classList.remove("invisivel");
        } else {
            pacienteTr.classList.add("invisivel");
        }
    }
});