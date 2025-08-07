Shery.imageEffect("#back", {
    style: 5,
    config: {
        a: { value: 1.15, range: [0, 30] },
        b: { value: -0.97, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 2.1875719535735985 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.25, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.4, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.54, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.38, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
});

let imageDiv = document.querySelector("#imagediv");
if (imageDiv) {
    let images = imageDiv.querySelectorAll("img");
    let imageIndex = 0;
    let imageAnimating = false;

    document.querySelector("#main").addEventListener("click", function() {
        if (!imageAnimating) {
            imageAnimating = true;
            gsap.to(images[imageIndex], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function() {
                    gsap.set(this._targets[0], { top: "100%" });
                    imageAnimating = false;
                },
            });

            imageIndex = (imageIndex + 1) % images.length;

            gsap.to(images[imageIndex], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
}


let elems = document.querySelectorAll(".elem");

elems.forEach(function(elem) {
    let h1s = elem.querySelectorAll("h1");
    let index = 0;
    let animating = false;

    document.querySelector("#main").addEventListener("click", function() {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function() {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;
                },
            });

            index = (index + 1) % h1s.length;

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});


let tl = gsap.timeline();

tl.to("span", {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 1,
    ease: "circ.out"
});
tl.to("#loader", {
    height: 0,
    duration: .7,
    ease: "expo.easeInOut",
    delay: 0.75
});
tl.to("#loader", {
    display: "none"
});

tl.from("#nav", {
    y: -100,
    opacity: 0,
    ease: "power2.out"
})
tl.from("button , .elem h1", {
    y: 150,
    opacity: 0,
    ease: "power2.out"
})

tl.from("p , #imagediv", {
    x: 100,
    opacity: 0,
    ease: "power2.out"
})


// --- HOVER EFFECT FOR NAME-IMAGE CORRESPONDENCE ---
const nameElements = document.querySelectorAll("#container-left .elem:nth-child(1) h1");
const imageElements = document.querySelectorAll("#container-right #imagediv img");

nameElements.forEach((name, index) => {
    name.addEventListener("mouseenter", () => {
        gsap.to(imageElements[index], {
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut"
        });
    });

    name.addEventListener("mouseleave", () => {
        gsap.to(imageElements[index], {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });
    });
});