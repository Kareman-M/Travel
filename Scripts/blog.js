  // Firebase configuration
  let id;
  let productData;
  var firebaseConfig = {
    apiKey: "AIzaSyCekpdISdrImi-UmrRnNWYYvj9xu_06phc",
    authDomain: "project2-5a404.firebaseapp.com",
    projectId: "project2-5a404",
    storageBucket: "project2-5a404.appspot.com",
    messagingSenderId: "395931880391",
    appId: "1:395931880391:web:344cbc31ac60a41d1267e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

/*******************************************************************/

// handel input type: file 

document.querySelector(".fa-paperclip").onclick = ()=>{
    document.querySelector("#postPhoto").click();

}
/**********************************************************************/

let post = document.getElementById("post");
let postTitle = document.getElementById("postTitle");
let postBtn = document.getElementById("postBtn");

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector(".post-container").style.display = "block";
      // make a post 
      postBtn.onclick= (a)=>{
        a.preventDefault()
        db.collection("posts").add({
            post_body: post.value,
            post_title: postTitle.value,
            post_creator_ID: user.uid
        });
        post.value = "";
        postTitle.value = "";
    }
   } else {
      // No user is signed in.
   }
  });


  // function get data from posts collection
  blogContainer = document.querySelector(".blogContainer");
  otherPosts = document.querySelector(".similerPosts");
  (
    function getPosts(){
        db.collection("posts").get().then((snapshot)=>{
            for( let i = 0 ; i< snapshot.docs.length ; i++){
                blogContainer.innerHTML += 
                `
                <div class="blog">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="post_image"><img src="img.jpg" alt="" ></div>
                                <span class="createdby"> created by: name, 30/5/2021</span>
                                <h2 class="post_title">${snapshot.docs[i].data().post_title}</h2>
                                <p class="post_body">${snapshot.docs[i].data().post_body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
               
                `
            }
  // other posts sidebar

            for(let i =0 ;i<6 ; i++){
                otherPosts.innerHTML += 
                `
                <div class="simlierPost mb-2">
                <div class="sideImage"><img src="img.jpg" alt=""></div>
                <h4>${snapshot.docs[i].data().post_title}</h4>
                <p>${snapshot.docs[i].data().post_body.substr(1,150)}</p>
                <hr>
                </div>
                `
            }

        })

      }
  )();


