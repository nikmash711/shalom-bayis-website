'use strict';

function handleClickOutsideNavbar(){
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $('.navbar-collapse');               
    var _opened = $navbar.hasClass('in');
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {      
      $navbar.collapse('hide');
    }
  }); //this is so that clicking outside of navbar closes/collapses navbar/collapses (doesn't work on mobile)
}

function navbarGenerator(){
  $('.navbar').html(`
  <a class="navbar-brand" href="http://myshalombayis.com"><img src="img/logo.png" width = "125px" height = "70px"></a>
  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="http://myshalombayis.com/#about">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Events
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="http://myshalombayis.com/#upcoming_events">Upcoming Events</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="http://myshalombayis.com/past_events.html">Past Events</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="http://myshalombayis.com/past_events.html">Gallery</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://myshalombayis.com/past_events.html#press">Press</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://myshalombayis.com#subscribe">Subscribe</a>
      </li>
      <li class="nav-item">
        <a class = "nav-link" href="mailto:info@myshalombayis.com?subject=Inquiry%20(From%20Website)&body=*Please%20include%20your%20name%20and%20number%20along%20with%20your%20inquiry.%20Thank%20you!"> Contact </a>
      </li>
    </ul>
  </div>
  `);
}

$(document).ready(function(){
  handleClickOutsideNavbar();
  navbarGenerator();
  // footerGenerator();
});

// window.sr = ScrollReveal({ reset: true });
				
// sr.reveal('.load-hidden', {scale: 0.85, duration: 1000, viewFactor: 0.2,});
				
// $(".nav-link").hide().fadeIn(2000);
				
// var stickySidebar = $('#upcoming_events').offset().top;
// stickySidebar= stickySidebar-160;
// $(window).scroll(function() {  
// 	if ($(window).scrollTop() > stickySidebar) {
// 		$(".navbar").css("border-bottom" , "5px solid #FFA986");
// 		$(".carousel-control-next-icon").css("display" , "none");
// 		$(".carousel-control-prev-icon").css("display" , "none");
// 	}
// 	else {
// 		$(".navbar").css("border-bottom" , "none");  
// 		$(".carousel-control-next-icon").css("display" , "inline-block");		
// 		$(".carousel-control-prev-icon").css("display" , "inline-block");
// 	}  
// }); 
// // this makes a line under the navbar - always have the line there. Dont need this? 
				
				
				
				
// $(function() {
// 	$('.dropdown-toggle').click(function() {
// 		$(this).next('.dropdown-menu').fadeToggle(500);
// 	});
// });
// this makes the dropdown have a fadein. problem: messes with the dropdown closing