const headerController=()=>{

const btn=document.querySelector('.header__btn');
const menu=document.querySelector('.header__container--mobile');
const header=document.querySelector('.header');
btn.addEventListener('click',()=>{
menu.classList.toggle('active')
header.classList.toggle('active')
})
}
export default headerController;