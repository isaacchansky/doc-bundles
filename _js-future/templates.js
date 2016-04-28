/*eslint-env es6 */
'use strict';


const TEMPLATES = {
  docItem(docEntry) {
    return `
      <li class="DocEntry" data-url="${docEntry.url}">
        <h2> ${docEntry.name} </h2>
      </li>
    `
  },
  main(title) {
    return `
    <section class="Header">
      <h1>${title}</h1>
    </section>
    <ul class="Sidebar">

    </ul>
    <iframe class="Doc" src="">

    </iframe>
    `
  },
  about() {
    return `
    <section class="Header">
      <h1>Doc Bundler</h1>
      <p>One link for all your 3rd party documentation.</p>
      <p><a href="/?repo=https://github.com/isaacchansky/doc-bundles">View this projects doc bundle</a>
    </section>
    <section class="Why">
      <h2>Why</h2>
      <p>All your dependencies/3rd party documentation in one spot.</p>
      <p>Just a little bit more convenient.</p>
    </section>
    <section class="How">
      <h2>How</h2>
      <p>Just add a file to your master branch.</p>
      <pre>.docbundle.json</pre>
      <pre>
        {
          "docs": [
             {
               "name": "autoprefixer",
                "url": "https://github.com/postcss/autoprefixer/blob/master/README.md"
             },
            {
              "name": "babel",
              "url": "https://babeljs.io/"
            },
            {
              "name": "browserify",
              "url": "http://browserify.org/"
            },
            {
                "name": "postCSS",
                "url": "https://github.com/postcss/postcss/blob/master/README.md"
            },
            {
                "name": "jQuery",
                "url": "http://api.jquery.com/"
            }
          ]
        }
      </pre>
    </section>
    `
  }
};


export { TEMPLATES };
