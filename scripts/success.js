'use strict';

function redirect(){
  let timer = setTimeout(function() {
    window.location='index.html#nav';
  }, 7000);
}

$(document).ready(function(){
  redirect();
});