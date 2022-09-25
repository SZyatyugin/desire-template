

class GalleryPage{

    constructor(){
        this.el=null,
        this.db=null
    }
    init(db){
        this.el=document.querySelector('.gallery-page');
        if(!this.el) return;
        this.db=db.gallery_page;
        this.onLoadInit();
    }
    onLoadInit(){
        this.initGallery();
    }
    initGallery(){
        const block=this.el.querySelector('.projects-grid__container');
        const delta=2;
        let counter=0;
        let revert=0;
        const images=this.db.projects.map((el,idx)=>{
                let styleClass='projects-grid__item grid-item';
                let style;
                
                const integer=(idx)%10===0?idx:null;

              //  console.log((idx+1)%10===0 || !!integer)
             //   console.log(!!integer)
                

                if((idx+1)%10===0 || !!integer){
                    revert=revert===0?1:0;
                   
                    styleClass+=revert===1?' grid-item--large-revert':''
                }
                if(idx===0){
                    style=`grid-column:${idx+1}/${(idx+1)+delta};grid-row:${idx+1}/${(idx+1)+delta};`
                }
                if((idx+1)%10===0 || !!integer){
                    counter+=1;
                  console.log(counter)
                    style=revert===1?`grid-column:3/5;grid-row:${counter>1&&counter%2===1?counter+delta*2:counter+delta}/${counter>1&&counter%2===1?counter+delta+delta*2:counter+delta*2};`:`grid-column:1/3;grid-row:${counter-1+delta+delta}/${(counter-1+delta)+delta+delta};`
                }
                if(idx===0){
                    styleClass+=' grid-item--large';

                }else{
                    styleClass+=''
                }
            const item=`<div ${style?`style=${style}`:''} class=" ${styleClass.trim()}"><img class='projects-grid__item-photo' src=${el.main_image}></div>`
        return item
        })
        console.log(images)
        Array.from(block.children).forEach(el=>el.remove())
        block.insertAdjacentHTML('afterbegin',images.join(''))

    }
}
export default GalleryPage;