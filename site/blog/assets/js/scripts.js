

$(document).ready(function(){

	$('.js-toggle-modal').click(function(){
		$('.modal--overlay').toggleClass('--is--open');
	});

	$('.icon--camera__left').click(function(){
		//$().addClass('TEST-CLASS');
		var next = $(this).next()[0];
		$(next).toggleClass('-hide');
	});


});

// Twitter Widget

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// Facebook SDK

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '474954152698654',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

