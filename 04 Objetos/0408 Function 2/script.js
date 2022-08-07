/**
 * function.apply()
 * o apply(this, ['arg1','arg2',...]) funciona como o call, 
 * a unica diferença é que os argumentos da função são passados através de uma array
 */
const numeros = [3, 4, 6, 1, 34, 44, 32]
Math.max.apply(null, numeros)
Math.max.call(null, 3, 4, 6, 1, 34, 44, 32)

//podemos passar o null para o valor this, caso a funçaõ não utilize o objeto principal para funcionar

/**
 * apply vc call
 * a unica diferença é a array como segundo argumento
 */
const li = document.querySelectorAll('li')

function itemPossuiAtivo(item) {
    return item.classlist.contains('ativo')
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo)
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo])

/**
 * function.bind()
 * diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo
 * contesto ths
 */
const filtrarLi= Array.prototype.filter.bind(li, function (item) {
    return item,classlist.contains('ativo')
})
filtrarLi()

/**
 * argumentos e bind
 * nao precisamos passar todos os argumentos no momento do bind,
 * podemos passar os mesmos na nova função no momento da execução da mesma
 */
const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`
    }
}
carro.acelerar(100, 20)
//ford acelerou 100 em 20

/**
 * argumentos comuns
 * podemos passar argumentos padrões para uma função e retornar uma nova função
 */
function imc(altura, peso) {
    return peso / (altura * altura)
}

const imc180 = imc.bind(null, 1.8)

imc(1.8, 70)//21.6
imc180(70)//21.6