'use strict';

function upcomingEventInfo() {
  $('.upcoming-flyer-info').html(`
  					
  <div class = "flyer load-hidden">
  <p class = "white text left">Complimentary class on </p>
  <p class = "shalom-bayis-heading">Shalom Bayis</p>
  <p class = "white text right"> a community event.</p>
  <p class = "white text bold">INTIMACY: Re-ignite the Spark Within</p>
  <p class = "city-valley-heading">In The City:</p>
  <p class = "womens-mens-class" >Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">Sarah Karmely</p>
  <p class = "white text">Relationship Counselor & International Lecturer</p>
  <p class = "pink text">MONDAY</p>
  <p class = "white text">JULY 29, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
  <p class = "white text">COMPLIMENTARY VALET PARKING AVAILABLE</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/intimacy-re-ignite-the-spark-within-tickets-65503660211" target = "_blank">RSVP Women's Class (City)</a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class" >Men's Class</p>
  <p class = "white text">LED BY:</p>
  <p >Rabbi Avraham Peretz Friedman</p>
  <p class = "white text">Author of Marital Intimacy</p>
  <p class = "pink text">TUESDAY</p>
  <p class = "white text">JULY 30, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "pink text">NESSAH SYNAGOGUE</p>
  <p class = "white text">142 S. Rexford Drive, Beverly Hills, CA 90212</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/intimacy-re-ignite-the-spark-within-tickets-65503750481" target = "_blank">RSVP Men's Class (City) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "city-valley-heading">In The Valley:</p>
  <p class = "womens-mens-class">Women's Class</p>
  <p class = "white text">LED BY:</p>
  <p class = "white text">Sarah Karmely</p>
  <p class = "white text">Relationship Counselor & International Lecturer</p>
  <p class = "pink text">SUNDAY</p>
  <p class = "white text">JULY 28, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "white text">12631 Collins Street, Valley Village, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/intimacy-re-ignite-the-spark-within-tickets-65504023297" target = "_blank">RSVP Women's Class (Valley) </a>
</div>
<div class = "flyer load-hidden">
  <p class = "womens-mens-class">Men's Class</p>
  <p >Rabbi Avraham Peretz Friedman</p>
  <p class = "white text">Author of Marital Intimacy</p>
  <p class = "pink text">MONDAY</p>
  <p class = "white text">JULY 29, 2019</p>
  <p class = "white text">8:00-9:00PM</p>
  <p class = "white text">12631 Collins Street, Valley Village, CA 91607</p>
</div>
<div id = "rsvp" class = "load-hidden"> 
  <a href="https://www.eventbrite.com/e/intimacy-re-ignite-the-spark-within-tickets-65504057399" target = "_blank">RSVP Men's Class (Valley) </a>
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
  <p class = "tba">Recording of a recent lecture:</p>
  <p class = "tba"> <a href="  https://www.torahanytime.com/#/lectures?v=82919">Men's Lecture by Rabbi Efraim Stauber</a></p>
  `);
}

$(document).ready(function() {
  upcomingEventTBA();
  // upcomingEventInfo();
});
