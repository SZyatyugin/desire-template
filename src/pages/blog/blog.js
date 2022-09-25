import db from "../../db";
import store from '../../utils/state';
class BlogPage {
  constructor() {
    this.el = null;
    this.db = null;
    this.currentPage = 1;
    this.pages = null;
  }

  init(data) {
    this.el = document.querySelector(".blog-page");
    if (!this.el) return;
    this.db = db.blog_page;

    this.setNews();
    this.setPagination();
    this.createRecentPosts();
    this.createTags();
    this.initEvents();
    this.setBreadCrumbs();
  }
  setBreadCrumbs(){
      const el=this.el.querySelector('.breadcrumbs');
        el.classList.add('breadcrumbs--bg-lg')
  }
  setNews() {
    const classes = [
      "blog__section-news__item--quote",
      "blog__section-news__item--reduced",
      "blog__section-news__item",
    ];
    const container = this.el.querySelector(".blog__section-news__container");
    const data = [...this.db.blog];
    const perPage = 3;
    const newData = [
      ...data.slice(
        (this.currentPage - 1) * perPage,
        (this.currentPage - 1) * perPage + perPage
      ),
    ];

    Array.from(container.children).forEach((el) => container.removeChild(el));

    const blogs = newData
      .map((item, idx) => {
        const template = `<li class="blog__section-news__item ${classes[idx]}">
            <div class="news__item-image__wrapper">
                <img src="${item.image.url}" alt="${item.info.category.title}" class="news__item-image" data-animation='fade-out' >
            </div>
            <div class="news__item-info">
                <ul class="news__item-info__list" data-animation="fade-out-bottom-stagger">
                    <li class="news__item-info__list-item">
                        ${item.info.date}
                    </li>
                    <li class='divider'>|</li>
                    <li class="news__item-info__list-item">
                        by ${item.info.author}
                    </li>
                    <li class='divider'>|</li>
                    <li class="news__item-info__list-item">
                        ${item.info.category.title}
                    </li>
                </ul>
            </div>
            <div class="news__item-description__block">
                <a href=/article.html?id=${item.id} data-article-id=${item.id} class='link-route'><h3 class="news__item-header h3-fs-24" data-animation="splittext--chars">${item.title}</h3></a>
                <p class="news__item-description p1-light" data-animation="splittext--words">${item.description}</p>
            </div>
            <div class="news__iten-quote-block">
                <h3 class='news__item-quote h3-italic h3-fs-24' data-animation="splittext--words">${this.db.quote.description}</h3>
                <div class="line line-hr" data-animation="line--hr"></div>
                <p class="news__item-quote__author" data-animation="splittext--chars">${this.db.quote.author}/p>
            </div>
        </li>`;
        return template;
      })
      .join("");

    container.insertAdjacentHTML("afterbegin", blogs);
  }
  setPagination() {
    const pagination = this.el.querySelector(".blog__section-pagination-list");
    const data = [...this.db.blog];
    const perPage = 3;
    this.pages = Math.ceil(data.length / perPage);

    const newData = new Array(2)
      .fill(null)
      .map((el, idx) => {
        if (this.currentPage === this.pages ? idx === 1 : idx === 0) {
          return new Array(this.pages)
            .fill(null)
            .map((el, idx2) => {
              return `<li class='blog__section-pagination-list__item pagination__btn ${
                idx2 === 0 ? "p1-dg" : "p1-db"
              }'><button>${idx2 + 1}</button></li>`;
            })
            .join("");
        }

        return this.pages > 1
          ? `<li class='blog__section-pagination-list__item ${
              this.currentPage === this.pages
                ? "pagination__btn-prev"
                : "pagination__btn-next"
            } p1-db'><button>${
              this.currentPage === this.pages ? '<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.87341 5.6707L0.734858 0.1357C0.5665 -0.0455414 0.293923 -0.0452368 0.125846 0.136638C-0.0421 0.318488 -0.0416661 0.613073 0.126714 0.794455L4.9594 6.00002L0.126541 11.2056C-0.041818 11.387 -0.0422519 11.6814 0.125673 11.8632C0.209928 11.9544 0.320308 12 0.430689 12C0.540787 12 0.650733 11.9547 0.734837 11.8642L5.87341 6.32932C5.9545 6.24218 6 6.12358 6 6.00002C6 5.87646 5.95437 5.75801 5.87341 5.6707Z" fill="black"/></svg>' : '<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87341 5.6707L0.734858 0.1357C0.5665 -0.0455414 0.293923 -0.0452368 0.125846 0.136638C-0.0421 0.318488 -0.0416661 0.613073 0.126714 0.794455L4.9594 6.00002L0.126541 11.2056C-0.041818 11.387 -0.0422519 11.6814 0.125673 11.8632C0.209928 11.9544 0.320308 12 0.430689 12C0.540787 12 0.650733 11.9547 0.734837 11.8642L5.87341 6.32932C5.9545 6.24218 6 6.12358 6 6.00002C6 5.87646 5.95437 5.75801 5.87341 5.6707Z" fill="black"/></svg>'
            }</button></li>`
          : "";
      })
      .join("");
    Array.from(pagination.children).forEach((el) => pagination.removeChild(el));
    pagination.insertAdjacentHTML("afterbegin", newData);
    
  }
  
