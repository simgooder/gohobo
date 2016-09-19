
// TAGSORT PLUGIN
// ----------------
$('.dir--nav').tagSort({
  items:'.dir--item',
  tagElement: 'h2',
  sortType: 'single',
  tagClassPrefix: 'dir--nav__item theme--',
  fadeTime: '100',
});

$('p').has('img').addClass('art--img');


$(document).ready(function(){

// The Modal Toggle
// -----------------------
	$('.js-toggle-modal').click(function(){
		$('.modal--overlay').toggleClass('--is--open');
	});

	$('.icon--camera__left').click(function(){
		var next = $(this).next()[0];
		$(next).toggleClass('-hide');
	});


// Mobile Navigation toggle
// -------------------------
  $('.js--toggle--nav').click(function(){
    $('.main--nav__wrapper').toggleClass('-is--open');
  });

  $('main').click(function(){
    $('.main--nav__list').removeClass('-is--open');
  });


});

$(window).scroll(function(){
  var scrollPos = pageYOffset;
  var windowHeight = $(window).height();
  var docHeight = $(document).height();
  var pageHeight = $('body').height();
  
  var difference = (docHeight - pageHeight);
  var newHeight = (pageHeight - windowHeight + difference);
  var percentage = (scrollPos / newHeight * 100);
  
  if(percentage > 64) {
    $('.mailbox').removeClass('-is--hidden');
  }
  if(percentage < 65) {
    $('.mailbox').addClass('-is--hidden');
  }
  
  //$('#reader').css('width', percentage + "%");

});

// Track the user variable.
// This will set the user's status (isAuthenticated) to false.
localStorage.isAuthenticated = 0;

// Close the Mailbox for good!
var closeMailbox = function() {
  $('.mailbox').addClass('-is--hidden');


}

$('.js-closeMailbox').click(function(){
  closeMailbox();
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


