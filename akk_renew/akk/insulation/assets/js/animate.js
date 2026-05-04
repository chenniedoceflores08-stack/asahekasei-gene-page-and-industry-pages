// JavaScript Document

//------------------------------------------------
//　左から右にマスク→画像表示 ease系  
//------------------------------------------------

jQuery(function($){
  var _isAnimated = '_isAnimated';
  var _$window = $(window);
  var _$mainContainers = $('.mainContainer');
  var _mainContainersLength = _$mainContainers.length - 1;

  _$window.on('scroll',function(){
    _mainAnimate();
  });

  function _mainAnimate(){
    var _top = _$window.scrollTop() + _$window.height();
    for(var i = _mainContainersLength; i>=0; i--){
      var _$mainContainer = $(_$mainContainers[i]);
      if(_$mainContainer.offset().top <= _top && !_$mainContainer.hasClass(_isAnimated)){
        _$mainContainer.addClass(_isAnimated);
        var _$bgContainer = _$mainContainer.find('.bgContainer');
        _$bgContainer.find('.mask').addClass('animateMask');
        _$bgContainer.find('.bgImg').addClass('animateMainImg');
        
        var _$titleContainer = _$mainContainer.find('.titleContainer');
        _$titleContainer.find('.mask').addClass('animateTitleMask');
        _$titleContainer.find('.title').addClass('animateTitle');
      }
    }
  }
  _mainAnimate();
});

//------------------------------------------------
//　 inview バウンスなど色々系  
//------------------------------------------------

$(function() {
	$('.list-mv01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv01');
		}
		else{
			$(this).stop().removeClass('mv01');
		}
	});
});
