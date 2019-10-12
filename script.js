// Create all necessary elements
var h2El = document.createElement("h2");
var descriptionEl = document.createElement("p");
var startButton = document.createElement("button");

// Record Score Elements
var initialsInput = document.createElement("input");
var initialsSubmit = document.createElement("button");

// High Score Elements
var scoreList = document.createElement("ul");
scoreList.setAttribute("class", "list-group mb-2");
var goBackbtn = document.createElement("button");;
var cleareScoresbtn = document.createElement("button");

// High Score
var scores = [];

scores = JSON.parse(localStorage.getItem("score"));

// Quiz Score
var quizScore = 0;

// Question Elements
var questionEl = document.createElement("h5");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");


//Main Area Elemenent
var quizEl = document.getElementById("quizArea");
var brEl = document.createElement("br");

// Boostrap elements
var row1 = document.createElement("div");
row1.setAttribute("class", "row");
var row2 = document.createElement("div");
row2.setAttribute("class", "row");
var row3 = document.createElement("div");
row3.setAttribute("class", "row");
var col1 = document.createElement("div");
var col2 = document.createElement("div");
var col3 = document.createElement("div");

// Variable Declations
var questionIndex = 0;
var questionNo = 1;
var score = 0;

//************************ CODE ************************

//viewFinalScore();

if (scores == null){
    scores = [];
    localStorage.setItem("score", JSON.stringify(scores));
}

start();

//************************ FUNCTIONS & EVENT LISTENSERS ************************


quizEl.addEventListener("click", function(event) {
    var element = event.target;

    // If that element is a button...
    if (element.matches("button") === true) {
      
        // Check what type of button it is. Start button, Answer Button, etc.
        var buttonType = element.getAttribute("data-btnType");

        if (buttonType == "start"){ // If button is the start button

            console.log("Start button Pressed");
            console.log("Current Scores Array: " + scores )
            clearScreen(); // Clears the screen
            quizEl.setAttribute("class","col-md-6 bg-light pt-2") // removed center alignment
            renderQuestion(questionIndex); // Renders first question
        }

        // If the button is an answer from a question
        if (buttonType == "answer1" || buttonType == "answer2" || buttonType == "answer3" || buttonType == "answer4"){

            console.log("Question Number: " + questionNo);
            console.log("Question Lenth: " + questions.length)
            if(questionNo < questions.length){
                // calls Answer Index from answers, and calls question answer
                var answerIndex = element.getAttribute("data-answerIndex");
                var userAnswer = questions[questionIndex].choices[answerIndex];
                var questionAnswer = questions[questionIndex].answer;

                console.log("Answer Index: " + answerIndex);
                console.log("User Answer: " + userAnswer);
                console.log("Question Answer: " + questionAnswer);

                // Compares user answer and question answer
                if (userAnswer == questionAnswer){
                    console.log("CORRECT");
                    // Add points if correct
                    quizScore = quizScore + 10;
                }

                clearScreen(); // clears screen
                questionIndex++; //goes to next question
                questionNo++;
                renderQuestion(questionIndex); // renders question
            }
            else{ // Will view final score once it reaches end of the questions array
                console.log("viewFinalScore");
                viewFinalScore();
                console.log("View final scores");
            }
        }

        // If button is the Go Back button
        if (buttonType == "goBack"){
            console.log("Back Button Pressed");
            clearScreen();

            // Resets all gloval variables back to start
            questionIndex = 0;
            questionNo = 1;
            score = 0;

            //start the first page.
            start();
        }

        // If button is the submit button on
        if (buttonType == "initialsSubmit"){
            console.log("Submit Button Press");
            console.log("recordScore");
            recordScore(); // Records the score
            console.log("Clear Screen");
            clearScreen(); // Clears the screen
            console.log("Render Scores");
            renderHighScores(); // renders all the scores from local storage
        }

        if (buttonType == "clearScores"){
            localStorage.clear(); // clears the local storage
            renderHighScores(); // rerenders the scores
        }

        console.log(quizScore);
    }
});


