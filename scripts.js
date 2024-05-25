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
        const questionRect = question.getBoundingClientRect();
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        // Define limites de movimentação próximo à pergunta
        const padding = 20; // Espaço extra em pixels ao redor da pergunta
        const minX = questionRect.left - containerRect.left - buttonWidth - padding;
        const maxX = questionRect.right - containerRect.left + padding;
        const minY = questionRect.top - containerRect.top - buttonHeight - padding;
        const maxY = questionRect.bottom - containerRect.top + padding;

        // Calcular novas posições aleatórias dentro dos limites
        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - minY) + minY;

        // Definir nova posição do botão
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
