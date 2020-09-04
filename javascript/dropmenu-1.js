$(document).ready(function(event){

	dropbutton = $(".drop-button");
	hvusd = $('.header_nav_user_dropmenu');


	/*$(document).mouseup(function(event) {

		if(hvusd.hasClass('open') && !hvusd.is(event.target)) {
			dropbutton.toggleClass('active');
			hvusd.toggleClass('open');
		} 

		// hvusd = $('.header_nav_user_dropmenu');
		// dropbutton = $(".drop-button")
		// if(dropbutton.hasClass('active') && hvusd.hasClass('open')){
		// 	if (!hvusd.is(event.target)  && hvusd.has(event.target).length === 0) {// если клик был не по нашему блоку
		// 		hvusd.toggleClass('open');
		// 		dropbutton.toggleClass('active');
		// 	}

		// } 
		//


	});*/

	dropbutton.click(function(event){
		event.preventDefault();
		dropbutton.toggleClass("active");
		hvusd.toggleClass("open");
		
	});


});