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

function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Введіть більше символів')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('Користувач увійшов до системи')
      window.location.replace("file:///F:/AutoSelect/Auto.html");
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
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




