const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const buttonsDiv = document.querySelector('.buttons');
const successMessage = document.getElementById('successMessage');

// Uciekający przycisk NIE
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Akcja po kliknięciu TAK
yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    buttonsDiv.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Prosta zmiana tła na bardziej serduszkowe
    document.body.style.background = "#ff4d6d";
});