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
	
		_gallery.find('ul').css('width',totalWidth);
	    _gallery.find('ul>li').css('width',mainDivWidth);
	
	
		/*previous sliding function*/
		function prevSliding(e){
			e.preventDefault();

			$('.prev_area').unbind();
			
			/*getting the index of active li element*/
			index = _gallery.find('.active').index();
			
			active = _gallery.find('.active');
			activeNext = active.prev();
			
			/*if active li element is first li then go to last slide*/
			if(index == 0){
				activeNext = _gallery.find('ul>li').eq(totalSlides-2);
				activeNext.addClass('active');
				firstActive = _gallery.find('.active').eq(0);
				firstActive.removeClass('active');
				_slides.css('margin-left',-(totalWidth-eachSlideWidth));
				_slides.animate({'margin-left':'+='+mainDivWidth},750,'swing',function(){
					$('.prev_area').bind('click', prevSliding);
				});
			}else{
				activeNext.addClass('active');
				active.removeClass('active');
				_slides.animate({'margin-left':'+='+mainDivWidth},750,'swing',function(){
					$('.prev_area').bind('click', prevSliding);
				});	
			}
		}



	
		/* next sliding function*/
		function nextSlideing(e){
			e.preventDefault();

			/* 
				unbind then event that more clicking won't fired
				after finishing the animation another click event will fired
				otherwise not fired
			*/
			$('.next_area').unbind();

			/* getting the index of active li element*/
			index = _gallery.find('.active').index();

			active = _gallery.find('.active');
			activeNext = active.next();
			(active.next().find('img')).load(function(){

	/*			if(!(active.next().find('img')).load()){
					console.log(active.next().find('img').attr('src'));
					return 0;
				}*/
				//console.log(activeNext.find('.active img').attr('alt'));
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
					/* bind event again after animation finished */
					$('.next_area').bind('click', nextSlideing);
				});

			});

		}
	


	    /* prev cliking event */
		$('.prev_area').bind('click',prevSliding);	


	    /* next cliking event */
		$('.next_area').bind('click',nextSlideing);	

	
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









