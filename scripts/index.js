'use strict';

function upcomingEventInfo(){
  $('.upcoming-flyer-info').html(`
  					
  <div class = "flyer load-hidden">
  <p class = "white text left">Complimentary class on </p>
  <p class = "shalom-bayis-heading">Shalom Bayis</p>
  <p class = "white text right"> a community event.</p>
  <p class = "white text bold">Great Ways to Have a Great Marriage</p>
  <p class = "city-valley-heading">In The City:</p>
  <p class = "womens-mens-class" >Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">RIVKA MALKA PERLMAN</p>
  <p class = "white text">Life Coach and International Speaker</p>
  <p class = "pink text">MONDAY</p>
  <p class = "white text">MAY 13, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
  <p class = "white text">COMPLIMENTARY VALET PARKING AVAILABLE</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="" target = "_blank">RSVP Women's Class (City)</a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class" >Men's Class</p>
  <p class = "white text">LED BY:</p>
  <p >RABBI EFRIAM STAUBER</p>
  <p class = "white text">Director of The Torah Center, Jerusalem | Mental Health Professional</p>
  <p class = "pink text">TUESDAY</p>
  <p class = "white text">MAY 14, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="" target = "_blank">RSVP Men's Class (City) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "city-valley-heading">In The Valley:</p>
  <p class = "womens-mens-class">Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">RIVKA MALKA PERLMAN</p>
  <p class = "white text">Life Coach and International Speaker</p>
  <p class = "pink text">SUNDAY</p>
  <p class = "white text">MAY 12, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "white text">12631 COLLINS STREET, VALLEY VILLAGE, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="" target = "_blank">RSVP Women's Class (Valley) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class">Men's Class</p>
  <p >RABBI EFRIAM STAUBER</p>
  <p class = "white text">Director of The Torah Center, Jerusalem | Mental Health Professional</p>
  <p class = "pink text">TUESDAY</p>
  <p class = "white text">MAY 13, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "white text">12631 COLLINS STREET, VALLEY VILLAGE, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="" target = "_blank">RSVP Men's Class (Valley) </a>
</div>

<div class = "flyer load-hidden">
  <p class = "pink text"></p>
  <p class = "white text">Email info@myshalombayis.com for any questions</p>
  <p class = "white text">Endorsed jointly by:</p>
  <img src="./img/agudath.png" id = "logo"> <img src="./img/ou.jpg" id = "logo">
</div>
  `);
}

function upcomingEventTBA(){
  $('.tba-info').html(`
  <h1 class = "load-hidden">Upcoming Events</h1>
  <br>
  <p class = "tba">TBA. Please check back soon for upcoming events. </p>
  <p class = "tba"> <a href="past_events.html#past_events">Check out previous events here!</a></p>
  `);
}

// $(document).ready(function(){
  // upcomingEventTBA();
  upcomingEventInfo();
// });