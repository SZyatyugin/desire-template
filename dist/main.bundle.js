"use strict";
(self["webpackChunkdesire"] = self["webpackChunkdesire"] || []).push([[179],{

/***/ 108:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/js/components/modal/index.js
class Modal {
  constructor() {
    this._container = null, this.init();
  }

  init() {
    this._container = document.querySelector('.rightside-menu');
  }

  initEvents() {
    this.initClose();
  }

  initClose() {
    console.log(this._container);

    this._container.classList.remove('active');
  }

}

/* harmony default export */ const modal = (Modal);
;// CONCATENATED MODULE: ./src/js/components/rightSideMenu/index.js


class RightSideMenu extends modal {
  constructor() {
    super();
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
/* harmony default export */ const components_rightSideMenu = ((/* unused pure expression or super */ null && (rightSideMenu)));
;// CONCATENATED MODULE: ./src/js/components/cssProperty.js
const setCSSProperty = () => {
  const resizeHandler = () => {
    document.documentElement.style.setProperty('--inner-width', window.innerWidth + 'px');
    document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
  };

  resizeHandler();
  window.addEventListener('resize', resizeHandler);
};

/* harmony default export */ const cssProperty = (setCSSProperty);
;// CONCATENATED MODULE: ./src/js/components/header.js
const headerController = () => {
  const btn = document.querySelector('.header__btn');
  const menu = document.querySelector('.header__container--mobile');
  const header = document.querySelector('.header');
  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    header.classList.toggle('active');
  });
};

/* harmony default export */ const header = (headerController);
;// CONCATENATED MODULE: ./src/js/index.js




header();
cssProperty();
;// CONCATENATED MODULE: ./src/db/index.js
const db = {
  about_page: {
    collections_image: [{
      id: 1,
      url: "./assets/images/about/promo/pr1.png"
    }, {
      id: 2,
      url: "./assets/images/about/promo/pr2.png"
    }, {
      id: 3,
      url: "./assets/images/about/promo/pr3.png"
    }, {
      id: 4,
      url: "./assets/images/about/promo/pr4.png"
    }, {
      id: 5,
      url: "./assets/images/about/promo/pr5.png"
    }]
  },
  gallery_page: {
    projects: [{
      main_image: './assets/images/gallery/p1.png',
      id: 1
    }, {
      main_image: './assets/images/gallery/p2.png',
      id: 2
    }, {
      main_image: './assets/images/gallery/p3.png',
      id: 3
    }, {
      main_image: './assets/images/gallery/p4.png',
      id: 4
    }, {
      main_image: './assets/images/gallery/p5.png',
      id: 5
    }, {
      main_image: './assets/images/gallery/p6.png',
      id: 6
    }, {
      main_image: './assets/images/gallery/p7.png',
      id: 7
    }, {
      main_image: './assets/images/gallery/p8.png',
      id: 8
    }, {
      main_image: './assets/images/gallery/p9.png',
      id: 9
    }, {
      main_image: './assets/images/gallery/p10.png',
      id: 10
    }, {
      main_image: './assets/images/gallery/p1.png',
      id: 11
    }, {
      main_image: './assets/images/gallery/p2.png',
      id: 12
    }, {
      main_image: './assets/images/gallery/p3.png',
      id: 13
    }, {
      main_image: './assets/images/gallery/p4.png',
      id: 14
    }, {
      main_image: './assets/images/gallery/p5.png',
      id: 15
    }, {
      main_image: './assets/images/gallery/p6.png',
      id: 16
    }, {
      main_image: './assets/images/gallery/p7.png',
      id: 17
    }, {
      main_image: './assets/images/gallery/p8.png',
      id: 18
    }, {
      main_image: './assets/images/gallery/p9.png',
      id: 19
    }, {
      main_image: './assets/images/gallery/p10.png',
      id: 20
    }]
  },
  blog_page: {
    blog: [{
      id: 1,
      image: {
        id: 1,
        url: './assets/images/blog/b1.jpg'
      },
      title: 'Red selfies edison bulb four dollar toast humblebrag for the furniture',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Ann Summers',
        date: 'August 15, 2020',
        category: {
          id: 1,
          title: 'Bedroom Furniture'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '18 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }, {
      id: 2,
      image: {
        id: 1,
        url: './assets/images/blog/b2.jpg'
      },
      title: 'Authentic kogi shabby chic',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Lux Morningstar',
        date: 'August 12, 2020',
        category: {
          id: 2,
          title: 'Design'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '15 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }, {
      id: 3,
      image: {
        id: 1,
        url: './assets/images/blog/b3.png'
      },
      title: 'Semiotics fixie four dollar toast, next level woke',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Ann Summers',
        date: 'August 18, 2020',
        category: {
          id: 1,
          title: 'Table Furniture'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '15 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }, {
      id: 4,
      image: {
        id: 1,
        url: './assets/images/blog/b2.jpg'
      },
      title: 'Authentic kogi shabby chic',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Lux Morningstar',
        date: 'August 12, 2020',
        category: {
          id: 2,
          title: 'Design'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '15 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }, {
      id: 5,
      image: {
        id: 1,
        url: './assets/images/blog/b3.png'
      },
      title: 'Semiotics fixie four dollar toast, next level woke',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Ann Summers',
        date: 'August 18, 2020',
        category: {
          id: 1,
          title: 'Table Furniture'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '15 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }, {
      id: 6,
      image: {
        id: 1,
        url: './assets/images/blog/b1.jpg'
      },
      title: 'Red selfies edison bulb four dollar toast humblebrag for the furniture',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Ann Summers',
        date: 'August 15, 2020',
        category: {
          id: 1,
          title: 'Bedroom Furniture'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '15 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }, {
      id: 7,
      image: {
        id: 1,
        url: './assets/images/blog/b2.jpg'
      },
      title: 'Authentic kogi shabby chic',
      description: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table',
      info: {
        author: 'Lux Morningstar',
        date: 'August 12, 2020',
        category: {
          id: 2,
          title: 'Design'
        }
      },
      description_block: {
        description_1: "Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
        quote: {
          description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author: 'Paul Rand'
        },
        description_2: "Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
      },
      comments: {
        data: [{
          author: 'Lea Brown',
          date: '15 aug 2022',
          icon: './assets/images/blog/avatar.png',
          comment: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'
        }]
      }
    }],
    quote: {
      description: 'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
      author: 'Paul Rand'
    }
  },
  projects: {
    data: [{
      img: './assets/images/contacts/project1.jpg',
      title: 'Truffaut literally trust',
      id: 1
    }, {
      img: './assets/images/contacts/project2.jpg',
      title: 'Truffaut literally trust',
      id: 2
    }, {
      img: './assets/images/contacts/project3.jpg',
      title: 'Truffaut literally trust',
      id: 3
    }, {
      img: './assets/images/contacts/project4.jpg',
      title: 'Truffaut literally trust',
      id: 4
    }, {
      img: './assets/images/contacts/project5.jpg',
      title: 'Truffaut literally trust',
      id: 5
    }, {
      img: './assets/images/contacts/project6.jpg',
      title: 'Truffaut literally trust',
      id: 6
    }, {
      img: './assets/images/contacts/project7.jpg',
      title: 'Truffaut literally trust',
      id: 7
    }, {
      img: './assets/images/contacts/project8.jpg',
      title: 'Truffaut literally trust',
      id: 8
    }, {
      img: './assets/images/contacts/project1.jpg',
      title: 'Truffaut literally trust',
      id: 9
    }, {
      img: './assets/images/contacts/project2.jpg',
      title: 'Truffaut literally trust',
      id: 10
    }]
  }
};
/* harmony default export */ const src_db = (db);
;// CONCATENATED MODULE: ./src/utils/state.js


class Store {
  constructor() {
    this.db = null;
    this.blogItemId = null;
  }

  init() {
    this.db = src_db;
  }

  setOneBlogId(id) {
    this.blogItemId = id;
    localStorage.setItem('articleId', id);
  }

  getBlogItemId() {
    return localStorage.getItem('articleId');
  }

}

const store = new Store();
/* harmony default export */ const state = (store);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/pages/index/index.js


class MainPageAnimation {
  constructor() {
    this.el = null;
    this.init();
  }

  init() {
    this.el = document.querySelector(".main-page");
    if (!this.el) return;
    this.animateWorksBlock();
  }

  animateWorksBlock() {
    const container = this.el.querySelector(".works-block__timeline");
    const childs = this.el.querySelectorAll(".works-block__timeline-item");
    const line = this.el.querySelector(".works-block__timeline-line");
    const lineDividers = line.querySelectorAll('.works-block__timeline-item__line');
    const containerParams = container.getBoundingClientRect();
    let maxElParams;
    Array.from(childs).map(el => {
      const params = el.getBoundingClientRect();

      if (!maxElParams) {
        maxElParams = params;
      }

      if (maxElParams.height < params.height) {
        maxElParams = params;
      }
    });
    gsap/* default.set */.ZP.set(container, {
      height: `max(${(maxElParams.height + 50) * 2}px,${(maxElParams.height + 50) * 2 / window.innerWidth * 100}vw)`
    });
    gsap/* default.set */.ZP.set(line, {
      top: "50%",
      yPercent: "-50"
    });
    Array.from(lineDividers).forEach((el, idx) => {
      const x = (idx + 1) * (maxElParams.width / containerParams.width) * 100;
      const y = idx % 2 == 0 ? 0 : -10;
      gsap/* default.set */.ZP.set(el, {
        top: `${y}px`,
        left: `${x}%`
      });
    });
    Array.from(childs).forEach((el, idx) => {
      const y = idx % 2 === 0 ? 0 : (maxElParams.height + 30) / (maxElParams.height * 2) * 100;
      const x = idx * (maxElParams.width / containerParams.width) * 100;
      gsap/* default.set */.ZP.set(el, {
        top: `${y}%`,
        left: `${x}%`
      });
    });
  }

}

/* harmony default export */ const index = (MainPageAnimation);
;// CONCATENATED MODULE: ./src/pages/about/about.js
class AboutPage {
  constructor() {
    this.el = null, this.db = null;
  }

  init(db) {
    this.el = document.querySelector(".about-page");
    if (!this.el) return;
    this.db = db.about_page;
    this.onLoadInit();
  }

  onLoadInit() {
    this.setImagesCollesction();
  }

  setImagesCollesction() {
    const block = this.el.querySelector(".collections-block");
    const images = block.querySelectorAll(".collections-block__collections-image");
    console.log(images);
    console.log(this.db);
    Array.from(images).map((el, idx) => {
      el.src = this.db.collections_image[idx].url;
    });
  }

}

/* harmony default export */ const about = (AboutPage);
;// CONCATENATED MODULE: ./src/pages/gallery/gallery.js
class GalleryPage {
  constructor() {
    this.el = null, this.db = null;
  }

  init(db) {
    this.el = document.querySelector('.gallery-page');
    if (!this.el) return;
    this.db = db.gallery_page;
    this.onLoadInit();
  }

  onLoadInit() {
    this.initGallery();
  }

  initGallery() {
    const block = this.el.querySelector('.projects-grid__container');
    const delta = 2;
    let counter = 0;
    let revert = 0;
    const images = this.db.projects.map((el, idx) => {
      let styleClass = 'projects-grid__item grid-item';
      let style;
      const integer = idx % 10 === 0 ? idx : null; //  console.log((idx+1)%10===0 || !!integer)
      //   console.log(!!integer)

      if ((idx + 1) % 10 === 0 || !!integer) {
        revert = revert === 0 ? 1 : 0;
        styleClass += revert === 1 ? ' grid-item--large-revert' : '';
      }

      if (idx === 0) {
        style = `grid-column:${idx + 1}/${idx + 1 + delta};grid-row:${idx + 1}/${idx + 1 + delta};`;
      }

      if ((idx + 1) % 10 === 0 || !!integer) {
        counter += 1;
        console.log(counter);
        style = revert === 1 ? `grid-column:3/5;grid-row:${counter > 1 && counter % 2 === 1 ? counter + delta * 2 : counter + delta}/${counter > 1 && counter % 2 === 1 ? counter + delta + delta * 2 : counter + delta * 2};` : `grid-column:1/3;grid-row:${counter - 1 + delta + delta}/${counter - 1 + delta + delta + delta};`;
      }

      if (idx === 0) {
        styleClass += ' grid-item--large';
      } else {
        styleClass += '';
      }

      const item = `<div ${style ? `style=${style}` : ''} class=" ${styleClass.trim()}"><img class='projects-grid__item-photo' src=${el.main_image}></div>`;
      return item;
    });
    console.log(images);
    Array.from(block.children).forEach(el => el.remove());
    block.insertAdjacentHTML('afterbegin', images.join(''));
  }

}

/* harmony default export */ const gallery = (GalleryPage);
;// CONCATENATED MODULE: ./src/pages/blog/blog.js



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
    this.db = src_db.blog_page;
    this.setNews();
    this.setPagination();
    this.createRecentPosts();
    this.createTags();
    this.initEvents();
    this.setBreadCrumbs();
  }

  setBreadCrumbs() {
    const el = this.el.querySelector('.breadcrumbs');
    el.classList.add('breadcrumbs--bg-lg');
  }

  setNews() {
    const classes = ["blog__section-news__item--quote", "blog__section-news__item--reduced", "blog__section-news__item"];
    const container = this.el.querySelector(".blog__section-news__container");
    const data = [...this.db.blog];
    const perPage = 3;
    const newData = [...data.slice((this.currentPage - 1) * perPage, (this.currentPage - 1) * perPage + perPage)];
    Array.from(container.children).forEach(el => container.removeChild(el));
    const blogs = newData.map((item, idx) => {
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
    }).join("");
    container.insertAdjacentHTML("afterbegin", blogs);
  }

  setPagination() {
    const pagination = this.el.querySelector(".blog__section-pagination-list");
    const data = [...this.db.blog];
    const perPage = 3;
    this.pages = Math.ceil(data.length / perPage);
    const newData = new Array(2).fill(null).map((el, idx) => {
      if (this.currentPage === this.pages ? idx === 1 : idx === 0) {
        return new Array(this.pages).fill(null).map((el, idx2) => {
          return `<li class='blog__section-pagination-list__item pagination__btn ${idx2 === 0 ? "p1-dg" : "p1-db"}'><button>${idx2 + 1}</button></li>`;
        }).join("");
      }

      return this.pages > 1 ? `<li class='blog__section-pagination-list__item ${this.currentPage === this.pages ? "pagination__btn-prev" : "pagination__btn-next"} p1-db'><button>${this.currentPage === this.pages ? '<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.87341 5.6707L0.734858 0.1357C0.5665 -0.0455414 0.293923 -0.0452368 0.125846 0.136638C-0.0421 0.318488 -0.0416661 0.613073 0.126714 0.794455L4.9594 6.00002L0.126541 11.2056C-0.041818 11.387 -0.0422519 11.6814 0.125673 11.8632C0.209928 11.9544 0.320308 12 0.430689 12C0.540787 12 0.650733 11.9547 0.734837 11.8642L5.87341 6.32932C5.9545 6.24218 6 6.12358 6 6.00002C6 5.87646 5.95437 5.75801 5.87341 5.6707Z" fill="black"/></svg>' : '<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.87341 5.6707L0.734858 0.1357C0.5665 -0.0455414 0.293923 -0.0452368 0.125846 0.136638C-0.0421 0.318488 -0.0416661 0.613073 0.126714 0.794455L4.9594 6.00002L0.126541 11.2056C-0.041818 11.387 -0.0422519 11.6814 0.125673 11.8632C0.209928 11.9544 0.320308 12 0.430689 12C0.540787 12 0.650733 11.9547 0.734837 11.8642L5.87341 6.32932C5.9545 6.24218 6 6.12358 6 6.00002C6 5.87646 5.95437 5.75801 5.87341 5.6707Z" fill="black"/></svg>'}</button></li>` : "";
    }).join("");
    Array.from(pagination.children).forEach(el => pagination.removeChild(el));
    pagination.insertAdjacentHTML("afterbegin", newData);
  }

  changePage(e) {
    e.preventDefault();
    const el = e.target.closest(".pagination__btn") || e.target.closest(".pagination__btn-next") || e.target.closest(".pagination__btn-prev");
    if (!el) return;
    console.log(e.target.textContent);
    if (this.currentPage < 1 || this.currentPage > this.pages) return;
    let incr = null;

    if (e.target.textContent === ">") {
      incr = 1;
    }

    if (e.target.textContent === "<") {
      incr = -1;
    }

    this.currentPage = incr ? this.currentPage + incr : +e.target.textContent;
    this.setNews();
    this.setPagination();
  }

  initEvents() {
    const pagination = this.el.querySelector(".blog__section-pagination-list");
    const links = this.el.querySelectorAll('.link-route');
    pagination.addEventListener("click", this.changePage.bind(this));
    links.forEach(el => {
      el.addEventListener('click', this.goToOneBlog.bind(this));
    });
  }

  goToOneBlog(e) {
    // e.preventDefault();
    const el = e.target.closest('.link-route');
    const id = el.getAttribute('data-article-id');
    state.setOneBlogId(id); //  history.pushState({},'',)
  }

  createRecentPosts() {
    const data = [...this.db.blog];
    const container = this.el.querySelector(".blog__section-aside__posts-list");
    const newData = data.slice(0, 3);
    const recent = newData.map(el => {
      const template = `<li class="blog__section-aside__posts-item">
            <p class="blog__section-aside__posts-item__title p1 p1-grey">${el.title}</p>
            <ul class="news__item-info__list p1 p1-light">
              <li class="news__item-info__list-item">${el.info.date}</li>
              <li class="divider">|</li>
              <li class="news__item-info__list-item">${el.info.author}</li>
            </ul>
          </li>`;
      return template;
    }).join("");
    Array.from(container.children).forEach(el => container.removeChild(el));
    container.insertAdjacentHTML("afterbegin", recent);
  }

  createTags() {
    const container = this.el.querySelector(".blog__section-aside__tags-list");
    const data = [...this.db.blog];
    const categoriesFiltered = data.map(el => el.info.category);
    const categoires = categoriesFiltered.reduce((accum, el) => {
      const checker = accum.find(item => item.id === el.id);
      return checker ? [...accum] : [...accum, el];
    }, []);
    Array.from(container.children).forEach(el => container.removeChild(el));
    const categoriesString = categoires.map(el => {
      const template = `<li class="blog__section-aside__tag"><button class='p1-fs-14 p1-fc-grey'>${el.title}</button></li>`;
      return template;
    }).join("");
    container.insertAdjacentHTML("afterbegin", categoriesString);
  }

}

/* harmony default export */ const blog = (BlogPage);
;// CONCATENATED MODULE: ./src/pages/article/article.js



class ArticlePage extends blog {
  constructor() {
    super();
    this.el = null;
    this.db = null;
    this.article = null;
  }

  init(db) {
    this.db = db.blog_page;
    this.el = document.querySelector('.blog-item__page');
    if (!this.el) return;
    this.getArticle();
    this.renderContent();
    this.createTags();
    this.createRecentPosts();
  }

  renderContent() {
    const container = this.el.querySelector('.blog-item__page-wrapper');
    const childrens = container.children;

    if (childrens.length > 0) {
      childrens.forEach(el => container.removeChild(el));
    }

    container.insertAdjacentHTML('afterbegin', this.setArticle());
  }

  getArticle() {
    const blog = this.db;
    const id = window.location.search.replace('?id=', '').trim();
    const article = blog.blog.find(el => el.id === +id);
    this.article = article;
  }

  setArticle() {
    const template = `
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
        `;
    return template;
  }

  setTabs() {
    const data = [...this.db.blog];
    const categoriesFiltered = data.map(el => el.info.category);
    const categories = categoriesFiltered.reduce((accum, el) => {
      const checker = accum.find(item => item.id === el.id);
      return checker ? [...accum] : [...accum, el];
    }, []);
    const template = `
        <div class='tabs'>
        <p class='tabs-title p1-bold p1-fs-20' data-animation="splittext--chars">Tags</p>
        <ul class='tabs-wrapper' data-animation="fade-out-bottom-stagger">
        ${categories.map(el => `<li class="blog__section-aside__tag"><button class='p1-fs-14 p1-fc-grey'>${el.title}</button></li>`).join('')}
        </ul>`;
    return template;
  }

  setNav() {
    const currentIdx = this.db.blog.findIndex(el => el.id === this.article.id);
    const prevIdx = currentIdx <= 0 ? this.db.blog.length - 1 : currentIdx - 1;
    const nextIdx = currentIdx >= this.db.blog.length - 1 ? 0 : currentIdx + 1;
    const prevArticle = this.db.blog.find((el, idx) => idx === prevIdx);
    const nextArticle = this.db.blog.find((el, idx) => idx === nextIdx);
    const template = `
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
        </div>`;
    return template;
  }

  setCommentsBlock() {
    console.log(this.article);
    const template = `
        <div class='comments__block'>
        <div class='comments__block-wrapper'>
        <h4 class='h4'>Comments:</h4>
        <ul class='comments__list' data-animation="fade-out-bottom-stagger">
        ${this.article.comments.data.length > 0 ? this.article.comments.data.map(el => {
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
            </li>`;
    }) : ''}
        </ul>
        ${this.setCommentsForm()}
        </div>
        </div>
        `;
    return template;
  }

  setCommentsForm() {
    const template = `
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
        `;
    return template;
  }

  createTags() {
    super.createTags();
  }

  createRecentPosts() {
    super.createRecentPosts();
  }

}

/* harmony default export */ const article = (ArticlePage);
;// CONCATENATED MODULE: ./src/pages/contacts/contacts.js
class Contacts {
  constructor() {
    this.el = null;
    this.db = null;
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
    console.log(this.db);
    const container = this.el.querySelector(".slider__wrapper");
    const data = this.db.projects.data.map(el => this.setSlides(el)).join("");
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

/* harmony default export */ const contacts = (Contacts);
;// CONCATENATED MODULE: ./src/js/components/animations/animation-plugin.js
class APlugin {
  constructor() {
    this.scrollTriggers = [];
    this.timelines = [];
  }

  add(el) {
    this.timelines.add(el);
  }

  init() {
    this.scrollTriggers.forEach(el => el.refresh());
  }

}

/* harmony default export */ const animation_plugin = (APlugin);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var ScrollTrigger = __webpack_require__(92);
// EXTERNAL MODULE: ./node_modules/gsap/SplitText.js + 1 modules
var SplitText = __webpack_require__(578);
;// CONCATENATED MODULE: ./src/js/components/animations/animations.js



gsap/* gsap.registerPlugin */.p8.registerPlugin(ScrollTrigger/* ScrollTrigger */.i, SplitText/* SplitText */.C);

const fadeOutHeader = plugin => {
  const els = document.querySelectorAll("[data-animation=fade-out--header]");
  const container = document.querySelectorAll(".header__inner");
  const tl = gsap/* gsap.timeline */.p8.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      fastScrollEnd: true
    }
  });
  tl.set(els, {
    opacity: 0
  });
  tl.to(els, {
    opacity: 1,
    stagger: 0.3,
    delay: 0.5
  });
};

const fadeOut = plugin => {
  const els = document.querySelectorAll("[data-animation=fade-out]");
  els.forEach(itm => {
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(itm, {
      opacity: 0
    });
    tl.to(itm, {
      opacity: 1,
      duration: 1.5
    });
  });
};

const fadeOutBottomStagger = plugin => {
  const els = document.querySelectorAll("[data-animation=fade-out-bottom-stagger]");
  els.forEach(itm => {
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(itm.children, {
      opacity: 0
    });
    tl.to(itm.children, {
      opacity: 1,
      stagger: 0.2,
      duration: 1.5
    });
  });
};

const animateLTRT = plugin => {
  const els = document.querySelectorAll("[data-animation=ltrt]");
  els.forEach(itm => {
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(itm, {
      clipPath: "polygon(0% 0%,0% 100%,0% 100%,0% 0%)"
    });
    tl.to(itm, {
      clipPath: "polygon(0% 0%,0% 100%,100% 100%,100% 0%)",
      ease: "power1.out",
      duration: 1.5
    });
  });
};

const animateBTTPZoom = plugin => {
  const els = document.querySelectorAll("[data-animation=ltrtZoom]");
  els.forEach(itm => {
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(itm, {
      clipPath: "polygon(0% 100%,0% 100%,100% 100%,100% 100%)"
    });
    tl.to(itm, {
      clipPath: "polygon(0% 0%,0% 100%,100% 100%,100% 0%)",
      ease: "power1.out",
      duration: 1.5
    });
  });
};

const animateSplitChars = plugin => {
  const els = document.querySelectorAll("[data-animation=splittext--chars]");
  els.forEach(itm => {
    let mySplitText = new SplitText/* SplitText */.C(itm, {
      type: "words, chars"
    });
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(mySplitText.chars, {
      y: 10,
      opacity: 0
    });
    tl.to(mySplitText.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.2
    });
  });
};

const animateSplitWords = plugin => {
  const els = document.querySelectorAll("[data-animation=splittext--words]");
  els.forEach(itm => {
    let mySplitText = new SplitText/* SplitText */.C(itm, {
      type: "words, chars"
    });
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(mySplitText.words, {
      y: 10,
      opacity: 0
    });
    tl.to(mySplitText.words, {
      y: 0,
      opacity: 1,
      stagger: 0.2
    });
  });
};

const animateLine = plugin => {
  const els = document.querySelectorAll("[data-animation=line--hr]");
  els.forEach(itm => {
    const tl = gsap/* gsap.timeline */.p8.timeline({
      scrollTrigger: {
        trigger: itm,
        start: "top bottom",
        fastScrollEnd: true
      }
    });
    tl.set(itm, {
      width: 0
    });
    tl.to(itm, {
      width: '100%',
      duration: 1.3
    });
  });
};

const rangeAnimate = plugin => {
  const container = document.querySelector("[data-animation=range-animate--container]");
  const els = document.querySelectorAll("[data-animation=range-animate]");
  const tl = gsap/* gsap.timeline */.p8.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      fastScrollEnd: true
    }
  });
  tl.set(els, {
    width: 0
  });
  tl.to(els, {
    width: '40%',
    stagger: 0.5,
    duration: 1.5
  });
};


;// CONCATENATED MODULE: ./src/index.js















const mainPageAnimation = new index();
const aboutPage = new about();
const galleryPage = new gallery();
const blogPage = new blog();
const articlePage = new article();
const contactsPage = new contacts();
const aPlugin = new animation_plugin();
aboutPage.init(src_db);
galleryPage.init(src_db);
blogPage.init(src_db);
articlePage.init(src_db);
contactsPage.init(src_db);
aPlugin.init();
fadeOut(aPlugin);
fadeOutHeader(aPlugin);
animateLTRT(aPlugin);
animateSplitChars(aPlugin);
animateSplitWords(aPlugin);
animateLine(aPlugin);
animateBTTPZoom(aPlugin);
fadeOutBottomStagger(aPlugin);
rangeAnimate(aPlugin);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [28], () => (__webpack_exec__(108)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map