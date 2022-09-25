

import store from '../../utils/state';
import BlogPage from '../blog/blog';

class ArticlePage extends BlogPage{

    constructor(){
        super()
        this.el=null
        this.db=null
        this.article=null
    }

    init(db){
        this.db=db.blog_page;
        this.el=document.querySelector('.blog-item__page');
   
        if(!this.el) return
        
        this.getArticle();
        this.renderContent();
        this.createTags();
        this.createRecentPosts();
        
    }


    renderContent(){
        
        const container=this.el.querySelector('.blog-item__page-wrapper');
        const childrens=container.children;
        if(childrens.length>0){
            childrens.forEach(el=>container.removeChild(el))
        }
        container.insertAdjacentHTML('afterbegin',this.setArticle())
    }
    getArticle(){
        const blog=this.db;
        const id=window.location.search.replace('?id=','').trim();
       
        const article=blog.blog.find(el=>el.id===+id);

        this.article=article;
        
        
    }
    setArticle(){
        
        const template=`
        <article class='blog__item'>
        <div class='blog__img-wrapper'>
        <img src='${this.article.image.url}' alt='article-photo' data-animation="fade-out"/>
        </div>
        <ul class='blog__tabs p1-db p1-fs-14' data-animation="fade-out-bottom-stagger">
        <li class='blog__tabs-item'>${this.article.info.date}</li>
        <li class='divider'>|</li>
        <li class='blog__tabs-item'>by ${this.article.info.author}</li>
        <li class='divider'>|</li>
        <li class='blog__tabs-item'>${this.article.info.category.title}</li>
        </ul>
        <h3 class='blog__title h3-fs-28' data-animation="splittext--chars">${this.article.title}</h3>
        <p class='blog__description p1-grey' data-animation="splittext--words">${this.article.description_block.description_1}</p>
        <div class='blog__quote-wrapper'>
        <h3 class='blog__quote h3-fs-24' data-animation="splittext--words">${this.article.description_block.quote.description}</h3>
        <div class='line line-hr' data-animation="line--hr"></div>
        <p class='quote__author p1-bold' data-animation="splittext--chars">${this.article.description_block.quote.author}</p>
        <p class="blog__description p1-grey" data-animation="splittext--words">${this.article.description_block.description_2}</p>
        </div>
        </article>
            ${this.setTabs()}
        </div>
        <div class='divider__line divider__line--hr divider__line--light divider__line--xl' data-animation="line--hr"></div>
            ${this.setNav()}
        <div class='divider__line divider__line--hr divider__line--light divider__line--xl' data-animation="line--hr"></div>
        ${this.setCommentsBlock()}
        `
        return template;
    }
    setTabs(){
        const data = [...this.db.blog];
        const categoriesFiltered = data.map((el) => el.info.category);
        const categories = categoriesFiltered.reduce((accum, el) => {
          const checker = accum.find((item) => item.id === el.id);
          return checker ? [...accum] : [...accum, el];
        }, []);
        const template=`
        <div class='tabs'>
        <p class='tabs-title p1-bold p1-fs-20' data-animation="splittext--chars">Tags</p>
        <ul class='tabs-wrapper' data-animation="fade-out-bottom-stagger">
        ${categories.map(el=>`<li class="blog__section-aside__tag"><button class='p1-fs-14 p1-fc-grey'>${el.title}</button></li>`).join('')}
        </ul>`
        return template
    }
    setNav(){
        
        const currentIdx=this.db.blog.findIndex(el=>el.id===this.article.id);
        const prevIdx=currentIdx<=0?this.db.blog.length-1:currentIdx-1;
        const nextIdx=currentIdx>=this.db.blog.length-1?0:currentIdx+1;
        const prevArticle=this.db.blog.find((el,idx)=>idx===prevIdx);
        const nextArticle=this.db.blog.find((el,idx)=>idx===nextIdx);
       
        const template=`
        <div class='blog__nav' data-animation="fade-out-bottom-stagger">
        <div class='nav__prev'>
        <a class='nav__btn-prev' href='/article.html?id=${prevArticle.id}'>
        <div class='nav__icon-prev'><svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.700126" fill-rule="evenodd" clip-rule="evenodd" d="M0.253179 10.8688L10.5303 0.260092C10.867 -0.0872877 11.4122 -0.0867037 11.7483 0.261889C12.0842 0.610436 12.0833 1.17506 11.7466 1.52271L2.08119 11.5L11.7469 21.4773C12.0836 21.825 12.0845 22.3893 11.7487 22.7379C11.5801 22.9126 11.3594 23 11.1386 23C10.9184 23 10.6985 22.9132 10.5303 22.7397L0.253179 12.1312C0.0910044 11.9642 0 11.7369 0 11.5C0 11.2632 0.0912647 11.0362 0.253179 10.8688Z" fill="#363838"/>
        </svg></div>
        <p class='article-title p1-fs-14 p1-light'>${prevArticle.title}</p>
        </a>
        </div>
        <div class='nav__next'>
        <a class='nav__btn-next' href='/article.html?id=${nextArticle.id}'>
        <p class='article-title p1-fs-14 p1-light'>${nextArticle.title}</p>
        <div class='nav__icon-next'><svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.700126" fill-rule="evenodd" clip-rule="evenodd" d="M11.7468 10.8688L1.46972 0.260092C1.133 -0.0872877 0.587846 -0.0867037 0.251693 0.261889C-0.0842001 0.610436 -0.0833322 1.17506 0.253429 1.52271L9.91881 11.5L0.253081 21.4773C-0.0836359 21.825 -0.0845039 22.3893 0.251346 22.7379C0.419856 22.9126 0.640617 23 0.861377 23C1.08157 23 1.30147 22.9132 1.46967 22.7397L11.7468 12.1312C11.909 11.9642 12 11.7369 12 11.5C12 11.2632 11.9087 11.0362 11.7468 10.8688Z" fill="#363838"/>
        </svg></div>
        </a>
        </div>
        </div>`
        return template
    }
    setCommentsBlock(){
        console.log(this.article)
        const template=`
        <div class='comments__block'>
        <div class='comments__block-wrapper'>
        <h4 class='h4'>Comments:</h4>
        <ul class='comments__list' data-animation="fade-out-bottom-stagger">
        ${this.article.comments.data.length>0?this.article.comments.data.map(el=>{
            return `        <li class='comments__list-item'>
            <div class='comment__item'>
            <div class='comment__header'>
            <div class='comment__header-logo'>
            <img src=${el.icon} data-animation="fade-out"/>
            </div>
           
            </div>
            <div class='comment__body'>
            <div class='comment__header-info'>
            <div class='comment__header-description'>
            <p class='comment__header-author p1-bold' data-animation="splittext--chars">${el.author}</p>
            <p class='comment__header-date p1-light' data-animation="splittext--chars">${el.date}</p>
            </div>
            <div class='comment__header-actions'>
            <button class='comment__header-btn btn__action p1-light p1-bold' data-animation="splittext--chars">Reply</button>
            </div>
            </div>
           
            <div class='comment__content'>
            <p class='comment__text p1-db' data-animation="splittext--words">${el.comment}</p>
            </div>
            </div>
            </div>
            </li>`
        }):''}
        </ul>
        ${this.setCommentsForm()}
        </div>
        </div>
        `
        return template
    }
    setCommentsForm(){
        const template=`
        <div class='comment__form-wrapper'>
        <form class='comment__form'>
        <h3 class='comment__form-title h3-fs-24' data-animation="splittext--words">Post a comment</h3>
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
        <button class='form__submit btn btn--submit btn btn__dark'> Submit</button>
        </div>
        
        </form>
        </div>
        `
        return template
    }
    createTags(){
        super.createTags()
    }
    createRecentPosts(){
        super.createRecentPosts()
    }


}

export default ArticlePage