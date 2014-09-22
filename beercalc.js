console.log("loaded");

function getBeer(beername, quantity) {
	console.log("hit");
	try {
			$.ajax({
		 		url:"http://ontariobeerapi.ca/beers/?callback=?",
		  		dataType: "jsonp",
				crossDomain: true,
				complete: function(jqXHR) {
       				if(jqXHR.readyState === 4) {
       					console.log("justin waz here");
       					console.log(jqXHR);
					};
				}
			} );
		} 
	catch (e) {console.log(e.description);
					 console.log("nope");
				};

	$("#add-button").html('<span class="glyphicon glyphicon-ok"></span>');
	$('#add-button').addClass("btn-success");

	console.log("DGSFSDGSDFGSDG");
 };	

function accessData(response) {
	var beers = response.beers;
	console.log(beers);
	console.log("waz hurr");
};

function calculateShot(beer, num) {
	var abv = 5.5;
	var size = 12;
	var numofstdrinks = (abv/100)*size*2;
	document.getElementById("drink-count").innerHTML = numofstdrinks*num;
	return numofstdrinks;
}

$(document).ready(function(){

$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "Budweiser",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $("#input-name").autocomplete({ source : availableTags });
  });

});

$( document ).ready(function() {
$(function() {    // do once original document loaded and ready
        $('#info').click(function() {
                $.getJSON("devs.json", function(responseObject, diditwork) {
                        console.log(diditwork);
                        var displayText = responseObject.devs[0];
                        console.log(displayText);
                $(" WHERE IT GOES ").html(displayText);
                } );  // getJSON
        } );  // click
  } ); // onReady
});



// $(function() {   // when document is ready
// 	$("#f1").submit(getBeer);
// 	} );

// function getBeer() {
	// var beernm = $("#beername").val();
// 	$.getJSON("http://ontariobeerapi.ca/beers?callback=?", function(response) {
// 		console.log("HEre ");
// 		console.log(response);
// 	  $(response).each(function() {

// 	    console.log(this.name)
// 	  });
// 	});
// };

// }
// 	try {
// 	$.ajax({
//  		url:"http://ontariobeerapi.ca",
 		// data: {
 		// 	method : "flickr.photos.search",
 		// 	api_key : "<<put your Flickr API key here>>",
 		// 	is_getty : true,
 		// 	tag_mode : "all",
 		// 	tags : "beer,"+beer,
 		// 	format : "json",
 		// 	per_page : 1,
 		// 	pages : 1,
 		// 	jsoncallback : "displayPicture"
 		// 	},
//   	jsonp: false,						// don't have jQuery choose callback name
//   	dataType: "jsonp",			// treat the request as JSONP
// 		crossDomain: true
// 		} );
// 	return false;
// 	} catch (e) {console.log(e.description);}
// } 


// 	var beer = beerMap[letter];
// 	$("#topArea").html("<h1>"+letter+" is for "+beer+".</h1>");
// 	$("#inputArea").html("Play again?  Type another letter to play with.");
// 	$("#playLetter").val("");
// 	try {
// 	$.ajax({
//  		url:"https://api.flickr.com/services/rest/",
//  		data: {
//  			method : "flickr.photos.search",
//  			api_key : "<<put your Flickr API key here>>",
//  			is_getty : true,
//  			tag_mode : "all",
//  			tags : "beer,"+beer,
//  			format : "json",
//  			per_page : 1,
//  			pages : 1,
//  			jsoncallback : "displayPicture"
//  			},
//   	jsonp: false,						// don't have jQuery choose callback name
//   	dataType: "jsonp",			// treat the request as JSONP
// 		crossDomain: true
// 		} );
// 	return false;
// 	} catch (e) {console.log(e.description);}
// } 

// function displayPicture(response) {
// 	var p=response.photos.photo[0];
// 	var farm = p.farm;
// 	var server = p.server;
// 	var id = p.id;
// 	var secret = p.secret
// 	var picture =
// 			"http://farm" + farm + ".static.flickr.com/" 
// 			+ server + "/" + id + "_" + secret + "_z.jpg";
// 	$("#pictureArea").html("<img src="+picture+">");
// 	}






// OLD CODE


// console.log("loaded");

// function getBeer(beername, quantity) {
// 	console.log("hit");
// 	console.log($.getJSON("http://api.openbeerdatabase.com/v1/beers.json?callback=?", function(beername) {
// 	  console.log(beername.beers);
// 	  $(beername.beers).each(function() {
// 	    console.log({text : this.name});
// 	  });
// 	})
// 	);
//   };	

// // $(function() {   // when document is ready
// // 	$("#f1").submit(getBeer);
// // 	} );

// // function getBeer() {
// // 	var beernm = $("#beername").val();
// // 	$.getJSON("http://api.openbeerdatabase.com/v1/breweries.json?callback=?", function(response) {
// // 	  $(response.breweries).each(function() {
// // 	    console.log(this.name)
// // 	  });
// 	});

// }
// 	try {
// 	$.ajax({
//  		url:"http://ontariobeerapi.ca",
//  		data: {
//  			method : "flickr.photos.search",
//  			api_key : "<<put your Flickr API key here>>",
//  			is_getty : true,
//  			tag_mode : "all",
//  			tags : "beer,"+beer,
//  			format : "json",
//  			per_page : 1,
//  			pages : 1,
//  			jsoncallback : "displayPicture"
//  			},
//   	jsonp: false,						// don't have jQuery choose callback name
//   	dataType: "jsonp",			// treat the request as JSONP
// 		crossDomain: true
// 		} );
// 	return false;
// 	} catch (e) {console.log(e.description);}
// } 


// 	var beer = beerMap[letter];
// 	$("#topArea").html("<h1>"+letter+" is for "+beer+".</h1>");
// 	$("#inputArea").html("Play again?  Type another letter to play with.");
// 	$("#playLetter").val("");
// 	try {
// 	$.ajax({
//  		url:"https://api.flickr.com/services/rest/",
//  		data: {
//  			method : "flickr.photos.search",
//  			api_key : "<<put your Flickr API key here>>",
//  			is_getty : true,
//  			tag_mode : "all",
//  			tags : "beer,"+beer,
//  			format : "json",
//  			per_page : 1,
//  			pages : 1,
//  			jsoncallback : "displayPicture"
//  			},
//   	jsonp: false,						// don't have jQuery choose callback name
//   	dataType: "jsonp",			// treat the request as JSONP
// 		crossDomain: true
// 		} );
// 	return false;
// 	} catch (e) {console.log(e.description);}
// } 

// function displayPicture(response) {
// 	var p=response.photos.photo[0];
// 	var farm = p.farm;
// 	var server = p.server;
// 	var id = p.id;
// 	var secret = p.secret
// 	var picture =
// 			"http://farm" + farm + ".static.flickr.com/" 
// 			+ server + "/" + id + "_" + secret + "_z.jpg";
// 	$("#pictureArea").html("<img src="+picture+">");
// 	}
