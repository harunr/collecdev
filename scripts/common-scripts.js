
;(function($){
	$(function(){

        // Begin input common focus and blur for value.
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function () {
            var inputText = $(this).attr('placeholder')
            $(this).focus(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                }
            }).blur(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                    $(this).parent().removeClass('active');
                } else if ($(this).val().length > 0) {
                    $(this).parent().addClass('active');
                }
            });
        });
        // Ends input common focus and blur for value.
		
        // Phone nav click function 
        $('#phone-nav').click(function(){
            $(".nav-wrap").slideToggle();
        });
        

    /*
        $('.slider-info-wrap').each(function (i) {
            var item = $(this).find('.manual-controlled ul li');
            item.each(function (i) {
                $(this).click(function () {
                    $(this).parents('.slider-info-wrap').find('.manual-controlled ul li').removeClass('active');
                    $(this).parents('.slider-info-wrap').find('.manual-controlled ul li').eq(i).addClass('active');
                    $(this).parents('.slider-info-wrap').find('.main-slider').slick('slickGoTo', (i + 1) - 1);
                })
            })
        });
        
         $('.manual-controlled ul li').eq(0).addClass('active');*/
        
         
        
        
        if($("#main-slider").length){
            $("#main-slider").slick({
                  infinite: true,
                  arrows: true,
                  dots: false,
                  autoplay:true,
                  centerMode:true,
                  fade: true,
                  speed: 2000,
                  centerPadding:'0',
                  slidesToScroll: 1,
                  slidesToShow: 1,
                 asNavFor: "#title-slider"
                 
                });
            
          }
        
            $("#title-slider").slick({
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 speed: 2000,
                 infinite:true,
                 autoplay:true,
                 arrows: true,
                 asNavFor: "#main-slider"

             });
         
           $('.Next').on('click', function(){
                $(this).parents('.slider-info-wrap').find('.slick-next').trigger('click');
                $(this).addClass("first-shown")
                $('.Prev').removeClass("second-shown")
              
            }) 
            $('.Prev').on('click', function(){
                $(this).parents('.slider-info-wrap').find('.slick-next').trigger('click');
                $(this).addClass("second-shown")
                $('.Next').removeClass("first-shown")
            })

            $(".tab-content-wrap > div.tab-item-wrap").hide()
            $(".tab-content-wrap > div.tab-item-wrap").eq(0).show()
            $("#tabed > li").removeClass("active")
            $("#tabed > li").eq(0).addClass("active")

            $("#tabed > li").each(function(i){
                $(this).click(function(){
                    if( $(this).hasClass("active") ) return false
                    else{
                        $("#tabed> li").removeClass("active")
                        $(this).addClass("active")

                        $(".tab-content-wrap > div.tab-item-wrap").hide()
                        $(".tab-content-wrap > div.tab-item-wrap").eq(i).show()
                    }
                })
            });
        
        
     $(".tab-thumb").each(function(){
         $(this).click(function(){
             $("#blank-image").html($(this).html())
             $('.blank-image-wrap').fadeIn()
             $('.close-icon').fadeIn()
             $('body').css('overflow-y','hidden');
             
         })
     })
        $('.close-icon').click(function(){
            $(this).fadeOut()
            $('.blank-image-wrap').fadeOut()
            $('body').css('overflow-y','visible');
        })
        

        

        
        
        
        
        
        
        
        
		
	})// End ready function.

	$(window).on('load', function(){
        // Begin common slider
        
        $("#styled").mCustomScrollbar();
        
        
    })
	

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})