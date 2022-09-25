import Modal from "../modal";
class RightSideMenu extends Modal {
  constructor() {
    super()
    this.el = null;

    
    this.init();
    this.initEvents();
  }
  init() {
    super.init();
    this.el = document.querySelector(".rightside-menu__container");
  }
  initEvents() {
    this.initCloseEvent();
  }
  initCloseEvent() {
    const button = this.el.querySelector(".rightside-menu__close");
    button.addEventListener("click", this.initClose.bind(this));
  }
  initClose() {
    super.initClose();
  }
}

const rightSideMenu = new RightSideMenu();
export default rightSideMenu;
