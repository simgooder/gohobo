$(document).ready(function(){

  // Local Storage - Storing User Pref's
  // Check browser support
  if (localStorage) {

      // check if the user has subscribed
      var userSubscribed = localStorage.getItem('userSubscribed');

      // if the user is not subscribed, set userSubscribed to false
      if (userSubscribed == 'false' || userSubscribed == null) {
        localStorage.setItem('userSubscribed', 'false');
      }

      // check if the user previously closed the mailbox in this session
      var userClosedMailbox = sessionStorage.getItem('userClosedMailbox');

      // if the user did not close the mailbox, set userClosedMailbox to false
      if (userClosedMailbox == 'false' || userClosedMailbox == null) {
        sessionStorage.setItem('userClosedMailbox', 'false');
      }

  }

  //If user subscribes to the mailing list, set a localStorage variable!
  document.getElementById('emailGrab').addEventListener('submit', function(){

    if (localStorage) {
      localStorage.setItem('userSubscribed', 'true');
    } 

  });

  $(window).scroll(function(){
    var scrollPos = pageYOffset;
    var windowHeight = $(window).height();
    var docHeight = $(document).height();
    var pageHeight = $('body').height();
    
    var difference = (docHeight - pageHeight);
    var newHeight = (pageHeight - windowHeight + difference);
    var percentage = (scrollPos / newHeight * 100);
    
    if(percentage > 5) {
      $('.mailbox').removeClass('-is--hidden');
    }
    if(percentage < 6) {
      $('.mailbox').addClass('-is--hidden');
    }
    
    //$('#reader').css('width', percentage + "%");

  });


  // grab the mailboxElement and store it!
  var mailboxElement = $('.mailbox');

  // close the mailbox function
  var closeMailbox = function() {

    mailboxElement.addClass('-is--hidden');

    if (sessionStorage) {
      sessionStorage.setItem('userClosedMailbox', 'true');
    }

    setTimeout(function(){
       mailboxElement.hide(); 
     }, 500);

    console.log("No thanks.");
  }

  $('.js-closeMailbox').click(function(){
    closeMailbox();
  });

  if (localStorage) {
    // if the user is subscribed or close the mailbox in this session, don't harass them with the mailbox anymore!
    if (userSubscribed == 'true' || userClosedMailbox == 'true') {
      mailboxElement.hide();
      console.log("No mail today.");
      console.log("Mission accomplished.");
    }
  }

});