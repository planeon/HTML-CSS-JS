const firebaseConfig = {
  apiKey: "AIzaSyDbFXal-xGrnAO7as7sV0jrwv9pxUUx77Y",
  authDomain: "registration-cdecb.firebaseapp.com",
  projectId: "registration-cdecb",
  storageBucket: "registration-cdecb.appspot.com",
  messagingSenderId: "161774287633",
  appId: "1:161774287633:web:8eca7313687a6840402ab0",
  measurementId: "G-KHVQ6FB2LB"
};

  
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()



  function register() {
   email=document.getElementById('email').value;
   login=document.getElementById('login').value;
   password=document.getElementById('password').value;
   

if(validate_email(email)==false || validate_password(password)==false){
  alert('Введіть пароль або Email')
  return
}
if(validate_field(login)==false ){
alert('Введіть більше символів')
return
}


auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    
    var user = auth.currentUser
    var database_ref = database.ref()
 

   var user_data = {
      email : email,
      password : password,
      login : login,
      last_login : Date.now()
    }

database_ref.child('users/' + user.uid).set(user_data)

alert('Користувач зареєстрован')
 window.location.replace("file:///F:/AutoSelect/Auto.html");
}).catch(function(error) {
   
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}



function validate_email(email) {
   expression = /^[^@]+@\w+(\.\w+)+\w$/
   if(expression.test(email) == true) {
  
   return true
  } else {
return false 
  }
}

 function validate_password(password){
  if(password<6){
 return false
  }else{return true
  }
 } 


function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}     



















































  
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  import {  getAuth ,GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBo8tS4-Q5noYRH71VKgqETWK7KCGSH_1w",
    authDomain: "fir-d40f6.firebaseapp.com",
    projectId: "fir-d40f6",
    storageBucket: "fir-d40f6.appspot.com",
    messagingSenderId: "109632009657",
    appId: "1:109632009657:web:a0ba7e5493efa613bf3268"
  };
 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
login.addEventListener('click',(e)=>{

 signInWithRedirect(auth, provider);
 
  getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  });*/