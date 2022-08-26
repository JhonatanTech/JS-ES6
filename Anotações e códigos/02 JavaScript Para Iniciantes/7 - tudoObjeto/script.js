
/**
 * Tudo é objeto
 * string, numeros, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos
 */

var nome = "Jhonatan"

nome.length
nome.charAt(0)
nome.replace('ho', 'o')

/**
 * Uma string herda propriedades e métodos do construtor string()
 */

/**
 * Números
 */
var altura = 1.8

altura.toFixed() //2 arredonda
altura.toString() //Convert para string

/**
 * Funções
 */
function areaQuadrado(lado) {
    return lado * lado
}

areaQuadrado.toString() // retorna a função como string: "function areaQuadrado(lado) { return lado * lado }"
areaQuadrado.length //retorna quantos parametros a função pode receber

/**HTML */

var btn = document.querySelector('.btn');

btn.classList.add('azul') //adiciona uma classe
btn.innerHTML //Clique
btn.addEventListener('click', function () {
    console.log('Clicou')
})