// Cat
const catSheet = document.getElementById("catSheet");
const catChar = document.getElementById("catChar")
// Troll
const trollSheet = document.getElementById("trollSheet");
const trollChar = document.getElementById("trollChar")
// Sasq
const sasqSheet = document.getElementById("sasqSheet");
const sasqChar = document.getElementById("sasqChar")
// dino
const dinoSheet = document.getElementById("dinoSheet");
const dinoChar = document.getElementById("dinoChar")

let catPositionX = -50
let catDiff = 350
const speed = 100


// ************************* Cat *************************
const catStartAnimation = (catPositionX, catWidth, catHeight, catDiff) => {
  
  animationInterval = setInterval(() => {
    catSheet.style.backgroundPosition = `-${catPositionX}px -1680px`;
    catChar.style.width = `${catWidth}px`
    catChar.style.height = `${catHeight}px`
    if (catPositionX <  2053) {
      catPositionX = catPositionX + catDiff;
    } else {
      catPositionX = 0;
    }

  }, 100);
}

// catStartAnimation(0, 330, 380, 350)


// ************************* Cat Dead *************************
const catDead = (catPositionX, catWidth, catHeight, catDiff) => {
  
  animationInterval = setInterval(() => {
    catSheet.style.backgroundPosition = `-${catPositionX}px -1220px`;
    catChar.style.width = `${catWidth}px`
    catChar.style.height = `${catHeight}px`
    if (catPositionX <  1060) {
      catPositionX = catPositionX + catDiff;
    } else {
      catPositionX = 2100;
    }

  }, 100);
}

// catDead(40, 380, 380, 388)
// ************************* Cat happy  *************************

const catHappy = (catPositionX, catWidth, catHeight, catDiff) => {
  
  animationInterval = setInterval(() => {
    catSheet.style.backgroundPosition = `-${catPositionX}px -2090px`;
    catChar.style.width = `${catWidth}px`
    catChar.style.height = `${catHeight}px`
    if (catPositionX < 4200) {
      catPositionX = catPositionX + catDiff;
    } else {
      catPositionX = 1050;
    }

  }, 100);
}
// 

// catHappy(1100, 270, 380, 680)



// ************************* Troll *************************

let trollPositionX = 0
let trollDiff = 0

const trollStartAnimation = (trollPositionX, trollWidth, trollHeight, trollDiff) => {

  animationInterval = setInterval(() => {
    trollSheet.style.backgroundPosition= `-${trollPositionX}px -3160px`;
    trollChar.style.width = `${trollWidth}px`
    trollChar.style.height = `${trollHeight}px`

    if (trollPositionX <  2500) {
      trollPositionX = trollPositionX + trollDiff;
    } else {
      trollPositionX = 20
    }

  }, speed);
}

// trollStartAnimation(70, 490, 410, 518)

// ************************* Troll Dead *************************
const trollDead = (trollPositionX, trollWidth, trollHeight, trollDiff) => {

  animationInterval = setInterval(() => {
    trollSheet.style.backgroundPosition= `-${trollPositionX}px -1210px`;
    trollChar.style.width = `${trollWidth}px`
    trollChar.style.height = `${trollHeight}px`

    if (trollPositionX <  -1500) {
      trollPositionX = trollPositionX + trollDiff;
    } else {
      trollPositionX = 2430
    }

  }, 400);
}

// trollDead(120, 560, 410, 600)

// ************************* Troll Dead *************************
const trollHappy = (trollPositionX, trollWidth, trollHeight, trollDiff) => {

  animationInterval = setInterval(() => {
    trollSheet.style.backgroundPosition= `-${trollPositionX}px -2470px`;
    trollChar.style.width = `${trollWidth}px`
    trollChar.style.height = `${trollHeight}px`

    if (trollPositionX < 3000) {
      trollPositionX = trollPositionX + trollDiff;
    } else {
      trollPositionX = -500
    }

  }, speed);
}

