import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const fadeOutHeader = (plugin) => {
  const els = document.querySelectorAll("[data-animation=fade-out--header]");
  const container = document.querySelectorAll(".header__inner");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      fastScrollEnd:true
    },
  });
  tl.set(els, { opacity: 0 });
  tl.to(els, { opacity: 1, stagger: 0.3, delay: 0.5 });
};
const fadeOut = (plugin) => {
  const els = document.querySelectorAll("[data-animation=fade-out]");
  els.forEach((itm) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });

    tl.set(itm, { opacity:0});
    tl.to(itm, { opacity:1,duration:1.5});
  });
};
const fadeOutBottomStagger=(plugin)=>{
  const els = document.querySelectorAll("[data-animation=fade-out-bottom-stagger]");
  els.forEach((itm) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });

    tl.set(itm.children, { opacity:0});
    tl.to(itm.children, { opacity:1,stagger:0.2, duration:1.5});
  });
}
const animateLTRT = (plugin) => {
  const els = document.querySelectorAll("[data-animation=ltrt]");

  els.forEach((itm) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });

    tl.set(itm, { clipPath: "polygon(0% 0%,0% 100%,0% 100%,0% 0%)" });
    tl.to(itm, { clipPath: "polygon(0% 0%,0% 100%,100% 100%,100% 0%)",ease: "power1.out",duration:1.5});
  });
};

const animateBTTPZoom = (plugin) => {
  const els = document.querySelectorAll("[data-animation=ltrtZoom]");

  els.forEach((itm) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });

    tl.set(itm, { clipPath: "polygon(0% 100%,0% 100%,100% 100%,100% 100%)" });
    tl.to(itm, { clipPath: "polygon(0% 0%,0% 100%,100% 100%,100% 0%)",ease: "power1.out",duration:1.5});
  });
};

const animateSplitChars = (plugin) => {
  const els = document.querySelectorAll("[data-animation=splittext--chars]");

  els.forEach((itm) => {
    let mySplitText = new SplitText(itm, { type: "words, chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });
    tl.set(mySplitText.chars, { y: 10, opacity: 0 });
    tl.to(mySplitText.chars, { y: 0, opacity: 1, stagger: 0.2 });
  });
};

const animateSplitWords = (plugin) => {
  const els = document.querySelectorAll("[data-animation=splittext--words]");

  els.forEach((itm) => {
    let mySplitText = new SplitText(itm, { type: "words, chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });
    tl.set(mySplitText.words, { y: 10, opacity: 0 });
    tl.to(mySplitText.words, { y: 0, opacity: 1, stagger: 0.2 });
  });
};
const animateLine=(plugin)=>{
  const els = document.querySelectorAll("[data-animation=line--hr]");
  els.forEach((itm) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd:true
      },
    });

    tl.set(itm, { width:0});
    tl.to(itm, {width:'100%', duration:1.3});
  });
}
const rangeAnimate=(plugin)=>{
  const container=document.querySelector("[data-animation=range-animate--container]")
  const els = document.querySelectorAll("[data-animation=range-animate]");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      fastScrollEnd:true
    },
  });
  tl.set(els, { width: 0 });
  tl.to(els, { width:'40%', stagger: 0.5, duration:1.5 });
}

export {
  fadeOut,
  fadeOutHeader,
  animateLTRT,
  animateSplitChars,
  animateSplitWords,
  animateLine,
  animateBTTPZoom,
  fadeOutBottomStagger,
  rangeAnimate
};
