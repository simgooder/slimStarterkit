# SlimStarterkit v0.1.1


## Directions  

1. Open Terminal  
2. Navigate to the project folder  
3. `npm install` installs the dependencies (You only need to do this once)  
4. `grunt server` starts the server  
5. In a new tab, `grunt` starts the build process  
6. This process will automatically open the site in your default browser  
7. Write code. Enjoy browser refreshing and live CSS injection.   

----

## How to Git Going

1. `git pull` to pull the latest code.
2. `git status` to see what changes you've made since the last pull.
3. `git add .` to add all the files you've changed.
4. `git commit -m "your special message"` to commit and add a custom commit message.
5. `git push` to push all your changes back up to the repo.

----

## To Do
- [ ] Build/Style *modal* component
- [ ] Build/Style *card* component
- [ ] Style *button* elements
- [ ] Style *form* elements
    - [ ] *Radio*
    - [ ] *Checkbox*
    - [ ] *Text input*
    - [ ] *Label*
- [ ] Build/Style *switch* component
- [ ] Build/Style *dropdown* component
- [ ] Build/Style *menu* component
- [ ] Build/Style *tooltips* component
- [ ] Include icon set
- [ ] Build/Style *media object* component
- [ ] Build/Style *media list* component
- [ ] Style *table* elements
- [ ] Style responsive media embeds
- [ ] Implement UNCSS in the build process

-----

## Changelog

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