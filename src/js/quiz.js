document.getElementById("check_answer").addEventListener("click", checkAnswers)

function checkAnswers()
{
    let questions = document.getElementById("questions").children;

    for (let i = 0; i < questions.length; i++) {
        console.log(checkQuestion(questions[i]));
    }
}

function checkQuestion(questionReference)
{
    let answers = questionReference.children[2];
    let answerNumber = questionReference.getAttribute("correct-answer");

    let index = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            index = i;
            break;
        }

    }
    return (index + 1 == answerNumber)

}