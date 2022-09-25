
class AboutPage {
  constructor() {
    this.el = null,
    this.db=null
  }
  init(db) {
    this.el = document.querySelector(".about-page");
    if(!this.el) return
    this.db=db.about_page;

    this.onLoadInit();
  }
  onLoadInit() {
    this.setImagesCollesction();
  }
  setImagesCollesction() {
    const block = this.el.querySelector(".collections-block");
    const images = block.querySelectorAll(
      ".collections-block__collections-image"
    );
    console.log(images);
    console.log(this.db)
    Array.from(images).map((el,idx)=>{
        el.src=this.db.collections_image[idx].url
    })
  }
}
export default AboutPage;
