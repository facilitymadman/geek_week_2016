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
		if(actSlider > 6)
				actSlider = 6;
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
		
		case 'poniedzialek':
		case 'wtorek':
		case 'sroda':
		case 'czwartek':
		case 'piatek':
		case 'sobota':
		case 'niedziela':
			
			$('html, body').animate({
				scrollTop: $("#plan").offset().top
			}, 500);
			
			
			switch( hash ) {
				
				case 'poniedzialek': setSlider(0);
					break;
				case 'wtorek': setSlider(1);
					break;
				case 'sroda': setSlider(2);
					break;
				case 'czwartek': setSlider(3);
					break;
				case 'piatek': setSlider(4);
					break;
				case 'sobota': setSlider(5);
					break;
				case 'niedziela': setSlider(6);
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
		case 0: return 'poniedzialek';
		case 1: return 'wtorek';
		case 2: return 'sroda';
		case 3: return 'czwartek';
		case 4: return 'piatek';
		case 5: return 'sobota';
		case 6: return 'niedziela';
	}
	
}