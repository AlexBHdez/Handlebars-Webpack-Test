import navTemplate from './nav.handlebars';
import 'jquery';

$(document).ready(function() {
  var navDiv = $('#nav');

  navDiv.html(navTemplate({
    navItems: [
      {
        text: 'Home',
        url: '#',
      },
      {
        text: 'Level 1',
        url: '#'
      },
      {
        text: 'Level 2',
        url: '#'
      },
      {
        text: 'Level 3',
        url: '#'
      },
      {
        text: 'Last',
        url: '#'
      },
    ]
  }))
})