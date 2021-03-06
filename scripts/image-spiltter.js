/*
    Simple jQuery image splitter. 
    You can spilt any image horizontal or vertical.

# Simple usage

You can use a number to split the image in equal parts.
  
  $().splitImage({steps : 5}) 

You can use an array to make some more advanced splitting:
    
  $().splitImage({steps : [10, 80]}

  This will split the image in 2 parts the first one will be 10% of the image width/height followed by a part 80% the image width/height.

or 

  $().splitImage({steps : [10, 80], meaning : 'px'}

This will split the image in 3 parts, too. But now the first part is 10px long followd by a part which is 80px long. The last part is the remaining width/height of the image.

# Other Settings:

## orientation

can be horizontal(default) or vertical;

## ingoreRest

the remaining part of the image will be ignored



Advanced Stuff:

$().splitImage({steps : function(){
    // Do your stuff. stop by returning undefined
}};

You can use a function callback to make you own Pattern.

*/
(function($){
    var defaults = {
        steps        : 5,   
        meaning      : 'steps',
        orientation  : 'horizontal',
        ignoreRest   :  false,
        klass        : undefined
        
    };
    
    var stepper = {
        'number' : function(steps){
            var count = 0;
            return function(){
                return (++count <= steps) ? 1 : undefined;
            }
        },
                
        'object' : function(steps){
            var cache = steps.slice();
            return function(){
                return cache.shift();
            }
        },
        
        'function' : function(steps){
            return steps;
        }
    };
 
    var calcSize = {
         'steps' : function(size, step, length){
             return (size/length);
         },
         '%'  : function(size, step){
             return (size/100) * step;
         },
         'px' : function(size, step){
             return step;
         }
    };
    
    var orientFunc = {
        'horizontal' : {
            size : function(){
                return this.width;
            },
            display : function(){
                return 'display:block;';
            }, 
            style : function(bgOffset, step){
                return 'position:absolute;left:'+bgOffset+'px;background-position:-'+bgOffset+'px 0;width:'+step+'px;height:'+this.height+'px;';
            },
            remaining  : function(bgOffset){
                return this.width-bgOffset;
            }
        },
        'vertical'   : {   
            size : function(){
                return this.height;
            },
            display : function(){
                return 'display:block;';
            }, 
            style : function(bgOffset, step){
                return 'position:absolute;top:'+bgOffset+'px;background-position:0 -'+bgOffset+'px;width:'+this.width+'px;height:'+step+'px;';
            },
            remaining  : function(bgOffset){
                return this.height-bgOffset;
            }
        }
    };

    var addBackgroundStyle = function(src, orientF){
        var klass = "split"+(+(new Date));
        $('<style>.'+klass+'{'+orientF.display()+'background-image:url('+src+ ');}</style>').appendTo($('head'));
        return klass;
    };

    var genSpan = function(klass, c){
        return '<span class="'+klass+' span'+c+'"></span>';
    };
    var genStyle = function(bgOffset, step, orientF){
        return orientF.style(bgOffset, step);
    };
    var genAttr = function(attr, value){
        return (value !== undefined) ?' '+attr+'="'+value+'" ':'';
    }
    
    var splitImage = function(img, orientF, meaning, step, size, settings){
        var klass    = addBackgroundStyle(img.attr('src'), orientF),
            spans    = '',
            spanStyle= '<style>',
            i, c = 1, bgOffset = 0;

        orientF.width    = img.width();
        orientF.height   = img.height();

        while ((i = step()) !== undefined){
            var stepInt = size(orientF.size(), i,settings.steps);
            spans += genSpan(klass, c);
            spanStyle += '.'+klass+'.span'+c+'{'+genStyle(bgOffset, stepInt, orientF)+'}';
            bgOffset += stepInt;
            c++;
        }
        var remaining = orientF.remaining(bgOffset);
        if (!settings.ignoreRest && remaining !== 0){
            spans += genSpan(klass, c);
            spanStyle += '.'+klass+' .span'+c+'{'+genStyle(bgOffset, stepInt, orientF)+'}';
        }        

        $(spanStyle+'</style>').appendTo($('head'));

        img.replaceWith($('<div'+genAttr('class',settings.klass)+' style="width:'+orientF.width+'px;height:'+orientF.height+'px;position:relative;">'+spans+'</div>')); 
    }
        

    $.fn.splitImage = function(settings){
      var settings = $.extend({}, defaults , settings || {}),
            orientF  = orientFunc[settings.orientation],
            stepType = typeof(settings.steps),  
            meaning  = ((settings.meaning === 'step' && stepType !== 'number') ? settings.meaning = '%' : settings.meaning),
            size     = calcSize[meaning];

      var split = function(img){
        				step     = stepper[stepType](settings.steps);        
            		splitImage(img, orientF, meaning, step, size, settings);   
      }
      
      $(this).each(function(){
            	var img = $(this);				
              var tmrLoaded = window.setInterval(function(){ // Ugly but working.
                if (img.width()) {
                  split(img);
                  window.clearInterval(tmrLoaded);  
                }
              }, 100);
        });
        return this;
    }
    
    

}(jQuery));
//    $('.tab-thumb-wrap img').splitImage({klass:'sample1'});
    $('.tab-thumb-wrap img').splitImage({steps:10,klass:'sample2'});
    $('.img-item img').splitImage({steps:10,klass:'sample2'});
    //$('.img-item img').splitImage({steps:2,klass:'sample3'});
//    $('#sample4').splitImage({orientation:'vertical',klass:'sample4'});
//
//    $('#sample5').splitImage({steps:10,orientation:'vertical',klass:'sample5'});
/* $('#tab-thumb').splitImage({
     steps:10,
     meaning : 'px',
     klass:'sample2'
 });*/
