gsap.registerPlugin(ScrollTrigger);

gsap.from("#intro h2", {
  y: -800,
  ease: "none",
  scrollTrigger: {
    trigger: "#intro_vid",
    start: "",
    end: "bottom 0%",
    scrub: "true",
  },
});
