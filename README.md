# Slim Starter Kit v0.2.0

## Directions  

1. Open Terminal  
2. Navigate to the project folder  
3. `npm install` installs the dependencies (You only need to do this once)  
4. `gulp` starts the server  
5. This process will automatically open the site in your default browser  
6. Write code. Enjoy browser refreshing and live CSS injection.   
7. Use `gulp build` for production build.

----

## ToDo
-[] Implement Prettify.js for code snippets in the demo
-[] Style tooltip!
-[] Style modal!
-[] Style notifier!
-[] Style tabset!
-[] Style dropdown!
-[] Style toggle!
-[] Add `danger` button
-[] Add `loading` states
-[] Implement `$font-heading` + `$font-copy`
-[] Implement a typographic scale
-[] On initial Gulp build, build `/dist` directory for CSS
-[x] Implement templating system


## Changelog

__Updates__ - *v0.2.0*
- Moved to Gulp for faster build process
- Added image compression to build process
- Added SVG sprite builder to build process
- More complete `container` classes
- More complete set of `media-queries` and breakpoints
- Cleaner class naming conventions
- Button utlity classes

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