
/*$(document).ready(function(){
	$('.flex').flexslider({
		animation:"slide",
		start:function(slider){
			$('body').removeClass("loading");
		}
	});
});*/



$(document).ready(function() {
  $('#flex').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});