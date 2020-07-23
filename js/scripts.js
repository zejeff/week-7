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
  $('.foodButton').click('submit', function(event) {
    // evaluate food style choices with types - four options
    event.preventDefault();
    var foodStyle = $('input:radio[name=style]:checked').val();
    var foodType = $('input:radio[name=type]:checked').val();
    if (foodType === "F" && foodStyle === "M") {
      alert("You choose Fruit Medley");
    } else if (foodType === "F" && foodStyle === "S") {
      alert("You choose Fruit Salad");
    } else if (foodType === "V" && foodStyle === "M") {
      alert("You choose Vegetable Medley");
    } else if (foodType === "V" && foodStyle === "S") {
      alert("You choose Salad");
    }
  })
});