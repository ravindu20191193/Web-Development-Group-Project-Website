// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {	
		//Q1
        question : "Which England player took the first penalty in the shoot-out vs Germany in the 1996 European Championship semi final?",
        imgSrc : "Images/logo.png",
        choiceA : "Stuart Pearce",
        choiceB : "David Platt",
        choiceC : "Alan Shearer",
        correct : "C"
    },{
        //Q2
		question : "Which of these players scored the first Golden Goal in World Cup history?",
        imgSrc : "Images/logo.png",
        choiceA : "Henri Camara",
        choiceB : "Laurent Blanc",
        choiceC : "Ilhan Mansiz",
        correct : "B"
    },{
        //Q3
		question : "Who scored the first goal for Arsenal under Arsene Wenger?",
        imgSrc : "Images/logo.png",
        choiceA : "Dennis Bergkamp",
        choiceB : "Ian Wright",
        choiceC : "Lee Dixon",
        correct : "B"
    },{
        //Q4
		question : "Of the following, which of these countries was first to win the Copa América?",
        imgSrc : "Images/logo.png",
        choiceA : "Columbia",
        choiceB : "Paraguay",
        choiceC : "Argentina",
        correct : "C"
    },{
        //Q5
		question : "Which of these players scored the first goal of the 2010 World Cup?",
        imgSrc : "Images/logo.png",
        choiceA : "Daniel DE Rossi",
        choiceB : "Siphiwe Tshabalala",
        choiceC : "Rafael Márquez",
        correct : "B"
    },{
        //Q6
		question : "Which of these clubs played in the first season of the Premier League?",
        imgSrc : "Images/logo.png",
        choiceA : "Crystal Palace",
        choiceB : "West Ham United",
        choiceC : "Swindon Town",
        correct : "A"
    },{
        //Q7
		question : "Which country hosted the first African Cup of Nations?",
        imgSrc : "Images/logo.png",
        choiceA : "Tunisia",
        choiceB : "Sudan",
        choiceC : "Ethiopia",
        correct : "B"
    },{
        //Q8
		question : "Which of these teams played in the semi-finals of the first Europa League (2010)?",
        imgSrc : "Images/logo.png",
        choiceA : "Liverpool",
        choiceB : "Valencia",
        choiceC : "Lille",
        correct : "A"
    },{
        //Q9
		question : "Of the following, which of these players was first to be awarded the World Cup Golden Ball award?",
        imgSrc : "Images/logo.png",
        choiceA : "Oliver Kahn",
        choiceB : "Lionel Messi",
        choiceC : "Zinedine Zindane",
        correct : "A"
    },{
        //Q10
		question : "Which of these countries competed in the first Women's World Cup?",
        imgSrc : "Images/logo.png",
        choiceA : "Canada",
        choiceB : "Nigeria",
        choiceC : "England",
        correct : "B"
    }
];

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);
start.style.backgroundImage = "url('Images/bg.png')"; 


// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score+=2;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
		score-=1;
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of marks as a percentage of the number of total marks that is possible to be obtained
    //const scorePerCent = Math.round(100 * score/20); //20 is the maximum mark obtainable
	// backgroundColor  change
	
    
    // choose the bgColor based on the scorePerCent
    let bgColor = 
              (score >= 10) ?  "#d3fc74"  :
              (score >= 0) ?  "#fafc74"  :  "#fc8874"  ;
    
    //scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML = "<p>" + score + "/20</p>" ;
	scoreDiv.style.backgroundColor = bgColor
}





















