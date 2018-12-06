'use strict';

function upcomingEventInfo(){
  $('.upcoming-flyer-info').html(`
  					
  <div class = "flyer load-hidden">
  <p class = "white text left">Complimentary class on </p>
  <p class = "shalom-bayis-heading">Shalom Bayis</p>
  <p class = "white text right"> a community event.</p>
  <p class = "white text bold">Three Ways of Keeping Your Love Alive</p>
  <p class = "city-valley-heading">In The City:</p>
  <p class = "womens-mens-class" >Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">REBBETZIN JACKIE BITTON</p>
  <p class = "white text">Ohr Naava Institute, Brooklyn, NY</p>
  <p class = "pink text">SUNDAY</p>
  <p class = "white text">NOVEMBER 4, 2018</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
  <p class = "white text">COMPLIMENTARY VALET PARKING AVAILABLE</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/three-ways-of-keeping-your-love-alive-tickets-51664609237" target = "_blank">RSVP Women's Class (City)</a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class" >Men's Class</p>
  <p class = "white text">LED BY:</p>
  <p >RABBI NACHMAN SELTZER </p>
  <p class = "white text">International Speaker, Author of 26 Books</p>
  <p class = "pink text">TUESDAY</p>
  <p class = "white text">NOVEMBER 6, 2018</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/three-ways-of-keeping-your-love-alive-tickets-51673268136" target = "_blank">RSVP Men's Class (City) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "city-valley-heading">In The Valley:</p>
  <p class = "womens-mens-class">Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">REBBETZIN JACKIE BITTON</p>
  <p class = "white text">Ohr Naava Institute, Brooklyn, NY</p>
  <p class = "pink text">SUNDAY</p>
  <p class = "white text">NOVEMBER 4, 2018</p>
  <p class = "white text">10:00-11:00AM</p>
  <p class = "white text">12631 COLLINS STREET, VALLEY VILLAGE, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/three-ways-of-keeping-your-love-alive-tickets-51673618183" target = "_blank">RSVP Women's Class (Valley) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class">Men's Class</p>
  <p class = "white text">RABBI NACHMAN SELTZER </p>
  <p class = "white text">International Speaker, Author of 26 Books</p>
  <p class = "pink text">TUESDAY</p>
  <p class = "white text">NOVEMBER 4, 2018</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "white text">12631 COLLINS STREET, VALLEY VILLAGE, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/three-ways-of-keeping-your-love-alive-tickets-51673721492" target = "_blank">RSVP Men's Class (Valley) </a>
</div>

<div class = "flyer load-hidden">
  <p class = "pink text"></p>
  <p class = "white text">Email info@myshalombayis.com for any questions</p>
  <p class = "white text">Endorsed jointly by:</p>
  <img src="img/agudath.png" id = "logo"> <img src="img/ou.jpg" id = "logo">
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
  upcomingEventTBA();
  // upcomingEventInfo();
// });