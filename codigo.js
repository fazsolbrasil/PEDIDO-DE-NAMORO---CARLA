document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const question = document.getElementById('question');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const statusDiv = document.getElementById('status');
    let noClickCount = 0;

    envelope.addEventListener('click', () => {
        envelope.classList.add('opened-envelope');
        setTimeout(() => {
            envelope.style.display = 'none';
            question.classList.remove('hidden');
            question.classList.add('reveal-question');
        }, 1000);
    });

    yesButton.addEventListener('click', () => {
        document.body.classList.add('pink-theme');
        noButton.style.display = 'none';
        statusDiv.innerHTML = '<p class="status">Você tomou a decisão correta!</p>';
        showDoll();
        startHeartAnimation();
    });

    noButton.addEventListener('click', () => {
        noClickCount++;
        moveButton(noButton);
        if (noClickCount >= 3) {
            statusDiv.innerHTML = '<p class="status">Você está prestes a se irritar...</p>';
        }
    });

    function moveButton(button) {
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        
        let x, y;
        
        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
        } while (
            x + buttonWidth > containerRect.left &&
            x < containerRect.right &&
            y + buttonHeight > containerRect.top &&
            y < containerRect.bottom
        );

        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }

    function startHeartAnimation() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart';
            heart.style.left = `${Math.random() * window.innerWidth}px`;
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, 300);
    }

    function showDoll() {
        const doll = document.createElement('div');
        doll.innerHTML = '🥰';
        doll.className = 'doll';
        document.body.appendChild(doll);
    }
});
