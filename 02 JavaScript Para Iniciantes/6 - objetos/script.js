//conjunto de variaveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
    nome: "Jhonatan",
    idade: 20,
    profissao: "Programador",
    possuiFaculdade: true,
}

pessoa.nome; //Jhonatan
pessoa.idade; //20

//métodos
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        //this se refere ao proprio objeto
        return this.lados * lado;
    },
    //o metodo pode ser criado assim tbm
    perimetro2(lado) {
        //this se refere ao proprio objeto
        return this.lados * lado;
    },
}

quadrado.lados; // 4
quadrado.area(5); //25
quadrado.perimetro(5); //20