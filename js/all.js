$(document).ready(function () {
  $('#slider').nivoSlider({
    effect: 'fade',
    pauseTime: 3000,
  });
  $('.btn-e-invoice').click(function (event) {
    event.preventDefault();
    $('.invoice-form').toggleClass('d-none');
    $('.invoice-form-addr').toggleClass('d-none');
    $('.btn-e-invoice').toggleClass('active');
    $('.btn-invoice-addr').toggleClass('active');
  });
  $('.btn-invoice-addr').click(function (event) {
    event.preventDefault();
    $('.invoice-form').toggleClass('d-none');
    $('.invoice-form-addr').toggleClass('d-none');
    $('.btn-e-invoice').toggleClass('active');
    $('.btn-invoice-addr').toggleClass('active');
  });

  $('.btn-main-sm').click(function (e) {
    e.preventDefault();
    $('.sweet-main-sm').slideToggle();;
  });
});