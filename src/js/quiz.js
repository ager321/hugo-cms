document.getElementById("check_answer").addEventListener("click", checkAnswers)

function checkAnswers()
{
    let questions = document.getElementById("questions").children;
    let numberOfCorrect = 0;
    let numberOfQuestions = questions.length;

    for (let i = 0; i < numberOfQuestions; i++) {
        if (checkQuestion(questions[i]))
        {
            numberOfCorrect++;
        }

    }



    showScore(numberOfQuestions, numberOfCorrect);

}


function showScore(maximum, scored) {
    document.getElementById("score").innerHTML = "You scored: " +  scored + "/" + maximum + " points!" ;
    document.getElementById("result_container").setAttribute("class", "");
}

function checkQuestion(questionReference)
{

    let answers = questionReference.children[2];
    let answerNumber = questionReference.getAttribute("correct-answer");
    answers = answers.getElementsByTagName('input');
    let index = -1;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            index = i;
            break;
        }

    }
    return (index + 1 == answerNumber)

}