
/**
 * Escopo de função
 * variaveis declaradas dentro de funções não são acessadas fora das mesmas
 */

function mostrarCarro() {
    var carro = 'fusca'
    console.log(carro)
}

mostrarCarro() //fusca no console
console.log(carro) //Erro, carro is not defined

/**
 * Escopo de bloco
 * variaveis criadas com var, vazam o bloco. por isso com a introdução do ES6 a melhor forma é declararmos uma variavel é utilizando const e let
 * pois estas respeitam o escopo de bloco
 */
if (true) {
    var carro = 'fusca'
    console.log(carro)
}
console.log(carro) //fusca

/**
 * var vaza o bloco
 * mesmo com a consição falsa, a variavel ainda sera declarada utilizando hoisting e o valo ficara como undefined
 */
if (false) {
    var carro2 = 'fusca2'
    console.log(carro2)
}
console.log(carro2) //undefined

if (false) {
    const carro3 = 'fusca2'
    console.log(carro3)
}
console.log(carro3) //erro, carro3 is not defined

/**
 * cria um bloco
 * chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
 */
{
    var carro = 'fusca'
    const ano = 2022
}
console.log(carro)
console.log(ano)

/**
 * const
 * mantem o escopo no bloco, impede a redeclaração e imede a modificação do valor da variavl, evitando bugs no código
 */
const mes = 'dezembro'
mes = 'janeiro' //erro, tentou modificar o valor
const semana //erro, declarou sem valor

const data = {
    dia: 28,
    mes: 'dezembro',
    ano: 2018,
}

data.dia = 29 //funciona
data = 'janeiro' //erro

/**
 * let
 * mantem o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variavel
 */
let ano
ano = 2018
ano++
console.log(ano) //2019

let ano = 2020