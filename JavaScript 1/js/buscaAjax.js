

const buscarButton = document.querySelector("#buscar-pacientes");

buscarButton.addEventListener("click", () => {
    const xmlr = new XMLHttpRequest();

    xmlr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xmlr.addEventListener("load", () => {
        const errorSpan = document.querySelector("#erro-ajax");

        if (xmlr.status == 200) {
            errorSpan.classList.add("invisivel");
            const response = xmlr.responseText;
            console.log(response);
            const pacientes = JSON.parse(response);
            console.log(pacientes);
            pacientes.forEach(paciente => {
                addPacienteTable(paciente);
            });
        } else {
            errorSpan.classList.remove("invisivel");
        }
    });

    xmlr.send();
});