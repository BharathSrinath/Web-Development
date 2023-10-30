const headsBtn = document.querySelector('.heads');
const coinHeads = document.querySelector('.coin-heads');

const tailsBtn = document.querySelector('.tails');
const coinTails = document.querySelector('.coin-tails');

headsBtn.addEventListener('click', function () {
  translateCoin()
})
tailsBtn.addEventListener('click', function () {
  translateCoin()
})

function translateCoin() {
  coinHeads.style.transform = 'translateY(400px)';
  coinHeads.style.transition = 'transform 1s';

  coinTails.style.transform = 'translateY(400px)';
  coinTails.style.transition = 'transform 1s';
  setTimeout(function(){
    const x = Math.floor(Math.random() * 2) + 1

    coinTails.style.transform = 'translateY(0) rotateX(9000deg)';
    coinTails.style.transition = 'transform 3s';
    headsBtn.classList.add('heads-hide');
    
    coinHeads.style.transform = 'translateY(0) rotateX(9000deg)';
    coinHeads.style.transition = 'transform 3s';
    tailsBtn.classList.add('tails-hide');

    setTimeout(function(){
    if (x == 1){ // tail
      console.log(x)
      coinTails.style.zIndex = '100'
      coinHeads.style.zIndex = '0'
    }
    else if(x == 2){ // head
      console.log(x)
      coinHeads.style.zIndex = '100'
      coinTails.style.zIndex = '0'
    }
  },1000)
  },1500)


}