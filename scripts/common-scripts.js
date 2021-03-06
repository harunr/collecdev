
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
        $('.phone-nav').click(function(){
            $(".nav-wrap").slideToggle();
            $("body").toggleClass("navShown")
           //$('body').css('overflow', 'hidden');
        });
        

        
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
                $('#main-slider').slick('slickNext');
                $(this).addClass("first-shown")
                $('.Prev').removeClass("second-shown")
              
            }) 
            $('.Prev').on('click', function(){
                $('#main-slider').slick('slickPrev');
                $(this).addClass("second-shown")
                $('.Next').removeClass("first-shown")
            })

        
        
            $(".tab-content-wrap > div.tab-item-wrap").hide().removeClass('thumb-shown');
            $(".tab-content-wrap > div.tab-item-wrap").eq(0).show().addClass('thumb-shown');
            $("#tabed > li").removeClass("active")
            $("#tabed > li").eq(0).addClass("active")

            $("#tabed > li").each(function(i){
                $(this).click(function(){
                    if( $(this).hasClass("active") ) return false
                    else{
                        $("#tabed> li").removeClass("active")
                        $(this).addClass("active")

                        $(".tab-content-wrap > div.tab-item-wrap").hide().removeClass('thumb-shown');
                        $(".tab-content-wrap > div.tab-item-wrap").eq(i).show().addClass('thumb-shown');
                    }
                })
            });
        
        
        
             $(".tab-thumb").each(function(){
                 $(this).click(function(){
                     $("#blank-image").html($(this).html())
                     $('.blank-image-wrap').fadeIn()
                     $('.close-icon').fadeIn()
                    $('body').css('position:', 'fixed','overflow:','hidden')

                 })
             })
                $('.close-icon').click(function(){
                    $(this).fadeOut()
                    $('.blank-image-wrap').fadeOut()
                    $('body').css('overflow-y','visible');
                    $('.green-living-wrap').fadeOut()
                    $('body').removeClass("header-bg")
                    $('body').removeClass("fullWiden")
                })


                $(".news-info-des").each(function(){

                    var $_this = $(this)
                    $_this.click(function(){

                        var tiTle = $_this.find('.news-coll-info').html()
                        var descriptionTxt = $_this.find('.news-info-content').next('div.hidden-txt').html()
                        var imageTomakeLarge = $_this.find('.news-info-thumb').html()

                        //$('#greenFullViewImage').html('')
                        $('#greenFullViewImage').html(imageTomakeLarge);
                        //$('#greenTitle').html('');
                        $('#greenTitle').html(tiTle);
                        //$('#greenLivingTxt').html('');
                        $('#greenLivingTxt').html(descriptionTxt);

                        $('#greenLivingWrap').fadeIn(500)
                        $('.close-icon').fadeIn(500)
                        $('body').css('position:', 'fixed','overflow:','hidden')
                        $('body').addClass("header-bg")

                    });
                });




                $('body').on('click', '#greenFullViewImage a.expandicon', function(e) {
                    
                    $('body').addClass("fullWiden")
                });

                $(window).on("scroll resize", function(){
                    if ($(window).scrollTop() > 1) {
                        $('body').addClass('sticky');
                    } else {
                        $('body').removeClass('sticky');
                    }
                });

        
         $('.video-info').each(function(){
                var $_this = $(this)
                $_this.on('click', function(){
                    $_this.parents('.video-wrap').find('.video-overlay').addClass('open');
                    $('.circle-cursor').fadeOut();
                    $_this.parents('.video-wrap').find(".tutorial").html( $_this.find('div.video-container').html());
                    $_this.parents('.main-content-wrap').css({'z-index': 1000});
                    //$_this.parents('.video-wrap').find('#videos')[0].src += "?autoplay=1";
                    
                });

              $_this.parents('.video-wrap').find('.video-overlay, .video-overlay-close').on('click', function (e) {
                    e.preventDefault();
                    close_video();
                });

                $(document).keyup(function (e){
                    if (e.keyCode === 27) {
                        close_video();
                    }
                });

                function close_video(){
                    $_this.parents('.video-wrap').find('.video-overlay.open').removeClass('open').find('iframe').remove();
                    $_this.parents('.video-wrap').find(".circle-cursor").fadeIn();
                    
                };  
             
        })
        
        
        
        
        
            var delayTime = 0;
            var tdelayTime = 3.2;
            var pTdelayTime = 2.6;
        
        $('.sgv-text').each(function(i){
            $(this).css({
                'transition-delay' : tdelayTime + (i*3.2) + 's',
            })
            $(this).find('path').css({
                'animation-delay' : delayTime + (i*3.2) + 's',
                'transition-delay' : pTdelayTime + (i*3.2) + 's'
            });
        })

        var invoitdelayTime = 0;
        var textAnimateTime = 1.5
        
        $('.involving-info .collecdev-text path').each(function(i){
            $(this).css({
                'animation-delay' : invoitdelayTime + (i*1.5) + 's',
                'transition-delay' : textAnimateTime + (i*1.5) + 's'
            });
        })
        
        
         // This function for scroll from bottom animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('start-animate');
                } else {
                    //$element.removeClass('start-animate');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        //$window.trigger('scroll');
        
        
        
        
        $(document).ready(function () {
            $(".news-info-content p").each(function (i) {
                var len = $(this).text().trim().length;
                if (len > 100) {
                    $(this).text($(this).text().substr(0, 103) + ' ' + '...');
                }
            });
        });
        
        
        
        
           if($(".animated-cursor").length){
            $(".animated-cursor").mouseenter(function(){
                $(".circle-cursor").css({
                    "opacity" : 1,
                    "visibility" : "visible"
                });
            });
            $(".animated-cursor").mouseleave(function(){
                $(".circle-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                })
            
            });
        }
        
          $("#svg-slider").slick({
              speed: 1000,
              infinite: true,
              autoplay: true,
              arrows: false,
              fade: true,

          });

        
        if($(window).width() > 1024){
               $('#fullpage').fullpage({
                   //options here
                   autoScrolling: true,
                   scrollHorizontally: true,
                   navigation: true,
                   scrollBar: true,
                   afterRender: false,
                   fitToSection: true,
               });
            }
      
        
        
	})// End ready function.
    
       $(window).on('load', function(){
            // Begin common slider

            $(".styled").mCustomScrollbar();

        }) 
	
	

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})