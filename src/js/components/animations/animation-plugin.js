


class APlugin{

    constructor(){
        this.scrollTriggers=[]
        this.timelines=[]
    }
    add(el){
        this.timelines.add(el)
    }
    init(){
        this.scrollTriggers.forEach(el=>el.refresh());
    }

}
export default APlugin;