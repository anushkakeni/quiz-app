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

        
            alert("Sign Up Successful");

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
     document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault();  // Prevent form submission

         //parse and get ArrayofObject from localstorage
         let getAccount = JSON.parse(localStorage.getItem("quizAccount"));

        // access data from arrayofObjects 
        let  getEmail= getAccount[1].email;
        let getPassword = getAccount[2].password;

        let loginEmail = document.getElementById("loginEmail").value ;
        let loginPassword = document.getElementById("loginPaaword").value ;

        if(loginEmail === getEmail  && loginPassword === getPassword)
        {
            alert("login Successful");
        }
        else{
            alert("Incorrect ");
        }




     })