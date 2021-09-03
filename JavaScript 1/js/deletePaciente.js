// const trPacientes = document.querySelectorAll(".paciente");

// trPacientes.forEach(paciente => {
//     paciente.addEventListener("dblclick", event => {
//         //console.log("fui clicado com um duplo clique!");
//         //console.log(event.target);
//         //console.log();
//         if (event.target.tagName == "TD") event.target.parentElement.remove();
//         else if (event.target.tagName == "TR") event.target.remove();
//     });
// });

const tableBody = document.querySelector("#tabela-pacientes");

tableBody.addEventListener("dblclick", event => {
    if (event.target.tagName == "TD") {
        event.target.parentElement.classList.add("fadeOut");
        setTimeout(() => {
            event.target.parentElement.remove();
        }, 500);
    }
    else if (event.target.tagName == "TR") { event.target.remove(); }
});