$(document).ready(function() {
  $('#head h2').fadeIn(3000);
  $('#head a').show(5000);
  $('#myself-link').click(function() {
    $('#head h2').hide(100);
    $('#head h5').show(1000);
    $('#head h2').fadeIn(4000);
    myself();
  });
  $('#achieve-link').click(function() {
    achieve();
  });
  $('#project-link').click(function() {
    project();
  });
  $('#contact-link').click(function() {
    $('.contact-item').css({
      display: 'block'
    });
  });
  $('#back-from-contact').click(function() {
    $('.contact-item').css({
      display: 'none'
    });
  });
});
function myself() {
  var addon = `   <div id="back-area">
  <a href=""> <img src="back.png" alt="" /></a>
  </div> <div id="myself">
  <h5>I have</h5>
  <h3>Value for the creative world to showcase my creative stuff.</h3>
  <p>
  Learner as Web Developer, IOT & Javascript programmer.
  </p><h4>Position of Responsibilities and Extra Curriculars </h4>
  <p>lots many to write..........
  </p>
  </div>`
  document.getElementById('main').innerHTML = addon;
}
function achieve() {
  var addon = `  <div id="back-area">
  <a href=""> <img src="back.png" alt="" /></a>
  </div><div id="achieve">
  <h2>Achievements</h2>
  <div class="row">
  <div class="col-sm-4">
  <p>xyz</p></div>
  </div>  </div>`
  document.getElementById('main').innerHTML = addon;
}function project() {
  var addon = `  <div id="back-area">
  <a href=""> <img src="back.png" alt="" /></a>
  </div><div id="project"><div class="row"><div class="post col-sm-4"><div><span>PWA: 'Coro up', provides live Covid-19 statistics & mask game</span></div>
  </div></div></div>`
  document.getElementById('main').innerHTML = addon;
}
function back() {
  var addon = `
  <div class="row">
  <div class="col-sm-4">
  <p>Myself</p><a id="myself-link"><img src="myself.png" alt="" /></a></div>
  <div class="col-sm-4">
  <p>Achievements
  </p><a id="achieve-link"><img src="achieve.png" alt="" /></a></div>
  <div class="col-sm-4">
  <p>Project</p><a id="project-link">
  <img src="project.png" alt="" /></a></div>
  <div class="col-sm-4">
  <p>Contact me</p>
  <a id="contact-link">
  <img src="contact.png" alt="" /></a>
  </div></div>`
  document.getElementById('main').innerHTML = addon;
}