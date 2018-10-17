import bannerTemplate from './banner.handlebars';
import 'jquery';

document.addEventListener("DOMContentLoaded", function () {
  var bannerDiv = $('#banner');
  bannerDiv.html(bannerTemplate({
    imageURL: "../../static/banner.jpg",
    imageAlt: "bannerImage",
  }));
});