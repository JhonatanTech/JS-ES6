/**
 * history
 * é possivel acessarmos o histórico de acesso do browser em uma sessão especifica atraves do window.history
 * o objeto history possui diferentes métodos e propriedades
 */
window.history
window.history.back()//vai para a anterior
window.history.forward()//vai para a proxima

/**
 * pushState()
 * a parte interessante de manipularmos o history é que podemos modificar o histórico e adiantar um novo evento
 * window.history.pushState(obj, title, url)
 */

//em obj podemos enviar um objeto com dados mas o seu uso é restrito por isso geralmente utilizamos null
// o title ainda é ignorado por alguns browsers, também utilizamos null nele. O url que é a parte importante
window.history.pushState(null, null, 'sobre.html')

/**
 * popstate
 * o evento popstate pode ser adicionado ao objeto window
 * assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou proximo
 */
window.addEventListener('popstate', () => {
    fetchPage(window.location.pathname)
})

/**
 * fetch e history
 * ao puxarmos dados via fetch api, o url da pagina continua o mesmo.
 * ao combinar fetch com a history api conseguimos simular uma navegação 
 * real entre páginas, sem a necessidade de recarregamento da mesma
 */
async function fetchPage(url) {
    const pageResponse = await fetch(url)
    const pagetext = await pageResponse.text()
    window.history.pushState(null, null, url)
}