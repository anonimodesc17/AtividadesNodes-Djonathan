const nomeCompleto = "Djonathan Gonsalves de Oliveira";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 18;


console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoAtual = anoAtual + 1;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " cursar direito ");

console.log(`Oi eu sou ${nomeCompleto} meu ano de nascimento ${anoNascimento} minha idade é ${idade}`)

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

const idadeComprador = 24;

if(idadeComprador < 18){
  console.log("Infelizmente você é menor de idade, não podemos vender nossas passagens");
}
if(idadeComprador >= 18){
  console.log("Parabéns você adiquiriu sua passagem com sucesso!");
}