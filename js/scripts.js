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
    var foodCooked = $('input:radio[name=cooked]:checked').val();
    var foodSpice = $('input:radio[name=spice]:checked').val();
    var foodFlavor = $('input:radio[name=flavor]:checked').val();

    if (foodType === "A" && foodStyle === "A" && foodCooked === "A" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 1";
    } else if (foodType === "B" && foodStyle === "A" && foodCooked === "A" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 2"; 
    } else if (foodType === "A" && foodStyle === "B" && foodCooked === "A" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 3"; 
    } else if (foodType === "A" && foodStyle === "A" && foodCooked === "B" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 4"; 
    } else if (foodType === "A" && foodStyle === "A" && foodCooked === "A" && foodSpice === "B" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 5";  
    } else if (foodType === "A" && foodStyle === "A" && foodCooked === "A" && foodSpice === "A" && foodFlavor === "B") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 6"; 
    } else if (foodType === "B" && foodStyle === "B" && foodCooked === "A" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 7"; 
    } else if (foodType === "A" && foodStyle === "B" && foodCooked === "B" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 8";
    } else if (foodType === "B" && foodStyle === "A" && foodCooked === "B" && foodSpice === "B" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 9";  
    } else if (foodType === "A" && foodStyle === "A" && foodCooked === "A" && foodSpice === "B" && foodFlavor === "B") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 10"; 
    } else if (foodType === "B" && foodStyle === "B" && foodCooked === "B" && foodSpice === "A" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 11"; 
    } else if (foodType === "A" && foodStyle === "B" && foodCooked === "B" && foodSpice === "B" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 12"; 
    } else if (foodType === "A" && foodStyle === "A" && foodCooked === "B" && foodSpice === "B" && foodFlavor === "B") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 13"; 
    } else if (foodType === "B" && foodStyle === "B" && foodCooked === "B" && foodSpice === "B" && foodFlavor === "A") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 14"; 
    } else if (foodType === "A" && foodStyle === "B" && foodCooked === "B" && foodSpice === "B" && foodFlavor === "B") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 15"; 
    } else if (foodType === "B" && foodStyle === "B" && foodCooked === "B" && foodSpice === "B" && foodFlavor === "B") {
      document.getElementById("menuSelection").innerHTML = "Menu Option 16"; 
    } 
  })
});