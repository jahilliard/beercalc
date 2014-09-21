$(function() {   // when document is ready
	$("#f1").submit(getBeer);
	} );

function getBeer() {
	var letter = $("#playLetter").val();
	var beer = beerMap[letter];
	$("#topArea").html("<h1>"+letter+" is for "+beer+".</h1>");
	$("#inputArea").html("Play again?  Type another letter to play with.");
	$("#playLetter").val("");
	try {
	$.ajax({
 		url:"https://api.flickr.com/services/rest/",
 		data: {
 			method : "flickr.photos.search",
 			api_key : "<<put your Flickr API key here>>",
 			is_getty : true,
 			tag_mode : "all",
 			tags : "beer,"+beer,
 			format : "json",
 			per_page : 1,
 			pages : 1,
 			jsoncallback : "displayPicture"
 			},
  	jsonp: false,						// don't have jQuery choose callback name
  	dataType: "jsonp",			// treat the request as JSONP
		crossDomain: true
		} );
	return false;
	} catch (e) {console.log(e.description);}
} 

function displayPicture(response) {
	var p=response.photos.photo[0];
	var farm = p.farm;
	var server = p.server;
	var id = p.id;
	var secret = p.secret
	var picture =
			"http://farm" + farm + ".static.flickr.com/" 
			+ server + "/" + id + "_" + secret + "_z.jpg";
	$("#pictureArea").html("<img src="+picture+">");
	}
