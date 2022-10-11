gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(TextPlugin);

gsap.from(".modern-it-company-hero", {
  x: "550%",
  duration: 3,
});

gsap.from(".gsap-trigger", {
  scrollTrigger: {
    trigger: ".gsap-trigger",
    toggleActions: "play none none none",
    start: "top bottom",
    markers: { startColor: "green", endColor: "red" },
  },
  opacity: 0,
  duration: 2,
});

gsap.from(".gsap-trigger-2", {
  scrollTrigger: {
    trigger: ".gsap-trigger-2",
    toggleActions: "play none none none",
    start: "top bottom",
    markers: { startColor: "green", endColor: "red" },
  },
  opacity: 0,
  duration: 3,
});

gsap.from(".gsap-trigger-3", {
  scrollTrigger: {
    trigger: ".gsap-trigger-3",
    toggleActions: "play none none none",
    start: "top bottom",
    markers: { startColor: "green", endColor: "red" },
  },
  opacity: 0,
  duration: 3,
});

gsap.from(".stagger-item", {
  scrollTrigger: {
    trigger: ".stagger-item",
  },
  stagger: 0.7,
  opacity: 0,
  duration: 0.5,
});

// Typewritter animation

gsap.fromTo(
  "#cursor",
  { autoAlpha: 0, x: -10 },
  { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
);

let tween = gsap.to("#text", {
  text: {
    value: "ParkIT",
  },
  duration: 2,
  delay: 3,
  ease: "none",
});
