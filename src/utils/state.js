import db from '../db/index';

class Store{

    constructor(){
        this.db=null
        this.blogItemId=null
    }
    
    init(){
        this.db=db
    }
    setOneBlogId(id){
        this.blogItemId=id
        localStorage.setItem('articleId',id)
    }
    getBlogItemId(){
        return localStorage.getItem('articleId')
    }

}
const store=new Store();
export default store