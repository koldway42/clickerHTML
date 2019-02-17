function CriarEspada(nome = '',atk = 0,preco = 0, indice) {
    this.preco
    this.atk
    return{
        nome,
        atk,
        preco,
        indice
    }
}
const espadas = [
new CriarEspada("Espada Inicial", 1, 0, 0),
new CriarEspada("Espada de Ferro", 2, 100, 1),
new CriarEspada("Espada de Aço", 4, 400, 2),
new CriarEspada("Espada de Adamantium", 8, 800, 3),
new CriarEspada("Espada de Ferro Meteórico", 32, 2400, 4),
new CriarEspada("Espada Lendária", 64, 5000, 5),
]



player = new Object
    player.nome = "Koldway42"
    player.arma = espadas[0]
    player.atk = player.arma.atk
    player.dinheiro = 0

const show_status = () => {
    document.getElementById("clicks").innerHTML = `Dinheiro: ${player.dinheiro}`
    document.getElementById("nome").innerHTML = `nome: ${player.nome}`
    document.getElementById("arma").innerHTML = `Arma: ${player.arma.nome}`
}
show_status();
const button = () => {
    document.getElementById("click-GUI").onclick = (e) => {
        player.dinheiro = player.dinheiro + player.atk;
        document.getElementById("clicks").innerHTML = `Dinheiro: ${player.dinheiro}`
        
    }
}
button()
const compra_de_arma = () => {
    const espadas_html = document.querySelectorAll("[espada]")
    espadas_html[0].onclick = (e) => {
        if(espadas[1].preco < player.dinheiro){
            player.arma = espadas[1]
            player.dinheiro = player.dinheiro - espadas[1].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[0].style = "display: none; transition: 0.5s"
        }
    }
    espadas_html[1].onclick = (e) => {
        if(espadas[2].preco < player.dinheiro){
            player.arma = espadas[2]
            player.dinheiro = player.dinheiro - espadas[2].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[1].style = "display: none; transition: 0.5s"
        }
    }
    espadas_html[2].onclick = (e) => {
        if(espadas[3].preco < player.dinheiro){
            player.arma = espadas[3]
            player.dinheiro = player.dinheiro - espadas[3].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[2].style = "display: none; transition: 0.5s"
        }
    }
    espadas_html[3].onclick = (e) => {
        if(espadas[4].preco < player.dinheiro){
            player.arma = espadas[4]
            player.dinheiro = player.dinheiro - espadas[4].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[3].style = "display: none; transition: 0.5s"
        }
    }
    espadas_html[4].onclick = (e) => {
        if(espadas[5].preco < player.dinheiro){
            player.arma = espadas[5]
            player.dinheiro = player.dinheiro - espadas[5].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[4].style = "display: none; transition: 0.5s"
        }
    }
}
compra_de_arma()