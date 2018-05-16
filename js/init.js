$( document ).ready(function() {
    $(".stream-overlay.ice").click(function() {
    	alert("hey");
    	window.location.href= window.location.href + "ice_poseidon.html";
    })


});



var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// Setup listeners for each Stream
var player_ice;
var player_sam;
var player_mex;
function onYouTubeIframeAPIReady() {
	player_ice = new YT.Player('ice', {
	    events: {
	      'onStateChange': onPlayerStateChangeIce
	    }
	});

	player_sam = new YT.Player('sam', {
	    events: {
	      'onStateChange': onPlayerStateChangeSam
	    }
	});

	player_mex = new YT.Player('mex', {
	    events: {
	      'onStateChange': onPlayerStateChangeMex
	    }
	});
}

function onPlayerStateChangeIce(event) {
	window.location.href = window.location.href + "ice_poseidon.html";
}

function onPlayerStateChangeSam(event) {
	window.location.href = window.location.href + "sam_pepper.html";
}

function onPlayerStateChangeMex(event) {
	window.location.href = window.location.href + "mexican_andy.html";
}


