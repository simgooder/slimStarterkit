# SlimStarterkit v0.4


__Directions__   
1. Open Terminal  
2. Navigate to the project folder  
3. `npm install` installs the dependencies (You only need to do this once)  
4. `grunt server` starts the server  
5. In a new tab, `grunt` starts the build process  
6. This process will automatically open the site in your default browser  
7. Write code. Enjoy browser refreshing, CSS injecting and templating with HTML partials.   

__A note about Grunt-Bake__  
In the `partials/` directory, there's a file called `main.html`. This file compiles into `index.html` in the root of your project folder. Partials are imported using the Grunt-Bake syntax which is just `<!--(bake path/to/fileName.html)-->`.   
*This package hasn't been updated in a long time, but it works well, and it's ideal for small projects.*  

 
-----
__Updates__ - *v0.4*
- Cleaned up GruntFile.js
- Removed the pretentious `readme.md`
- Grunt-Bake examples, and partials folder
- Modified SCSS Reset
- Updated from Autoprefixer-Core to Autoprefixer PostCSS Module