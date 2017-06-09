# Slim Starter Kit v0.1.7


## Directions  

1. Open Terminal  
2. Navigate to the project folder  
3. `npm install` installs the dependencies (You only need to do this once)  
4. `grunt server` starts the server  
5. In a new tab, `grunt` starts the build process  
6. This process will automatically open the site in your default browser  
7. Write code. Enjoy browser refreshing and live CSS injection.   

----

## To Do
- [ ] Build/Style *modal* component
- [ ] Style *form* elements
    - [ ] *Radio*
    - [ ] *Checkbox*
- [ ] Build/Style *switch* component
- [ ] Build/Style *tooltips* component
- [ ] Include icon set (Material Icons?)
- [ ] Style responsive media embeds

-----


## Changelog

__Updates__ - *v0.1.7*
- A better build process for production files
- Toggle component can now specify targets
- Toggleable navigation menu (mobile)

__Updates__ - *v0.1.4*
- Styled buttons, tables, cards
- Defined basic typography scale
- Designed color functions for color palette generation
- Added `container` classes
- Added `positioning` classes
- Added `responsive-break` classes to grid system

__Updates__ - *v0.1.1*
- Introduced new SCSS structure
- Commencing planning phase

__Updates__ - *v0.0.8*
- Updated `media-query` mixins to reflect `min` values on defaults mixins.
- Added a mobile navigation menu to the HTML boilerplate
- Added Twitter Card meta, and standard meta tags
- Moved grid system to Flex
- Added default colors
- Added new files to the SCSS structure for `containers`, `colors`, `typography`.

__Updates__ - *v0.0.5*
- Removed Grunt Bake dependency - because it's old, and Jekyll is awesome
- Cleaned up GruntFile.js
- Re-wrote the `README.md`

__Updates__ - *v0.0.4*
- Cleaned up GruntFile.js
- Removed the pretentious `readme.md`
- Modified SCSS Reset
- Updated from Autoprefixer-Core to Autoprefixer PostCSS Module