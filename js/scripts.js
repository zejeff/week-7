$(document).ready(function() {
  $()
  const over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

  if (over21) {
    $('#alcoholicDrinks').show();
    $('#nonAlcoholicDrinks').show();
  } else {
    $('#nonAlcoholicDrinks').show();
  }
});