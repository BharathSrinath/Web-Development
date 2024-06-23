const optionValue = document.querySelector('#maxpoints')
const disableButton = document.querySelectorAll('.btns')
if (optionValue[0].value === '0') {
    for (let i = 0; i < disableButton.length; i++) {
        disableButton[i].disabled = true;
    }
}

let max = 0;
optionValue.addEventListener('change', function () {
    max = parseInt(optionValue.value);
    for (let i of optionValue) {
        if (i.value !== '0') {
            for (let i of disableButton) {
                i.disabled = false;
            }
        }
    }
})

const player1btn = document.querySelector('#p1btn')
let p1score = 0;
const scorecard1 = document.querySelector('#p1score')
player1btn.addEventListener('click', function () {
    p1score++;
    scorecard1.innerText = p1score;
    checkGameOver(p1score, p2score);
})

const player2btn = document.querySelector('#p2btn')
let p2score = 0;
const scorecard2 = document.querySelector('#p2score')
player2btn.addEventListener('click', function () {
    p2score++;
    scorecard2.innerText = p2score;
    checkGameOver(p1score, p2score);
})

const rb = document.querySelector('#resetbtn')
rb.addEventListener('click', function () {
    reset();
})

const p1s = document.querySelectorAll('#p1score')[0]
const p2s = document.querySelectorAll('#p2score')[0]

function checkGameOver(p1Score, p2Score) {
    if (p1Score === max || p2Score === max) {
        for (let i = 0; i < disableButton.length - 1; i++) {
            disableButton[i].disabled = true;
        }
        p1s.style.color = `rgb(${0}, ${0}, ${255})`;
        p2s.style.color = `rgb(${255}, ${0}, ${0})`;
        setTimeout(() => {
            alert(`Game Over!\nPlayer ${p1Score === max ? '1' : '2'} wins`);
        });
        setTimeout(() => {
            reset();
        });
    }
}

function reset() {
    p1score = 0;
    p2score = 0;
    scorecard1.innerText = 0;
    scorecard2.innerText = 0;
    optionValue[0].selected = true;
    p2s.style.color = `rgb(${0}, ${0}, ${0})`;
    p1s.style.color = `rgb(${0}, ${0}, ${0})`;
    for (let i = 0; i < disableButton.length; i++) {
        disableButton[i].disabled = true;
    }
}