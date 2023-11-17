const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap start

var tl = gsap.timeline()

tl.to("#animation-div" , {
    y: "100vh" ,
    scale: 0.8 ,
    duration: 0 

})

tl.to("#animation-div" , {
    y: "30vh" ,
    delay: 1

})

tl.to("#animation-div" , {
    y: "0vh" ,
    scale: 1 ,
    rotation: 360 ,
    duration: 0.7 

})


