//console.log("Olá, munudo!")

const nome = "Leo";
let Nome;

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello World!";
console.log(message);

const estado = "SP";
const idade = 26;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof enderaco);
// o java script é uma linguagem dinamica e tipagem fraca.
////////////////////////////////////////////////////
// Tipos de funções no java script

function minha_funcao() {}
console.log(typeof minha_funcao);

function saudacao() {
  console.log("Olá, bem-vindo!");
}
saudacao();

// função com parametro / argumeto
// parâmetro -> é oq a função recebe.
// argumento -> é o dado que é enviado para a função.
function Saudacao(nome) {
  // PARAMETRO
  console.log("Olá, Bem-Vindo " + nome);
  // usando TEMPLETE STRING
  console.log(`Olá, Bem-Vindo ${nome}`);
  // ${} Placeholder
}
Saudacao("Leo Lima"); // argumento

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}.`);
}
soma(5, 5);

let n1 = 6;
let n2 = 10;
soma(n1, n2);

// FUNÇÂO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma  dos dois números foi ${Soma(2, 6)}.`);

// função com mais de um retorno
function par_impar(n) {
  if (n % 2 == 0) {
    return "Par!";
  } else {
    return "Ímpar";
  }
}
let num = 4;
console.log(par_impar);
console.log(`O número ${num} é ${par_impar(num)}`);

// função anônima
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é ${dobro(15)}`);

// arrow function com parâmetro único
// função flecha

const Dobro = (x) => {

    return x*2

}
console.log(`Função dobro com arrow function ${Dobro(20)}`)

// arrow function com mais de um parametro  
const calc = (num1, operador, num2) => {

    return eval(`${num1} ${operador} ${num2}`)

}
console.log(`O resultado é ${calc(6, "*", 6)}`)

// simplificando arrow function
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado é ${Calc(7, '*', 7)}`)


// IIFE immedialety invoked function expression
// função imediata

const iife = (function()  {
    console.log("Executar")


})()

// iife com parametro
const start = (function(app){

    console.log(`Executado imediatamente ${app}`)

})("Whatapp") 