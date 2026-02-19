document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers');
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', () => {
        generateNumbers();
    });

    function generateNumbers() {
        numbersContainer.innerHTML = '';
        const lottoNumbers = new Set();

        while (lottoNumbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            lottoNumbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const numberDiv = document.createElement('div');
                numberDiv.classList.add('number');
                numberDiv.textContent = number;
                numbersContainer.appendChild(numberDiv);
            }, index * 300);
        });
    }
});