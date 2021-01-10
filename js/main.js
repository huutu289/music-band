let mobileIcon = document.querySelector('.mobile-icon>i');
let header = document.getElementById('header');
let headerHeight = header.clientHeight;
let aElements = document.querySelectorAll('#header .header-nav__list a[href*="#"]');
// console.log(aElements);

mobileIcon.onclick = function () {
    let isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        // header.style.height = headerHeight;
        header.style.height = null;
    }

}
aElements.forEach(function (item) {
    
        // console.log(item.attributes.href.value);
        item.onclick = function (e) {
            let isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('header-sub-nav');
            if(isParent)
            {                
                e.preventDefault();
                
            }
            else
            {
                
                header.style.height = null;
            }
            
        }
    
})