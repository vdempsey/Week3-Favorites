$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var iceCreamInput = $("input#ice-cream").val();
    var teaInput = $("input#tea").val();
    var animalInput = $("input#animal").val();
    var allFavorites = [iceCreamInput, teaInput, animalInput];
    allFavorites.join(" ");

    $(".ice-cream").text(iceCreamInput);
    $(".tea").text(teaInput);
    $(".animal").text(animalInput);


    //$("#formOne").hide();
    //$(".formOne").hide();

    $(".all-favorites").text("Here are all your favorites: " + allFavorites.join(", ") + "!");
    //will display Here are all your favorites: fav.icecream, fav.tea, favorite animal!
    $("#favorites").show();
    $(".list").hide();


    event.preventDefault();
  });


});
