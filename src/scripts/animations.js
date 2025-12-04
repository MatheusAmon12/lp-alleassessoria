document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const mm = gsap.matchMedia();

  // desktop motions
  mm.add("(min-width: 1024px)", () => {
    gsap.from("#member-photo-container-one", {
      duration: 1.3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-photo-one", {
      duration: 1.3,
      delay: 0.2,
      y: "100vh",
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-name-one", {
      duration: 1.3,
      delay: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-photo-container-two", {
      duration: 1.3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-name-two", {
      duration: 1.3,
      delay: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-photo-two", {
      duration: 1.3,
      delay: 0.2,
      y: "100vh",
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-photo-container-three", {
      duration: 1.3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-name-three", {
      duration: 1.3,
      delay: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#member-photo-three", {
      duration: 1.3,
      delay: 0.2,
      y: "100vh",
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 0px",
      },
    });

    gsap.from("#success-case-one", {
      rotation: 360,
      x: "100vw",
      opacity: 0,
      scrollTrigger: {
        trigger: "#success-cases",
        start: "top 740px",
        end: "bottom 750px",
        scrub: true,
      },
    });

    gsap.from("#success-case-two", {
      rotation: 360,
      x: "100vw",
      opacity: 0,
      scrollTrigger: {
        trigger: "#success-cases",
        start: "top 500px",
        end: "bottom 750px",
        scrub: true,
      },
    });
  });

  // mobile motions
  mm.add("(max-width: 768px)", () => {
    gsap.from("#success-case-one", {
      x: "100vw",
      duration: 1.3,
      opacity: 0,
      delay: 0.5,
      ease: "circ",
      scrollTrigger: {
        trigger: "#success-cases-title",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#success-case-two", {
      x: "-100vw",
      duration: 1.3,
      opacity: 0,
      delay: 0.5,
      ease: "circ",
      scrollTrigger: {
        trigger: "#success-cases-title",
        duration: 1.3,
        start: "top 300px",
      },
    });
  });

  // all media queries motions
  mm.add("all", () => {
    // hero section animations
    document.fonts.ready.then(() => {
      gsap.set("#headline-content", { opacity: 1 });
      let r = SplitText.create("#headline", { type: "words", aria: "hidden" });
      gsap.from(r.words, {
        opacity: 0,
        duration: 1.5,
        ease: "sine.out",
        stagger: 0.25,
        repeat: -1,
        yoyo: true,
        onComplete: () => split.revert(),
      });
    });

    gsap.from("#desktop-nav", {
      y: "-100vh",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#hero",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#hero-card-one", {
      x: "-100vw",
      duration: 1.3,
      opacity: 0,
      delay: 0.2,
      ease: "circ",
      scrollTrigger: {
        trigger: "#hero",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#hero-card-two", {
      x: "-100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#hero",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#hero-card-three", {
      x: "100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#hero",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#hero-card-four", {
      x: "100vw",
      duration: 1.3,
      opacity: 0,
      delay: 0.2,
      ease: "circ",
      scrollTrigger: {
        trigger: "#hero",
        duration: 1.3,
        start: "top 300px",
      },
    });

    // second section animations
    gsap.from("#mockup-one-container", {
      x: "100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1,
        start: "top 300px",
      },
    });

    gsap.from("#reason-one-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#reason-two-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.2,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#reason-three-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.4,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#reason-four-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.6,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#reason-five-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.8,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#reason-six-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 1.0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#reason-seven-card", {
      y: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 1.2,
      ease: "circ",
      scrollTrigger: {
        trigger: "#digital-business",
        duration: 1.3,
        start: "top 300px",
      },
    });

    // solutions section animations
    gsap.from("#solution-card-one", {
      x: "-100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#solution-card-two", {
      x: "100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#solution-card-three", {
      x: "-100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#solution-card-four", {
      x: "100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#mockup-two-container", {
      x: "-100vw",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#alle-solutions",
        duration: 1,
        start: "top 300px",
      },
    });

    gsap.from("#alle-solutions-card-one", {
      x: "100vh",
      duration: 1.3,
      opacity: 0,
      ease: "circ",
      scrollTrigger: {
        trigger: "#alle-solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#alle-solutions-card-two", {
      x: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.2,
      ease: "circ",
      scrollTrigger: {
        trigger: "#alle-solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#alle-solutions-card-three", {
      x: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.4,
      ease: "circ",
      scrollTrigger: {
        trigger: "#alle-solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#alle-solutions-card-four", {
      x: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.6,
      ease: "circ",
      scrollTrigger: {
        trigger: "#alle-solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#alle-solutions-card-five", {
      x: "100vh",
      duration: 1.3,
      opacity: 0,
      delay: 0.8,
      ease: "circ",
      scrollTrigger: {
        trigger: "#alle-solutions",
        duration: 1.3,
        start: "top 300px",
      },
    });

    gsap.from("#mockup-three-container", {
      x: "100vh",
      duration: 1.1,
      opacity: 0,
      delay: 0.8,
      ease: "circ",
      scrollTrigger: {
        trigger: "#final-cta",
        duration: 1.3,
        start: "top 300px",
      },
    });
  });

  window.addEventListener("beforeunload", () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeLine.clear();
    mm.revert();
  });
});
