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
            espadas_html[0].classList.add("desativar")
        } else {
            alert("Você nao tem dinheiro para isso")
        }
    }
    espadas_html[1].onclick = (e) => {
        if(espadas[2].preco < player.dinheiro){
            player.arma = espadas[2]
            player.dinheiro = player.dinheiro - espadas[2].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[1].classList.add("desativar")
        }else {
            alert("Você nao tem dinheiro para isso")
        }
    }
    espadas_html[2].onclick = (e) => {
        if(espadas[3].preco < player.dinheiro){
            player.arma = espadas[3]
            player.dinheiro = player.dinheiro - espadas[3].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[2].classList.add("desativar")
        }else{
            alert("Você nao tem dinheiro para isso")
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
        }else{
            alert("Você nao tem dinheiro para isso")
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
            level2()
            level2_recriar()
            alert("Você alcançou um novo patamar, nenhum ser mortal pode mais te derrotar. Você agora arranja uma briga com deuses!!!")
        }else{
            alert("Você nao tem dinheiro para isso")
        }
    }
}
compra_de_arma()
function level2_recriar(){
    espadas.push(new CriarEspada("Espada Lendária", 64, 5000, 5),
    new CriarEspada("Espada de Divindade", 128, 15000, 1),
    new CriarEspada("Espada da Tartaruga Espiritual", 256, 50000, 2),
    new CriarEspada("Espada dos Mil Caminhos", 512, 100000, 3),
    new CriarEspada("Espada do Demonio Temporal", 2048, 400000, 4),
    new CriarEspada("Espada do Deus Imperador", 4096, 500000, 5))
    while(espadas.length > 6){
        espadas.shift()
    }
}
function level2(){
    const espadas = document.querySelectorAll("[espada]")
    const div_pai = document.querySelector(".player")
    espadas.forEach((e) => {
        div_pai.removeChild(e)
    })
    
    const espada_de_divindade = document.createElement("div")
    espada_de_divindade.setAttribute("espada", "")
    espada_de_divindade.innerHTML = "Espada de Divindade"
    
    const espada_da_tartaruga_espiritual = document.createElement("div")
    espada_da_tartaruga_espiritual.setAttribute("espada", "")
    espada_da_tartaruga_espiritual.innerHTML = "Espada da Tartaruga Espiritual"
    
    const espada_dos_mil_caminhos = document.createElement("div")
    espada_dos_mil_caminhos.setAttribute("espada", "")
    espada_dos_mil_caminhos.innerHTML = "Espada dos Mil Caminhos"
    
    const espada_do_demonio_temporal = document.createElement("div")
    espada_do_demonio_temporal.setAttribute("espada", "")
    espada_do_demonio_temporal.innerHTML = "Espada do Demonio Temporal"

    const espada_do_deus_imperador = document.createElement("div")
    espada_do_deus_imperador.setAttribute("espada","")
    espada_do_deus_imperador.innerHTML = "Espada do Deus Imperador"

    div_pai.appendChild(espada_de_divindade)
    div_pai.appendChild(espada_da_tartaruga_espiritual)
    div_pai.appendChild(espada_dos_mil_caminhos)
    div_pai.appendChild(espada_do_demonio_temporal)
    div_pai.appendChild(espada_do_deus_imperador)
    compra_de_arma()
}