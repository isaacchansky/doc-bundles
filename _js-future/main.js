/*eslint-env es6 */
'use strict';

import { TEMPLATES } from './templates';

function getQueryVariable(variable) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1])
        }
    }
    console.log('Query variable %s not found', variable)
}

function fetchDocsList(repo) {
  repo = repo.replace('github.com', 'raw.githubusercontent.com') + '/master/.docbundle.json'
  return $.getJSON(repo)
}

window.onload = function() {

  let repo = getQueryVariable('repo')

  if(!repo) {
    document.querySelector('body').innerHTML = TEMPLATES.about()
  } else {
    document.querySelector('body').innerHTML = TEMPLATES.main(repo)
    fetchDocsList(repo).then(
      function success(response) {
        let sidebarContent = response.docs.map( (docEntry) => TEMPLATES.docItem(docEntry))
        $('.Sidebar').html(sidebarContent)

        $('.Sidebar [data-url]').on('click', function() {
          $('iframe').attr('src', $(this).data('url'))
        })
      },
      function error() {

      })
  }

}
