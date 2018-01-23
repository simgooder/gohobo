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

    
    // Add a class to the paragraph tags that contain an image
    $('p').has('img').addClass('art--img');




// The Modal Toggle
// -----------------------

$('.js-toggle-modal.-contact').click(function(){
	$('.modal--overlay.-contact').toggleClass('--is--open');
});

$('.js-toggle-modal.-review').click(function(){
    $('.modal--overlay.-review').toggleClass('--is--open');

    setTimeout(function(){
        var hash = window.location.hash;
        var string = hash.replace('#', '');

        console.log(string)

        $('[value=' + string + ']').attr('selected', 'selected');

    }, 250);
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

