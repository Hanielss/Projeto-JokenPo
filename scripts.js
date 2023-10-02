
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')



let humanScoreNumber = 0
let machineScoreNumber = 0


/*
let img=document.createElement('img');
img.src = "https://i.gifer.com/WDZe.gif";
document.body.appendChild(img);
img.style.borderRadius = "300px";
img.style.border = "3px solid black"*/




const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const ramdomNumber = Math.floor(Math.random() * 3)



    return choices[ramdomNumber]

}

const playTheGame = (human, machine) => {

   

    console.log('Humano: ' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Draw in the Game"
    } else if ((human === 'paper' && machine === 'rock')
        || (human === 'rock' && machine === 'scissors')
        || (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = 'YOU WIN'



    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "MACHINE WIN"
    }



}

