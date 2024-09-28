class Pessoa {

    constructor(nome,idade,profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    };

    exibirinfo() {
        return 'Nome:'+this.nome+' Idade:'+this.idade+' Profissão:'+this.profissao;
    };

};

const pessoa = new Pessoa("Joshua", 14, "estudante");
console.log(pessoa.exibirinfo());