gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
   /* gsap.registerPlugin(DrawSVGPlugin); */  
  /*  gsap.registerPlugin(MorphSVGPlugin); */




gsap.from(".fleche" , {
    y:-10,
    opacity:0,
    duration:2.5,
    repeat:-1
  })


  /* Animation chapitre 2 */
  gsap.to("#chapitre2", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre2",
        start: "top bottom",
        end: "bottom top ",
        scrub: true,
        markers: true,

    },
});

gsap.to("#ev_planche", {
bottom: "20%",
  scrollTrigger: {
      trigger: "#chapitre2",
      start: "top bottom",
      end: "bottom top ",
      scrub: true,
  }
});

gsap.to("#ev_cabane", {
  bottom: "80%",
    scrollTrigger: {
        trigger: "#chapitre2",
        start: "top bottom",
        end: "bottom top ",
        scrub: true,
    }
  });

  
gsap.to("#perso_chap2", {
  bottom: "50%",
    scrollTrigger: {
        trigger: "#chapitre2",
        start: "top bottom",
        end: "bottom top ",
        scrub: true,
    }
  });



  /* Animation chapitre 3 */
  gsap.to("#chapitre3", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
gsap.from("#ev_podium", { rotation:25, repeat:-1, duration:4})

  /* Animation chapitre 4 */
  gsap.to("#chapitre4", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
gsap.to('#ev_camion', {
  motionPath: {
  path: '#parcours_voiture',
  align: '#parcours_voiture',
  autoRotate:true,},
  repeat: -1,
  duration: 5,
  yoyo: true,      
});
  


  /* Animation chapitre 5 */
  gsap.to("#chapitre5", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre5",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
gsap.timeline()
.from('#ev_piscine', { rotate:25, duration: 3, repeat:-1 })
.from('#ev_barbecue', { x: '400%' });

  /* Animation chapitre 6 */

  gsap.timeline({
    scrollTrigger: {
        trigger: "#chapitre6",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
    }
})
.to("#chapitre6", {
  backgroundSize: "120%",ease: "none"});


gsap.from("#ev_berceau", { rotation:12, repeat:-1, duration:3})


  /* Animation chapitre 7 */
  gsap.to("#chapitre7", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre7",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});

gsap.to('#ev_gateau', { 
  x: '+-100%',
  duration:5,
  scrollTrigger: {
    toggleActions: 'restart complete reverse reset',
    markers: true,
    start: 'top 0',
    end: 'top 100%',
    trigger: '#chapitre7',
  }
})

  /* Animation chapitre 8 */
 /* Draw svg et morph
  gsap.timeline(
    {scrollTrigger: {
      trigger: "#chapitre8",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
  }
})
.fromTo('#ligne', {drawSVG : "0% 0%" }, {drawSVG: "0% 100%", duration:10, ease :"power1.inOut"})
.fromTo("#point", {drawSVG : "0% 0%" }, {drawSVG: "0% 100%", duration:10, ease :"power1.inOut"})
.to("#chaise_morph", {duration:3, morphSVG: {shape:"#cane_morph"}}) Animation chapitre 9 */

  /* Animation chapitre 9 */

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre9",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,
    toggleActions: 'play pause resume pause'
}}
)
.from('.nuage.no1',{x:'-200%'},{  x: '200%', rotate:25, duration: 6, repeat:-1,opacity:100 })
.from('.nuage.no2', {x:'-200%'},{ x: '200%',rotate:40, duration: 6, repeat:-1,opacity:100 })
.from('.nuage.no3', {x:'-200%'},{x: '200%', rotate:50, duration: 6, repeat:-1,opacity:100 })
