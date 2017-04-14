$(function() {

  // Check that it's an email address
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  // Tooltips
  var tooltip1 = $('<div id="tooltip1" class="tooltip" />').css({
    position: 'absolute',
  }).show();

  var tooltip2 = $('<div id="tooltip2" class="tooltip" />').css({
    position: 'absolute',
  }).show();

  // Slider 1
  $('#slider1').slider({
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    slide: function(event, ui ) {
      //tooltip1.text(ui.value);
    },
    change: function(event, ui) {}
  });

  // Slider 2
  $('#slider2').slider({
    value: 50,
    min: 0,
    max: 100,
    step: 25,
    slide: function(event, ui ) {
      var num1 = ui.value < 100 ? (100 - ui.value) + "%" : '';
      var num2 = ui.value > 0 ? ui.value + "%" : '';
      var divider = ui.value < 100 && ui.value > 0 ? ' / ' : '';

      tooltip2.text(num1 + divider + num2 );
    },
    change: function(event, ui) {}
  });

  $('#slider1 .ui-slider-handle').append(tooltip1);
  //$('#tooltip1').text('50%');
  $('#tooltip1').hide();
  $('#slider2 .ui-slider-handle').append(tooltip2);
  $('#tooltip2').text('50% / 50%');


  // FORM
  $('#submitForm').on('click', function(e) {
    e.preventDefault();
    var emailVal = $('#email').val();
    if (emailVal !== '' && isEmail(emailVal) ) {
      submitForm();
    } else {
      $('[data-remodal-id="submit-blank"]').remodal().open();
    }
  });

});
