const headerElement = document.querySelector('#header');
let mobileIcon = headerElement.querySelector('.mobile-icon');
const aElements = headerElement.querySelectorAll('.header-nav__list a');

console.log(aElements);
// console.log(headerElement,mobileIcon);
const currentHeight = headerElement.clientHeight;
mobileIcon.onclick = function(e){
    if(headerElement.clientHeight === currentHeight)
    {
        // console.log(currentHeight);
        headerElement.style.height = 'auto';
    }
    else{
        headerElement.style.height = null;
        
    }
   
}
// hidden menu
aElements.forEach(function(item,index){
    
   
    item.onclick=function (e) {
        let isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('header-sub-nav');
        
        if(isParent)
        {

            e.preventDefault();
            // headerElement.style.overflow ='initial';
            
        }
        else{
            headerElement.style.height = null;
            // headerElement.style.overflow ='hidden';
        }
    }
    
    

});