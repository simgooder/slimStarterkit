// Visibility Toggle (Dropdown, Mobile Navigation, etc) -------------------------------------------------
// 1. Assign the dropdown toggle with the attribute `data-idea-dropdown-toggle`.
// 2. Inside the toggle div, assign the attribute `data-idea-dropdown-menu` to the <menu>.
// 3. Add your list items as <li>s inside that <menu>, et voila! 

document.addEventListener('DOMContentLoaded', function(){ 

    function getToggles(){
        // Find all the toggles
        var toggle = document.querySelectorAll('[data-idea-toggle]');

        toggle.forEach(function(el){
            // Get the value of the toggle-target if there is one...
            var targetVal = el.getAttribute('data-idea-toggle');

            // If there is no target specified, open toggle the nested target....
            if (targetVal.length == 0) {

                var target = el.querySelector('[data-idea-target]');

            } else { // If a target is specified...
                var target = document.querySelector("[data-idea-target='" + targetVal + "']");
            }

            el.addEventListener('click', function () {
                target.classList.toggle('-is-visible');
            });
        
        });

    }

    getToggles();

}, false);