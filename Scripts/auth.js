// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const Fname = document.getElementById("fname").value;
  const username = document.getElementById("username").value;
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return firebase.firestore().collection("users").doc(cred.user.uid).set({
        username: username,
        fullname : Fname,
        photoURL:"",
        bio:""
      })
      
      // console.log(cred.user);
      // close the signup modal & reset form
      //  const modal = document.querySelector('#signin-signup');
      //  M.Modal.getInstance(modal).close();
      
    }).then(()=>{
        
        signupForm.reset();
        window.location.replace("http://127.0.0.1:5500/Index.html");
});
});
// logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut().then(() => {
//     console.log('user signed out');
//   })
// });


// ------loginuser------------------
function LoginUser(){
    var email=document.getElementById('login-email').value;
    var password=document.getElementById('login-password').value;
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
    
    
        var id=firebase.auth().currentUser.uid;
        localStorage.setItem('id',id);
        window.location.replace("http://127.0.0.1:5500/Index.html");
        
    }).catch(function(error){
    
        var errorCode=error.code;
        var errorMsg=error.message;
        document.getElementById('error').style.color = 'red';
        document.getElementById('error').innerHTML = error.message;
        
    });
    }
//    --------------Gmaillogin----------------

function Gmailsignin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'it';
 //   debugger
    // ----------
    firebase.auth().signInWithPopup(provider).then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("done")
         location.assign("https://www.youtube.com/")
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log(errorMessage)
        console.log("failed")
    });
}
               