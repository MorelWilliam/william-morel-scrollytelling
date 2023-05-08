gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);















gsap.from(".fleche" , {
    y:-10,
    opacity:0,
    duration:2.5,
    repeat:-1
  })


  /* Animation chapitre 2 */
  gsap.to("#chapitre2", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre2",
        start: "top bottom",
        end: "bottom top ",
        scrub: true,
        markers: true
    }
});
gsap.timeline()
.from('#ev_planche', { rotate:25, duration: 3 })
.from('#ev_cabane', { x: '400%' });

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
gsap
  .from("#ev_podium", { rotation:25, repeat:-1, duration:4})

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
gsap
  .from("#ev_camion", { rotation:12, repeat:-1, duration:3})
 gsap.to('#ev_camion', {
    motionPath: '#Calque_1-2',
    duration: 4,
    repeat: -1,
    yoyo: true,
  })
  


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

  gsap.to("#chapitre6", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre6",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
    }
});
gsap
  .from("#ev_berceau", { rotation:12, repeat:-1, duration:3})

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
gsap
gsap.timeline()
.from('#ev_gateau', { x: '400%',duration:2 })
.from("#ev_gateau", { rotation:12, repeat:-1, duration:3});



  /* Animation chapitre 9 */
  gsap.to("#chapitre9", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre9",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
gsap
.from("#ev_arbre", { width:150,duration:3})
gsap.timeline()
.from('#ev_nuage_01', {  x: '400%', duration:5, opacity:100  })
.from('#ev_nuage_02', { x: '400%', duration:5,opacity:100 })
.from('#ev_nuage_03', { x: '400%',duration:4,opacity:100})
.from('#ev_nuage_01', { rotate:25, duration: 1, repeat:-1,opacity:100 })
.from('#ev_nuage_02', { rotate:40, duration: 4, repeat:-1,opacity:100 })
.from('#ev_nuage_03', { rotate:50, duration: 2, repeat:-1,opacity:100 });
