var finished = true;		// Whether or not the toggle animation is done. Setting to false prevents any buttons from being pressed.
var visibleTab = "one-out";	// Default tab
var visibleBio;

function reset() {
// Resets bios
	$("p.bios").hide();
	$("div.out_items").css("width","auto");
	$("div.out_items").css("height","auto");
	$("div.out_items").show();
	visibleBio = "";
}

function showTab( tab ) {
// Show the specified tab
	if ( tab != visibleTab ) {
		finished = false;
		$(visibleTab).slideToggle(400,function(){
			finished = true;
		}); 
		finished = false;
		$(tab).slideToggle(400,function(){
			finished = true;
			visibleTab = tab;
		});
	}
}

function showBio( bio ) {
	if (bio == "" || bio == visibleBio) {
		reset();
	} else {
		$("div.out_items").hide();
		$("div.out_items").css("width","parent");
		$("div.out_items").css("height","parent");
		$(bio).show();
		finished = false;
		$(bio).children("p.bios").slideToggle(400,function(){
			visibleBio = bio;
			finished = true;
		});
	}
}

/*$(document).ready(function(){
	if (visibleTab != "") visibleTab = document.getElementById(visibleTab);
	if (visibleBio != "") visibleBio = document.getElementById(visibleBio);
	$(visibleTab).slideToggle();
	
	//Button Event Binding
	$("#container").children().each(function(_, value) {
		if ($(value).is(".button")) {
			$(value).click(function(){
				out = document.getElementById(value.id + "-out");
				if ( finished ) showTab(out);
			});
		}
		if ($(value).is(".multi-button")) {
			out = document.getElementById(value.id + "-out");
			$(out).children().each(function(_, value2) {
				$(value2).children("a.links2").click(function(){if ( finished ) showBio(value2);});
			});
		}
	});
	
});*/
//