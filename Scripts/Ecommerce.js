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

  // getting the data from firestore and
  // Setting products Data in page at the product container 
  let data ;
  const productContainer = document.querySelector(".productContainer");  
  db.collection("product").get().then(function(snapshot){
    for( let i =0 ; i< snapshot.docs.length ; i++){
      productContainer.innerHTML+=
      `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                      <h4 class="buy">Buy Now</h4>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
      document.querySelectorAll(".star-inner")[i].style.width = `${Math.round(((snapshot.docs[i].data().product_rating)/5 * 100 )/10 *10)}%`;

    }
        const buy = document.querySelectorAll(".buy");
          for( let i= 0 ; i< buy.length ; i++){
           this.onclick = (e)=>{
             id =e.target.parentElement.getAttribute("id");
            const d =db.collection("product").doc(id).get().then((doc)=>{
                if(doc.exists){
                    localStorage.setItem("productID",id)
                    console.log( doc.data());
                    window.location.replace("http://127.0.0.1:5500/productDetails.html");
                }
            });
           }
          


      
            }        
})

// FILTER 
// getting elemnts 
// filter by color
const black = document.getElementById("Black");
const blue = document.getElementById("blue");
const gray = document.getElementById("gray");
const pink = document.getElementById("pink");
// filter by categories
const bags = document.getElementById("bags");
const shirtCase = document.getElementById("shirtCase");
const travelPillow = document.getElementById("travelPillow");
const sleepMask = document.getElementById("sleepMask");
const allProducts = document.querySelector(".all");
// get data based pnfilter
// filter by black color

black.onclick = ()=>{ 
productContainer.innerHTML = "";
db.collection("product").where("product_color","==","black").get().then((snapshot)=>{
    
    for( let i =0 ; i< snapshot.docs.length ; i++){
        productContainer.innerHTML+=
        `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                  <a href="" target="_blank"><h4 class="buy">Buy Now</h4> </a>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
      }});
}
pink.onclick = ()=>{ 
    productContainer.innerHTML = "";
    db.collection("product").where("product_color","==","pink").get().then((snapshot)=>{
        
        for( let i =0 ; i< snapshot.docs.length ; i++){
            productContainer.innerHTML+=
            `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                      <h4 class="buy">Buy Now</h4>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
          }});
}
gray.onclick = ()=>{ 
    productContainer.innerHTML = "";
    db.collection("product").where("product_color","==","gray").get().then((snapshot)=>{
        
        for( let i =0 ; i< snapshot.docs.length ; i++){
            productContainer.innerHTML+=
            `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                      <h4 class="buy">Buy Now</h4>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
            }});
}
blue.onclick = ()=>{ 
    productContainer.innerHTML = "";
    db.collection("product").where("product_color","==","blue").get().then((snapshot)=>{
        
        for( let i =0 ; i< snapshot.docs.length ; i++){
            productContainer.innerHTML+=
            `
            <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
            <div class="product-card">
                <div class="image-parent">
                    <div class="image">
                        <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
                    </div><!-- ./image -->
                    <div class=" overlay image-overlay">
                        <div id="${snapshot.docs[i].id}">
                            <h4 class="buy">Buy Now</h4>
                        </div>
                    </div><!-- ./image-overlay -->
                </div><!-- ./image-parent -->
      
                <div class="product-info row ">
                    <div class="name_rate col-8">
                    <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
                    <div class="rating">
                      <div class="star-outer">
                      <div class="star-inner"></div>
                      </div>
                    </div><!-- ./rating -->
                </div><!-- ./name_rate -->
                <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
                </div>  <!-- ./product-info -->
      
            </div><!-- ./product-card -->
        </div>
            `
          }});
}
allProducts.onclick = ()=>{
    db.collection("product").get().then(function(snapshot){
        for( let i =0 ; i< snapshot.docs.length ; i++){
          productContainer.innerHTML+=
          `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                      <h4 class="buy">Buy Now</h4>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
        }
    })
}

// filter by category

bags.onclick = ()=>{
    productContainer.innerHTML = "";
db.collection("product").where("product_image_alt","==","bag").get().then((snapshot)=>{
    
    for( let i =0 ; i< snapshot.docs.length ; i++){
        productContainer.innerHTML+=
        `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                      <h4 class="buy">Buy Now</h4>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
      }});

}

