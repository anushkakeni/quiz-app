// signup 
let accounts = [
    {
        name: "Anushka Keni",
        email: "kenianushka@gmail.com",
        password: "@Anushka01@"
    } 
];

if(localStorage.getItem('quizAccount')=== null)
{
    localStorage.setItem('quizAccount', JSON.stringify(accounts));
}

    document.getElementById("signupForm").addEventListener("submit", function(event){
        event.preventDefault();  // Prevent form submission
        
        //parse and get Array from localstorage
           let parseAccount = JSON.parse(localStorage.getItem("quizAccount"));

            let fullName = document.getElementById("fullName").value ;
            let emailId = document.getElementById("emailId").value ;
            let password = document.getElementById("passWord").value ;

            let passError = document.getElementById("passError");

            let passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        
            if(!passValidation.test(password))
            {
                passError.textContent = "Password must be at least 6 characters long, include an uppercase letter, a number, and a special character.";
                return;
            }

        
            alert("Successfully Registered ");

              // add new object in array
              let newAccount = {name: fullName, email: emailId, password: password};
              parseAccount.push(newAccount);
  
  
              //set array in localstorage
              localStorage.setItem('quizAccount', JSON.stringify(parseAccount));


            document.getElementById("fullName").value= '' ;
            document.getElementById("emailId").value= '' ;
            // document.getElementById("password").remove;

           let termConditions = document.getElementById("termsConditions").checked;
           termConditions.checked = false;
        
     })







     
// login

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
