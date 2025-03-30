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

document.getElementById("signupForm").addEventListener("submit", function (event) {
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
    // document.getElementById("password").remove;

    let termConditions = document.getElementById("termsConditions").checked;
    termConditions.checked = false;

})






// login

const login = document.getElementById("abc")
login.addEventListener("click", (event) => {
    //    step 1- prevent refreshing of page
    event.preventDefault();
    loginBtn();
})

function loginBtn() {
    // step2-  parse and get ArrayofObject from localstorage
    let getAccount = JSON.parse(localStorage.getItem("quizAccount"));
    // console.log(getAccount)

    // let loginEmail = document.getElementById("loginEmail").value;
    // let loginPassword = document.getElementById("loginPassword").value;

    // method 1- usinng some() to verify the account
    //  let isVerify = getAccount.some(s => s.email.toLowerCase() === loginEmail.toLowerCase() );
    // console.log(isVerify)
    // if(isVerifiy== true) alert("incore")
    //     else alert("success")

    //method 2- using filter() to verify the account
    let accountVerify = getAccount.filter(s => s.email.toLowerCase() == loginEmail.toLowerCase());
    //console.log(accountVerify)
    //console.log(accountVerify[0].password)
    if (accountVerify.length === 0) alert("incore")
    else alert("success")

}






//quiz-question

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
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:3,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:4,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:5,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:6,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:7,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:8,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:9,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    },
    {
        id:10,
        question:"What is the capital of France?" ,
        options: ["Paris", "London", "Berlin", "Rome"],
        userAnswer: "",
        correctOption:"Paris"
    }
];

if (localStorage.getItem('quizQuestion') === null) {
    localStorage.setItem('quizQuestion', JSON.stringify(questions));
}

//set counter for question nos.
let currentQuestionIndex = 1;

function nextQuestion(){

//parse and get data from local storage to array of object
  
  let getQuestionsAndAnswers = JSON.parse(localStorage.getItem("quizQuestions"));

//radomly generate the questions in array
  let randomQuestions = Math.floor(Math.random() * getQuestions.length);

//access data from array of objects
//array[random].objectKey
  let getQuestions = getQuestionsAndAnswers[randomQuestions].question;
  let getCorrect =  getQuestionsAndAnswers[randomQuestions].correctOption;


   document.getElementById("question-counter").innerText = "Question" + (currentQuestionIndex + 1) + "of 10";
   
   document.getElementById("question-text").innerText = (currentQuestionIndex + 1) + "." + getQuestions;


}

randomIndex ok , counter1=-10, questions=[2,5,]// index geenrated or question id