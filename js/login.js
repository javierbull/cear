"use strict";

$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// END SHOW-HIDE PASSWORD

// floating label
$('.field__input').on('input', function() {
  var $field = $(this).closest('.field-floating-label');
  if (this.value) {
    $field.addClass('field--not-empty');
  } else {
    $field.removeClass('field--not-empty');
  }
});

// End floating label

// Stepper
$(".step1-especialidad").click(function() {
  $("#content-step1-especialidad").show();
  $("#content-step2-sorteo").hide();
  $("#content-step3-registro").hide();
});

$(".step2-sorteo").click(function() {
  $("#content-step1-especialidad").hide();
  $("#content-step2-sorteo").show();
  $("#content-step3-registro").hide();
});

$(".step3-registro").click(function() {
  $("#content-step1-especialidad").hide();
  $("#content-step2-sorteo").hide();
  $("#content-step3-registro").show();
});


// Fin Stepper

$(".select2").select2({
  theme: 'bootstrap4',
});

$(".select2-multiple").select2({
  theme: 'bootstrap4',
});

});
