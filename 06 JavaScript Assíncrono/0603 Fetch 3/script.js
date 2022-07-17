/**
 * utilizando a api https://viacep.com.br/ws/${CEP}/json/
 * crie um formulario onde o usuário pode digitar o cep
 * e o endereço completo é retornado ao clicar em busca
 */
fetch('https://viacep.com.br/ws/07858080/json/')
    .then(response => response.text())
    .then((values) => {
        console.log(values);
    })
/**
 * utilizando a api https://blockchain.info/ticker
 * retorne no dom o valor de compra da bitcoin and reais
 * atualize este valor a cada 30s
 */
setInterval(() => {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then((values) => {
        console.log(values.BRL.symbol + ' ' + values.BRL.buy);
    })
},30000)

/**
 * utilizando a api https://api.chucknorris.io/jokes/random
 * retorne uma piada randomica do chucknorris, toda vez que clicar em proxima
 */
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((values) => {
        console.log(values.value);
    })