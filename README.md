# SlimStarterkit v0.1
## Rapid In-Browser Prototyping
---

#### What Slim Starterkit is
Slim Starterkit is a plug-and-play, in-browser prototyping toolkit, created to jump-start high-fidelity prototyping. 

The kit includes a [Grunt-based](http://gruntjs.com/) build system & static file server (all via [Node Package Manager](https://www.npmjs.com/)), scss folder structure ([SMACSS style](https://smacss.com/)), & a set of simple styles carefully constructed for hammering out in-browser prototypes. 

#### What Slim Starterkit isn't
Slim Scss is not a production website or website framework. It's for knocking out quick prototypes in the browser. 

### Toolkit
*New to Grunt or Node Package Manager (NPM)? 
This system relies on Grunt & NPM to set up and run your environment.
[Scotch.io](https://scotch.io) has a couple really great tutorials/walkthroughs to get get Grunt rolling on your local system.
- [Getting Started with Grunt](https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt)
- [Node Package Manager](https://www.npmjs.com/)

#### What's in the kit?
- [Grunt](http://gruntjs.com/) task runner
	- Static file server - [grunt-web-server](https://www.npmjs.com/package/grunt-web-server)
	- Sass Compiler - [grunt-sass](https://github.com/sindresorhus/grunt-sass)
	- [Autoprefixer](https://github.com/postcss/autoprefixer) - [Post-CSS](https://github.com/postcss/postcss)
	- Browser refreshing / Style-injection - [Browsersync](http://www.browsersync.io/)
	- HTML templating system - [grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)
	- File Watch - [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

####Bonus
The foundation includes a pre-installed custom Modernizr build([flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), Canvas & SVG ready), jquery & [FontAwesome](https://fortawesome.github.io/Font-Awesome/icons/), with options for [Bootstrap](http://getbootstrap.com/) or [Angular](https://angularjs.org/) via CDN.

####Directions
1. Open Terminal
2. Navigate to the project folder
3. `npm install` installs the dependencies (You only need to do this once)
4. `grunt server` starts the server
5. In a new tab, `grunt` starts the build process
6. This process will automatically open the site in your default browser
7. Write code. Enjoy browser refreshing, CSS injecting and templating with HTML partials. 

### SCSS Architecture
**Scss Structure**
-tools/
  -variables.scss  
  -mixins.scss
  -extends.scss
  -helpers.scss
-base/
  -reset.scss
  -images.scss
  -typography.scss  
-modules/
  -buttons.scss
  -forms.scss
  -lists.scss
  -tables.scss
  -modules.scss
-layout/
  -grid.scss
  -positioning.scss
  -spacing.scss
  -responsive.scss
-states/ 
  -motion.scss
-theme/
  -theme.scss  
	