// trollHappy(1500, 495, 410, 500)


// ************************* SASQ *************************

let sasqPositionX = -220
let sasqDiff = 468

const sasqStartAnimation = (sasqPositionX, sasqWidth, sasqHeight, sasqDiff) => {

  animationInterval = setInterval(() => {
    sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -1930px`;
    sasqChar.style.width = `${sasqWidth}px`
    sasqChar.style.height = `${sasqHeight}px`
    

    if (sasqPositionX <  4500) {
      sasqPositionX = sasqPositionX + sasqDiff;
    } else {
      sasqPositionX = -230;
    }

  }, speed);
}

// sasqStartAnimation(220, 400, 450, 435)

// ************************* SASq Dead *************************

const sasqDead = (sasqPositionX, sasqWidth, sasqHeight, sasqDiff) => {

  animationInterval = setInterval(() => {
    sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -790px`;
    sasqChar.style.width = `${sasqWidth}px`
    sasqChar.style.height = `${sasqHeight}px`
    

    if (sasqPositionX < 940) {
      sasqPositionX = sasqPositionX + sasqDiff;
    } else if(sasqPositionX > 940 && sasqPositionX === 2600) 
    {sasqPositionX = sasqPositionX + 550
    }else {
      sasqPositionX = 2950;
    }

  }, speed);
}

// sasqDead(220, 450, 450, 435)


// ************************* SASq Happy *************************

const sasqHappy = (sasqPositionX, sasqWidth, sasqHeight, sasqDiff) => {

  animationInterval = setInterval(() => {
    sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -1360px`;
    sasqChar.style.width = `${sasqWidth}px`
    sasqChar.style.height = `${sasqHeight}px`
    

    if (sasqPositionX < 2220) {
      sasqPositionX = sasqPositionX + sasqDiff;
    } else {
      sasqPositionX = 260;
    }

  }, speed);
}

// sasqHappy(280, 400, 450, 435)

// ************************* Dino *************************

let dinoPositionX = 220
let dinoDiff = 0

const dinoStartAnimation = (dinoPositionX, dinoWidth, dinoHeight, dinoDiff) => {

  animationInterval = setInterval(() => {
    dinoSheet.style.backgroundPosition= `-${dinoPositionX}px -1870px`;
    dinoChar.style.width = `${dinoWidth}px`
    dinoChar.style.height = `${dinoHeight}px`
    

    if (dinoPositionX <  758) {
      dinoPositionX = dinoPositionX + dinoDiff;
    } else {
      dinoPositionX = -390;
    }

  }, speed);
}

dinoStartAnimation(105, 440, 380, 489)


// ************************* Dino dead*************************



const dinoDead = (dinoPositionX, dinoWidth, dinoHeight, dinoDiff) => {

  animationInterval = setInterval(() => {
    dinoSheet.style.backgroundPosition= `-${dinoPositionX}px -1400px`;
    dinoChar.style.width = `${dinoWidth}px`
    dinoChar.style.height = `${dinoHeight}px`
    

    if (dinoPositionX <  2000) {
      dinoPositionX = dinoPositionX + dinoDiff;
    } else {
      dinoPositionX = 2300;
    }

  }, speed);
}

// dinoDead(100, 520, 380, 550)


// ************************* Dino happy*************************

const dinoHappy = (dinoPositionX, dinoWidth, dinoHeight, dinoDiff) => {

  animationInterval = setInterval(() => {
    dinoSheet.style.backgroundPosition= `-${dinoPositionX}px -560px`;
    dinoChar.style.width = `${dinoWidth}px`
    dinoChar.style.height = `${dinoHeight}px`
    dinoChar.style.transition = '5s'
    

    if (dinoPositionX <  1700) {
      dinoPositionX = dinoPositionX + dinoDiff;
    }  else {
      dinoPositionX = 100;
    }

  }, speed);
}

// dinoHappy(100, 500, 380, 450)