let my_links = Array.from(document.querySelectorAll('nav ul li a'));
// console.log(my_links);
my_links.forEach((el)=>{
    el.addEventListener('click',remove_ac);
})
function remove_ac() {
    my_links.forEach((link) => {
        link.classList.remove('active');
        this.classList.add('active');
    })
}
// starting gallery fillter
let myfliter = document.querySelectorAll('.filter-ul li');
let myimages = document.querySelectorAll('.gallery img');
myfliter.forEach(li => {
    li.addEventListener('click',remove_active); //remove active class first
    li.addEventListener('click',fillter); //fillter images onclick
})
function remove_active(){
    myfliter.forEach(fillter => {
        fillter.classList.remove('active');
        this.classList.add('active');
    })
}

function fillter(){
    myimages.forEach(img => {
        img.style.display = 'none';
        img.parentElement.parentElement.style.display = 'none';
      
        
        
    })
    document.querySelectorAll(this.dataset.cat).forEach(img => {
        img.style.display = 'block';
        img.parentElement.parentElement.style.display = 'block';
       
    });
}
let mysrvice = document.querySelector('.container-serv');
let heght = mysrvice.offsetTop;
console.log(heght);
window.addEventListener('scroll',myfunc);
function myfunc() {
    
  if(window.scrollY >= heght -400){
    
    mysrvice.classList.add('js-serv-an');
    
  }else {
    mysrvice.classList.remove('js-serv-an');
  }
 }