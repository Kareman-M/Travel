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

let Name , price , continentV,dayv,filename,fromv,tov;
function selectalladat()
{
  document.getElementById('btn_All').classList.add('selected');
    firebase.database().ref('test_table').once('value',
        function(all)
        {
            all.forEach(
                function(current)
                {
                    Name=current.val().NameOftest_table;
                    price=current.val().pricev;
                    continentV=current.val().section;
                    filename=current.val().image;
                    dayv=current.val().count_day;
                    fromv=current.val().from;
                    tov=current.val().to;
                    AddItemsToTable();
                }
            );
        }
    )
}
window.onload=selectalladat;

function AddItemsToTable()
{
  document.getElementById('btn_All').classList.add('selected');

    let div =document.getElementById('one');
    // let imgepoper=document.getElementById('imgPoper');
    // imgepoper.src="photo/"+filename;
    div.innerHTML +=
`
  <div class="col col-md-4 item card-hover" data-tags="${continentV}">
          <div class="card">

              <img class="card-img-top img-slider img_gallery"  src="/images/photo/${filename}" alt="">
              <div class="card-body">
                  <h4 data-name="name_travel1" class="card-title text-center name">${Name}</h4>
                  <p class="card-text p_price"><span class="text-center text-primary"> ${price}$ price</span></p>
              </div>
              <div class="card-body">
              Location /  <span class="text-primary"> ${fromv}</span> / <span class="text-danger mx-3">${tov}</span>
              <span class="text-right mx-3">
                  <i class="fa fa-star text-primary"></i>
                  <i class="fa fa-star text-primary"></i>
                  <i class="fa fa-star text-primary"></i>
              </span>
              </div>
              <div class="card-header">
                  <button type="button" class="btn btn-primary btn-block bookBtn" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
              </div>
          </div>
  </div>
`; 
}
let book = document.getElementsByClassName("bookBtn");
for(let i = 0 ; i < book.length ; i++){
  book[i].onclick = ()=>{
    console.log(this)
  }
}
const items = document.getElementsByClassName("item"); 
// window.location.href.includes('design') 

showTag = (event, tag) => {
  // console.log(window.location.hash)
  document.getElementById('btn_All').classList.remove('selected');

  console.log('showing... ', tag)
  for(let i = 0; i< items.length; i++){
    if(items[i].dataset.tags.includes(tag)){
      items[i].style.display = "block";
    }else{
      items[i].style.display = "none";
    }
  }
}

document.getElementById("btn_All").addEventListener("click", (event) => showTag(event, 'All'));
document.getElementById("btn_Asia").addEventListener("click", (event) => showTag(event, 'Asia'));
document.getElementById("btn_Africa").addEventListener("click", (event) => showTag(event, 'Africa'));
document.getElementById("btn_Europe").addEventListener("click", (event) => showTag(event, 'Europe'));
document.getElementById("btn_North_American").addEventListener("click", (event) => showTag(event, 'North_American'));
document.getElementById("btn_South_America").addEventListener("click", (event) => showTag(event, 'South_America'));


    // click to scroll top
   document.getElementById("toTop").onclick=function(){
       window.scrollTo({ top: 0, behavior: 'smooth' });
   }
