#Front End Futures
Pollyfilled & future-proofed front end workflow.

##This utilizes:
  - Babel JS (for latest JS spec)
  - Browserify/Babelify for JS module loaded (Babel doesn't do this by itself)
  - PostCSS w/ Autoprefixer & cssNext for future css spec stuff

##Workflow

###JS
Edit your js files in `_js-future/`

###CSS
Edit your js files in `_css-future/`

##Deploy
Just grab everything without a starting underscore (ex: `_js-futures/`), dotfiles, &amp; your `node_modules` and serve those.
