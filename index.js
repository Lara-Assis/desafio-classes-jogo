
class heroi {
    constructor(nome, idade, tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    ataque=""

    atacar(){

        switch(this.tipo){
            case "guerreiro":
                this.ataque= "espada"
                break
            case "ninja":
                this.ataque ="shuriken"
                break
            case "monge":
                this.ataque ="artes marciais"
                break
            case "mago":
                this.ataque="magia"
                break
        }
        console.log(`O heroi ${this.nome} do tipo ${this.tipo} atacou usando ${this.ataque}.`)

        }
    }       
    let heroiGuerreiro =new heroi ("Ragnarok", 28, "guerreiro")
    let heroiNinja =new heroi ("Jack", 32, "ninja")
    let heroiMonge =new heroi("Segir", 99, "monge")
    let heroiMago =new heroi ("Luok", 108, "mago")
    
   

    heroiGuerreiro.atacar()
    heroiMonge.atacar()
    heroiNinja.atacar()
    heroiMago.atacar()