// signup 
let accounts = [
    {
        name: "Anushka Keni",
        email: "kenianushka@gmail.com",
        password: "@Anushka01@"
    }

];

if (localStorage.getItem('quizAccount') === null) {
    localStorage.setItem('quizAccount', JSON.stringify(accounts));
}


document.addEventListener("DOMContentLoaded", function () {

    //signup
    let signupForm = document.getElementById("signupForm")
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();  // Prevent form submission

            //parse and get Array from localstorage
            let parseAccount = JSON.parse(localStorage.getItem("quizAccount"));

            let fullName = document.getElementById("fullName").value;
            let emailId = document.getElementById("emailId").value;
            let password = document.getElementById("passWord").value;

            let passError = document.getElementById("passError");

            let passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

            if (!passValidation.test(password)) {
                passError.textContent = "Password must be at least 6 characters long, include an uppercase letter, a number, and a special character.";
                return;
            }

            alert("Successfully Registered ");

            // add new object in array
            let newAccount = { name: fullName, email: emailId, password: password };
            parseAccount.push(newAccount);


            //set array in localstorage
            localStorage.setItem('quizAccount', JSON.stringify(parseAccount));


            document.getElementById("fullName").value = '';
            document.getElementById("emailId").value = '';
            document.getElementById("passWord").value = '';

            // let termConditions = document.getElementById("termsConditions").checked;
            // termConditions.checked = false;  

        });
    }



    //login

    let login = document.getElementById("abc");
    if (login) {
        login.addEventListener("click", (event) => {
            //    step 1- prevent any default action from happening of that event  
            event.preventDefault();
            loginBtn();

        });

        function loginBtn() {
            //parse and get ArrayofObject from localstorage
            let getAccount = JSON.parse(localStorage.getItem("quizAccount"));
            // console.log(getAccount)

            let loginEmail = document.getElementById("loginEmail").value;
            let loginPassword = document.getElementById("loginPassword").value;


            let accountVerify = getAccount.find(s => s.email.toLowerCase() == loginEmail.toLowerCase());
            //  console.log(accountVerify2)
            //  console.log(accountVerify2[0].password)
            //  if (accountVerify2.length === 0) alert("incore")
            //  else alert("success")
            if (!accountVerify) {
                alert("Incorrect Email or Password");
            } else if (accountVerify.password !== loginPassword) {
                alert("Incorrect Password");
            } else {
                window.location.href = "startPage.html";
            }

        }

    }


});





// //quiz-question

// quiz questions local storage
//  for random questions:- use array of objects
let allQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 2,
        question: "What is the national bird of the USA?",
        options: ["Bald Eagle", "Peacock", "Sparrow", "Ostrich"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 3,
        question: "Who discovered gravity?",
        options: ["Newton", "Einstein", "Galileo", "Tesla"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 4,
        question: "How many continents are there?",
        options: ["7", "5", "6", "8"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 5,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 6,
        question: "Which ocean is the largest?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 7,
        question: "What is the square root of 64?",
        options: ["8", "6", "7", "9"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 8,
        question: "What is H2O commonly known as?",
        options: ["Water", "Oxygen", "Hydrogen", "Salt"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 9,
        question: "How many legs does a spider have?",
        options: ["8", "6", "10", "12"],
        userAnswer: null,
        correctOption: 0
    },
    {
        id: 10,
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Seoul"],
        userAnswer: null,
        correctOption: 0
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        userAnswer: null,
        correctOption: 2
    }
];

if (localStorage.getItem('allQuestions') === null) {
    localStorage.setItem('allQuestions', JSON.stringify(allQuestions));
}


//startQuiz 
function startQuiz() {
    //parse when game starts
    //parse and get data from local storage to array of object 
    let getAllQuestions = JSON.parse(localStorage.getItem("allQuestions"));

    // store questions array in set
    //radomly generate the questions in set
    //Math.floor(Math.random())
    // can use .slice() for any 10 questions only

    let selectedSet = new Set();

    while (selectedSet.size < 10) {      
        //add questionandanswer in set
        selectedSet.add(Math.floor(Math.random() * getAllQuestions.length));   
    }
   
    //store set into  localstorage
    //use "..."operator to convertsetto array
    //use .map() on set to pick each questions from getAllQuestions 

    let selectedQuestions = [...selectedSet].map(i => getAllQuestions[i]);

    // store it in local storage again
    localStorage.setItem("quizQuestions", JSON.stringify(selectedQuestions));

    // redirect to question.html page
    window.location.href = "questionPage.html";

}



//set counter 0 for array indexing questions from index 0
let currentQuestionIndex = 0;

//parse 10 quiz questions from new localstorage
let displayQuestions = JSON.parse(localStorage.getItem("quizQuestions"));

let questionText= document.getElementById("question-text");
let score = 0;



function showQuestions() {
    
    // debugger;
   //questions
    let currentQuestion = displayQuestions[currentQuestionIndex];  //displayQuestion= 10 questions stored, currentQuestionsIndex tracks which question the user is on./ similar to index of an array "i"
    //displayQuestions[currentQuestionIndex], same as displayQuestion[i], i=0

    let presentQuestion = `${currentQuestionIndex + 1}. ${currentQuestion.question}`; //tempelate literal

    //options
    currentQuestion.options.forEach((options, index) =>{
         presentQuestion +=
         
         `  <br>
            <label>
            <input type="radio" name="option" value="${options}">
            ${options}
            </label><br> `;
    });

    questionText.innerHTML = presentQuestion;


}

// showQuestions();

function nextQuestion() {

    //check if option is selcted
    //use QuerySelector or forEach
    // querySelector find selected options fast
    //querySelector syntax- document.querySelector(css selector)
    let userSelection = document.querySelector('input[name="option"]:checked');

    if(!userSelection)
    {
        alert("please select an answer");
        return;
    }

    

    //   let getCorrect =  getQuestionsAndAnswers[randomQuestions].correctOption;

 


    // if(currentQuestionIndex < getQuestions.length - 1)
    //     {
    //         currentQuestionIndex++;
    //     }else{
    //         alert("Quiz Completed");
    //         return;
    //     }


    //    document.getElementById("question-counter").innerHTML = "Question" + (currentQuestionIndex + 1) + "of 10";

    //    document.getElementById("question-text").innerHTML = (currentQuestionIndex + 1) + "." + getQuestions;



    //use querySelector to select the option
    //    const options = document.querySelectorAll(".option-text");



}
showQuestions()
// // randomIndex ok , counter1= 10 ok, questions=[2,5,]// index geenrated or question 