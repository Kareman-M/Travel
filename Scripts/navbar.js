// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCekpdISdrImi-UmrRnNWYYvj9xu_06phc",
    authDomain: "project2-5a404.firebaseapp.com",
    projectId: "project2-5a404",
    storageBucket: "project2-5a404.appspot.com",
    messagingSenderId: "395931880391",
    appId: "1:395931880391:web:344cbc31ac60a41d1267e2"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

let navBar = document.getElementById("fixednavbar")

function nav() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            navBar.innerHTML =
                `
        
    <div class="nav-menu flex-row">
    <div class="nav-brand">
        <a href="#" class="text-gray">Travello</a>
    </div>
    <div class="flex-row">
        <div class="toggle-collapse">
            <div class="toggle-icons">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div>
            <ul class="nav-items">
                <li class="nav-link">
                    <a href="/Index.html">Home</a>
                </li>
                <li class="nav-link">
                    <a href="/Gallary.html">3D Gallary</a>
                </li>
                <li class="nav-link">
                    <a href="/Ecommerce.html">Shop</a>
                </li>
                <li class="nav-link">
                    <a href="/index_Page2.html">Tours</a>
                </li>
                <li class="nav-link">
                    <a href="/Index.html#blog">Blog</a>
                </li>
                <li class="nav-link">
                    <a  id="logout" href="#">Log Out</a>
                </li>
            </ul>
        </div>
        <div >

            <div style="width: 15%;">
          <img src="../images/profileIcon.png" style="width: 100%; height: 100%; margin-top: 42%; cursor:pointer;" id="profile"> 
            </div>


        </div>
    </div>
</div>
 
    `
            let logoutBtn = document.getElementById("logout");
            logoutBtn.addEventListener("click", function (e) {
                e.preventDefault();
                auth.signOut().then(() => {
                    console.log("out");
                    window.location.replace("http://127.0.0.1:5500/login&signup.html");
                });
            })
            document.getElementById("profile").onclick = () => {
                window.location.replace("http://127.0.0.1:5500/profile.html");

            }
        } else {
            navBar.innerHTML =
                `
    <div class="nav-menu flex-row">
    <div class="nav-brand">
        <a href="#" class="text-gray">Travello</a>
    </div>
    <div class="flex-row">
        <div class="toggle-collapse">
            <div class="toggle-icons">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div>
            <ul class="nav-items">
                <li class="nav-link">
                    <a href="/Index.html">Home</a>
                </li>
                <li class="nav-link">
                    <a href="/Gallary.html">3D Gallary</a>
                </li>
                <li class="nav-link">
                    <a href="/Ecommerce.html">Shop</a>
                </li>
                <li class="nav-link">
                <a href="/index_Page2.html">Tours</a>
            </li>
                <li class="nav-link">
                <a href="/Index.html#blog">Blog</a>
                </li>
                <li class="nav-link">
                    <a href="/login&signup.html" id="id="logout"">Login</a>
                </li>
            </ul>
        </div>
        <div class="social text-gray">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
    </div>
</div>
    `
        }

        $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    console.log($toggleCollapse)

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
       $nav.toggleClass('collapse');
   })
    })
};
nav();