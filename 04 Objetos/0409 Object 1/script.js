/**
 * object
 * todo objeto é criado com o construtor Object, e por isso herda as propriedades e métodos do seu prototype
 */
const carro = {
    marca: 'Ford',
    ano: 2018,
}

const pessoa = new Object({
    nome: 'jhonatan',
    idade: 21
})

/**
 * Métodos de object
 * object.create(obj, defineProperties) retorna um novo objeto que terá como prototipo o objeto do primeiro argumento
 */
const carro2 = {
    rodas: 4,
    init(marca) {
        this.marca = marca
        return this
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`
    },
    buzinar() {
        return this.marca + ' buzinou'
    }
}

const honda = Object.create(carro)
honda.init('Honda').acelerar()

/**
 * Object.assign()
 * Objetct.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis
 * dos demais objetos. O assign irá modificar o objeto alvo
 */
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou'
    },
    buzinar() {
        return 'buzinou'
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

const carro3 = {
    rodas: 4,
    mala: true,
}

Object.assign(moto, funcaoAutomovel)
Object.assign(carro3, funcaoAutomovel)

/**
 * Object.defineProperties()
 * object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades
 * A diferença aqui é a possibilidade de serem definidas as caracteristicas dessas propriedades
 */
const moto2 = {}
Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false, //impede deletar e mudança de valor
        enumerable: true, //torna enumeravel
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false, //impede mudança de valor
    }
})

/**
 * get e set
 * é possivel definirmos diferentes comportamentos para get e set de uma propriedade
 * lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos
 * obj.propriedade = 'valor' a função de set é ativada
 */
const moto3 = {}
Object.defineProperties(moto, {
    velocidade: {
        get() {
            return this._velocidade
        },
        set(valor) {
            this._velocidade = 'velocidade' + valor
        }
    },
})

/**
 * Object.getOwnPropertyDescriptors(obj)
 * lista todos os métodos e propriedades de um objeto, com as suas devidas configuraçãoes
 */
Object.getOwnPropertyDescriptors(Array)
//lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype)
//lista com métodos e propriedades do prototipo de Array

Object.getOwnPropertyDescriptors(window, 'innerHeight')
//puxa d euma unica propriedade

/**
 * Object.keys(obj), Object.values(obj) e Object.entries(obj) 
 * Object.keys() retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
 * Object.values(obj) retorna uma array com os valores do objeto
 * Object.entries(obj) retorna uma array com array's contendo a chave e o valor
 */
Object.keys(Array)
//[] vazia, pois nao possui propriedades enumeráveis

const carro4 = {
    marca: 'Ford',
    ano: 2018,
}

Object.keys(carro4)
//['marca', 'ano']
Object.values(carro)
//[['marca', 'ford'], ['ano', 2018]]

/**
 * Object.getOwnPropertyNames(obj)
 * retorna uma array com todas as propriedades diretas do objeto(não retorna as do prototipo)
 */
Object.getOwnPropertyNames(Array)

Object.getOwnPropertyNames(Array.prototype)

const carro5 = {
    marca: 'ford',
    ano: 2018,
}
Object.getOwnPropertyNames(carro)

/**
 * Object.getOwnPropertyOf() e Object.is()
 * Object.getOwnPropertyOf(), retorna o prototipo do objeto
 * Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false
 */
const frutas = ['banana', 'pera']
Object.getPrototypeOf(frutas)
Object.getPrototypeOf('')//string

const frutas1 = ['banana', 'pera']
const frutas2 = ['banana', 'pera']

Object.is(frutas1, frutas2)//false

/**
 * Object.freeze(), Object.seal(), Object.preventExtensions()
 * Object.freeze() impede qualquer mudança nas propriedades
 * Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas
 * Object.preventExtensions() prevne a adição de novas propriedades
 */
Object.freeze(carro)
Object.seal(carro)
Object.preventExtensions(carro)

Object.isFrozen(carro)
Object.isSealed(carro)