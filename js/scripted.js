var actSlider = 0;

jQuery(document).ready(function() {
	
	if( location.hash.length > 0 )
		setHash(location.hash.substr(1));
	
	$('a[href^="#"]').click(function (e) {
		
		setHash( $(this).attr('href').substr(1) );
		
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	
	$('#left_arrow').click(function() {
		actSlider--;
		if(actSlider < 0)
				actSlider = 0;
		var hash = setSlider(actSlider);
		
		if(history.pushState) {
			history.pushState(null, null, '#'+hash);
		} else {
			location.hash = '#'+hash;
		}
	});
	
	$('#right_arrow').click(function() {
		actSlider++;
		if(actSlider > 3)
				actSlider = 3;
		var hash = setSlider(actSlider);
		
		if(history.pushState) {
			history.pushState(null, null, '#'+hash);
		} else {
			location.hash = '#'+hash;
		}
	});
	
	
});


function setHash( hash ) {
	
	switch( hash ) {
		
		case '':
			
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			
			break;
			
		case 'plan':
		
		case 'I_Miejsce':
		case 'II_Miejsce':
		case 'III_Miejsce':
		case 'Kolejne_Miejsca':

			
			$('html, body').animate({
				scrollTop: $("#plan").offset().top
			}, 500);
			
			
			switch( hash ) {
				
				case 'I_Miejsce': setSlider(0);
					break;
				case 'II_Miejsce': setSlider(1);
					break;
				case 'III_Miejsce': setSlider(2);
					break;
				case 'Kolejne_Miejsca': setSlider(3);
					break;
				
			}
			
			break;
			
		case 'partnerzy':
			
			$('html, body').animate({
				scrollTop: $("#partnerzy").offset().top
			}, 500);
			
			break;
		
	}
	
	if(history.pushState) {
		history.pushState(null, null, '#'+hash);
	} else {
		location.hash = '#'+hash;
	}
	
}


function setSlider(nr) {
	
	actSlider = nr;
	
	$('#plan > header > nav > ul > li > a').removeClass('active');
	$('#plan > header > nav > ul > li').eq(nr).children('a').addClass('active');
	
	$('#slider_wrapper > ul').css('left', -(nr*940)+'px');
	
	switch( nr ) {
		case 0: return 'I_Miejsce';
		case 1: return 'II_Miejsce';
		case 2: return 'III_Miejsce';
		case 3: return 'Kolejne_Miejsca';
	}
	
}