/**
 * crie uma função para limpar os preços
 * e retornar os numeros com centavos arredondados
 * depois retorne a soma total
 */
const listaPrecos = [
    'R$ 59,99', ' R$ 100,222','R$ 230 ','r$ 200'
]

function limparNumero(numero = 'r$ 56.56') {
    numero = +numero.toLocaleUpperCase().replace('R$ ', '').trim().replace(',','.')
    numero = +numero.toFixed(2)
    return numero
}
let total = 0
listaPrecos.forEach((preco) => {
    total += limparNumero(preco)
})
console.log(total);