// My code

const player1btn = document.querySelector('#p1btn')

let p1score = 0;
const scorecard1 = document.querySelector('#p1score')
player1btn.addEventListener('click', function () {
    p1score++;
    scorecard1.innerText = p1score;
})

const player2btn = document.querySelector('#p2btn')

let p2score = 0;
const scorecard2 = document.querySelector('#p2score')
player2btn.addEventListener('click', function () {
    p2score++;
    scorecard2.innerText = p2score;
})

let max = 0;
const optionValue = document.querySelector('#maxpoints')
console.log(optionValue)
max = optionValue.length;
console.log(max);

const disableButton = document.querySelectorAll('.btns')
if (optionValue[0].value === "") {
    for (let i = 0; i < disableButton.length-1; i++){
        disableButton[i].disabled = true;
    }
}

optionValue.addEventListener('change', function(){
    for (let i of optionValue){ 
        console.log(i.value)
    if (i.value !== ""){
        for (let i of disableButton){
            i.disabled = false;
        }
    }
}
})

const p1b = document.querySelector('#p1btn')
const p1s = document.querySelectorAll('#p1score')[0]
p1b.addEventListener('click',function(){
    if (parseInt(p1s.innerText) === max - 1){
        for (let i = 0; i < disableButton.length-1; i++){
            disableButton[i].disabled = true;
        }
        p1s.style.color = `rgb(${0}, ${255}, ${0})`;
        p2s.style.color = `rgb(${255}, ${0}, ${0})`;
        setTimeout(() => {
            alert("Game Over!\nPlayer 1 wins")
        })
        setTimeout(() => {
            reinitialisation();
        })
    }
})

const p2b = document.querySelector('#p2btn')
const p2s = document.querySelectorAll('#p2score')[0]
p2b.addEventListener('click',function(){
    if (parseInt(p2s.innerText) === max - 1){
        for (let i = 0; i < disableButton.length-1; i++){
            disableButton[i].disabled = true;
        }
        p2s.style.color = `rgb(${0}, ${255}, ${0})`;
        p1s.style.color = `rgb(${255}, ${0}, ${0})`;
        setTimeout(() => {
            alert("Game Over!\nPlayer 2 wins")
        })
        setTimeout(() => {
            reinitialisation();
        })
    }    
})

const rb = document.querySelector('#resetbtn')
rb.addEventListener('click', function(){
    reinitialisation();
})

function reinitialisation(){
    p1score = 0;
    p2score = 0;
    scorecard1.innerText = 0;
    scorecard2.innerText = 0;
    optionValue[0].selected = true;
    p2s.style.color = `rgb(${0}, ${0}, ${0})`;
    p1s.style.color = `rgb(${0}, ${0}, ${0})`;
    for (let i = 0; i < disableButton.length-1; i++){
        disableButton[i].disabled = false;
    }
}

// Teachers code

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}