/**
 * async/await
 * a palavra chave aync indica que a função possui partes assincronas e que vc pretende esperar a resolução
 * da mesma antes de continuar. O await irá indicar a prmise que devemos esperar. Faz parte do ES8
 */
async function puxarDados() {
    const dadosResponse = await fetch('dados.json')
    const dadosJson = await dadosResponse.json()

    document.body.innerText = dadosJson.aula
}
puxarDados()

/**
 * then/async
 * a diferença é uma sintaxe mais limpa
 */
function iniciarFetch() {
    fetch('dados.json')
        .then(dadosResponse => dadosResponse.json())
        .then(dadosJson => {
            document.body.innerText = dadosJson.titulo
    })
}
iniciarFetch()

async function iniciarAsync() {
    const dadosResponse = await fetch('dados.json')
    const dadosJson = await dadosResponse.json()
    document.body.innerText = dadosJson.titulo
}
iniciarAsync()

/**
 * try/catch
 * para lidarmos com erros nas promises, podemos utilizar o try e o catch na função
 */
async function iniciarAsync() {
    try {
        const dadosResponse = await fetch('dados.json')
        const dadosJson = await dadosResponse.json()
        document.body.innerText = dadosJson.titulo
    } catch (error) {
        console.log(error);
    }
}
puxarDados()

/**
 * iniciar fetch ao mesmo tempo
 * não p´recisamos esperar um fetch para começarmos outro.
 * Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json
 */
async function iniciarAsync() {
    const dadosResponse = fetch('dados.json')
    const clientesResponse = fetch('clientes.json')

    //ele espera o que esta dentro da expressão () ocorres primeiro
    const dadosJson = await (await dadosResponse).json()
    const clientesJson = await (await clientesResponse).json()
}