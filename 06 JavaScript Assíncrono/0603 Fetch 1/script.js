/**
 * fetch api
 * permite fazermos requisições HTTP atraves do metodo fetch()
 * este metodo retorna a resolução de uma promise
 * podemos entao utilizar o then para interagirmos com a resposta, que é um objeto
 * do tipo Response
 */
fetch('doc.txt').then(response => {
    console.log(response);//Response HTTP (Objeto)
})

const doc = fetch('doc.txt')
console.log(doc);

/**
 * Response
 * o objeto response, possui um corp com o conteudo da resposta
 * esse corpo pode ser tranformado utilizando métodos do prototipo do objeto response. 
 * estes retornam outras promises
 */
fetch('doc.txt').then((response) => {
    return response.text()
}).then((corpo) => {
    console.log(corpo);
})

/**
 * Servidor local
 * o fetch faz uma requisição HTTP/HTTPS
 * se vc iniciar um site local diretamente pelo index.html, sem um servidor local
 * o fetch não ira funcionar 
 */

/**
 * .json()
 * um tipo de formato de dados muito utilizado com js é o JSON(Javascript Object Notion),
 * pelo fato dele possuir basicamnete a mesma sintaxe que a de um objeto js
 * .json tranforma um corpo em json em um objeto Javascript
 */
fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => response.json())
    .then(cep => {
        console.log(cep.bairro, cep.logradouro);
    })

/**
 * .text()
 * podemos utilizar o text() para diferentes formatos como txt, json, html, css, js e mais
 */
const styleElement = document.createElement('style')

fetch('style.css')
    .then(response => response.text())
    .then(style => {
        styleElement.innerHTML = style
        document.body.appendChild(styleElement)
    })

/**
 * HTML e .text()
 * podemos pegar um arquivo inteiro em html, tranformar o copor em texto e inserir em uma div com o innerHTML
 * a partir dai podemos manipular esses dados como um DOM qualquer
 */
const div = document.createElement('div')

fetch('sobre.html')
    .then(response => response.text())
    .then(htmlBody => {
        div.innerHTML = htmlBody
        const titulo = div.querySelector('h1')
        document.querySelector('h1').innerText = titulo.innerText
    })