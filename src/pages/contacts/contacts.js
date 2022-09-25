class Contacts {
  constructor() {
    this.el = null;
    this.db=null;
  }
  init(db) {
    this.el = document.querySelector(".contacts-page");
    if (!this.el) return;
    this.db = db;

    this.setBreadcrumbs();
    this.setForm();
    this.setSlider();
  }
  setBreadcrumbs() {}
  setForm() {
    const el = this.el.querySelector(".contacts__form");
    const template = `
        <div class='comment__form-wrapper'>
        <form class='comment__form'>
        <h3 class='comment__form-title h3-fs-24'>Post a comment</h3>
        <div class='form__body' data-animation="fade-out-bottom-stagger">
        <div class='input__wrapper input__item--lg input__wrapper--textarea'>
        <div class='input__container'>
        <label class='input__label' for='input-textarea'></label>
        <textarea class='input__item input__textarea' rows='5' id='input-textarea'></textarea>
        <span class='input__placeholder p1-light'>Your comment</span>
        <span class='input__error'></span>
        </div>
        </div>
        <div class='input__wrapper input__wrapper--input'>
        <label class='input__label' for='name'></label>
        <input class='input__item' type="text" id='name'></input>
        <span class='input__placeholder p1-light'>Your name</span>
        <span class='input__error'></span>
        </div>
        <div class='input__wrapper input__wrapper--input'>
        <label class='input__label' for='email'></label>
        <input class='input__item' type="text" id='name'></input>
        <span class='input__placeholder p1-light'>Your email</span>
        <span class='input__error'></span>
        
        </div>
        <div class='input__wrapper input__wrapper--checkbox'>

        <input class='input__item' type="checkbox" id='checkbox-item'></input>
        <span class='checkbox'></span>
        <label class='input__label p1-light' for='checkbox-item'>Remember me
        </label>
        </div>

        </div>
        <div class='form__actions'>
        <button class='form__submit btn btn--submit btn btn__dark' data-animation="fade-out"> Submit</button>
        </div>
        
        </form>
        </div>
        `;
    console.log(this.el);
    el.innerHTML = template;
  }
  setSlider() {
      console.log(this.db)
    const container = this.el.querySelector(".slider__wrapper");
    const data = this.db.projects.data.map((el) => this.setSlides(el)).join("");
    container.innerHTML = data;
  }
  setSlides(data) {
    const template = `
        <div class="slider__item">
            <div class="project__card">
                <div class="project__card-image">
                    <img src=${data.img}/>
                </div>
                <div class='content__wrapper'>
                    <p class='content__description p1-dg'>${data.title}</p>
                </div>
            </div>
        </div>
        `;
    return template;
  }
}
export default Contacts;
