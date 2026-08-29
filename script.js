/* =====================================================
    REGISTER GSAP
====================================================== */

gsap.registerPlugin(ScrollTrigger, Draggable);

/* =====================================================
    ELEMENTS
====================================================== */

const page = document.querySelector("[data-scroll-container]");
const cursor = document.querySelector(".cursor");
const cursorLabel = document.querySelector(".cursor-label");

/* =====================================================
    LOCOMOTIVE SCROLL
====================================================== */

let locoScroll;

function initSite() {
    locoScroll = new LocomotiveScroll({
        el: page,
        smooth: true,
        lerp: .075,
        multiplier: .9,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(page, {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: page.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    createAnimations();
    ScrollTrigger.refresh();
}

/* =====================================================
    CUSTOM CURSOR
====================================================== */

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    currentX += (mouseX - currentX) * .18;
    currentY += (mouseY - currentY) * .18;
    gsap.set(cursor, { x: currentX, y: currentY });
    requestAnimationFrame(animateCursor);
}
animateCursor();

/* =====================================================
    CURSOR STATES
====================================================== */

document.querySelectorAll("[data-cursor]").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        cursorLabel.textContent = element.dataset.cursor;
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});

/* =====================================================
    MAGNETIC BUTTON
====================================================== */

document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        gsap.to(button, {
            x: x * .25,
            y: y * .25,
            duration: .3,
            ease: "power3.out"
        });
    });
    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: .7,
            ease: "elastic.out(1, .4)"
        });
    });
});

/* =====================================================
    MAIN ANIMATIONS
====================================================== */

function createAnimations() {
    /* -------------------------------------------------
        HERO
    ------------------------------------------------- */
    const heroTimeline = gsap.timeline();

    heroTimeline
        .from(".nav", {
            y: -50,
            opacity: 0,
            duration: .8,
            ease: "power3.out"
        })
        .from(".hero-kicker", {
            y: 30,
            opacity: 0,
            duration: .6
        }, "-=.4")
        .from(".hero-line", {
            yPercent: 120,
            opacity: 0,
            stagger: .1,
            duration: 1.2,
            ease: "power4.out",
        }, "-=.2")
        .from(".hero-description", {
            y: 30,
            opacity: 0,
            duration: .8,
        }, "-=.2");

    /* -------------------------------------------------
        HERO SHAPES
    ------------------------------------------------- */
    gsap.to(".shape-blue", {
        y: 100,
        rotation: 35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".shape-red", {
        x: -90,
        y: -50,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".shape-yellow", {
        rotation: 140,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    /* -------------------------------------------------
        ABOUT
    ------------------------------------------------- */
    gsap.from(".about-statement", {
        y: 130,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about",
            scroller: page,
            start: "top 70%"
        }
    });

    gsap.from(".about-big-number", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about",
            scroller: page,
            start: "top 60%"
        }
    });

    /* -------------------------------------------------
        SKILLS
    ------------------------------------------------- */
    gsap.from(".skill", {
        y: 100,
        opacity: 0,
        stagger: .08,
        duration: .8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".skills",
            scroller: page,
            start: "top 70%"
        }
    });

    /* -------------------------------------------------
        GIANT STATEMENT
    ------------------------------------------------- */
    document.querySelectorAll(".statement-word").forEach((word) => {
        const speed = Number(word.dataset.speed);
        gsap.to(word, {
            x: speed * 120,
            scrollTrigger: {
                trigger: ".statement",
                scroller: page,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    /* -------------------------------------------------
        PROJECT INTRO
    ------------------------------------------------- */
    gsap.from(".projects-intro h2", {
        y: 160,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".projects-intro",
            scroller: page,
            start: "top 70%"
        }
    });

    /* -------------------------------------------------
        HORIZONTAL PROJECTS
    ------------------------------------------------- */
    const projectTrack = document.querySelector(".projects-track");
    const horizontalSection = document.querySelector(".horizontal-projects");

    if (projectTrack && horizontalSection && window.innerWidth > 800) {
        const getDistance = () => projectTrack.scrollWidth - window.innerWidth;

        gsap.to(projectTrack, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalSection,
                scroller: page,
                start: "top top",
                end: () => "+=" + getDistance(),
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
            }
        });
    }

    /* -------------------------------------------------
        PROJECT IMAGE PARALLAX
    ------------------------------------------------- */
    document.querySelectorAll(".project-image img").forEach((image) => {
        gsap.fromTo(image, { scale: 1.1 }, {
            scale: 1,
            scrollTrigger: {
                trigger: image,
                scroller: page,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    /* -------------------------------------------------
        PROJECT CARDS
    ------------------------------------------------- */
    document.querySelectorAll(".project-card").forEach((card) => {
        gsap.from(card, {
            opacity: 0,
            y: 80,
            duration: 1,
            scrollTrigger: {
                trigger: horizontalSection,
                scroller: page,
                start: "top 75%"
            }
        });
    });

    /* -------------------------------------------------
        BOARD
    ------------------------------------------------- */
    gsap.from(".board-heading", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".board-section",
            scroller: page,
            start: "top 70%"
        }
    });

    gsap.from(".board-card", {
        scale: .6,
        opacity: 0,
        rotation: 0,
        stagger: .12,
        duration: 1.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
            trigger: ".board-section",
            scroller: page,
            start: "top 60%"
        }
    });

    /* -------------------------------------------------
        PHILOSOPHY
    ------------------------------------------------- */
    gsap.from(".philosophy-text span", {
        y: 120,
        opacity: 0,
        stagger: .1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".philosophy",
            scroller: page,
            start: "top 70%"
        }
    });

    /* -------------------------------------------------
        CONTACT
    ------------------------------------------------- */
    gsap.from(".contact-title span", {
        y: 160,
        opacity: 0,
        stagger: .15,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".contact",
            scroller: page,
            start: "top 70%"
        }
    });

    gsap.from(".social-link", {
        x: 0,
        opacity: 0,
        stagger: .1,
        duration: .8,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".socials",
            scroller: page,
            start: "top 80%"
        }
    });

    gsap.to(".contact-circle", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none"
    });
}

/* =====================================================
    DRAGGABLE BOARD
====================================================== */

Draggable.create(".board-card", {
    bounds: ".board",
    inertia: false,
    edgeResistance: .7,
    onPress() {
        gsap.to(this.target, { scale: 1.05, duration: .2 });
    },
    onRelease() {
        gsap.to(this.target, { scale: 1, duration: .4, ease: "elastic.out(1,.5)" });
    }
});

/* =====================================================
    BOARD RANDOM FLOAT
====================================================== */

document.querySelectorAll(".board-card").forEach((card, index) => {
    gsap.to(card, {
        y: index % 2 === 0 ? -15 : 15,
        duration: 2.5 + index * .25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

/* =====================================================
    INITIALIZE
====================================================== */

initSite();

/* =====================================================
    RESIZE
====================================================== */

window.addEventListener("resize", () => {
    if (locoScroll) {
        locoScroll.update();
    }
    ScrollTrigger.refresh();
});

/* =====================================================
    CLEANUP (prevents memory leaks)
====================================================== */

window.addEventListener("beforeunload", () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (locoScroll) locoScroll.destroy();
});