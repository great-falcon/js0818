//preloader
function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function() {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      el.style.display = "none";
    }
  }, 16);
}


document.addEventListener("DOMContentLoaded", function() {
	window.onload = function() {
		setTimeout(function() {
		  fadeOutnojquery(document.querySelector('.wrap-loader-container'));
		}, 1000);
	  };
});

// menuToggle

var navToggle = document.getElementById("navToggle");
var overlay = document.querySelector(".overlay");
var body = document.getElementsByTagName('body')[0];
var navActiveLinks = document.querySelectorAll(".overlayMenu a");

navToggle.addEventListener('click', toggleBurger);

function toggleBurger(){
	navToggle.classList.toggle("burgerActive");
	overlay.classList.toggle("open");
  body.classList.toggle("locked");
  if(navToggle.classList.contains("burgerActive")){
    for(var i=0; i<navActiveLinks.length; i++){
      navActiveLinks[i].addEventListener('click', toggleBurger);
    }
  }
};


//sticky header

var arrTop = document.getElementById("totop");
var STICKY = 10;
var header = document.querySelector("header");

var progressbars = document.querySelectorAll(".progress");
var progressAnimated = false;
var skillsSection = document.querySelector(".skills");
var skillsTop = skillsSection.offsetTop - 200;

var counters = document.querySelectorAll(".cont");
var countersAnimated = false;
var countersSection = document.querySelector(".stats");
var countersTop = countersSection.offsetTop - 200;
var sections = document.getElementsByTagName("section");

document.addEventListener("scroll", function(e) {
  e.preventDefault();
  var scrollTop =
    document.documentElement.scrollTop || document.scrollingElement.scrollTop;
  if (scrollTop > STICKY) {
    header.classList.add("sticky");
    arrTop.style.display = "block";

    for (let i = 0; i < sections.length; i++) {
      const element = sections[i];
      if (scrollTop >= element.offsetTop - 400) {
        var active = document.querySelector("nav .active");
        active.classList.remove("active");
        active = document.querySelector('nav [href*="#' + element.id + '"]');
        active.classList.add("active");
      }
    }

    if (scrollTop > skillsTop && !progressAnimated) {
      progressAnimated = !progressAnimated;
      for (let i = 0; i < progressbars.length; i++) {
        animateProgressbar(progressbars[i]);
      }
    }
    if (scrollTop > countersTop && !countersAnimated) {
      countersAnimated = !countersAnimated;
      for (var i = 0; i < counters.length; i++) {
        animateCounter(counters[i]);
      }
    }
  } else {
    header.classList.remove("sticky");
    arrTop.style.display = "none";
  }
});

//progress bar

function animateProgressbar(progressbar) {
  var value = progressbar.getAttribute("data-value");
  var max = 100;
  var dellta = value / max;
  var current = 0;

  var timerId = setInterval(function() {
    if (current < value) {
      current += dellta;
      progressbar.style.width = current + "%";
    } else {
      clearInterval(timerId);
    }
  }, 10);
}

//loadmore

var loadBtn = document.querySelector(".more-button");
var pfItems = document.querySelectorAll(".portfolio-item");
var current = 6;
var step = 6;

loadBtn.onclick = loadMore;

function loadMore() {
  if (current + step <= pfItems.length) {
    for (var i = current - 1; i < current + step; i++) {
      pfItems[i].style.display = "block";
    }
    current += step;
    if (current == pfItems.length) {
      loadBtn.style.display = "none";
    }
  }
}

//counters

function animateCounter(counter) {
  var value = counter.getAttribute("data-count");
  var delta = 1500 / value;
  var currentCount = 0;

  var timer = setInterval(function() {
    if (currentCount < value) {
      currentCount++;
      counter.innerText = currentCount;
    } else {
      clearInterval(timer);
    }
  }, delta);
}

// scroll animation


var anchors = document.querySelectorAll('[href*="#"]');

for (var i = 0; i < anchors.length; i++) {
  anchors[i].onclick = function() {
    var anchorId = this.getAttribute("href").slice(1);
    if (anchorId) {
      return smoothScroll(anchorId);
    }
  };
}

document.addEventListener('click', function(event){
	if(event.target.classList.contains('scroll')){
    event.preventDefault();
    var id = event.target.getAttribute('href').substr(1);
		smoothScroll(id);
	}
});


function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}