  changePage(e) {
      e.preventDefault();
      
    const el =
      e.target.closest(".pagination__btn") ||
      e.target.closest(".pagination__btn-next") || e.target.closest(".pagination__btn-prev");
    if (!el) return;
    console.log(e.target.textContent)
    if (this.currentPage < 1 || this.currentPage > this.pages) return;

    let incr = null;

    if (e.target.textContent === ">") {
      incr = 1;
    }
    if (e.target.textContent === "<") {
      incr = -1;
    }
    
    
    this.currentPage = incr?this.currentPage+incr:+e.target.textContent;
    

    this.setNews();
    this.setPagination();
  }
  initEvents(){
    const pagination = this.el.querySelector(".blog__section-pagination-list");
    const links=this.el.querySelectorAll('.link-route');
    pagination.addEventListener("click", this.changePage.bind(this));
    links.forEach(el=>{
      el.addEventListener('click',this.goToOneBlog.bind(this))
    })
  }
  goToOneBlog(e){
  // e.preventDefault();
  
    const el=e.target.closest('.link-route'); 
    const id=el.getAttribute('data-article-id');
    
    store.setOneBlogId(id);
  //  history.pushState({},'',)
  }

  createRecentPosts() {
    const data = [...this.db.blog];
    const container = this.el.querySelector(".blog__section-aside__posts-list");
    const newData = data.slice(0, 3);
    const recent = newData
      .map((el) => {
        const template = `<li class="blog__section-aside__posts-item">
            <p class="blog__section-aside__posts-item__title p1 p1-grey">${el.title}</p>
            <ul class="news__item-info__list p1 p1-light">
              <li class="news__item-info__list-item">${el.info.date}</li>
              <li class="divider">|</li>
              <li class="news__item-info__list-item">${el.info.author}</li>
            </ul>
          </li>`;
        return template;
      })
      .join("");
    Array.from(container.children).forEach((el) => container.removeChild(el));
    container.insertAdjacentHTML("afterbegin", recent);
  }
  createTags() {
    const container = this.el.querySelector(".blog__section-aside__tags-list");
    const data = [...this.db.blog];
    const categoriesFiltered = data.map((el) => el.info.category);
    const categoires = categoriesFiltered.reduce((accum, el) => {
      const checker = accum.find((item) => item.id === el.id);
      return checker ? [...accum] : [...accum, el];
    }, []);

    Array.from(container.children).forEach((el) => container.removeChild(el));
    const categoriesString = categoires
      .map((el) => {
        const template = `<li class="blog__section-aside__tag"><button class='p1-fs-14 p1-fc-grey'>${el.title}</button></li>`;
        return template;
      })
      .join("");
    container.insertAdjacentHTML("afterbegin", categoriesString);
  }

}
export default BlogPage;
