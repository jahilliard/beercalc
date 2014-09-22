//gobal jsonp called list of beers 
var beerlist = [];

//checks if the beer is in the system and updates HTML accordingly
function getBeer(beername, quantity) {
  for (var i = beerlist.length - 1; i >= 0; i--) {
    if (beerlist[i].name.toLowerCase() === beername.toLowerCase()){
      calculateShot(beerlist[i], quantity);
      addPicture(beerlist[i])
      goodButton();
      return false;
    }
  };
  $("#result-font").html("This is not a beer in the System!");
  badButton();
  removePicture();

}

//calculates the amount of standard drinks 
function calculateShot(beer, num) {
  var abv = beer.abv;
  var size = 12;
  var numofstdrinks = (abv/100)*size*2*num;
  var toPut = Math.floor(numofstdrinks * 100) / 100;
  $("#result-font").html("You have had <strong><span id='drink-count'>" +toPut+"</span></strong> Standard Drinks</h3>");
  return numofstdrinks;
}

//adds the picture to the HTML from the Beer info
function addPicture(beer){
  $("#beer-image img").attr('src',beer.image_url);
}

//removes the picture from the HTML if it is not in the system
function removePicture(){
  $("#beer-image img").attr('src',"");
}

//changes the button to a green check 
function goodButton(){
  $("#add-button").html('<span class="glyphicon glyphicon-ok"></span>');
  $("#add-button").removeClass("btn-danger").addClass("btn-success");
}

//changes the button to a red X
function badButton(){
  $("#add-button").html('<span class="glyphicon glyphicon-remove"></span>');
  $("#add-button").removeClass("btn-success").addClass("btn-danger");
}

$(document).ready(function(){

//makes the ajax jsonp call when the document is loaded
$(function() {

    var beernames=[]; 

    try{
    $.ajax({
      url: 'http://ontariobeerapi.ca/beers/?format=jsonp',
      dataType: "jsonp",
      success: function (response) {
                //handles the auto complete and sets the gobal beerlist variable 

                beerlist=response; 

                for(var i=0; i<beerlist.length; i++){
                  beernames.push(beerlist[i].name);
                }

                $("#input-name").autocomplete({ source : beernames });

              }


      });
    return false;
    } catch (e){console.log(e.description);}
  });

});

//handles the local json call for the developer info
$( document ).ready(function() {
$(function() {    // do once original document loaded and ready
        $('#info').click(function() {
                $.getJSON("devs.json", function(responseObject, diditwork) {
                        console.log(diditwork);
                        var displayText = responseObject.devs[0];
                        console.log(displayText);
                $("#dev-info").html(displayText);
                } );  // getJSON
        } );  // click
  } ); // onReady
});
