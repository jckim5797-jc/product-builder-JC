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
        // Generate 7 unique numbers (6 main + 1 bonus)
        while (lottoNumbers.size < 7) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            lottoNumbers.add(randomNumber);
        }

        const allNumbers = Array.from(lottoNumbers);
        const bonusNumber = allNumbers.pop(); // The 7th number is the bonus
        const sortedNumbers = allNumbers.sort((a, b) => a - b);

        // Display 6 main numbers
        sortedNumbers.forEach((number, numIndex) => {
            setTimeout(() => {
                const numberDiv = document.createElement('div');
                numberDiv.classList.add('number');
                numberDiv.textContent = number;
                container.appendChild(numberDiv);
            }, (setIndex * 150) + (numIndex * 100));
        });

        // Display '+' sign and bonus number
        setTimeout(() => {
            const plusSpan = document.createElement('span');
            plusSpan.classList.add('plus-sign');
            plusSpan.textContent = '+';
            container.appendChild(plusSpan);

            const bonusDiv = document.createElement('div');
            bonusDiv.classList.add('number', 'bonus');
            bonusDiv.textContent = bonusNumber;
            container.appendChild(bonusDiv);
        }, (setIndex * 150) + (6 * 100) + 200);
    }
});
