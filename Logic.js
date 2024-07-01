let Skill = document.querySelector(".skill_btn");
let EduButton = document.querySelector(".Edu_btn");

let RateMainBox = document.querySelector(".rate_main_box");
let EDUCATION = document.querySelector(".EDUCATION");

Skill.addEventListener('click', function(){
    EDUCATION.style.display = "none";
    RateMainBox.style.display = "block";

    Skill.style.border = "2px solid black";
    EduButton.style.border = "2px solid transparent";
});

EduButton.addEventListener('click', function(){
    EDUCATION.style.display = "block";
    RateMainBox.style.display = "none";

    Skill.style.border = "2px solid transparent";
    EduButton.style.border = "2px solid black";
});

//nav start
let NAVBAR = document.querySelector("nav");

window.addEventListener("scroll", function(){
    let test = this.document.documentElement.scrollTop;

    if(test > 100){
        NAVBAR.classList.add("navFixed")
    }else{
        NAVBAR.classList.remove("navFixed")
    }
    
})
//nav end


let ofcanvasItem = document.querySelectorAll(".off_cus");

ofcanvasItem.addEventListener("click", function(){
    ofcanvasItem.style.backgroundColor = "#FFCC00";
});
      