"use strict";
//Atividade 1:
let employed = {
    code: 10,
    name: "John"
};
let funcionario1 = {
    code: 10,
    name: 'Mesias'
};
;
const funcionarioObj = {};
funcionarioObj.code = 10;
funcionarioObj.name = 'Samuel';
;
const funcionarioObj2 = {
    code: 30,
    name: 'Ana'
};
//Atividade 2
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
    Trabalho[Trabalho["Baterista"] = 2] = "Baterista";
    Trabalho[Trabalho["Motorista"] = 3] = "Motorista";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'Maria',
    idade: 19,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'Rodrigo',
    idade: 22,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: 'Carla',
    idade: 42,
    profissao: Trabalho.Motorista
};
let pessoa4 = {
    nome: "Matias",
    idade: 39,
    profissao: Trabalho.Baterista
};
//Atividade 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
