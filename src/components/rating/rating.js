import 'jquery';

$('.star').on('click', function() {
  $(this).prevAll().children().removeClass('far');
  $(this).prevAll().children().addClass('fas');
  $(this).nextAll().children().removeClass('fas');
  $(this).nextAll().children().addClass('far');
  $(this).children().removeClass('far');
  $(this).children().addClass('fas');
})

