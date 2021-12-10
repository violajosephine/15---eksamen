gsap.registerPlugin(ScrollTrigger);

gsap.to("#intro h2", {
  y: 200,
  ease: "none",
  scrollTrigger: {
    trigger: "#intro_vid",
    start: "top 20% ",
    end: "50%",
    scrub: "true",
  },
});

gsap.to("#numb_text", {
  y: 1050,
  ease: "none",
  scrollTrigger: {
    trigger: "#faktaboks_numb",
    start: "top 30%",
    end: "60%",
    scrub: "true",
  },
});