// Function for Start Screen - COMPLETE
function start(){

    // Clears screen of any elements
    clearScreen();

    
    // Setting all elements wthin Quiz Area
    quizEl.setAttribute("class","col-md-6 bg-light text-center pt-2")

    // Title
    h2El.textContent = "Code Quiz Challenge";
    h2El.setAttribute("class","text-center");
    quizEl.appendChild(h2El);

    // Descroption
    descriptionEl.textContent = "Answer as many questions correctly as possible within the allotted time. Any questions not answered correctly will deduct time. Good luck!";
    quizEl.appendChild(descriptionEl);

    //Start Button
    startButton.innerHTML = "Start!";
    startButton.setAttribute("type", "button");
    startButton.setAttribute("class","btn btn-primary mb-1");
    startButton.setAttribute("id","startButton");
    startButton.setAttribute("data-btnType", "start")
    quizEl.appendChild(startButton);
}

// Function to degenerate question - COMPLETE
function renderQuestion(num){

    // Display Question        
    questionEl.textContent = questions[num].title;
    questionEl.setAttribute("class", "m-2")
    quizEl.appendChild(questionEl);


    console.log(questions[0].title);
    console.log(questions[0].choices[0])
    console.log(brEl);

    // Display First Answer
    answer1.textContent = "1. " + questions[num].choices[0];
    answer1.setAttribute("type", "button");
    answer1.setAttribute("class","btn btn-primary mb-1");
    answer1.setAttribute("data-btnType", "answer1");
    answer1.setAttribute("data-answerIndex", "0")
    quizEl.appendChild(answer1);
    quizEl.appendChild(brEl.cloneNode());
    
    // Display Second Answer
    answer2.textContent = "2. " + questions[num].choices[1];
    answer2.setAttribute("type", "button");
    answer2.setAttribute("class","btn btn-primary mb-1");
    answer2.setAttribute("data-btnType", "answer2");
    answer2.setAttribute("data-answerIndex", "1")
    quizEl.appendChild(answer2);
    quizEl.appendChild(brEl.cloneNode());

    // Display third Answer
    if (questions[num].choices[2] != undefined){ // If third choice does not exist
        answer3.textContent = "3. " +  questions[num].choices[2];
        answer3.setAttribute("type", "button");
        answer3.setAttribute("class","btn btn-primary mb-1");
        answer3.setAttribute("data-btnType", "answer3");
        answer3.setAttribute("data-answerIndex", "2")
        quizEl.appendChild(answer3);
        quizEl.appendChild(brEl.cloneNode());
    };

    // Display Forth Answer
    if (questions[num].choices[3] != undefined){ // If forth choice does not exist
        answer4.textContent = "4. " +  questions[num].choices[3];
        answer4.setAttribute("type", "button");
        answer4.setAttribute("class","btn btn-primary mb-1");
        answer4.setAttribute("data-btnType", "answer4");
        answer4.setAttribute("data-answerIndex", "3")
        quizEl.appendChild(answer4);
        quizEl.appendChild(brEl.cloneNode());
    };

}

// View final Score and input initials after end of quiz - COMPLETE
function viewFinalScore(){

    // Clears screen of any elements
    clearScreen();

    // Setting all elements wthin Quiz Area
    quizEl.setAttribute("class","col-md-6 bg-light text-center pt-2")

    // Title
    h2El.textContent = "FINISHED!";
    h2El.setAttribute("class","text-center");
    quizEl.appendChild(h2El);

    
    descriptionEl.textContent = "Your Score: " + quizScore; // SCORE GOES HERE
    quizEl.appendChild(descriptionEl);
    initialsInput.setAttribute("class", "form-control mb-2");
    initialsInput.setAttribute("placeholder", "Enter Initials");

    // Bootstrap layout for Initals form to be responsive
    quizEl.appendChild(row1);
    col1.setAttribute("class", "col-sm-3")
    col2.setAttribute("class", "col-sm-6")
    col3.setAttribute("class", "col-sm-3")
    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    col2.appendChild(initialsInput);
 
    // Submit Initials button
    initialsSubmit.innerHTML = "Submit";
    initialsSubmit.setAttribute("type", "button");
    initialsSubmit.setAttribute("class","btn btn-primary my-1");
    initialsSubmit.setAttribute("id","initialsSubmit");
    initialsSubmit.setAttribute("data-btnType", "initialsSubmit");
    quizEl.appendChild(initialsSubmit);
}

