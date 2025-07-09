
  window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    tl.from(".overlay-content .small-text span", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
    .from(".overlay-content h1", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(".overlay-content p", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .from(".overlay-content a", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5");
  });
  window.addEventListener("DOMContentLoaded", () => {
    const wave = document.querySelector(".bottom-shape");
    const path = document.querySelector(".elementor-shape-fill");

    gsap.from(wave, {
      y: 100,
      opacity: 0,
      scaleY:0,
      duration: 1.8,
      ease: "elastic.out(1, 0.5)",
      delay: 0.2
    });

    // Fill color transition (can change to any color)
    gsap.to(path, {
      fill: "#fff", // change to any wave color
      duration: 2,
      delay: 1.2,
      ease: "power2.inOut"
    });

    // Continuous wave-like motion (gentle up and down)
    // gsap.to(wave, {
    //   y: "-10",
    //   duration: 2,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "sine.inOut"
    // });
  });

  window.addEventListener("DOMContentLoaded", () => {
    // Animate badge on load
    gsap.from(".grid .badge", {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate images on load (staggered)
    gsap.from(".image-grid img", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.2
    });

    // Hover zoom effect for badge
    const badge = document.querySelector(".grid .badge");
    badge.addEventListener("mouseenter", () => {
      gsap.to(badge, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    badge.addEventListener("mouseleave", () => {
      gsap.to(badge, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    // Hover zoom effect for images
    document.querySelectorAll(".image-grid img").forEach(img => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });
  });

  