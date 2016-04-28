(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*eslint-env es6 */
'use strict';

var _templates = require('./templates');

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log('Query variable %s not found', variable);
}

function fetchDocsList(repo) {
  repo = repo.replace('github.com', 'raw.githubusercontent.com') + '/master/.docbundle.json';
  return $.getJSON(repo);
}

window.onload = function () {

  var repo = getQueryVariable('repo');

  if (!repo) {
    document.querySelector('body').innerHTML = _templates.TEMPLATES.about();
  } else {
    document.querySelector('body').innerHTML = _templates.TEMPLATES.main(repo);
    fetchDocsList(repo).then(function success(response) {
      var sidebarContent = response.docs.map(function (docEntry) {
        return _templates.TEMPLATES.docItem(docEntry);
      });
      $('.Sidebar').html(sidebarContent);

      $('.Sidebar [data-url]').on('click', function () {
        $('iframe').attr('src', $(this).data('url'));
      });
    }, function error() {});
  }
};

},{"./templates":2}],2:[function(require,module,exports){
/*eslint-env es6 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TEMPLATES = {
  docItem: function docItem(docEntry) {
    return '\n      <li class="DocEntry" data-url="' + docEntry.url + '">\n        <h2> ' + docEntry.name + ' </h2>\n      </li>\n    ';
  },
  main: function main(title) {
    return '\n    <section class="Header">\n      <h1>' + title + '</h1>\n    </section>\n    <ul class="Sidebar">\n\n    </ul>\n    <iframe class="Doc" src="">\n\n    </iframe>\n    ';
  },
  about: function about() {
    return '\n    <section class="Header">\n      <h1>Doc Bundler</h1>\n      <p>One link for all your 3rd party documentation.</p>\n      <p><a href="/?repo=https://github.com/isaacchansky/doc-bundles">View this projects doc bundle</a>\n    </section>\n    <section class="Why">\n      <h2>Why</h2>\n      <p>All your dependencies/3rd party documentation in one spot.</p>\n      <p>Just a little bit more convenient.</p>\n    </section>\n    <section class="How">\n      <h2>How</h2>\n      <p>Just add a file to your master branch.</p>\n      <pre>.docbundle.json</pre>\n      <pre>\n        {\n          "docs": [\n             {\n               "name": "autoprefixer",\n                "url": "https://github.com/postcss/autoprefixer/blob/master/README.md"\n             },\n            {\n              "name": "babel",\n              "url": "https://babeljs.io/"\n            },\n            {\n              "name": "browserify",\n              "url": "http://browserify.org/"\n            },\n            {\n                "name": "postCSS",\n                "url": "https://github.com/postcss/postcss/blob/master/README.md"\n            },\n            {\n                "name": "jQuery",\n                "url": "http://api.jquery.com/"\n            }\n          ]\n        }\n      </pre>\n    </section>\n    ';
  }
};

exports.TEMPLATES = TEMPLATES;

},{}]},{},[1]);
