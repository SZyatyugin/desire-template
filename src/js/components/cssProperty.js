const setCSSProperty=()=>{

const resizeHandler=()=>{
    document.documentElement.style.setProperty('--inner-width',window.innerWidth + 'px')
    document.documentElement.style.setProperty('--vh',window.innerHeight + 'px')
}
resizeHandler();
    window.addEventListener('resize',resizeHandler)
}
export default setCSSProperty;