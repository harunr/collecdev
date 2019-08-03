(function($){
    if($(".circle-cursor--outer").length){
        const initCursor = () => {
            const { Back } = window;
            this.outerCursor = document.querySelector(".circle-cursor--outer");
            this.outerCursorBox = this.outerCursor.getBoundingClientRect();
            this.outerCursorSpeed = 0;
            this.easing = Back.easeOut.config(1.7);
            this.clientX = -100;
            this.clientY = -100;
            this.showCursor = false;

            const unveilCursor = () => {
              TweenMax.set(this.outerCursor, {
                x: this.clientX - this.outerCursorBox.width / 2,
                y: this.clientY - this.outerCursorBox.height / 2
              });
              setTimeout(() => {
                this.outerCursorSpeed = 0.2;
              }, 100);
              this.showCursor = true;
            };
            document.addEventListener("mousemove", unveilCursor);

            document.addEventListener("mousemove", e => {
              this.clientX = e.clientX;
              this.clientY = e.clientY;
            });

            const render = () => {
              if (!this.isStuck) {
                TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
                  x: this.clientX - this.outerCursorBox.width / 2,
                  y: this.clientY - this.outerCursorBox.height / 2
                });
              }
              if (this.showCursor) {
                document.removeEventListener("mousemove", unveilCursor);
              }
              requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
          };

        initCursor();
    }

    // Ready function
    $(function(){
      $('.action-wrap ul li').each(function(i){
        $(this).find('a').mouseenter(function(){
          $(this).parents('.action-wrap').addClass('is-active');
          $(this).parents('.action-wrap').find('.hover-img-item').removeClass('is-active hover-img-item-alt');
          $(this).parents('.action-wrap').find('.hover-img-item').eq(i).addClass('is-active hover-img-item-alt');
        });
        $(this).find('a').mouseleave(function(){
          $('.action-wrap').removeClass('is-active');
          //$('.action-wrap').find('.hover-img-item').removeClass('is-active hover-img-item-alt');
        });
      })
    })// End ready function

})(jQuery);