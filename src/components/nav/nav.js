import navTemplate from './nav.handlebars';
import 'jquery';

$(document).ready(function() {
  var navDiv = $('#nav');

  navDiv.html(navTemplate({
    navItems: [
      {
        text: 'Home',
        url: '#',
        responsive: ''
      },
      {
        text: '...',
        url: '#',
        responsive: 'd-sm-inline d-md-none'
      },
      {
        text: 'Level 1',
        url: '#',
        responsive: 'd-none d-md-inline'
      },
      {
        text: 'Level 2',
        url: '#',
        responsive: 'd-none d-md-inline'
      },
      {
        text: 'Level 3',
        url: '#',
        responsive: 'd-none d-md-inline'
      },
      {
        text: 'Last',
        url: '#',
        responsive: ''
      },
    ]
  }))
})