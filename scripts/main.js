$(function() {

  // Check that it's an email address
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  // Tooltips
  var tooltip = $('<div id="tooltip" class="tooltip" />').css({
    position: 'absolute',
  }).show();

  // Slider 1
  $('#slider1').slider({
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    slide: function(event, ui ) {},
    change: function(event, ui) {}
  });

  // Slider 2
  $('#slider2').slider({
    value: 50,
    min: 0,
    max: 100,
    step: 5,
    slide: function(event, ui ) {
      var num1 = ui.value < 100 ? (100 - ui.value) + "%" : '';
      var num2 = ui.value > 0 ? ui.value + "%" : '';
      var divider = ui.value < 100 && ui.value > 0 ? ' / ' : '';

      tooltip.text(num1 + divider + num2 );
    },
    change: function(event, ui) {}
  });

  $('#slider2 .ui-slider-handle').append(tooltip);
  $('#tooltip').text('50% / 50%');


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

  function submitForm() {
    var slider1Val = $('#slider1').slider( 'value' );
    var slider2Val = $('#slider2').slider( 'value' );
    var emailVal = $('#email').val();
    var notesVal = $('#notes').val();

    var slider1Text = slider1Val + '%';
    var slider2Text = (100 - slider2Val) + '% Cash / ' + slider2Val + '% Equity';

    $('#f-quality').val( slider1Text );
    $('#f-pay').val( slider2Text );
    $('#f-email').val( emailVal );
    $('#f-notes').val( notesVal );
    $('#gForm').submit();

    $('[data-remodal-id="submit-success"]').remodal().open();
    $('#submitForm').hide();

    var emailVal = $('#email').val("");
    var notesVal = $('#notes').val("");

  }

});
