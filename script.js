const slides = document.querySelectorAll('.slide');
let current = 0;
let timer;
let timeLeft = 30;

function showSlide(index){
  slides.forEach(s=>s.classList.remove('active'));
  slides[index].classList.add('active');

  resetTimer();
}

function nextSlide(){
  if(current < slides.length - 1){
    current++;
    showSlide(current);
  }
}

function checkAnswer(btn,correct){
  if(correct){
    btn.classList.add('correct');
    setTimeout(()=>{
      nextSlide();
    },1000);
  }else{
    btn.classList.add('wrong');
  }
}

function resetTimer(){
  clearInterval(timer);

  const timerEl = document.getElementById('timer');
  if(!timerEl) return;

  timeLeft = 30;
  timerEl.textContent = timeLeft;

  timer = setInterval(()=>{
    timeLeft--;
    timerEl.textContent = timeLeft;

    if(timeLeft <= 0){
      clearInterval(timer);
    }
  },1000);
}

function restartGame(){
  current = 0;
  showSlide(0);
}

showSlide(0);
