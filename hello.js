const navToggle =document.getElementById('nav-toggle');
const options=document.querySelector('.options');

navToggle.addEventListener('click', function(){
    console.log(`welcome`);
    if(options.classList.contains('show-links')){
        options.classList.remove('show-links');
    }else{options.classList.add('show-links')};
    
})

// For arrow to top
const scroll =document.querySelector(".scroll");

window.addEventListener("scroll",function(){
    console.log(`sop`);

    const height =window.pageYOffset;

    if(height>300){
         scroll.classList.add('show-scroll');
    }else{scroll.classList.remove('show-scroll')
    }
    console.log(height)
})