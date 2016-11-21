$( document ).ready(function() {

    // TAGSORT PLUGIN
    // ----------------
    $('.dir--nav').tagSort({
      items:'.dir--card',
      tagElement: 'h2',
      sortType: 'single',
      tagClassPrefix: 'dir--nav__item -theme--',
      fadeTime: '100',
    });


    $('p').has('img').addClass('art--img');



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