travelPillow.onclick = ()=>{
    productContainer.innerHTML = "";
db.collection("product").where("product_image_alt","==","pillow").get().then((snapshot)=>{
    
    for( let i =0 ; i< snapshot.docs.length ; i++){
        productContainer.innerHTML+=
        `
      <div class="col-lg-4 col-sm-6  col-12 mt-3 product" ">
      <div class="product-card">
          <div class="image-parent">
              <div class="image">
                  <img src="images/Product-Images/${snapshot.docs[i].data().product_image}.jpg" alt="${snapshot.docs[i].data().product_image_alt}" class="rounded">
              </div><!-- ./image -->
              <div class=" overlay image-overlay">
                  <div id="${snapshot.docs[i].id}">
                      <h4 class="buy">Buy Now</h4>
                  </div>
              </div><!-- ./image-overlay -->
          </div><!-- ./image-parent -->

          <div class="product-info row ">
              <div class="name_rate col-8">
              <h4 class="product-name" title="${snapshot.docs[i].data().product_name}">${snapshot.docs[i].data().product_name}</h4>
              <div class="rating">
                <div class="star-outer">
                <div class="star-inner"></div>
                </div>
              </div><!-- ./rating -->
          </div><!-- ./name_rate -->
          <h4 class="price col-4">${snapshot.docs[i].data().product_price}$</h4>
          </div>  <!-- ./product-info -->

      </div><!-- ./product-card -->
  </div>
      `
      }});

}


   document.getElementById("toTop").onclick=function(){
       window.scrollTo({ top: 0, behavior: 'smooth' });
   }
//scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     //         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     //         window.onscroll = function() {
//     //         window.scrollTo(scrollLeft, scrollTop);
//     //         }

//     //         productContainer.style.diplay = "block";
//     //         const divLayer = document.createElement("div");
//     //         divLayer.classList.add("layer");
//     //         productContainer.appendChild(divLayer)


//             // `    <div class="layer"></div>
//             // <div class="popup">
//             //     <div class="popup-image">
//             //         <img src="images/Product-Images/pink_bag_2.jpg">
//             //     </div><!-- ./popup-image -->
//             //     <div class="popup-info">
//             //         <h2 class="product_popup_name">product name</h2>
//             //         <div class="rate">
//             //         <span class="rate-stars">
//             //             <i class="fa fa-star"></i>
//             //             <i class="fa fa-star"></i>
//             //             <i class="fa fa-star"></i>
//             //             <i class="fa fa-star"></i>
//             //             <i class="fa fa-star"></i>
//             //         </span>
//             //         <span class="rate-num">4.5</span>
//             //     </div><!-- ./rate -->
//             //     <div class="price_color_buy">
//             //         <span class="popUpPrice">39$ </span>
//             //         <span class="color"> - pink</span>
//             //         <span class="buy-cart">
//             //             <i class="fas fa-shopping-cart"></i>
//             //             <button class="buyBtn">buy</button>
//             //         </span><!--./buy-cart  -->
//             //     </div><!-- ./price_color_buy -->
            
//             //     <p class="product-details">
//             //         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             //          Iure quia vitae itaque eveniet id illo libero quae asperiores
//             //           culpa! Nesciunt corrupti inventore ea, tempora quo corporis sed, 
//             //           modi distinctio consequuntur enim, illo facere beatae ratione. 
//             //           Asperiores animi ad recusandae explicabo?
//             //     </p>
//             //     </div><!-- ./popup-info -->
//             // </div><!-- ./popup -->`
      