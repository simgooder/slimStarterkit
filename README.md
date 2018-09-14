# Slim Starter Kit v0.3.0

SlimStarterkit uses a combination of a Sass architecture for quick and unopinionated style starter, handlebars for templating, `.htaccess` and `404` file templates, and an automated server/build process using Gulp. This kit is quick, unopinionated, and provides a simple starting point for website projects. 

### [Check out the website](http://simongooder.com/slim-starterkit)

## Start developing using Gulp  

1. Open Terminal  
2. Navigate to the project folder  
3. `npm i` installs the dependencies (You only need to do this once)  
4. `gulp` starts the server  
5. This process will automatically open the site in your default browser  
6. Write code. Enjoy browser refreshing and live CSS injection.   
7. Use `gulp build` for production build
8. Upload the content from the `/dist` folder to your hosting

## Templating with Handlebars
1. Create partial files inside the `/partials` folder, suffix file with `.hbs`
2. Reference a partial using `{{> partial-name}}`
3. Create new pages directly in the `/src` directory
4. Read the [Handlebars documentation](https://handlebarsjs.com/ "Handlebarsjs.com) to learn more about using the library.


## Recommendations 

1. Check your finished site against [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist)
2. If you need a CMS, or website management system (WMS) for your project, check out [Pagesimple.io](http://pagesimple.io)
    - Build a `theme.json` file
    - Submit site to [Pagesimple.io](http://pagesimple.io)
3. Attach GA or some sort of analytics tracking
4. Launch your site!


----

## ToDo

- [ ] Sitemap generator?
- [ ] Integrate HTML minifier
- [ ] Update `documentation` to provide information about site structure and templating
- [ ] Create build task to generate `theme.json` file


## Changelog

__Updates__ - *v0.3.0* 
- Integrate Handlebars templating system to support usage of partials and separate data
- Add `assets` folder to `src`, move `img` folder into `assets`
- Template all meta data for ease of use. Just fill out the `data.json` file to fill data across a whole template
- Update documentation language
- Add navigation sidebar to documentation
- Add `.htaccess` example

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