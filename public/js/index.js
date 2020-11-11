var now = 0;
var delta;

function onWheel(e) {
	delta = e.originalEvent.deltaY;
	if(delta > 0 && now < 1) {
		now++;
		ani('fast');
	}
	else if(delta < 0 && now <= 1 && now > 0) {
		now--;
		ani('fast');
	}
	else if(delta > 0 && now >= 1) {
		now=now+0.2
		deltaX += 60;
		ani('slow');
	}
	else if(delta < 0 && now > 1) {
		now=now-0.2
		deltaX -= 60;
		ani('slow');
	}
}

var deltaX = 0;
function ani(speed) {
	var wid = $(window).width();
	console.log(delta,deltaX);
	if(speed == 'fast')	$(".main-wrapper").stop().animate({"left": -(now*wid)+ "px"} , 800);
	if(speed == 'slow')	{
		$(".main-wrapper").stop().css({"left": -wid-deltaX+ "px"});
}}

$(window).on('wheel', onWheel);
/*
function scrollHoriz() {
  $('html, body, *').off('mousewheel').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
    scrollLeft=this.scrollLeft
    setTimeout(function() {
      if (scrollLeft == 0) scrollVert();
    }, 0)
  });
} 

*/
