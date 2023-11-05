//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

let hello = 'Hello world!'

console.log(hello)

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let mariaAge = 28
let rodrigoAge = 33
let lastName = "Cajá"
let inLove = true


console.log(mariaAge + rodrigoAge)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
 
if (typeof mariaAge === 'number') {
  console.log(`É um número`)
} else {
  console.log(`Não é um número`)
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

if (typeof lastName === 'string') {
  console.log(`É uma string`)
} else {
  console.log(`Não é uma string`)
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

if (typeof inLove === 'boolean') {
  console.log(`É um booleano`)
} else {
  console.log(`Não é um booleano`)
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

console.log(mariaAge - rodrigoAge)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

console.log(mariaAge * rodrigoAge)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

console.log(mariaAge / rodrigoAge)

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar"

let restMariaAge = mariaAge % 2
let restRodrigoAge = rodrigoAge % 2

if (restMariaAge == 0) {
  console.log(`É um número par`)
} else {
  console.log(`Não é um número par`)
}

if (restRodrigoAge != 0) {
  console.log(`É um número ímpar`)
} else {
  console.log(`Não é um número ímpar`)
}