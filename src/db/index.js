const db = {
    about_page: {
      collections_image: [{
          id: 1,
          url: "./assets/images/about/promo/pr1.png",
        },
        {
          id: 2,
          url: "./assets/images/about/promo/pr2.png",
        },
        {
          id: 3,
          url: "./assets/images/about/promo/pr3.png",
        },
        {
          id: 4,
          url: "./assets/images/about/promo/pr4.png",
        },
        {
          id: 5,
          url: "./assets/images/about/promo/pr5.png",
        },
      ]
    },
    gallery_page: {
      projects: [{
          main_image: './assets/images/gallery/p1.png',
          id: 1
        },
        {
          main_image: './assets/images/gallery/p2.png',
          id: 2
        },
        {
          main_image: './assets/images/gallery/p3.png',
          id: 3
        },
        {
          main_image: './assets/images/gallery/p4.png',
          id: 4
        },
        {
          main_image: './assets/images/gallery/p5.png',
          id: 5
        },
        {
          main_image: './assets/images/gallery/p6.png',
          id: 6
        },
        {
          main_image: './assets/images/gallery/p7.png',
          id: 7
        },
        {
          main_image: './assets/images/gallery/p8.png',
          id: 8
        },
        {
          main_image: './assets/images/gallery/p9.png',
          id: 9
        },
        {
          main_image: './assets/images/gallery/p10.png',
          id: 10
        },
        {
          main_image: './assets/images/gallery/p1.png',
          id: 11
        },
        {
          main_image: './assets/images/gallery/p2.png',
          id: 12
        },
        {
          main_image: './assets/images/gallery/p3.png',
          id: 13
        },
        {
          main_image: './assets/images/gallery/p4.png',
          id: 14
        },
        {
          main_image: './assets/images/gallery/p5.png',
          id: 15
        },
        {
          main_image: './assets/images/gallery/p6.png',
          id: 16
        },
        {
          main_image: './assets/images/gallery/p7.png',
          id: 17
        },
        {
          main_image: './assets/images/gallery/p8.png',
          id: 18
        },
        {
          main_image: './assets/images/gallery/p9.png',
          id: 19
        },
        {
          main_image: './assets/images/gallery/p10.png',
          id: 20
        }
      ]
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
            description_block:{
              description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
              quote:{
                description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                author:'Paul Rand'
                },
                description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
            },
            comments:{
              data:[
                {author:'Lea Brown', date:'18 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
              ]
            }
          },
            {
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
              description_block:{
                description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
                quote:{
                  description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                  author:'Paul Rand'
                  },
                  description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
              },
              comments:{
                data:[
                  {author:'Lea Brown', date:'15 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
                ]
              }
            },
            {
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
                description_block:{
                  description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
                  quote:{
                    description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                    author:'Paul Rand'
                    },
                    description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
                },
                comments:{
                  data:[
                    {author:'Lea Brown', date:'15 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
                  ]
                }
            },
            {
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
                  description_block:{
                    description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
                    quote:{
                      description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                      author:'Paul Rand'
                      },
                      description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
                  },
                  comments:{
                    data:[
                      {author:'Lea Brown', date:'15 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
                    ]
                  }
            },
            {
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
                    description_block:{
                      description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
                      quote:{
                        description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                        author:'Paul Rand'
                        },
                        description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
                    },
                    comments:{
                      data:[
                        {author:'Lea Brown', date:'15 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
                      ]
                    }
            },
            {
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
                      description_block:{
                        description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
                        quote:{
                          description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                          author:'Paul Rand'
                          },
                          description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
                      },
                      comments:{
                        data:[
                          {author:'Lea Brown', date:'15 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
                        ]
                      }
            },
            {
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
                        description_block:{
                          description_1:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.",
                          quote:{
                            description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
                            author:'Paul Rand'
                            },
                            description_2:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan."
                        },
                        comments:{
                          data:[
                            {author:'Lea Brown', date:'15 aug 2022', icon:'./assets/images/blog/avatar.png',comment:'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche'}
                          ]
                        }
            }
          ],
      quote:{
          description:'Simplicity is not the goal. It is the by-product of a good idea and modest expectations',
          author:'Paul Rand'
          }
          
          },
    projects:{
      data:[
        {img:'./assets/images/contacts/project1.jpg',title:'Truffaut literally trust',id:1},
        {img:'./assets/images/contacts/project2.jpg',title:'Truffaut literally trust',id:2},
        {img:'./assets/images/contacts/project3.jpg',title:'Truffaut literally trust',id:3},
        {img:'./assets/images/contacts/project4.jpg',title:'Truffaut literally trust',id:4},
        {img:'./assets/images/contacts/project5.jpg',title:'Truffaut literally trust',id:5},
        {img:'./assets/images/contacts/project6.jpg',title:'Truffaut literally trust',id:6},
        {img:'./assets/images/contacts/project7.jpg',title:'Truffaut literally trust',id:7},
        {img:'./assets/images/contacts/project8.jpg',title:'Truffaut literally trust',id:8},
        {img:'./assets/images/contacts/project1.jpg',title:'Truffaut literally trust',id:9},
        {img:'./assets/images/contacts/project2.jpg',title:'Truffaut literally trust',id:10}
      ]
    }
      }
export default db