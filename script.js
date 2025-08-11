// GSAP animations
gsap.from(".title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".subtitle", { y: 20, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".btn", { scale: 0.8, opacity: 0, duration: 0.5, delay: 0.6, stagger: 0.2 });
gsap.from("section", { opacity: 0, y: 50, duration: 1, stagger: 0.4, delay: 1 });
