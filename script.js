// Create all necessary elements
var h2El = document.createElement("h2");
var descriptionEl = document.createElement("p");
var startButton = document.createElement("button");
var initialsInput = document.createElement("input");
var initialsSubmit = document.createElement("button");

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

//************************ CODE ************************

viewFinalScore();

// var questionNo = 0; // Questions Variable
// var score = 0;
// start();

//************************ FUNCTIONS & EVENT LISTENSERS ************************


quizEl.addEventListener("click", function(event) {
    var element = event.target;

    // If that element is a button...
    if (element.matches("button") === true) {
      
        // Check what type of button it is. Start button, Answer Button, etc.
        var buttonType = element.getAttribute("data-btnType");

        if (buttonType == "start"){ // If button is the start button
            clearScreen(); // Clears the screen
            quizEl.setAttribute("class","col-md-6 bg-light pt-2") // removed center alignment
            renderQuestion(questionNo); // Renders first question
        }

        // If the button is an answer from a question
        if (buttonType == "answer1" || buttonType == "answer2" || buttonType == "answer3" || buttonType == "answer4"){
            clearScreen();
            questionNo++; //goes to next question
            renderQuestion(questionNo); // renders question
        }

  
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

  

    // add Event Listenser for Start Button

}

// Function to degenerate question - COMPLETE
function renderQuestion(num){

    //  Running down through each question in questions array
   // for (let i =  0; i < questions.length; i++){

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
        quizEl.appendChild(answer1);
        quizEl.appendChild(brEl.cloneNode());


        
        // Display Second Answer
        answer2.textContent = "2. " + questions[num].choices[1];
        answer2.setAttribute("type", "button");
        answer2.setAttribute("class","btn btn-primary mb-1");
        answer2.setAttribute("data-btnType", "answer2");
        quizEl.appendChild(answer2);
        quizEl.appendChild(brEl.cloneNode());

        // Display third Answer
        if (questions[num].choices[2] != undefined){
            answer3.textContent = "3. " +  questions[num].choices[2];
            answer3.setAttribute("type", "button");
            answer3.setAttribute("class","btn btn-primary mb-1");
            answer3.setAttribute("data-btnType", "answer3");
            quizEl.appendChild(answer3);
            quizEl.appendChild(brEl.cloneNode());
        };


        // Display Forth Answer
        if (questions[num].choices[3] != undefined){
            answer4.textContent = "4. " +  questions[num].choices[3];
            answer4.setAttribute("type", "button");
            answer4.setAttribute("class","btn btn-primary mb-1");
            answer4.setAttribute("data-btnType", "answer4");
            quizEl.appendChild(answer4);
            quizEl.appendChild(brEl.cloneNode());
        };



    //}


}

// View final Score and input initials after end of quiz
function viewFinalScore(){

    // Clears screen of any elements
    clearScreen();

    // Setting all elements wthin Quiz Area
    quizEl.setAttribute("class","col-md-6 bg-light text-center pt-2")

    // Title
    h2El.textContent = "FINISHED!";
    h2El.setAttribute("class","text-center");
    quizEl.appendChild(h2El);

    
    descriptionEl.textContent = "Your Score: ";
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

// Function to view all scores
function viewScores(){

}

// function for timer
function timer(){

}

// Function to record the score from the game to all scores
function recordScore(){

}

// Function to clear all elements within the quiz area for reuse
function clearScreen(){
    while (quizEl.firstChild) {
        quizEl.removeChild(quizEl.firstChild);
    }
}








// ************* REFERENCES *************

// Set the body to a variable
// var body = document.body;

// Create all necessary elements
// var h1El = document.createElement("h1");
// var h2El = document.createElement("h2");
// var infoEl = document.createElement("div");
// var kittenEl = document.createElement("div");
// var nameEl = document.createElement("div");
// var favoriteEl = document.createElement("div");
// var listEl = document.createElement("ol");
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// Store our li elements in a variable
// var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
// h1El.textContent = "Welcome to my page";
// h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
// kittenEl.textContent = "This is my kitten";
// nameEl.textContent = "his name is Jax";
// favoriteEl.textContent = "My favorite foods are:";
// li1.textContent = "Chicken Fingers";
// li2.textContent = "Pizza";
// li3.textContent = "Burgers";
// li4.textContent = "Sushi";

// Append all of our elements
// body.appendChild(h1El);
// body.appendChild(h2El);
// body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
// infoEl.appendChild(kittenEl);
// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// Style all of our elements
// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
// infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// imgEl.setAttribute("src", "http://placekitten.com/200/300");
// imgEl.setAttribute("height", 200);
// imgEl.setAttribute("width", 200);
// nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
// favoriteEl.setAttribute("style", "font-size:20px;");
// listEl.setAttribute("style", "background:#333333; padding:20px;");
// listItems[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
// listItems[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
// listItems[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
// listItems[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
