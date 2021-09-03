console.log("Carregando de um arquivo externo!");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista!";

// Query selector só traz o primeiro objeto.
// const paciente = document.querySelector("#primeiro-paciente");

// const tdPeso = paciente.querySelector(".info-peso");
// const peso = tdPeso.textContent;

// const tdAltura = paciente.querySelector(".info-altura");
// const altura = tdAltura.textContent;

// const imc = peso / (altura * altura);

// const tdIMC = paciente.querySelector(".info-imc");
// tdIMC.textContent = "";

// let isPesoValido = true;
// let isAlturaValida = true;


// if (peso <= 0 || peso >= 500) {
//     isPesoValido = false;
//     tdIMC.textContent += " Peso inválido! ";
// }

// if (altura <= 0 || altura >= 2.5) {
//     isAlturaValida = false;
//     tdIMC.textContent += " Altura inválida! ";
// }

// if (isPesoValido && isAlturaValida) {
//     tdIMC.textContent = imc;
// }

// // console.log(paciente);
// // console.log(tdPeso);
// // console.log(peso);
// // console.log(tdAltura);
// // console.log(altura);
// // console.log(tdIMC);
// console.log(imc);

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    // const imc = peso / (altura * altura);

    const tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = "";

    const isPesoValido = validaPeso(peso);
    const isAlturaValida = validaAltura(altura);


    //if (peso <= 0 || peso >= 500) {
    if (!isPesoValido) {
        //isPesoValido = false;
        tdIMC.textContent += " Peso inválido! ";
        // Poderia ser feito alterando diretamente na propriedade style, mas é uma boa prática utilizar o próprio css para isso.
        paciente.classList.add("paciente-invalido");
    }

    //if (altura <= 0 || altura >= 2.5) {
    if (!isAlturaValida) {
        //isAlturaValida = false;
        tdIMC.textContent += " Altura inválida! ";
        paciente.classList.add("paciente-invalido");
    }

    if (isPesoValido && isAlturaValida) {
        // tdIMC.textContent = imc.toFixed(2);
        tdIMC.textContent = calculaIMC(peso, altura);
    }

    // console.log(paciente);
    // console.log(tdPeso);
    // console.log(peso);
    // console.log(tdAltura);
    // console.log(altura);
    // console.log(tdIMC);
    // console.log(imc);

}

function calculaIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPaciente(paciente) {
    const isPesoValido = validaPeso(paciente.peso);
    const isAlturaValida = validaAltura(paciente.altura);
    const erros = [];
    if (paciente.nome.length < 1) erros.push("O nome não pode ser em branco!");
    if (!isPesoValido) erros.push("Peso inválido!");
    if (!isAlturaValida) erros.push("Altura inválida!");
    // if (paciente.peso.length < 1) erros.push("o peso não pode ser em branco!");
    // if (paciente.altura.length < 1) erros.push("a altura não pode ser em branco!");
    if (paciente.gordura.length < 1) erros.push("a gordura não pode ser em branco!");
    return erros;
}

function validaPeso(peso) {
    return peso > 0 && peso < 500;
}

function validaAltura(altura) {
    return altura > 0 && altura < 2.5
}

// Escutando eventos:
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    console.log("Clicado!");
}

// Usando uma função anônima:
titulo.addEventListener("click", function () {
    console.log("Clicado Anônimo!");
});

// const btnAdicionar = document.querySelector("#adicionar-paciente");
// console.log(btnAdicionar);

// btnAdicionar.addEventListener("click", function (event) {
//     event.preventDefault();
//     //console.log("Botão clicado!");
//     const form = document.querySelector("#form-adiciona");

//     const nome = form.nome.value;
//     const peso = form.peso.value;
//     const altura = form.altura.value;
//     const gordura = form.gordura.value;

//     console.log(form.peso.value);
//     console.log(form.altura.value);
//     console.log(form.nome.value);
//     console.log(form.gordura.value);

//     const pacienteTr = document.createElement("tr");
//     const nomeTd = document.createElement("td");
//     nomeTd.textContent = nome;
//     const pesoTd = document.createElement("td");
//     pesoTd.textContent = peso;
//     const alturaTd = document.createElement("td");
//     alturaTd.textContent = altura;
//     const gorduraTd = document.createElement("td");
//     gorduraTd.textContent = gordura;
//     const imcTd = document.createElement("td");

//     pacienteTr.appendChild(nomeTd);
//     pacienteTr.appendChild(pesoTd);
//     pacienteTr.appendChild(alturaTd);
//     pacienteTr.appendChild(gorduraTd);
//     pacienteTr.appendChild(imcTd);

//     const table = document.querySelector("#tabela-pacientes");
//     table.appendChild(pacienteTr);

// });