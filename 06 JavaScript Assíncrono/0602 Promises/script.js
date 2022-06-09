/**
 * new Promise()
 * promise é uma funcao construtora de promessas. 
 * Existem dois resultados possiveis de uma promessa, ela pode ser resolvida, 
 * com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado
 */
const promessa = new Promise(function(resolve, reject) {
    let condicao = true
    if (condicao) {
        resolve('Estou pronto')
    } else {
        reject(Error('Um erro ocorreu!'))
    }
})

console.log(promessa);

/**
 * then()
 * o poder das promises esta no método then() do seu prototipo.
 * O callback deste método só será ativado qaundo a promise for resolvida.
 * O argumento do callback será o valor passado na função resolve
 */
const promessa = new Promise(function(resolve, reject) {
    let condicao = true
    if (condicao) {
        resolve('Estou pronto')
    } else {
        reject(Error('Um erro ocorreu!'))
    }
})

promessa.then(function (resolucao) {
    console.log(resolucao); //Estou pronto
})

/**
 * Assincrono
 * as promises não fazem sentido quando o código executando dentro da mesma é apena código sincrono.
 * O poder esta na execução de codigo assincrono que executará o resolve() ao final dele.
 */
const promessa = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Estou pronto')
    }, 1000);
})

promessa.then(function (resolucao) {
    console.log(resolucao); //'resolvida' após 1s
})

/**
 * then().then()
 * o metodo then() retorna outra promise.
 * podemos colocar then() após then() e fazer um encadeamento de promessas.
 * o valor do primeiro argumento de cada then, sera o valor do rtorno anterior
 */
const promessa = new Promise(function(resolve, reject) {
    resolve('Etapa 1')
})

promessa.then(function (resolucao) {
    console.log(resolucao); //Etapa 1
    return 'Etapa 2'
}).then(resolucao => {
    console.log(resolucao); //Etapa 2
    return 'Etapa 3'
}).then(r => r + 4).then(r => {//r é o return
    console.log(r);//Etapa 34
})

/**
 * catch()
 * o metodo catch(), do prototipo de promises, adiciona um callback a promise que sera ativado caso a mesma seja rejeitada
 */
const promessa = new Promise(function(resolve, reject) {
    let condicao = false
    if (condicao) {
        resolve('Estou pronto')
    } else {
        reject(Error('Um erro ocorreu!'))
    }
})
promessa.then(resolucao => {
    console.log(resolucao);
}).catch(reject => {
    console.log(reject);
})

/**
 * then(resolve, reject)
 * podemos passae a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento
 */
const promessa = new Promise(function(resolve, reject) {
    let condicao = false
    if (condicao) {
        resolve('Estou pronto')
    } else {
        reject(Error('Um erro ocorreu!'))
    }
})
promessa.then(resolucao => {
    console.log(resolucao);
},reject => {
    console.log(reject);
})

/**
 * finally()
 * finally() executara a funcao anonima assim que a promessa acabar.
 * a diferença do finally é que ele é executado independente do resultado, se for resolvido ou rejeitado
 */
const promessa = new Promise(function(resolve, reject) {
    let condicao = false
    if (condicao) {
        resolve('Estou pronto')
    } else {
        reject(Error('Um erro ocorreu!'))
    }
})
promessa.then(resolucao => {
    console.log(resolucao);
},reject => {
    console.log(reject);
}).finally(() => {
    console.log('acabou');
})

/**
 * Promise.all()
 * retornara uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada
 * a resposta é um array com as resposta de cada promise
 */
const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('login efetuado')
    }, 1000)
});

const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('dados carregados')
    },1500)
});

const tudoCaregado = Promise.all([login, dados])

tudoCaregado.then(respostas => {
    console.log(respostas);//array com ambas as respostas
})

/**
 * Promise.race()
 * retornara uma nova promise assim que a primeira for resolvida ou rejeitada
 * essa nova promise tera a resposta da primeira resolvida
 */
const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('login efetuado')
    }, 1000)
});

const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('dados carregados')
    },1500)
});

const carregouPrimeiro = Promise.race([login, dados])//mostra o primeiro q carregar

tudoCaregado.then(respostas => {
    console.log(respostas);//array com ambas as respostas
})