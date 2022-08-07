/**
 * [].splice()
 * [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index
 * remove a quantidade de itens que for passada no segundo parâmetro(retorna esses itens)
 */
const carros = ['ford', 'fiat', 'vw', 'honda']
carros.splice(1, 0, 'kia', 'mustang')//[]
carros//['ford', 'kia', 'mustang', 'fiat', 'vw', 'honda']

carros.splice(3, 2, 'ferrari')//['fiat', 'vw']
carros// ['ford', 'kia', 'mustang', 'ferrari', 'honda']

/**
 * [].copyWithin()
 * [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio
 * até o final e vai preencher a mesma com essa cópia. caso omita os valores de inicio e final, 
 * ele irá utilizar como inicio o 0 e final o valor total do array
 */
['item1', 'item2', 'item3', 'item4'].copyWithin(2, 0, 3)
    //['item1', 'item2', 'item1', 'item2']

['item1', 'item2', 'item3', 'item4'].copyWithin(-1)
//['item1', 'item2', 'item3', 'item1']

/**
 * [].fill()
 * [].fill(valor, inicio, final) preenche a array com o valor, do inicio até o fim
 */
['item1', 'item2', 'item3', 'item4'].fill('banana')
    // ['banana', 'banana', 'banana', 'banana']

['item1', 'item2', 'item3', 'item4'].fill('banana', 2)
    //['item1', 'item2', 'banana', 'banana']

['item1', 'item2', 'item3', 'item4'].fill('banana', 1, 3)
// ['item1', 'banana', 'banana', 'item4']

/**
 * métodos de acesso [].concat()
 * os métodos abaixo não modificam a array original, apenas retornam uma array modificada.
 * [].concat() irá concatenar a array com o valor passado
 */
const transporte1 = ['barco', 'aviao']
const transporte2 = ['carro', 'moto']
const transportes = transporte1.concat(transporte2)
//['barco', 'aviao', 'carro', 'moto']

const maisTransportes = [].concat(transporte1, transporte2, 'van')
//['barco', 'aviao', 'carro', 'moto', 'van']

/**
 * [].includes(), [].indexOf() e [].lastIndexOf()
 * [].includes(valor) verifica se a array possui o valor e retorna true ou false
 * [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array
 * já o [].lastIndexOf(valor) retrna o ultimo index
 */
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']

linguagens.includes('css') //true
linguagens.includes('ruby') //false
linguagens.indexOf('python') //4
linguagens.indexOf('js') //2
linguagens.lastIndexOf('js')

/**
 * [].join()
 * [].join(separador) junta todos os valores da array e retorna uma string com eles
 * se vc passar um valor como parametro, este será utilizado durante a junção de cada item da array
 */
linguagens.join()//'html,css,js,php,python,js'
linguagens.join(' ')//'html css js php python js'
linguagens.join('-_-')//'html-_-css-_-js-_-php-_-python-_-js'

let htmlString = '<h2>titulo principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')

/**
 * [].slice()
 * [].slice(inicio, final) retorna os itens da array começando pelo inicio e indo até o valor de final
 */
linguagens.slice(3) //['php', 'python', 'js']
linguagens.slice(1, 4) //['css', 'js', 'php']

const cloneLinguagens = linguagens.slice()