let NAVBAR = document.querySelector("nav");

window.addEventListener("scroll", function(){
    let test = this.document.documentElement.scrollTop;

    if(test > 100){
        NAVBAR.classList.add("navFixed_about")
    }else{
        NAVBAR.classList.remove("navFixed_about")
    }
    
})

