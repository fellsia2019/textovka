jQuery(document).ready(function($){
    let header = $("#header");
    let nav__header = $(".nav__header");
    let burger__menu= $(".nav__burger");
    

    $(burger__menu).on("click", function(event){
        event.preventDefault();
        
        nav__header.toggleClass("active");
        burger__menu.toggleClass("active");
    });


    window.onload = function() {
        var loadedSlider = document.querySelector('.loaded')
        loadedSlider.classList.remove("loaded");
   }
    
});