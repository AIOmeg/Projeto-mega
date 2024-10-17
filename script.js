let currentLevel = 1;
const feedbackElement = document.getElementById('feedback');
const levelTitle = document.getElementById('level-title');

const levels = [
    {
        message: 'Nível 1: Clique no círculo azul',
        correctShapeId: 'blue-circle',
        successMessage: 'Parabéns! Você completou o nível 1!'
    },
    {
        message: 'Nível 2: Clique no quadrado verde',
        correctShapeId: 'green-square',
        successMessage: 'Parabéns! Você completou o nível 2!'
    },
    {
        message: 'Nível 3: Clique na estrela amarela',
        correctShapeId: 'yellow-star',
        successMessage: 'Parabéns! Você completou o nível 3!'
    }
];

function updateLevel() {
    const level = levels[currentLevel - 1];
    levelTitle.textContent = level.message;
    feedbackElement.textContent = '';
}

document.querySelectorAll('.shape').forEach(shape => {
    shape.addEventListener('click', function () {
        const level = levels[currentLevel - 1];
        if (this.id === level.correctShapeId) {
            feedbackElement.textContent = level.successMessage;
            if (currentLevel < 3) {
                setTimeout(() => {
                    currentLevel++;
                    updateLevel();
                }, 1000);
            } else {
                feedbackElement.textContent += ' Você terminou o jogo!';
            }
        } else {
            feedbackElement.textContent = 'Tente novamente!';
        }
    });
});

updateLevel();

