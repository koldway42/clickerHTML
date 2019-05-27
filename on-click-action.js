const player = {
    name: "Player",
    money: 0,
    weapon: null,
    level: 1,
    atk() {
        return this.level * 10;
    },
    xp: 0,
    max_xp: 1200,
    CPS: 0,
    actual_enemy: null
}

function random_number_generator (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function weapon_creator (name, attack_multiplier, price, level) {
    this.name = name;
    this.atk = () => {
        return (player.atk() * attack_multiplier) + player.atk();
    }
    this.price = price;
    this.level = level;
    this.avaibility = false;

    this.unlocked = () => {
        if(player.level >= this.level) {
            this.avaibility = true;
        }else{
            this.avaibility = false;
        }
    }
}

const weapons = [
    new weapon_creator("Starter Sword", 0.05, 0, 0),
    new weapon_creator("Tin Sword", 0.15, 400, 1),
    new weapon_creator("Iron Sword", 0.30, 800, 1),
    new weapon_creator("Steel Sword", 0.60, 1800, 1),
    new weapon_creator("Reinforced Steel Sword", 1, 2400, 5),
    new weapon_creator("Golden Sword", 1.15, 3000, 5),
]

function monster_creator(name, hp, level, boss, reward) {
    this.name = name;
    this.total_hp = hp;
    this.hp = hp;
    this.level = level;
    this.boss = boss;
    this.reward = reward;
    this.avaibility = false;
    

    this.unlocked = () => {
        if(player.level >= this.level) {
            this.avaibility = true;
        }else{
            this.avaibility = false;
        }
    }
}
const monsters = [
    new monster_creator("Spider", 500, 0, false, 50),
    new monster_creator("Goblin", 1000, 0, false, 100),
    new monster_creator("Hobgoblin", 2500, 2, true, 200),
    new monster_creator("Skeleton", 1300, 2, false, 100),
    new monster_creator("Cursed Wolf", 1500, 5, false, 200),
    new monster_creator("Cursed Bear", 3000, 5, true, 300),
]

function perk_creator (name, CPS, price, level) {
    this.name = name;
    this.CPS = CPS;
    this.price = price;
    this.level = level;
    this.avaibility = false;

    this.unlocked = () => {
        if(player.level >= this.level) {
            this.avaibility = true;
        }else{
            this.avaibility = false;
        }
    }

    this.buy = () => {
        player.CPS = player.CPS + this.CPS;
        refresh_player_status();
    }
}

const perks = [
    new perk_creator("Adventurer", 1, 50, 3),
    new perk_creator("Mercenary", 4, 100, 5),
]

function select_enemy() {
    let random_monster = random_number_generator(1, monsters.length + 1);
    random_monster--

    player.actual_enemy = monsters[random_monster];
    player.actual_enemy.unlocked()

    if(!player.actual_enemy.avaibility || player.actual_enemy.boss){
        select_enemy();
    }
    refresh_monster_life();
    refresh_player_status();
}

const attack_monster = () => player.actual_enemy.hp = player.actual_enemy.hp - player.weapon.atk();

const respawn_monster = () => player.actual_enemy.hp = player.actual_enemy.total_hp;

function refresh_monster_life() {
    const hp_bar = document.getElementById("remaining-hp");
    const monster_name = document.querySelector(".play-area p");

    hp_bar.style.width = `${((player.actual_enemy.hp * 100) / player.actual_enemy.total_hp)}%`
    monster_name.innerHTML = `${player.actual_enemy.name}(Level: ${player.actual_enemy.level})`;

    if(player.actual_enemy.hp >= 0) {
        hp_bar.innerHTML = player.actual_enemy.hp;
    }else {
        hp_bar.innerHTML = 0;
        hp_bar.style.width = `0`
    }
}

function refresh_player_status() {
    const player_name = document.getElementById("player-name")
    const player_level = document.getElementById("player-level")
    const player_xp = document.getElementById("player-xp")
    const player_weapon = document.getElementById("player-weapon")
    const player_money = document.getElementById("player-money")

    player_name.innerHTML = player.name;
    player_level.innerHTML = `Level: ${player.level} (CPS:${player.CPS})`;
    player_xp.innerHTML = `XP: ${player.xp}/${player.max_xp}`
    player_weapon.innerHTML = `Weapon: ${player.weapon.name} <br /> (ATK: ${player.weapon.atk()})`;
    player_money.innerHTML = `Money: ${player.money} <br /> &nbsp`;
}

function endgame() {
    player.money = player.money + player.actual_enemy.reward;
    player.xp = player.xp + (player.actual_enemy.reward * 3);

    if(player.xp >= player.max_xp){
        player.level++;
        player.max_xp = Math.floor(player.max_xp * 2.2);
    }
}


function on_button_click() {
    const button = document.getElementById("click-GUI");

    button.onclick = e => {
        if(player.actual_enemy.hp >= 0) {
            attack_monster();
            refresh_monster_life();
        }else {
            respawn_monster();
            endgame();
            select_enemy();
        }
    }
}

setInterval(() => {
        if(player.actual_enemy.hp >= 0) {
            player.actual_enemy.hp = player.actual_enemy.hp - player.CPS ;
            refresh_monster_life();
        }else {
            respawn_monster();
            endgame();
            select_enemy();
        }
}, 1000);

function first_run() {
    player.weapon = weapons[0];
    select_enemy();
    on_button_click();
}

first_run();