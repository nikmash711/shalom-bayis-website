'use strict';

function upcomingEventInfo() {
  $('.upcoming-flyer-info').html(`
  					
  <div class = "flyer load-hidden">
  <p class = "white text left">Complimentary class on </p>
  <p class = "shalom-bayis-heading">Shalom Bayis</p>
  <p class = "white text right"> a community event.</p>
  <p class = "white text bold">Tools & Tips From the Wisdom of Torah</p>
  <p class = "city-valley-heading">In The City:</p>
  <p class = "womens-mens-class" >Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">Michal Horowitz</p>
  <p class = "white text"> International Lecturer & Judaic Studies Teacher</p>
  <p class = "pink text">MONDAY</p>
  <p class = "white text">NOV 18, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
  <p class = "white text">COMPLIMENTARY VALET PARKING AVAILABLE</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/79288232237" target = "_blank">RSVP Women's Class (City)</a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class" >Men's Class</p>
  <p class = "white text">LED BY:</p>
  <p >Rabbi Dov Heller</p>
  <p class = "white text">Licensed Marriage Therapist & Adjunct Rabbi at Aish Hatorah</p>
  <p class = "pink text">TUESDAY</p>
  <p class = "white text">NOV 19, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/79288850085" target = "_blank">RSVP Men's Class (City) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "city-valley-heading">In The Valley:</p>
  <p class = "womens-mens-class">Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">Michal Horowitz</p>
  <p class = "white text">International Lecturer & Judaic Studies Teacher</p>
  <p class = "pink text">SUNDAY</p>
  <p class = "white text">NOV 17, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">Congregation Shaarei Zedek</p>
  <p class = "white text">12800 Chandler Blvd, Valley Village, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/79288675563" target = "_blank">RSVP Women's Class (Valley) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class">Men's Class</p>
  <p >Rabbi Jonathan Rosenberg</p>
  <p class = "white text">Rabbi of Congregation Shaarei Zedek</p>
  <p class = "pink text">MONDAY</p>
  <p class = "white text">NOV 18, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">Congregation Shaarei Zedek</p>
  <p class = "white text">12800 Chandler Blvd, Valley Village, CA 91607</p></div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/79288765833" target = "_blank">RSVP Men's Class (Valley) </a>
</div>

<div class = "flyer load-hidden">
  <p class = "pink text"></p>
  <p class = "white text">Email info@myshalombayis.com for any questions</p>
  <p class = "white text">Endorsed jointly by:</p>
  <img src="./img/agudath.png" id = "logo"> <img src="./img/ou.jpg" id = "logo">
</div>
  `);
}

function upcomingEventTBA() {
  $('.tba-info').html(`
  <h1 class = "load-hidden">Upcoming Events</h1>
  <br>
  <p class = "tba">TBA. Please check back soon for upcoming events. </p>
  <p class = "tba"> <a href="past_events.html#past_events">Check out previous events here!</a></p>
  `);
}

function upcomingFlyer() {
  $('.tba-info').html(`
  <h1 class = "load-hidden">Upcoming Events</h1>
  <br>
  <img class="flyer" src="img/flyer.png">
  `);
}

$(document).ready(function() {
//   upcomingEventTBA();
  // upcomingEventInfo();
  upcomingFlyer();
});
