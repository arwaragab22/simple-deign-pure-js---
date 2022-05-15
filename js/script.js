let clearrandomimg;
//first check if localstorage has color item
if (localStorage.getItem("color") != null) {
    document.documentElement.style.setProperty(
        "--main--color",
        localStorage.getItem("color")
    );
}
//second check if localstorage has randomimg variable
//assume randomimgvariable is  true

if (localStorage.getItem("statusrandomimg") == "true") {
    randomimages();
}
if (localStorage.getItem("statusrandomimg") == null) {
    randomimages();
}
///////check localstorage has show bullet option
if (localStorage.getItem("showbullet") != null) {
   
    if (localStorage.getItem("showbullet") == "true") {
        document.querySelectorAll(".showbullets span")[0].classList.add("activespan");
        document.querySelector(".bullets").style.display = "block";
    }
    else {
        document.querySelectorAll(".showbullets span")[1].classList.add("activespan"); 
        document.querySelector(".bullets").style.display = "none";
    }
    
}
//menu links
document.querySelectorAll("header ul li a").forEach(function (ele) {
    ele.onclick = function () {
        document.querySelectorAll("header ul li a").forEach(function (element) {
            element.classList.remove("activetext");
           
        });
         event.preventDefault();
            document.querySelector(ele.dataset.section).scrollIntoView();
        ele.classList.add("activetext");
    };
});
let buttontoggle = document.querySelector(".landing i");

buttontoggle.onclick = function () {
    document.querySelector(".landing ul").classList.toggle("open");
}
let togglemenu = document.querySelector(".landing .open");
document.addEventListener("click", function (e) {
    if (e.target != buttontoggle && e.target !==document.querySelector(".landing .open")) {
        if (document.querySelector(".landing .open")) {
            document.querySelector(".landing ul").classList.remove("open");
     }
      
   }
});
document.querySelector(".landing ul").addEventListener("click", function (e) {
    e.stopPropagation();
});
//// images random in landing page

function randomimages() {
    let landing = document.querySelector(".landing");
    clearrandomimg = setInterval(() => {
        let randomimage = Math.floor(Math.random() * 3 + 1);
        landing.style.backgroundImage = 'url("images/' + randomimage + '.jpg")';
    }, 10000);
}

//////// setting
/////color
let seticon = document.querySelector(".fa-gear");
let settingsec = document.querySelector(".setting");
seticon.onclick = function () {
    this.classList.toggle("fa-spin");
    settingsec.classList.toggle("toggle-setting");
};
let color = document.querySelectorAll(".color li");
color.forEach(function (ele) {
    ele.addEventListener("click", function () {
        let selectsolor = ele.dataset.color;

        document.documentElement.style.setProperty("--main--color", selectsolor);
        localStorage.setItem("color", selectsolor);

        document.querySelectorAll(".setting li").forEach(function (element) {
            element.classList.remove("activecolor");
            element.classList.add("nonactivecolor");
        });
        ele.classList.remove("nonactivecolor");
        ele.classList.add("activecolor");
    });
});
//// random background option
let backgroundselect = document.querySelectorAll(".background span");

backgroundselect.forEach(function (ele) {
    ele.onclick = function () {
        backgroundselect.forEach(function (element) {
            element.classList.remove("activespan");
        });
        ele.classList.add("activespan");

        if (ele.dataset.reandomimg == "yes") {
            localStorage.setItem("statusrandomimg", true);
            randomimages();
        }
        if (ele.dataset.reandomimg == "no") {
            localStorage.setItem("statusrandomimg", false);
            clearInterval(clearrandomimg);
        }
    };
});
//////////// end setting
///startskills
let progress = document.querySelectorAll(".skills span");
let skills = document.querySelector(".skills");
window.onscroll = function () {
    if (scrollY > skills.offsetTop) {
        progress.forEach(function (ele) {
           
            ele.style.width = ele.dataset.progres;
        });
    }
};
///////////strat gallery
let galleryimgs = document.querySelectorAll(".imggallery figure");
galleryimgs.forEach(function (ele) {
    ele.onclick = function () {
       
        let newdiv = document.createElement("div");
        newdiv.className = "newgallery";
        document.body.appendChild(newdiv);
        let newfigure=ele.cloneNode(true);
        newdiv.appendChild(newfigure);
        newfigure.className = "newfigure";
        let newimg = document.querySelector(" .newfigure img");
        newimg.className = "newimg";
        let newcaption = document.querySelector(" .newfigure figcaption");
        newcaption.className ="newcaption"
        var style = document.createElement("style");
        style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
        document.head.appendChild(style);
        let newclose = document.createElement("div");
        newclose.innerHTML = '<i class=" fa-solid fa-xmark "></i> ';
        newclose.className = "newclose";
        newdiv.appendChild(newclose);
        newclose.addEventListener("click", function () {
            this.parentElement.remove();
            
            document.head.lastElementChild.remove();
        })
    };
});
////////timeline
let bullets = document.querySelector(".bullets");
let bullet = document.querySelectorAll(".bullet");

let bullettext = document.querySelectorAll(".bullets .text");
bullet.forEach(function (ele) {
    ele.onclick = function () {
        bullet.forEach(function (element) {
            element.classList.remove("bulletclick");
            
        })   

        
        ele.classList.add("bulletclick");
      
        document.querySelector(ele.dataset.section).scrollIntoView();
    }


})
////////show bullets
let showbullets = document.querySelectorAll(".showbullets span");
showbullets.forEach(function(ele){
    ele.onclick = function () {
        showbullets.forEach(function(element){
            element.classList.remove("activespan");
        })
      
        ele.classList.add("activespan");
        if (ele.dataset.show == "yes") {

            localStorage.setItem("showbullet", true);
            document.querySelector(".bullets").style.display = "block"
           
        }
        else {
            localStorage.setItem("showbullet", false); 
            document.querySelector(".bullets").style.display = "none"
        }

      
    }
})

//////reset button
document.querySelector(".reset button").onclick = function () {
    localStorage.removeItem("showbullet", "statusrandomimg", "color");
    localStorage.removeItem("statusrandomimg");
    localStorage.removeItem( "color");
    location.reload();
}
