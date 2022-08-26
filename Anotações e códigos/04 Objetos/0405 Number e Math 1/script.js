/**
 * Number
 * é a construtora de núemro, todo número possui as propriedades e métodos do prototype de Number.
 * Number também possui alguns métodos
 */
const ano = 2018
const preco = new Number(99)

/**
 * Number.isNaN() é um método de Number, ou seja, não faz parte do prototipo.
 * IsInteger() verifica se é um numero integral
 */
Number.isNaN(Nan) //true
Number.isNaN(4 + 5) //false

Number.isInteger(20) //true
Number.isInteger(23.6) //false

/**
 * Number.parseFloat() e Number.parseInt()
 * parseFloat() serve para retornarmos um numero a partir de uma string
 * a string de começar com um numero
 * parseInt recebe também um segundo parametro que é o Radix, 10 é para decimal
 */
parseFloat('99.50')//mesma função sem o Number
Number.parseFloat('99.50')//99.5
Number.parseFloat('100 Reais')//100
Number.parseFloat('R$ 100')//NaN

parseInt('99.50', 10) //99
parseInt(5.14411, 10) //5
Number.parseInt('100 Reais', 10) //100

/**
 * n.toFixed(decimais)
 * arredonda o número com base no total de casa decimais do argumento
 */
const preco2 = 2.99
preco2.toFixed() //3

const carro = 1000.455
carro.toFixed(2)//1000.46

const preco3 = 1499.49
preco3.toFixed()//1499

/**
 * n.toString(redix)
 * transformando o numero em uma string com base no radix.
 * use o 10 para o sistema decimal
 */
const preco4 = 2.99
preco4.toString(10)//'2.99'

/**
 * n.toLocaleString(lang, options)
 * formata o número de acordo com a lingua e opções passadas
 */
const preco5 = 59.49
preco5.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) //$59.49
preco5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) //R$ 59,49

/**
 * Math
 * é um objeto nativo que possui propriedades e métodos de expressões matematicas comuns
 */
Math.PI//3.14159
Math.E //2.718
Math.LN10 //2.303

/**
 * Math.abs(), Math.ceil(), Math.floor() e Math.round()
 * abs() retorna o valor absoluto, ou seja, transforma negativo em positivo
 * ceil() arredonda para cima, retorna sempre uma integral e floorpara baixo
 * round() arredonda para o número integral proximo
 */
Math.abs(-5.5) //5.5
Math.ceil(4.8334) //5
Math.ceil(4.3) //5
Math.floor(4.8334) //4
Math.floor(4.3) //4
Math.round(4.8334) //5
Math.round(4.3) //4

/**
 * Math.max(), Math.min() e Math.random()
 * max() retorna o maior numero de uma lista de argumentos, 
 * min() o menor numero e 
 * random() um número aleatorio entre 0 e 1
 */
Math.max(5, 3, 10, 42, 2)//42
Math.min(5, 3, 10, 42, 2)//2

Math.random() //0.xxx
Math.floor(Math.random() * 100)//entre 0 e 100
Math.floor(Math.random() * 500)//entre 0 e 500

//numero rando entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32