/* Show and hide menu*/

$(document).ready(function() {
    
                 'use strict';
    
                  $(window).scroll(function() {
                      
                    'use strict';
                      
                    if($(window).scrollTop()<80){
                        
                        $('.navbar').css ({
                            
                            'margin-top': '-100px',
                            'background-color': 'rgba(59, 59, 59, 0)',
                            'opacity':'0',
                            'background': '#3B3B3B'
                                                        
                        });
                        
                        
                    } else {
                        
                        $('.navbar').css ({
                            'margin-top':'0px',
                            'opacity':'1'
                            
                        });
                        
                        $('.navbar-nav >li > a').css(
                        {
                           'padding-top' : '15px' 
                        })
                    }
   
                });
            });



$(document).ready(function(){
    'use strict';
    
    
    $('.nav-link, #scroll-to-top')
      // Remove links that don't actually link to anything
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
});



//highlight menu item on scroll

$(document).ready(function(){
  
    'use strict';
    
    $(window).scroll(function(){
                     'use strict';
                    
                     $("section").each(function(){
                           
                            'use strict';
                            
                            var bb= $(this).attr("id"); // ABOUT, CONTACT, DOWNLOAD
                           // console.log(bb);
                            
                            var height=$(this).outerHeight();
                            //console.log(height);    
                            var grttop =$(this).offset().top - 350;
                           // console.log(grttop);
        
                            if($(window).scrollTop()>grttop && $(window).scrollTop() < (grttop + height)){
                                
                                //$(".navbar-nav li a[href='#" +bb + "']") ///a[href='#ABOUT']
                               
                                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
                            } else{
                                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                            }
        
                                
                            });
                     });
               
               
    
});

//add auto padding to header

$(document).ready(function(){
    
    'use strict';
    
    setInterval(function(){
        
        'use strict';
        
        var wiindowHeight = $(window).height();
        
        var containerHeight = $(".header-overlay .container").height();
        
        var padTop= wiindowHeight - containerHeight;
        
        $(".header-overlay .container").css({
            'padding-top': Math.round(padTop/3) + 'px',
            'padding-bottom': Math.round(padTop/3) + 'px'
        })
        
    } ,10)
});

//bxslider for screen
$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth: 300,
        auto: true,
        minSlides: 1,
        maxSlides: 4,
        sliderMargin: 100
    });
  });


//counter-up waypoint
 $(document).ready(function(){
            $('.counter-num').counterUp({
                delay: 10,
                time: 2000
            });
        });

//Add Animtaion/ Initiate WOW JS
$(document).ready(function(){
                  'use strct';
                  new WOW().init();
                  
                  });






















