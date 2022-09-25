import gsap from "gsap";
class MainPageAnimation {
  constructor() {
    this.el = null;

    this.init();
  }
  init() {
    this.el = document.querySelector(".main-page");

    if(!this.el) return

    this.animateWorksBlock();
  }
  animateWorksBlock() {
    const container = this.el.querySelector(".works-block__timeline");
    const childs = this.el.querySelectorAll(".works-block__timeline-item");
    const line = this.el.querySelector(".works-block__timeline-line");
    const lineDividers=line.querySelectorAll('.works-block__timeline-item__line');
    const containerParams = container.getBoundingClientRect();
    let maxElParams;
    Array.from(childs).map((el) => {
      const params = el.getBoundingClientRect();
      if (!maxElParams) {
        maxElParams = params;
      }
      if (maxElParams.height < params.height) {
        maxElParams = params;
      }
    });
    gsap.set(container, {
      height: `max(${(maxElParams.height + 50) * 2}px,${
        (((maxElParams.height + 50) * 2) / window.innerWidth) * 100
      }vw)`,
    });
    gsap.set(line, { top: "50%", yPercent: "-50" });
    Array.from(lineDividers).forEach((el, idx) => {
        const x = (idx+1) * (maxElParams.width / containerParams.width) * 100;
        const y=idx%2==0?0:-10;
        gsap.set(el, { top: `${y}px`, left: `${x}%` });
      });
    Array.from(childs).forEach((el, idx) => {
      const y =
        idx % 2 === 0
          ? 0
          : ((maxElParams.height + 30) / (maxElParams.height * 2)) * 100;
      const x = idx * (maxElParams.width / containerParams.width) * 100;
      gsap.set(el, { top: `${y}%`, left: `${x}%` });
    });
  }
}
export default MainPageAnimation;
