class Ventilador{
    constructor(ligar,velocidade){
        this.ligar= ligar;
        this.velocidade= velocidade;
    };

    lampadainf(){
        return 'O ventilador está '+ this.ligar+ ' e na potência '+ this.velocidade;
    };
};

const ventilador = new Ventilador("desligada",0);
console.log(ventilador.lampadainf());