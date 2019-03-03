const form = document.forms[0]
const user = document.querySelector(".user")
form.onsubmit = e => {
    e.preventDefault()
    let nickname
    let formData = new FormData(form)
    nickname = formData.get("nickname")
    player.nome = nickname.toString()
    user.style.display = "none"
    show_status()
}
function CriarEspada(nome = '',atk = 0,preco = 0, indice) {
    this.preco;
    this.atk;
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

const rnd = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min) + min);
}

alert("Você acorda em um mundo paralelo, sem lembranças de sua vida passada");
alert("Ao seu lado, há uma espada embainhada.");
alert("Presa nela há uma mensagem que diz:");
alert("Faça história.");
alert("Determinado, você começa a se aventurar nesse mundo desconhecido, em busca de dinheiro e espadas mais fortes");
player = new Object
    player.nome= "User"
    player.arma = espadas[0];
    player.atk = player.arma.atk;
    player.dinheiro = 0;

const show_status = () => {
    document.getElementById("clicks").innerHTML = `Dinheiro: ${player.dinheiro}`
    document.getElementById("nome").innerHTML = `nome: ${player.nome}`
    document.getElementById("arma").innerHTML = `Arma: ${player.arma.nome}`
}
show_status();
const button = () => {
    document.getElementById("click-GUI").onclick = (e) => {
        let random = rnd();
        player.dinheiro = player.dinheiro + player.atk;
        document.getElementById("clicks").innerHTML = `Dinheiro: ${player.dinheiro}`
        if(player.arma.nome === "Espada de Material Não Confiavel" && random <= 15){
            player.dinheiro = player.dinheiro + player.arma.atk;
            console.log("x2")
        }else if(player.arma.nome === "Espada de Thundera" && random <= 50){
            player.dinheiro = player.dinheiro + (player.arma.atk * 2);
            console.log("x3")
        }else if(player.arma.nome === "Espada de Tyr" && random <= 75){
            player.dinheiro = player.dinheiro + (player.arma.atk * 2);
            console.log("x3")
        }
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
        if(espadas[2].preco < player.dinheiro && player.arma.nome !== "Espada de Aspirante a Aventureiro"){
            player.arma = espadas[2]
            player.dinheiro = player.dinheiro - espadas[2].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[1].classList.add("desativar")
        }else if(espadas[2].preco < player.dinheiro && player.arma.nome === "Espada de Aspirante a Aventureiro"){
            player.arma = espadas[2]
            player.dinheiro = player.dinheiro - espadas[2].preco
            button()
            show_status()
            player.atk = player.arma.atk
            alert("A espada de material não confiável começa a brilhar, aparentemente ela tem um encantamento onde o usuario tem 15% de chance por clique de ganhar do dobro que ele ganharia normalmente.")
            espadas_html[1].classList.add("desativar")
        }else {
            alert("Você nao tem dinheiro para isso")
        }
    }
    espadas_html[2].onclick = (e) => {
        if(espadas[3].preco < player.dinheiro && player.arma.nome !== "Espada de Material Não Confiavel"){
            player.arma = espadas[3]
            player.dinheiro = player.dinheiro - espadas[3].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[2].classList.add("desativar")
        }else if(espadas[3].preco < player.dinheiro && player.arma.nome === "Espada de Material Não Confiavel"){
            player.arma = espadas[3]
            player.dinheiro = player.dinheiro - espadas[3].preco
            button()
            show_status()
            player.atk = player.arma.atk
            alert("Sua espada de material não confiável começa a brilhar com sua nova aquisição, ela se põe no ar e é logo em seguida absorvida pela espada de Thundera que então herda seu encantamento, mas o encantamento acabou sofrendo um melhoramento agora tendo 50% de chance de dar o TRIPLO de dano")
            espadas_html[2].classList.add("desativar")
        }else{
            alert("Você nao tem dinheiro para isso")
        }
    }
    espadas_html[3].onclick = (e) => {
        if(espadas[4].preco < player.dinheiro && player.arma.nome !== "Espada de Thundera"){
            player.arma = espadas[4]
            player.dinheiro = player.dinheiro - espadas[4].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[3].classList.add("desativar")
        }else if(espadas[4].preco < player.dinheiro && player.arma.nome === "Espada de Thundera"){
            player.arma = espadas[4]
            player.dinheiro = player.dinheiro - espadas[4].preco
            button()
            show_status()
            player.atk = player.arma.atk
            alert("Sua espada de Thundera começa a brilhar com sua nova aquisição, ela se põe no ar e é logo em seguida absorvida pela espada de Tyr que então herda seu encantamento, mas o encantamento acabou sofrendo um melhoramento agora tendo 75% de chance de dar o TRIPLO de dano")
            espadas_html[3].classList.add("desativar")
        }else{
            alert("Você nao tem dinheiro para isso")
        }
    }
    espadas_html[4].onclick = (e) => {
        if(espadas[5].preco < player.dinheiro && player.arma.nome === "Espada de Ferro Meteórico"){
            player.arma = espadas[5]
            player.dinheiro = player.dinheiro - espadas[5].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[4].classList.add("desativar")
            level2()
            level2_recriar()
            alert("Você olha para sua espada satisfeito com seu progresso")
            alert("Então percebe uma mensagem gravada em algum caractere que você conhece, mesmo não sabendo como")
            alert("-'Almeje o topo, onde você está é insuficiente, a terra que é a habitação dos deuses te aguarda...' - é o que a mensagem dizia")
            alert("Você se enche de determinação e começa a sua jornada, para enfrentar os deuses desse mundo.")
        }else if(espadas[5].preco < player.dinheiro && player.arma.nome === "Espada do Demonio Temporal"){
            player.arma = espadas[5]
            player.dinheiro = player.dinheiro - espadas[5].preco
            button()
            show_status()
            player.atk = player.arma.atk
            espadas_html[4].classList.add("desativar")
            level3()
            level3_recriar()
            alert("Após derrotar todos os Deuses, você descobre o mundo onde você vivia era na verdade uma fração mínima do mundo real, e esses deuses que você derrotou, na realidade eram considerados seres muito fracos nesse outro mundo.")
            alert("Você cai no menor continente desse novo mundo, e começa sua jornada nesse pedaço de terra desconhecido")
        }else if(espadas[5].preco < player.dinheiro && player.arma.nome === "Espada de Tyr"){
            espadas_html[4].classList.add("desativar")
            alert("Após alguns anos nesse continente, você se torna alguem conhecido e de muita influência venerado por muitos como o Deus do Novo mundo. Com isso você chama a atenção de Kratos, que logo começa a querer sua cabeça.")
            alert("Alguns Dias depois, alguém arromba as portas de sua casa. Kratos esta te desafiando, aceitar o desafio?")
            const kratos = document.querySelector("[Desafio]")
            kratos.style = "display: block;"
        }else {
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
    new CriarEspada("Espada do Demonio Temporal", 2048, 300000, 4),
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
function level3_recriar(){
    espadas.push(new CriarEspada("Espada do Deus Imperador", 4096, 500000, 5),
    new CriarEspada("Espada de Aspirante a Aventureiro", 8196, 2000000, 1),
    new CriarEspada("Espada de Material Não Confiavel", 24588, 3000000, 2),
    new CriarEspada("Espada de Thundera", 49176, 15000000, 3),
    new CriarEspada("Espada de Tyr", 98352, 50000000, 4),
    new CriarEspada("Blades of Chaos", 491760, 1200000000, 5))
    while(espadas.length > 6){
        espadas.shift()
    }
}
function level3(){
    const espadas = document.querySelectorAll("[espada]")
    const div_pai = document.querySelector(".player")
    espadas.forEach((e) => {
        div_pai.removeChild(e)
    })
    
    const espada_de_aventureiro_aspirante = document.createElement("div")
    espada_de_aventureiro_aspirante.setAttribute("espada", "")
    espada_de_aventureiro_aspirante.innerHTML = "Espada de Aspirante a Aventureiro"
    
    const espada_de_material_nao_confiavel = document.createElement("div")
    espada_de_material_nao_confiavel.setAttribute("espada", "")
    espada_de_material_nao_confiavel.innerHTML = "Espada de Material Não Confiavel"
    
    const espada_de_thundera = document.createElement("div")
    espada_de_thundera.setAttribute("espada", "")
    espada_de_thundera.innerHTML = "Espada de Thundera"
    
    const espada_de_tyr = document.createElement("div")
    espada_de_tyr.setAttribute("espada", "")
    espada_de_tyr.innerHTML = "Espada de Tyr"

    const Blades_of_Chaos = document.createElement("div")
    Blades_of_Chaos.setAttribute("espada","")
    Blades_of_Chaos.innerHTML = "Blades of Chaos"

    div_pai.appendChild(espada_de_aventureiro_aspirante)
    div_pai.appendChild(espada_de_material_nao_confiavel)
    div_pai.appendChild(espada_de_thundera)
    div_pai.appendChild(espada_de_tyr)
    div_pai.appendChild(Blades_of_Chaos)
    compra_de_arma()
}
function Desafio(){
    const sim = document.querySelector("[SIM]")
    const nao = document.querySelector("[NAO]")
    sim.onclick = () => {
        alert("Você aceita o desafio de Kratos que logo empunha sua Blades of Chaos e parte para cima de você")
        alert("Versão demo, foi mal, até semana que vem termino a batalha contra o kratos ;-;")
    }
    nao.onclick = () => {
        alert("Kratos decide partir para cima de você da qualquer forma. Você não tem escolha")
        alert("Versão demo, foi mal, até semana que vem termino a batalha contra o kratos ;-;") 
    }
}
Desafio()