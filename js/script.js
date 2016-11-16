(function($){
	
	
		var _gallery = $('#slider');
		_gallery.find('ul').attr('class','slides');
		_gallery.find('ul>li').attr('class','slide');
	    _gallery.find('ul>li:first').addClass('active');
		var _slides = _gallery.find('.slides');
		var _slide = _gallery.find('.slide');
		
	
		_gallery.find('li:first').clone(true).appendTo(_gallery.find('ul'));
		//_gallery.find('li:last').clone(true).prependTo(_gallery.find('ul'));
	
		totalSlides = _gallery.find('li').length;
		mainDivWidth = _gallery.outerWidth();
	    eachSlideWidth = _gallery.find('li').outerWidth();
		totalWidth = totalSlides*eachSlideWidth;
	
		_gallery.find('ul').css('width',totalWidth);
	    _gallery.find('ul>li').css('width',mainDivWidth);
	
		var _current_slide = 1;
		
	
	
/*		$('.prev_area').click(function(event){
			event.preventDefault();
			var first = _slides.find('li').first();
			var last  = _slides.find('li').last();
			//_slides.prepend(last);
			//_slides.animate({'margin-left':'+='+mainDivWidth},350,'linear');
			last.insertBefore(first);
		});	
*/	
/*		$('.next_area').click(function(event){
			event.preventDefault();
			var first = _slides.find('li').first();
			var last  = _slides.find('li').last();
			console.log(first);
			_slides.animate({'margin-left':'-='+mainDivWidth},1000,'linear',function(){
				//first.insertAfter(last);	
				console.log(first);
			});
			
		});	*/
	
	
/*		$('.prev_area').click(function(event){
			event.preventDefault();
			
			_slides.animate({'margin-left':'+='+mainDivWidth},350,'linear',function(){
				_current_slide++;console.log(_current_slide);
				
				if(_current_slide===totalSlides){
					_current_slide = 1;
					_slides.css('margin-left',0);
				}
			});
		});	
	
		$('.next_area').click(function(event){
			event.preventDefault();
			
			_slides.animate({'margin-left':'-='+mainDivWidth},350,'linear',function(){
				_current_slide++;console.log(_current_slide);
				
				if(_current_slide===totalSlides){
					_current_slide = 1;
					_slides.css('margin-left',0);
				}
			});
		});*/
	
		setInterval(function(){
			_slides.animate({'margin-left' : '-='+mainDivWidth},'linear',function(){
				_current_slide++;
				if(_current_slide === totalSlides){
					_current_slide = 1;
					_slides.css('margin-left',0);
				}
			});
		},2000); 
	
		//console.log(totalSlides);
	
	
}(jQuery))










