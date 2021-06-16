const navToggle =document.getElementById('nav-toggle');
const options=document.querySelector('.options');

navToggle.addEventListener('click', function(){
    console.log(`welcome`);
    if(options.classList.contains('show-links')){
        options.classList.remove('show-links');
    }else{options.classList.add('show-links')};
    
})