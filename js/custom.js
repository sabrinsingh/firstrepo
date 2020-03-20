/* Show and hide menu*/

$(document).ready(function() {
    
                 'use strict';
    
                  $(window).scroll(function() {
                      
                    'use strict';
                      
                    if($(window).scrollTop()<150){
                        
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
                    }
   
                });
            });




























