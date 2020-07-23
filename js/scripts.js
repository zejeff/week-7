$(document).ready(function() {
  $('.button').click('submit', function(event) {
    event.preventDefault();
    var buttonValue = $('#ageCheckOver').prop('checked');
    if (buttonValue === true) {
      $('#alcoholicDrinks').show();
      $('#nonAlcoholicDrinks').show();
      $('#ageCheckForm').hide();
    } else {
      $('#nonAlcoholicDrinks').show();
      $('#ageCheckForm').hide();
    }
  })
});