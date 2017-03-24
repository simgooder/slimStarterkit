$(document).ready(function(){

    var navToggle = $('[data-nav-toggle]');
    var navMenu = $('[data-nav-menu]');

    navToggle.click(function(){

        navMenu.toggleClass('-is-open');

    });

});