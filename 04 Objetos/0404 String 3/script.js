//utilizando o foreach no array abaixo
//some os valores de taxa e os de recebimento

const transacoes = [
    {
        descricao: 'taxa do pão',
        valor: 'R$ 39'
        
    },
    {
        descricao: 'taxa do mercado',
        valor: 'R$ 189'
        
    },
    {
        descricao: 'recebimento de clientes',
        valor: 'R$ 99'
        
    },
    {
        descricao: 'taxa do banco',
        valor: 'R$ 129'
        
    },
    {
        descricao: 'recebimento viajem',
        valor: 'R$ 399'
        
    },
]

let taxaTotal = 0
let recTotal = 0
transacoes.forEach((item) => {
    numero_limpo = item.valor.replace('R$ ', '')//subtitui RS por nada ''
    if (item.descricao.toLowerCase().includes('taxa') && !item.descricao.toLowerCase().includes('recebimento')) {
        taxaTotal += +numero_limpo//converte em numero
    } else {
        recTotal += +numero_limpo
    }
})
console.log('Total de taxa: R$ ' + taxaTotal);
console.log('Total de recebimento: R$ ' + recTotal);

//retorne uma array com a lista abaixo
const transportes = 'carro;avião;trem;ônibus;bicicleta'
arrayTrans = transportes.split(';')
console.log(arrayTrans);

//substitua todos os spans por a
const html = `  <ul>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>`
novo_html = html.split('span').join('a')
console.log(novo_html);

//retorne o ultimo caractere da frase
const frase = 'melhor do ano!'
const caractere = frase[frase.length - 1]
console.log(caractere);