// Places Scores in Local Storage
function storedScores() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("score", JSON.stringify(scores));
}

// Function to view all scores
function renderHighScores(){
    console.log("Scores array before render: " +scores);
    // Clears the quiz area.
    clearScreen();
    
    // Title for High Scores Screen
    h2El.textContent = "High Scores";
    h2El.setAttribute("class","text-center mb-3");
    quizEl.appendChild(h2El);

    // Append the List
    quizEl.appendChild(scoreList);

    // Get stored scores from localStorage
    // Parsing the JSON string to an object

    // Render a new li for each score
    for (var i = 0; i < scores.length; i++) {
        console.log("li: " + i)
        let score = scores[i];
        console.log("score :" + score)
        console.log("scores[i]: " + scores[i])
        // Creates a list item with score with boostrap attributes
        var li = document.createElement("li");
        li.textContent = score.initials + " - " + score.score;
        li.setAttribute("class", "list-group-item");

        // Appends the list items
        scoreList.appendChild(li);
        console.log("li: " + li);
    }

    goBackbtn.innerHTML = "Go Back";
    goBackbtn.setAttribute("type", "button");
    goBackbtn.setAttribute("class","btn btn-primary m-2");
    goBackbtn.setAttribute("id","goBackbtn");
    goBackbtn.setAttribute("data-btnType", "goBack")
    //quizEl.appendChild(goBackbtn);

    cleareScoresbtn.innerHTML = "Clear High Scores";
    cleareScoresbtn.setAttribute("type", "button");
    cleareScoresbtn.setAttribute("class","btn btn-primary m-2");
    cleareScoresbtn.setAttribute("id","cleareScoresbtn");
    cleareScoresbtn.setAttribute("data-btnType", "clearScores")
    //quizEl.appendChild(cleareScoresbtn);

    // Using Bootstrap layout for repsonsiveness
    quizEl.appendChild(row2);
    row2.appendChild(col1);
    col1.setAttribute("class", "col-sm-12")
    col1.appendChild(goBackbtn);
    col1.appendChild(cleareScoresbtn);
    console.log("Scores array after render: " +scores);
    localStorage.setItem("score", JSON.stringify(scores));
}

// function for timer
function startTimer(){

}

// Function to record the score from the game to all scores
function recordScore(){

    clearScreen();
    
    // sets all references to local variables to use
    var initial = initialsInput.value;
    var uscore = quizScore;
    var pushScore = {initials: initial, score: uscore};

    console.log(initialsInput);
    console.log("Initial: " + initial);
    console.log("uscore: " + uscore);
    console.log("pushScore: " + pushScore);
    console.log("Scores Gobal Varible: " + scores)

    // pushes the score object into the scores array
    scores.push(pushScore);
    console.log("Local Scores array after push: " + scores);

    // Stores the scores array in local storage
    localStorage.setItem("score", JSON.stringify(scores));

    // Resets values in initialsInput and quizscore back to 0
    initialsInput.value = "";
    quizScore = 0;

}

// Function to clear all elements within the quiz area for reuse - COMPLETE
function clearScreen(){

    //clears all child nodes in quiz area
    while (quizEl.firstChild) {
        quizEl.removeChild(quizEl.firstChild);
    }

    //clears all child nodes in row1 element
    while(row1.firstChild){
        row1.removeChild(row1.firstChild);
    }

    //clears all child nodes in row2 element
    while(row2.firstChild){
        row2.removeChild(row2.firstChild);
    }

    //clears all child nodes in  scores list element
    while(scoreList.firstChild){
        scoreList.removeChild(scoreList.firstChild);
    }

    //clears all child nodes in col1 element
    while(col1.firstChild){
        col1.removeChild(col1.firstChild);
    }

    //clears all child nodes in col2 element
    while(col2.firstChild){
        col2.removeChild(col2.firstChild);
    }

    //clears all child nodes in col3 element
    while(col3.firstChild){
        col3.removeChild(col3.firstChild);
    }
}
