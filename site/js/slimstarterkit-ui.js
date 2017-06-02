// Visibility Toggle (Dropdown, etc) -------------------------------------------------
// 1. Assign the dropdown toggle with the attribute `data-idea-dropdown-toggle`.
// 2. Inside the toggle div, assign the attribute `data-idea-dropdown-menu` to the <menu>.
// 3. Add your list items as <li>s inside that <menu>, et voila! 

document.addEventListener('DOMContentLoaded', function(){ 
    var toggle = document.querySelectorAll('[data-idea-toggle]');

    toggle.forEach(function(el){
        
        var target = el.querySelector('[data-idea-target]');
        
        el.addEventListener('click', function() {
            target.classList.toggle('-is-visible');
        });
        
    });
}, false);