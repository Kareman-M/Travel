//let firebaseConfig = {
 ///   apiKey: "AIzaSyBuMGZoRk0urK5DPNBcJK4QrEiUBBEKJ2U",
  // authDomain: "journy-3e586.firebaseapp.com",
 //   projectId: "journy-3e586",
  //  storageBucket: "journy-3e586.appspot.com",
  // messagingSenderId: "475913435502",
 //  appId: "1:475913435502:web:b815fa04de793ddb37a97f"
 //};
 //  Initialize Firebase
  var firebaseConfig = {
 apiKey: "AIzaSyCekpdISdrImi-UmrRnNWYYvj9xu_06phc",
  authDomain: "project2-5a404.firebaseapp.com",
  projectId: "project2-5a404",
  storageBucket: "project2-5a404.appspot.com",
  messagingSenderId: "395931880391",
  appId: "1:395931880391:web:344cbc31ac60a41d1267e2"
};
  firebase.initializeApp(firebaseConfig);

  
function selectalladat()
{
    firebase.database().ref('test_table').once('value',
        function(all)
        {
            all.forEach(
                function(current)
                {
                    let name=current.val().NameOftest_table;
                    let price=current.val().pricev;
                    let continentV=current.val().section;
                    let filename=current.val().image;
                    let dayv=current.val().count_day;
                    let fromv=current.val().from;
                    let tov=current.val().to;
                    AddItemsToTable(name,price,continentV,filename,dayv,fromv,tov);
                }
            );
        }
    )
}

window.onload=selectalladat;

function AddItemsToTable(name,price,continentV,filename,dayv,fromv,tov)
{
    let div =document.getElementById('one');
    // let imgepoper=document.getElementById('imgPoper');
    // imgepoper.src="photo/"+filename;
    div.innerHTML +=
    `
                            <div class="col col-md-4 item card-hover" data-tags="${continentV}">
                                    <div class="card card_country">

                                                <img class="card-img-top img-slider img_gallery"  src="photo/${filename}" alt="">
                                                <div class="card-body">
                                                    <h4 data-name="name_travel1" class="card-title text-center name">${name}</h4>
                                                    <p class="card-text p_price"><span class="text-center text-primary">${price}$ price</span></p>
                                                </div>
                                                <div class="card-body">
                                                Location /<span class="text-primary">${fromv}</span>/<span class="text-danger ">${tov}</span>
                                                <span class="text-right mx-3">
                                                    <i class="fa fa-star text-primary"></i>
                                                    <i class="fa fa-star text-primary"></i>
                                                    <i class="fa fa-star text-primary"></i>
                                                </span>
                                                </div>
                                                <div class="card-header">
                                                    <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                                                </div>
                                    </div>
                            </div>
                            
    `; 




}
const items = document.getElementsByClassName("item"); 
//window.location.href.includes('design') 

showTag = (event, tag) => {
  // console.log(window.location.hash)
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
