function locomotiveAnimation(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
}

function loaderAnimation(){
    let tl = gsap.timeline();

tl.to(".text-loader",{
    opacity:1,
    duration:0.09,
    stagger:{
        each:0.14,
        repeat:1,
        yoyo:true
    }
})

let loader = document.querySelector(".loader");

setTimeout(function(){
    loader.style.top = "-110%";
},2600)


}

function cursorAnimation(){

    let cursor = document.querySelector(".cursor");
    let main = document.querySelector("#main");
    
    
    main.addEventListener("mousemove",function(e){
        gsap.to(cursor,{
            x:e.clientX,
            y:e.clientY,
        })
    })
    
    
    main.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
           opacity:1,
           scale:1
        })
    })
    
    main.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity:0,
           scale:0
        })
    })
    
    
    
    // main.addEventListener("mousemove",function(e){
    //     cursor.style.left = e.clientX + "px";
    //     cursor.style.top = e.clientY + "px";
    // })
    
}

function playCursor(){
    let play = document.querySelector(".playCursor");
    let page2 = document.querySelector(".page2 video");
    
    page2.addEventListener("mousemove",function(details){
        gsap.to(play,{
            x:details.clientX + "px",
            y:details.clientY + "px"
        })
    })
    
    
    page2.addEventListener("mouseenter",function(){
        gsap.to(play,{
            opacity:1,
            scale:1
        })
    })
    
    page2.addEventListener("mouseleave",function(){
        gsap.to(play,{
            opacity:0,
            scale:0
        })
    })    
}

function page6SwiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
      });
    
}

function page7SwiperAnimation(){    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
}

function menuAnimation(){
    let menu = document.querySelector(".menu i");
    let open = document.querySelector("nav .open");
    let cross = document.querySelector(".open .open-content i");
    
    let flag = 0;
    
    // Event listener for the menu icon
    menu.addEventListener("click", function() {
        if (flag === 0) {
            open.style.right = "0%"; // Show the menu
            flag = 1;
        }
    });
    
    // Event listener for the cross icon
    cross.addEventListener("click", function() {
        if (flag === 1) {
            open.style.right = "-100%"; // Hide the menu by moving it off-screen
            flag = 0;
        }
    });    
}



page7SwiperAnimation();
page6SwiperAnimation();
locomotiveAnimation();
loaderAnimation();
cursorAnimation();
menuAnimation();
playCursor();