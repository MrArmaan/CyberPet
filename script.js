// const startBtn = document.getElementById('startBtn')
// const start = document.getElementById('start')
// let name = document.getElementById('name')
// let character = document.getElementById('character')
// let hp = document.getElementById('hp')
// let happiness = document.getElementById('happiness')
// let feed= document.getElementById('feed')
// let stamina = document.getElementById('stamina')
// let hug = document.getElementById('hug')
// const character1 = document.getElementById('character1')
// const character2 = document.getElementById('character2')
// const character3 = document.getElementById('character3')
// const character4 = document.getElementById('character4') 

// //listen for button click on start on startpage


// start.addEventListener('click', (click) => {
//     if (click) {
//         name = prompt("Please enter your name:")}
//         start.animation('2s ease 0s 1 normal forwards')
//     })
    
    


//     // 


    
// // const animateBannerText = (texts) => {
// //     const bannerText = document.getElementById('bannerText');
// //     let currentIndex = 0;

// //     setInterval(() => {
// //         bannerText.textContent = texts[currentIndex];
// //         currentIndex = (currentIndex + 1) % texts.length;
// //     }, 3000);
// // }
// // let selectedCharacter = "";
// // let playerName = "";

// // const startGame = () => {

// //     // Get the selected character
// //     selectedCharacter = document.querySelector(".character:hover");
// //     if (!selectedCharacter) {
// //         alert("Please choose a character!");
// //         return;
// //     }

// //     // Get the player's name
// //     playerName = document.getElementById("characterName").value.trim();
// //     if (!playerName) {
// //         alert("Please name your character!");
// //         return;
// //     }

// //     // Display confetti with the player's chosen name
// //     displayConfetti(`You've adopted ${playerName}!`);

// //     // Hide character selection section and show Tamagotchi-style game section
// //     document.querySelector(".game-section").style.display = "none";
// //     document.getElementById("tamagotchiSection").style.display = "block";
// // }

// // const displayConfetti = (message) => {
// //     const confetti = document.getElementById("confetti");
// //     confetti.innerText = message;
// //     confetti.style.display = "block";
// //     setTimeout(() => {
// //         confetti.style.display = "none";
// //     }, 3000);
// // }

// // const feedMe = () => {
// //     // Implement logic for feeding the Saibāpetto
// //     // Update the stats bars accordingly
// // }

// // const playWithMe = () => {
// //     // Implement logic for playing with the Saibāpetto
// //     // Update the stats bars accordingly
// // }

// // const cuddleMe = () => {
// //     // Implement logic for cuddling with the Saibāpetto
// //     // Update the stats bars accordingly
// // }

// // const sendMeToWar = () => {
// //     // Implement logic for sending the Saibāpetto to war
// //     // Update the stats bars accordingly
// // }

let health = 10;
let happiness = 10;
let stamina = 10;
let strength = 10;

function updateBars() {
    document.getElementById('health-bar').style.width = health * 10 + 'px';
    document.getElementById('happiness-bar').style.width = happiness * 10 + 'px';
    document.getElementById('stamina-bar').style.width = stamina * 10 + 'px';
    document.getElementById('strength-bar').style.width = strength * 10 + 'px';
}

function playWithMe() {
    decreaseRandomStat();
    happiness++;
    checkGameOver();
    updateBars();
}

function feedMe() {
    decreaseRandomStat();
    health++;
    checkGameOver();
    updateBars();
}

function cuddleMe() {
    decreaseRandomStat();
    happiness++;
    checkGameOver();
    updateBars();
}

function sendToWar() {
    decreaseRandomStat();
    stamina--;
    strength++;
    checkGameOver();
    updateBars();
}

function decreaseRandomStat() {
    const stats = ['health', 'happiness', 'stamina', 'strength'];
    const randomStat = stats[Math.floor(Math.random() * stats.length)];

    switch (randomStat) {
    case 'health':
        if (health > 0) health--;
        break;
    case 'happiness':
        if (happiness > 0) happiness--;
        break;
    case 'stamina':
        if (stamina > 0) stamina--;
        break;
    case 'strength':
        if (strength > 0) strength--;
        break;
    }
}



function checkGameOver() {
    if (health === 0 || happiness === 0 || stamina === 0 || strength === 0) {
    const resetConfirmed = confirm("Oh no! You killed me. Game over!\nDo you want to reset and start again?");
    if (resetConfirmed) {
        resetGame();
    }
    }
}

function resetGame() {
    health = 10;
    happiness = 10;
    stamina = 10;
    strength = 10;
    updateBars();
}

updateBars();