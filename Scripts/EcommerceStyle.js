let sortByDropdownMenu = document.querySelector(".drop-down");
let sortBy = document.querySelector(".sortBy");

    sortBy.onclick =()=>{
    if(sortByDropdownMenu.style.display == "none"){
        sortByDropdownMenu.style.display= "block";
    }else{
        sortByDropdownMenu.style.display="none";
    }
}

document.querySelector(".menu").onclick = ()=>{
    if(document.querySelector(".filter").style.display == "none" ){
    document.querySelector(".filter").style.display = "block";
    }else{
    document.querySelector(".filter").style.display = "none";

    }
}



// if( window.innerWidth <800){
//     console.log("hi")
//     // document.querySelector(".filter").style.display = "none";
// }