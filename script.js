document.addEventListener('DOMContentLoaded', function () {
    const endDate = new Date(2024, 0, 13, 15, 0, 0); 

    const daysElement = document.getElementById('days').querySelector('.timer-value');
    const hoursElement = document.getElementById('hours').querySelector('.timer-value');
    const minutesElement = document.getElementById('minutes').querySelector('.timer-value');
    const secondsElement = document.getElementById('seconds').querySelector('.timer-value');


    const timerInterval = setInterval(function () {
        const currentDate = new Date();

        const remainingTime = endDate - currentDate;


        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (remainingTime < 0) {
            clearInterval(timerInterval); 
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
        }
    }, 1000); 
});



const questionContainer = document.getElementById('question-container');
const noBtn = document.getElementById('noBtn');
const resultText = document.getElementById('result-text');

function runAway() {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const newX = Math.random(2200) * maxX;
  const newY = Math.random(300) * maxY;

  noBtn.style.transition = 'transform 0.3s ease-in-out';
  noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
}

function redirectToLink() {
  questionContainer.style.display = 'none'; // Сховати весь блок "Ти робот?"
  resultText.style.display = 'block'; // Показати текст "Я так і знав)"

  // Змініть URL на той, на який ви хочете перейти
  setTimeout(() => {
    window.location.href = 'https://www.youtube.com/watch?v=qLjWhZR8t5Q'; // Приклад посилання
  }, 1000); // Змінить час за потреби
}
