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


document.addEventListener("DOMContentLoaded", function() {
  
//signup
    let signupForm =  document.getElementById("signupForm")
   if(signupForm)
    {
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
if(login)
{
    login.addEventListener("click", (event) => {
     //    step 1- prevent refreshing of page
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
        window.location.href= "questionPage.html";
    }

   }

}


});



// //quiz-question

// quiz questions local storage
//  for random questions:- use array of objects
let quizQuestions= [
    {
        id:1,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:2,
        question:"What is the national bird of the USA?" ,
        options:["Bald Eagle", "Peacock", "Sparrow", "Ostrich"] ,
        userAnswer: "",
        correctOption: "Bald Eagle"
    },
    {
        id:3,
        question: "Who discovered gravity?" ,
        options:  ["Newton", "Einstein", "Galileo", "Tesla"],
        userAnswer: "",
        correctOption: "Newton"
    },
    {
        id:4,
        question:"How many continents are there?" ,
        options: ["7", "5", "6", "8"],
        userAnswer: "",
        correctOption:"7"
    },
    {
        id:5,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"] ,
        userAnswer: "",
        correctOption:"Au"
    },
    {
        id:6,
        question:"Which ocean is the largest?" ,
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        userAnswer: "",
        correctOption: "Pacific"
    },
    {
        id:7,
        question:"What is the square root of 64?",
        options:["8", "6", "7", "9"],
        userAnswer: "",
        correctOption:"8"
    },
    {
        id:8,
        question:"What is H2O commonly known as?" ,
        options: ["Water", "Oxygen", "Hydrogen", "Salt"] ,
        userAnswer: "",
        correctOption:"Water"
    },
    {
        id:9,
        question:"How many legs does a spider have?" ,
        options:  ["8", "6", "10", "12"],
        userAnswer: "",
        correctOption:"8"
    },
    {
        id:10,
        question:"What is the capital of Japan?" ,
        options:["Tokyo", "Kyoto", "Osaka", "Seoul"],
        userAnswer: "",
        correctOption:"Tokyo"
    }
];

if (localStorage.getItem('quizQuestionS') === null) {
    localStorage.setItem('quizQuestionS', JSON.stringify(quizQuestions));
}

//set counter 0 for array indexing questions from index 0
let currentQuestionIndex = 0;


function nextQuestion(){


//parse and get data from local storage to array of object
  
  let getQuestionsAndAnswers = JSON.parse(localStorage.getItem("quizQuestions"));

//radomly generate the questions in array
//Math.floor(Math.random())
//.slice() for any 10 questions only
  let randomIndex = Math.floor(Math.random() * getQuestionsAndAnswers.length);
  let randomQuestions= randomIndex.slice(0,10);

//access data from array of objects
//array[random].objectKey
  let getQuestions = getQuestionsAndAnswers[randomQuestions].question;

  let getOptions= getQuestionsAndAnswers[randomQuestions].options;
  getOptions.forEach(optionFunction);
  let optionList= "";
  document.getElementById("option-list").innerHtml = optionList;
  function optionFunction(item)
  {
    optionList+= item + "<br>";
  }

//   let getCorrect =  getQuestionsAndAnswers[randomQuestions].correctOption;


// if(currentQuestionIndex < getQuestions.length - 1)
//     {
//         currentQuestionIndex++;
//     }else{
//         alert("Quiz Completed");
//         return;
//     }


   document.getElementById("question-counter").innerHTML = "Question" + (currentQuestionIndex + 1) + "of 10";
   
   document.getElementById("question-text").innerHTML = (currentQuestionIndex + 1) + "." + getQuestions;



 //use querySelector to select the option
   const options = document.querySelectorAll(".option-text");



}

// // randomIndex ok , counter1=-10, questions=[2,5,]// index geenrated or question 