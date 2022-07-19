//Atividade 1:
let employed = {
    code : 10,
    name: "John"
};

 let funcionario1: {code: number, name: string} = {
    code: 10,
    name:'Mesias'
};

interface funcionario {
    code: number,
    name: String,
};

const funcionarioObj = {} as funcionario;
funcionarioObj.code = 10;
funcionarioObj.name = 'Samuel';


interface funcionario2 {
    code:30,
    name:'Ana'
};

const funcionarioObj2: funcionario2 = {
    code: 30,
    name: 'Ana'
};

//Atividade 2

enum Trabalho {
    Atriz,
    Padeiro,
    Baterista,
    Motorista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Maria',
    idade: 19,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Rodrigo',
    idade: 22,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Carla',
    idade: 42,
    profissao: Trabalho.Motorista
};

let pessoa4: Humano = {
    nome: "Matias",
    idade: 39,
    profissao: Trabalho.Baterista
}

//Atividade 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
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