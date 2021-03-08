
 var tl = gsap.timeline();
tl.from('nav img',{
    y: -30,
    opacity: 0,
    ease :'expo.InOut',
    delay: .3
})
.from('nav #links a',{
    stagger :0.2,
    y: -30,
    opacity: 0,
    ease :'expo.InOut',
})
.from('nav>a',{
    y: -30,
    opacity: 0,
    ease :'expo.InOut',
})
.from('#main .elem',{
    stagger : .2,
    y :30,
    opacity: 0,
    ease :'expo.InOut',
})
.from('#bigimage img',{
    scale : 1.2,
    y :30,
    opacity: 0,
    ease :'expo.InOut',
})

gsap.from('#entrylevel .a',{
    scrollTrigger:{
        trigger:'#entryLevel',
        toggleActions:"play pause resume reverse", 
    },
    duration: 3,
    stagger: .4,
    y: 60,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#coursebanner .crselem',{
    scrollTrigger:{
        trigger:'#coursebanner',
        toggleActions:"play pause resume reverse",
    },
    duration: 2,
    delay:1,
    stagger: .4,
    y: 60,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#brandswork .brelem',{
    scrollTrigger:{
        trigger:'#brandswork',
        toggleActions:"play pause resume reverse",
    },
    duration: 1,
    delay:1,
    stagger: .2,
    y: 50,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#showcasegreen .shwelem',{
    scrollTrigger:{
        trigger:'#showcasegreen',
        toggleActions:"play pause resume reverse",
    },
    duration: 3,
    delay:1,
    stagger: .4,
    x:-70,
    opacity: 0,
    ease: 'expo.easeInOut'
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#statsdetails',
        toggleActions:"play pause resume reverse",
    },
});

tl3.from('#statsdetails .statselem',{
    
    stagger: .4,
    delay:0.2,
    y:30,
    opacity: 0,
    ease: 'expo.easeInOut'
})

.from('#cards .card',{
    stagger: .4,
    delay:0.2,
    y:50,
    opacity: 0,
    ease: 'expo.easeInOut'
})





