//make an array with all the quiz questions 
const quizData = [
    {
        question: "Inside which HTML element does the JS link belong?",
        a: 'the good part',
        b: 'the header',
        c: 'the bottom of the body',
        d: 'inside the footer tags',
        correct: 'c',
        incorrect: ['a','b','d']
    }, {
        question: 'How do you grab an HTML element by its ID in Javascript?',
        a: 'document.getElementById',
        b: 'document.getThatId',
        c: 'get.elementid',
        d: 'document.elementId',
        correct: 'a',
        incorrect: ['b','c','d']
    }, {
        question: 'How would you write a message in an alert box?',
        a: 'alert(message goes here)',
        b: 'alert message[message goes here]',
        c: 'alertbox(message)',
        d: 'alertmsg{message}',
        correct: 'a',
        incorrect: ['b','c','d']
    }, {
        question: 'What is the purpose of a for loop?',
        a: 'Getting fruit loops from the store',
        b: 'repeating a block of code for a known number of times',
        c: 'adding the css properties to the file',
        d: 'storing data',
        answer: 'b',
        incorrect: ['a','c','d']
    }, {
        question: 'How do you create a function in Javascript?',
        a: 'function = myFunction[]',
        b: 'function: function',
        c: 'function = myFunction()',
        d: 'function.start = functionName',
        correct: 'c',
        incorrect: ['a','b','d']
    }
];

//select html elements in js 
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
//grab the start button for the quiz
const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
//declare timer as a variable  
var timer = 60/2


let currentQuiz = 0; //start on question 1, array item zero
let answer = undefined;
let score = 0;

//hide quiz container until start button is clicked 
startBtn.addEventListener("click", () => {
    document.getElementById("quiz").style.display = "flex";
    document.getElementById("startMenu").style.display = "none";
})



//load quiz function 
loadQuiz();
function loadQuiz() {
    //need to call deselectAnswers() up here so it knows to do that when the quiz is loaded initially 
    deselectAnswers();

    //timer function to start at the beginning of the quiz 
    function startTimer(duration, display) {
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = 0;
                quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} questions correctly.<button onClick="location.reload()">Play Again?</button>
                </h2>`  
            }
        }, 1000);
    }


    
    
    //fixed this to where the timer only starts if the start button is clicked
    startBtn.addEventListener("click", () => {
        var time = 60 / 2, // your time in seconds here
            display = document.querySelector('#safeTimerDisplay');
        startTimer(time, display);
    });

    
   const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//function to get the answer option from the generated html 
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
}

//function to deselect the previous answer so the same bubble isnt filled on the next question 
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
 

//when user clicks submit button then the next question is displayed 
submitBtn.addEventListener("click", () => {
    //check to see answer 
    const answer = getSelected();
    
        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++;
            } else {
                timer -= 5;
                display.textContent = timer; 
            }

            currentQuiz++;
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} questions correctly.<button onClick="location.reload()">Play Again?</button>
                </h2>`
            }
        }
});





