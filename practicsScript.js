const login =  document.getElementById("abc")
login.addEventListener("click",(event)=>{
//    step 1- prevent refreshing of page
    event.preventDefault();
    loginBtn();
})

function loginBtn()
{
     //parse and get ArrayofObject from localstorage
     let getAccount = JSON.parse(localStorage.getItem("quizAccount"));
    // console.log(getAccount)

     let loginEmail = document.getElementById("loginEmail").value ;
     let loginPassword = document.getElementById("loginPassword").value ;


    //  let isVerify = getAccount.some(s => s.email.toLowerCase() === loginEmail.toLowerCase() );
    // console.log(isVerify)
    // if(isVerifiy== true) alert("incore")
    //     else alert("success")


     let accountVerify2 = getAccount.filter(s => s.email.toLowerCase() == loginEmail.toLowerCase());
      console.log(accountVerify2)
    
     console.log(accountVerify2[0].password)
     if(accountVerify2.length===0) alert("incore")
    else alert("success")

}


// quiz questions local storage

// for iterative or for no random questions 
// use objects
{
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
}

//  for random question
//  use array of objects
[
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
    {
        id:1,
        question: "this is the question",
        options:["asdfop","qw5",3,4],
        userAnswer:0,
        correctOption:3
    },
]



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