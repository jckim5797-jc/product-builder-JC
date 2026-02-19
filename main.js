document.addEventListener('DOMContentLoaded', () => {
    const numbersWrapper = document.getElementById('numbers-wrapper');
    const generateButton = document.getElementById('generate');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    generateButton.addEventListener('click', () => {
        generateAllSets();
    });

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    function generateAllSets() {
        numbersWrapper.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const setDiv = document.createElement('div');
            setDiv.classList.add('numbers-set');
            numbersWrapper.appendChild(setDiv);
            generateSet(setDiv, i);
        }
    }

    function generateSet(container, setIndex) {
        const lottoNumbers = new Set();
        while (lottoNumbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            lottoNumbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, numIndex) => {
            // Delay based on both set and number index for a nice sequential reveal
            setTimeout(() => {
                const numberDiv = document.createElement('div');
                numberDiv.classList.add('number');
                numberDiv.textContent = number;
                container.appendChild(numberDiv);
            }, (setIndex * 150) + (numIndex * 100));
        });
    }
});
