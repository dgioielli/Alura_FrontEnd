const btnAdicionar = document.querySelector("#adicionar-paciente");
console.log(btnAdicionar);

btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log("Botão clicado!");
    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacienteForm(form);
    // const nome = form.nome.value;
    // const peso = form.peso.value;
    // const altura = form.altura.value;
    // const gordura = form.gordura.value;

    // console.log(form.peso.value);
    // console.log(form.altura.value);
    // console.log(form.nome.value);
    // console.log(form.gordura.value);

    // const pacienteTr = document.createElement("tr");
    // const nomeTd = document.createElement("td");
    // nomeTd.textContent = nome;
    // const pesoTd = document.createElement("td");
    // pesoTd.textContent = peso;
    // const alturaTd = document.createElement("td");
    // alturaTd.textContent = altura;
    // const gorduraTd = document.createElement("td");
    // gorduraTd.textContent = gordura;
    // const imcTd = document.createElement("td");
    // imcTd.textContent = calculaIMC(peso, altura);

    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    const erros = validaPaciente(paciente);

    const ul = document.querySelector("#lista-erros");
    ul.innerHTML = "";

    if (erros.length > 0) {
        exibeErros(erros);
        return;
    }

    // const pacienteTr = montaTr(paciente)

    // const table = document.querySelector("#tabela-pacientes");
    // table.appendChild(pacienteTr);
    addPacienteTable(paciente);

    form.reset();

});

function obtemPacienteForm(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value),
    }
    return paciente;
}

function addPacienteTable(paciente) {
    const pacienteTr = montaTr(paciente)

    const table = document.querySelector("#tabela-pacientes");
    table.appendChild(pacienteTr);
}

function montaTr(paciente) {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    const nomeTd = montaTd("info-nome", paciente.nome);
    const pesoTd = montaTd("info-peso", paciente.peso);
    const alturaTd = montaTd("info-altura", paciente.altura);
    const gorduraTd = montaTd("info-gordura", paciente.gordura);
    const imcTd = montaTd("info-imc", paciente.imc);

    // const nomeTd = document.createElement("td");
    // nomeTd.textContent = paciente.nome;
    // const pesoTd = document.createElement("td");
    // pesoTd.textContent = paciente.peso;
    // const alturaTd = document.createElement("td");
    // alturaTd.textContent = paciente.altura;
    // const gorduraTd = document.createElement("td");
    // gorduraTd.textContent = paciente.gordura;
    // const imcTd = document.createElement("td");
    // imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(nomeClass, value) {
    const td = document.createElement("td");
    td.classList.add(nomeClass);
    td.textContent = value;
    return td
}

function exibeErros(erros) {
    const ul = document.querySelector("#lista-erros");
    erros.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}