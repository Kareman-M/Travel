// var firebaseConfig = {
//   apiKey: "AIzaSyCekpdISdrImi-UmrRnNWYYvj9xu_06phc",
//   authDomain: "project2-5a404.firebaseapp.com",
//   projectId: "project2-5a404",
//   storageBucket: "project2-5a404.appspot.com",
//   messagingSenderId: "395931880391",
//   appId: "1:395931880391:web:344cbc31ac60a41d1267e2"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// make auth and firestore references
// const auth = firebase.auth();
  // const db = firebase.firestore();
  
const bio = document.getElementById("bio");
const profileName = document.getElementById("profileName");
const uploadImg = document.getElementById("uploadImg");
const changePhoto = document.getElementById("changePhoto");
const profileImg = document.getElementById("profileImg");
changePhoto.onclick = ()=>{
    uploadImg.click();
}


// setting data into 
const fullName = document.getElementById("fullname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const currentpassword = document.getElementById("currentpassword");
const newpassword = document.getElementById("newpassword");
const confirmpassword = document.getElementById("confirmpassword");
// getting and setting data
// function setData (doc){
//     fullName.value= doc.data().fullname;
//     username.value = doc.data().username;
// }


// set data 
auth.onAuthStateChanged((user) => {
    if (user){
      document.getElementById("profileImg").src=user.photoURL!=""?user.photoURL:""
     db.collection("users").doc(user.uid).get().then((doc)=>{
      fullName.value= doc.data().fullname;
      username.value = doc.data().username;
      email.value = firebase.auth().currentUser.email
      profileName.innerHTML = doc.data().fullname;
      bio.value = doc.data().bio;
     })
    }
})


// change data in profile
 // need to sign user in immediately before updating the email 

 function updateData(){

  //update email in firestore
  firebase.auth().onAuthStateChanged((user) => {
      if(user){
       db.collection('users').doc(user.uid).update({
          username:username.value,
          fullname:fullName.value,
          bio:bio.value
        })
        // firebase.auth().currentUser.updateEmail(email.value)
        firebase.auth().currentUser.updateEmail(email.value).then(res => console.log("fghjk"))
        .catch(e =>console.log(e))
      
      //update email in auth
      
      // change the passowrd 
      

          if(newpassword.value == confirmpassword.value){
              console.log("hi")
              var user = firebase.auth().currentUser;
            
              console.log("hi")
              // newPassword.value = getASecureRandomPassword();              
              user.updatePassword( newpassword.value).then(function() {
                      console.log("hi")
                      alert("passowrd updated")
                  }).catch(function(error) {
                  console.log("error")
                  });
          }
   } });
}


/******************************************************************************************/
//photo part 
// Profile photo Preview
let photobase; 
function readURL(e) {
    if (e.files && e.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(event) {
        profileImg.setAttribute('src', event.target.result);
        // imgSrc = event.target.result; 
      photobase= event.target.result;

      }
      
      reader.readAsDataURL(e.files[0]); 
    }
  }
  
uploadImg.onchange = function() {
    readURL(this);
  };
  // Upload Image 
const ref = firebase.storage().ref();
const saveChanges = document.getElementById("saveChanges");

// saveChanges.addEventListener("click",uploadPhoto);

function uploadPhoto(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user){

            const file = uploadImg.files[0];
            const name = new Date() + '-' + file.name;
            var metaData = {
                contentType:file.type
            }
            const task = ref.child(name).put(file,metaData);
            task.then(snapshot =>{snapshot.ref.getDownloadURL()})
                .then(url =>{
                    console.log(url)
                    // set img in firestore  // 
                    user.updateProfile({
                        photoURL: url
                      }).then(function() {
                        console.log("done")
                      }).catch(function(error) {
                        console.log(error) 
                      });
                      
                    document.getElementById("profile-img").src=url
                    
                }).catch(e => console.log(e))
                
            }
        })        
}
//---------------------------------------------------------------------//




// Upload Image 



function uploadPhoto(){
    auth.onAuthStateChanged((user) => {
        if(user){
debugger
            var file = document.getElementById("uploadImg").files[0];
            var name = user.uid;
            var metaData = {
                contentType:file.type
            }
            const task = ref.child(name).put(file,metaData);

            task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url =>{
                    console.log(url)
                // set img in firestore  // 
                user.updateProfile({
                    photoURL: url
                  }).then(function() {
                    console.log("done")
                  }).catch(function(error) {
                    console.log(error) 
                  });
                  
                document.getElementById("profileImg").src=url
                
            }).catch(e => console.log(e))
        }
    })        
}
saveChanges.addEventListener("click",uploadPhoto);
saveChanges.addEventListener('click',  updateData)
