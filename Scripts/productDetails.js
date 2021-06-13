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
  /********************************************************/
  let id = localStorage.getItem("productID");
  productName = document.getElementById("productName");
  productDesc = document.getElementById("productDesc");
  productPrice = document.getElementById("productPrice");
  productImage = document.getElementById("productImage");
  productImage2 = document.getElementById("productImage2");
  productRate = document.getElementById("productRate");
  db.collection("product").doc(id).get().then((doc)=>{
    if(doc.exists){
      document.title=doc.data().product_name;
       productName.innerHTML = doc.data().product_name;
       productDesc.innerHTML = doc.data().product_desc;
       productPrice.innerHTML = doc.data().product_price + "$";
       productImage.src = "/images/Product-Images/"+doc.data().product_image+".jpg";
       productImage2.src = "/images/Product-Images/"+doc.data().product_image+".jpg";
       productRate.innerHTML= doc.data().product_rating;
       document.querySelector(".star-inner").style.width = `${Math.round(((doc.data().product_rating)/5 * 100 )/10 *10)}%`;
    }
});


////////////////////
//firebase.auth().onAuthStateChanged(function(user) {
  //if (true) {
  let comment = document.getElementById("exampleInputtextarea");
  const submitComment  = document.getElementById("submitComment");
  var a =0;
  let r;
  submitComment.onclick = ()=>{
      var x =  document.querySelectorAll("input[type=radio][name=rate]:checked")
      console.log(x[0].value)
    console.log(comment.value);
   firebase.database().ref('comments/'+id+'/' + a++).set({
      // userID : 1,
     productID: id,
      Ncomment:comment.value,
      rate:x[0].value
     })
     comment.value = " ";
     x[0].checked = false;
    }

    
      function getComments(){
        
        firebase.database().ref('/comments/'+id).on('value',(snap)=>{
          
          snap.forEach(element => {
           document.querySelector(".commentsBody").innerHTML +=
           `
          <div class="row mt-5 mb-5">
          <div class="media">
          <img class="mr-3" src="images/11.jpg" alt="Generic placeholder image">
          <div class="media-body">
            <h5 class="mt-0"> 
            <div class="comstar-outer">
            <div class="comstar-inner" style="width: ${(((element.val().rate)*100) /5)}%;"></div>
            </div>
            </h5>
            ${element.val().Ncomment}
          </div>
          </div>
          </div>
           ` 
          })
        })
    };
    getComments()
// }
// })
   document.getElementById("toTop").onclick=function(){
       window.scrollTo({ top: 0, behavior: 'smooth' });
   }