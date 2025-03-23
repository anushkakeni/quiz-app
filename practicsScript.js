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



