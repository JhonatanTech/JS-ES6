var idade = 28
var gols = 100
var pi = 3.14 //ponto para decimal
var exp = 2e10 //20000000000 

//operadores aritméticos
var some = 100 + 50
var subtracao = 100 - 50
var multiplicacao = 100 * 2
var divisao = 200 / 2
var expoente = 2 ** 4
var modulo = 14 % 5

//operadores aritméticos (string)
var some = '100' + 50 //10050
var subtracao = '100' - 50 //50
var multiplicacao = '100' * '2' //200
var divisao2 = '10' / '2'
var divisao2 = 'comprei 10' / 2 //NaN (Not a Number)

/**
 * é possivel veriuficar se uma variavel é NaN ou não com a fnção isNaN()
 */

//operadores aritméticos unários
var incremento = 5

console.log(incremento++) // 5
console.log(incremento) // 6

console.log(++incremento) // 6
console.log(incremento) // 6

var frase = 'Isso é um teste'
+frase // NaN
-frase // NaN

var idade = '28'
+idade // 28(numero)
-idade // -28(numero)

var possuiFaculdade = true
+possuiFaculdade // 1