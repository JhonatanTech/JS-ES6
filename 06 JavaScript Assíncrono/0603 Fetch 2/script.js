/**
 * .blob()
 * um blob é um tipo de objeto utilizado para representação de dados de um arquivo
 * o blob pode ser utilizado para transformarmos rwuqisições de imagens por exemplo
 * o blob gera um URL unico
 */
const div = document.createElement('div')

fetch('imagem.png')
    .then(response => response.blob())
    .then(imgBlob => {
        const blobUrl = URL.createObjectURL(imgBlob)
        console.log(blobUrl);
    })

/**
 * .clone()
 * ao utilizarmos os métodos acima, text, json e blob, a resposta é moficada
 * por isso existe o método clone, caso você necessite tranformar uma resposta em diferentes valores
 */
const div = document.createElement('div')

fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => {
        const cloneResponse = response.clone()
        response.json().then(json => {
            console.log(json);
        });
        cloneResponse.text().then(text => {
            console.log(text);
        })
})

/**
 * .headers
 * é uma propriedade que possui os cabeçalhos da requisição
 * é um tipo de dado iteravel então podemos utilizar para vermos cada um deles
 */
const div = document.createElement('div')

fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => {
        response.headers.forEach(console.log)
})

/**
 * .status e ok
 * retorna o status da requisição
 * se foi 404, 200, 202 e mais
 * ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso
 */
const div = document.createElement('div')

fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => {
        console.log(response.status, response.ok);
        if (response.status === 404) {
            console.log('página não encontrada');
        }
})

/**
 * url e type
 * .url retorna o url da requisição .type retorna o tipo da resposta
 */
const div = document.createElement('div')

fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => {
        console.log(response.type, response.url);
        
})