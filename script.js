// Creating an Object
var Question = function (question, answers, correct  ) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

// Creating a few questions from the Object and pushing them to an array
var listOfQuestions = [];
const q1 = new Question('What is the best club in the world?', ['RTS', 'Barca', 'Real'], 1);
const q2 = new Question('Who is the  fastest sprinter?', ['Mie', 'Bolt', 'Sam'], 2);
const q3 = new Question('Which is the second biggest country in the world?', ['Brazil', 'USA', 'Canada'], 3);

listOfQuestions.push(q1, q2, q3);
var max = listOfQuestions.length;

var randomNum;
// function to choose a random number
function pickRandomNumber(arr) {
randomNum = Math.floor(Math.random(arr) * Math.floor(arr));
return randomNum;
}

// Adding method to the Object to choose a random question
Question.chooseQuestion =  function() {
    pickRandomNumber(max);

    for (let i = 0; i < max; i++) {

        if(randomNum === i) {
            console.log(listOfQuestions[i].question);
            console.log(listOfQuestions[i].answers.indexOf(listOfQuestions[i].answers[0]) + 1 + ": " + listOfQuestions[i].answers[0]);
            console.log(listOfQuestions[i].answers.indexOf(listOfQuestions[i].answers[1]) + 1 + ": " + listOfQuestions[i].answers[1]);
            console.log(listOfQuestions[i].answers.indexOf(listOfQuestions[i].answers[2]) + 1 + ": " + listOfQuestions[i].answers[2]);
        }
    }
 
}
var totalScore = 0;
// Adding another method to the Object to check if the answer is correct
Question.checkIfCorrect = function() {
    var userInput = parseInt(prompt("Choose the correct answer."));
 
   for (let i = 0; i < max; i++) {
       if (randomNum === i && userInput === listOfQuestions[i].correct) {
        
        console.log("------------------------------------------");
        console.log("Correct");
        console.log("Your score is: " + (++totalScore ));
        console.log("------------------------------------------");
        
       
            (function() {  
                Question.chooseQuestion();
                Question.checkIfCorrect();
            })();
        //addMore();
       }
       else if (userInput === 0) {
        return;
    } 

       if (randomNum === i && userInput !== listOfQuestions[i].correct) {
        
        console.log("------------------------------------------");
        console.log("Wrong answer");
        console.log("Your score is: " + (totalScore));
        console.log("------------------------------------------");

        (function() {
            Question.chooseQuestion();
            Question.checkIfCorrect();
        })();
        //addMore();
       } 
       else if (userInput === 0) {
        return;
       }
   }
 
}


//calling Objects' methods
Question.chooseQuestion();
Question.checkIfCorrect();



/*
    function chooseQuestion() {
        var max = listOfQuestions.length;
        var randomNum = Math.floor(Math.random(max) * Math.floor(max));

        for (var i = 0; i < max; i++) {

            if(randomNum === i) {
                console.log(this.listOfQuestions[i].question);
                console.log(listOfQuestions[i].answers.indexOf(listOfQuestions[i].answers[0]) + 1 + ": " + listOfQuestions[i].answers[0]);
                console.log(listOfQuestions[i].answers.indexOf(listOfQuestions[i].answers[1]) + 1 + ": " + listOfQuestions[i].answers[1]);
                console.log(listOfQuestions[i].answers.indexOf(listOfQuestions[i].answers[2]) + 1 + ": " +listOfQuestions[i].answers[2]);
            }
        }  
    }


   chooseQuestion() ;
   */

  // prompt("What is the correct answer?")

    /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- foreach
listOfQuestions.forEach(choose);

function choose(value) {
  console.log(  value.question );
  console.log (value.answers );
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/
