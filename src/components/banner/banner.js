import bannerTemplate from './banner.handlebars';
import 'jquery';

$(document).ready(function() {
  var bannerDiv = $('#banner');
  
  bannerDiv.html(bannerTemplate({
    imageURL: "../../static/banner.jpg",
    imageAlt: "bannerImage",
  }));
})