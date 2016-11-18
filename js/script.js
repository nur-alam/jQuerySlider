(function($){
	
	
		var _gallery = $('#slider');
		_gallery.find('ul').attr('class','slides');
		_gallery.find('ul>li').attr('class','slide');
		var _slides = _gallery.find('.slides');
		var _slide = _gallery.find('.slide');
		
	
		_gallery.find('li:first').clone(true).appendTo(_gallery.find('ul'));
		_gallery.find('ul>li:first').addClass('active');
	
		totalSlides = _gallery.find('li').length;
		mainDivWidth = _gallery.outerWidth(true);
	    eachSlideWidth = _gallery.find('li').outerWidth(true);
		totalWidth = totalSlides*eachSlideWidth;
	
		console.log(mainDivWidth);
		console.log(eachSlideWidth);
		console.log(totalWidth);
	
		_gallery.find('ul').css('width',totalWidth);
	    _gallery.find('ul>li').css('width',mainDivWidth);
	
	
		/*previous sliding function*/
		$('.prev_area').click(function(event){
			event.preventDefault();
			
			/*getting the index of active li element*/
			index = _gallery.find('.active').index();
			
			active = _gallery.find('.active');
			activeNext = active.prev();
			console.log(active);
			console.log(activeNext);
			
			/*if active li element is first li then go to last slide*/
			if(index == 0){
				activeNext = _gallery.find('ul>li').eq(totalSlides-2);
				activeNext.addClass('active');
				firstActive = _gallery.find('.active').eq(0);
				firstActive.removeClass('active');
				_slides.css('margin-left',-(totalWidth-eachSlideWidth));
				_slides.animate({'margin-left':'+='+mainDivWidth},750,'swing');
			}else{
				activeNext.addClass('active');
				active.removeClass('active');
				_slides.animate({'margin-left':'+='+mainDivWidth},750,'swing');	
			}
			
		});	
	
	
	
		/* next sliding function*/
		function nextSlideing(){

			/* getting the index of active li element*/
			index = _gallery.find('.active').index();

			active = _gallery.find('.active');
			activeNext = active.next();
			activeNext.addClass('active');
			firstActive = _gallery.find('.active').eq(0);
			firstActive.removeClass('active');

			_slides.animate({'margin-left':'-='+mainDivWidth},750,'swing',function(){
				/*if active index is last li element then add active class to first li element*/
				if(index===(totalSlides-2)){
					_gallery.find('ul>li').removeClass('active');
					_gallery.find('ul>li:first').addClass('active');
					_slides.css('margin-left',0);
				}
			});

		}
	
	
		/* next cliking event*/
		$(document).on('click','.next_area',function(event){
			event.preventDefault();
			nextSlideing();
		});
	
	
		/*making auto sliding*/
		/*setInterval(nextSlideing,6000);*/
	
/*		setInterval(function(){
			_slides.animate({'margin-left' : '-='+mainDivWidth},'linear',function(){
				_current_slide++;
				if(_current_slide === totalSlides){
					_current_slide = 1;
					_slides.css('margin-left',0);
				}
			});
		},2000); */
	
		//console.log(totalSlides);
	
	
}(jQuery))









