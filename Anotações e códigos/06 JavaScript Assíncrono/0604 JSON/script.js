/**
 * JSON
 * Javascript Object Notation (JSON) é um formato de organização de dados, compostos por um conjuntode chaves e valor.
 * As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string
 */
const obj = {
    "id" : 1,
    "nome": "Jhonatan",
    "email": "jhonatan@gmail.com",
}

/**
 * Valores
 * Os valores podem ser números, strings, boolean, arrays, objetos e null
 */
const objValue = {
    "id": 1,
    "facul": true,
    "pertences": [
        "lapis",
        "caneta",
        "caderno"
    ],
    "endereco": {
        "cidade": "RJ",
        "pais": "BR"
    },
    "casado": null
}

/**
 * Arrays e objetos
 * é comum possuirmos arrays com objetos em cada valor do arrays
 * cuidado para colocar virgula no ultimo item do objeto ou array
 */
const array = [
    {
        "id": 1,
        "aula":"js"
    },
    {
        "id": 1,
        "aula":"css"
    }
]

fetch('dados.json')
    .then(r => r.json())
    .then(json => {
        console.log(json);
    })

/**
 * JSON.parse() e JSON.stringy()
 * JSON.parse() irá tranformar um texto JSON em um objeto js
 * JSON.stringify() irá tranformar um objeto js em uma string no formato JSON
 */
const textoJson = {
    "id": 1,
    "titulo": "JS",
    "tempo": "25min"
}
const textoObj = JSON.parse(textoJson)

const enderecoObj = {
    cidade: "RJ",
    rua: "Ali perto",
    pais: "BR",
    numero: 50,
}
const enderecoJson = JSON.stringify(enderecoObj)