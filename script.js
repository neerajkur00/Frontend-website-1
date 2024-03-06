var tl =gsap.timeline()
tl.to("#boxcontainer",{
    x:1200,
    yoyo:true,
    transition:all,
    delay:2,
    scrollTrigger:{
        trigger:("#boxcontainer"),
        scroller:"body",
        markers:true

    }
})