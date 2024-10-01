const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Djonathan Gonsalves de Oliveira";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 18;


console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoAtual = anoAtual + 1;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " cursar direito ");

console.log(`Oi eu sou ${nomeCompleto} meu ano de nascimento ${anoNascimento} minha idade é ${idade}`)

const loginCerto = "Djonathan";
const senhaCerta = 345;
console.log("---------------------- ");
console.log("--AGÊNCIA DE VIAGENS--");
console.log("---------------------- ");
console.log("Faça seu login");

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto){
  console.log("Login Incorreto");
  login = entrada("Digite seu Login Novamente: ");
  
}
while(senha != senhaCerta){
  console.log("Senha Incorreta: ");
  senha = entrada("Digite sua Senha Novamente: ");
}

const listaDeViagens = new Array(
  `Singapura`,
  `Seul`,
  `Orlando`,
  `Paris`,
  `Ottawa`
);

console.log(listaDeViagens);

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

var nomeComprador = entrada("Qual é seu nome? ");
var idadeComprador = entrada("Qual é a sua idade? ");

if(idadeComprador < 18){

 console.log(`Olá ${nomeComprador}, já que sua idade é ${idadeComprador} anos, não podemos vender nossas passagens!`);
}
if(idadeComprador >= 18){
  console.log(`Olá senhor(a) ${nomeComprador} qual sua próxima aventura?, Aqui estão nossas opções:`);
  console.log(listaDeViagens);
}