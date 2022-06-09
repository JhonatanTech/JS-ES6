/**
 * sincrono vs assincrono
 * 
 * sincrono
 * espera a tarefa acabar para continuar com a proxima
 * 
 * assincrono
 * move para a proxima tarefa antes da anterior terminar. o trabalho sera executado no 'fundo' e quando terminado, será colocado na fila(task queue)
 * 
 * exemplos assincronos
 * setTimeout, ajax, promises, fetch, async
 */

setTimeout(function () {
    console.log('1');
});

setTimeout(function () {
    console.log('2');
}, 100);

console.log('log 1');

setTimeout(function () {
    console.log('3');
}, 50);

console.log('log 2');

/**
 * vantagens
 * 
 * carregamento no fundo
 * nao trva o script, É possivel utilizar o site enquanto o porcessamento é realizado no fundo
 * 
 * função ao termino
 * podemos ficar de olho no carregamento e executar uma função assim que ele terminar
 * 
 * requisições ao servidor
 * não precisamos recarregar a página por completo a cada requisição feita so servidor
 */