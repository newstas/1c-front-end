var optionsIterator;
var container = document.getElementById("container");
var options = [];
var question = document.getElementById("question");
var questionCounter = 0, correct =0;

function loadQuestion() {
    question.innerHTML = Questions[questionCounter].text;
    for(optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
        options[optionsIterator].innerHTML = 
            Questions[questionCounter].options[optionsIterator];
    }
}

function proceedAnswer(event) {
    var index = event.target.index;
    if(Questions[questionCounter].correct == index) {
        correct++;
    }
    questionCounter++;
    if(questionCounter == Questions.length) {
        document.body.innerHTML = "<h1>Правильных ответов: " + correct + " / " + Questions.length + "<h1>";
    } else {
        loadQuestion();
    }
}

for(optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
    var option = document.createElement("div");
    option.classList.add("panel", "panel--option");
    option.index = optionsIterator;
    option.addEventListener("click", proceedAnswer);
    container.appendChild(option);
    options.push(option);
}

loadQuestion();