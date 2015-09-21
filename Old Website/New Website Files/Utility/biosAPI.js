var finished = true;// Whether or not the toggle animation is done
var visibleBio = "";
var bio_list = new Bios(document.getElementById("profiles"));

function Bio(bio) {
	this.bio = bio;
	$(bio).children("a.bioLink").each(function(a, b, c) {
		alert(a + " " + " " + b + " " + c);
		if ($(value).is("a.bioLink")) {
			alert(value);
			$(value).click( function() {if (finished) this.showBio(); });
		}
	});
	this.showBio = function() {
		if (bio == "" || bio == visibleBio) {
			reset();
		} else {
			$("div.profile").hide();
			$("div.profile").css("width","parent");
			$("div.profile").css("height","parent");
			$(bio).show();
			finished = false;
			$(bio).children("p.bio").slideToggle(400,function(){
				visibleBio = bio;
				finished = true;
			});
		}
	}
}

function Bios() {
	this.bioList = new Array();
	this.addBio = function( bio ) {
		this.bioList.push(bio);
	}
	
	this.reset = function() {
		for ( var i = 0; i < this.bioList.length; i++) {
			$(this.bioList[i]).hide();
			$(this.bioList[i]).css("width","parent");
			$(this.bioList[i]).css("height","parent");
		}
	}
}
/*
/**
 *Shows the specified bio tab
 *@Param bio The HTML DOM object where the bio is located
 *
function showBio( bio ) {
	if (bio == "" || bio == visibleBio) {
		reset();
	} else {
		$("div.profile").hide();
		$("div.profile").css("width","parent");
		$("div.profile").css("height","parent");
		$(bio).show();
		finished = false;
		$(bio).children("p.bios").slideToggle(400,function(){
			visibleBio = bio;
			finished = true;
		});
	}
}*/

$(document).ready(function(){
	theBio = document.getElementById("bio1");
	//alert(theBio.className);
	bio_list.addBio(new Bio(theBio));
	bio_list.reset();
	//alert(bio_list.bioList[0].bio.className);
	//if (visibleBio != "") visibleBio = document.getElementById(visibleBio);
	/*alert("Start");
	//Button Event Binding
	$("#profiles").children("div.profile").each(function(_, value) {
		alert(value.id);
		$(value).children().each(function(_, value2) {
				$(value).children("a.bio-button").click(function(){if ( finished ) showBio(value2);});
			});
		}
	});*/
//alert("start");
	
});