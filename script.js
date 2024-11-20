document.getElementById('submit-btn').addEventListener('click', function() {
    const answers = {
        question1: 'c',
        question2: 'b',
        question3: 'a',
        question4: 'd',
        question5: 'c',
        question6: 'b',
        question7: 'b',
        question8: 'c',
        question9: 'c',
        question10: 'd'
    };

    let score = 0;
    let resultHTML = '';
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected) {
            if (selected.value === answers[question]) {
                score++;
                resultHTML += `<p class="text-green-500">Question ${question.slice(-1)}: Correct</p>`;
            } else {
                resultHTML += `<p class="text-red-500">Question ${question.slice(-1)}: Incorrect (Correct answer: ${answers[question].toUpperCase()})</p>`;
            }
        } else {
            resultHTML += `<p class="text-red-500">Question ${question.slice(-1)}: No answer selected (Correct answer: ${answers[question].toUpperCase()})</p>`;
        }
    }

    document.getElementById('result').innerHTML = `You scored ${score} out of 10<br>${resultHTML}`;
});
