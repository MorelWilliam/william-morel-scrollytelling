gsap.registerPlugin(ScrollTrigger);


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
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});

  /* Animation chapitre 3 */
  gsap.to("#chapitre3", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre23",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});


  /* Animation chapitre 4 */
  gsap.to("#chapitre4", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre4",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});



  /* Animation chapitre 5 */
  gsap.to("#chapitre5", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre5",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});

  /* Animation chapitre 6 */
  gsap.to("#chapitre6", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre6",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});

  /* Animation chapitre 7 */
  gsap.to("#chapitre7", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre7",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});


  /* Animation chapitre 9 */
  gsap.to("#chapitre9", {
    backgroundSize: "120%",
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre9",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: true
    }
});

