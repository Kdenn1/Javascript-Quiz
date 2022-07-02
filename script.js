//make an array with all the quiz questions 
const quizData = [
    {
        question: "Inside which HTML element does the JS link belong?",
        a: 'the good part',
        b: 'the header',
        c: 'the bottom of the body',
        d: 'both B and C',
        correct: 'c'
    }, {
        question: 'How do you grab an HTML element by its ID in Javascript?',
        a: 'document.getElementById',
        b: 'document.getThatId',
        c: 'get.elementid',
        d: 'document.elementId',
        correct: 'a'
    }, {
        question: 'How would you write a message in an alert box?',
        a: 'alert(message goes here)',
        b: 'alert message[message goes here]',
        c: 'alertbox(message)',
        d: 'alertmsg{message}',
        correct: 'a'
    }, {
        question: 'What is the purpose of a for loop?',
        a: 'Getting fruit loops from the store',
        b: 'repeating a block of code for a known number of times',
        c: 'adding the css properties to the file',
        d: 'storing data',
        answer: 'b'
    }, {
        question: 'How do you create a function in Javascript?',
        a: 'function = myFunction[]',
        b: 'function: function',
        c: 'function = myFunction()',
        d: 'function.start = functionName',
        correct: 'c'
    }
];

//select html elements in js 
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; //start on question 1, array item zero
let answer = undefined;
let score = 0;

//load quiz function 
loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            return answerEl.id;
        }
    });
    return undefined;
}

//when user clicks submit button then the next question is displayed 
submitBtn.addEventListener("click", () => {
    //check to see answer 
    const answer = getSelected();
    
        if(answer && answer === quizData[currentQuiz]) {
            currentQuiz++;
        }

    

    if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //TODO: show score out of 5
            alert("You stumbled across the finish line. Well done!");
        }
    }
);
