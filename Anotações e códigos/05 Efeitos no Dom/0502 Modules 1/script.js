/**
 * Módulos
 * 
 * Manutenção
 * dividir o código em diferentes arquivos com funções especificas(módulos) facilita a manutenção
 * 
 * Compartilhamento
 * o compartilhamento de código com outros projetos é facilitado, pois basta você importar em um módulo especifico
 * 
 * Nativo no ES6
 * ferramentas que ppermitem diidirmos o código em módulos já existema bastante tempo.
 * Grunt, Gulp, Webpack, Browserrify, Parcel e outras
 * mas agoras os módulos são nativos
 */

/**
 * Modules ES6
 * basta adicionar type="mule" na tag script do HTML. 
 * Utilize a palavra chave export na frente do valor que deseja exportar (use default se for unico)
 * E import nome from arquivo.js para importar
 */
{/* <script type="module" src="js/script.js"></script> */}

//arquivo scroll-suave.js
export default function scrollSuave() {
    
}

//arquivo script.js
import scrollSuave from './scroll-suave.js'
scrollSuave()