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