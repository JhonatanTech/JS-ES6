/**
 * API
 * 
 * Application
 * um servidor, aplicativo, objeto Javascript ou qualquer outra coisa que vc interaja atraves de comando
 * ao digitar uma URL, estamos utilizando a API do browser para se comunicar com a API do servidor
 * 
 * Programming
 * programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos.
 * O resultados esperado é geralmente o msm
 * 
 * Interface
 * a interface são os comando criados para permitir a interação com a aplicação. Ex 'VIOLAO'.toLowerCase()
 * é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito/resposta
 */

/**
 * exemplos de API's
 * GitHub
 * https://api.github.com/user/origamid
 * https://api.github.com/user/origamid/followers
 * 
 * Array/Element
 * [].map()
 * [].filter()
 * Element.classList
 * Element.attributes
 * 
 * tempo
 * https://www.metaweather.com/api/location/455825
 * https://github.com/toddmotto/public-apis
 */

/**
 * HTTP
 * Hypertext Transfer Protocol é o protocolo utilizando para enviarmosrecebermos arquivos e dados na Web
 */
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(r => r.json())
    .then(pokemon => {
    console.log(pokemon);
    })

/**
 * url e method
 * uma rquisição HTTP é feita através de uma URL. o método padrão é o GET, mas existem outros como
 * POST, UPDATE, DELETE, HEADER
 */
const url = 'https://jsonplaceholder.typicode.com/post/'
const options = {
    method: 'POST',
    headers: {
        "Content-Type":"application/json; charset=utf-8",
    },
    body: '{"aula": "Javascript"}'
}

fetch(url, options)
    .then(r => r.json())
    .then(json => {
        console.log(json);
    })

/**
 * method
 * 
 * GET
 * puxa informações, utilizado para pegar posts, usuarios e etc
 * 
 * POST
 * utilizado para criar posts, usuarios e etc
 * 
 * PUT
 * geralmenteutilizado para atualizar informações
 * 
 * DELETE
 * deleta uma informação
 */

/**
 * headers
 * 
 * cache-control
 * tempo que o arquiv deve ficar em cache em segundos. ex: public, max-age=3600
 * 
 * content-Type
 * tipo de conteudo. ex:text/html; charset=utf-8. indicar o tipo de arquivo principalmente em métodos POST e PUT
 * 
 */

/**
 * CORS
 * Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferentes origens
 * 
 * É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. 
 * Utilizando o Access-Control-Allow-Origin
 * 
 * Se o servidor não permitir o acesso, este será bloqueado. É possivel passar por cima do bloqueio utilizando um proxy
 * 
 * CORS é um acordo entre browser/servidor
 * Ele serve para dar certa proteção ao browser, mas não é inviolável
 */