$(document).ready(function() {
  const color = $('input:radio[name=color]:checked').val();
  const style = $('input:radio[name=style]:checked').val();
  $('.foodButton').click('submit', function(event) {
    if (color === green && style === vegetable) {
      // Show vegetable salad
      $("#")
      $("")
    } else if () {
      // Show fruits
    }
  })
  $('.drinksButton').click('submit', function(event) {
    event.preventDefault();
    var buttonValue = $('#ageCheckOver').prop('checked');
    if (buttonValue === true) {
      $('#alcoholicDrinks').show();
      $('#nonAlcoholicDrinks').show();
//      $('#ageCheckForm').hide();
      $('.redFrog').hide();
    } else {
      $('#nonAlcoholicDrinks').show();
      $('#ageCheckForm').hide();
    }
  })
});