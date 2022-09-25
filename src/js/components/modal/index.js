


class Modal{

   constructor(){
       this._container=null,
       this.init();
   }
init(){
this._container=document.querySelector('.rightside-menu');
};

    initEvents(){
        this.initClose();
    };

    initClose(){
        console.log(this._container)
        this._container.classList.remove('active');
    };

}

export default Modal;