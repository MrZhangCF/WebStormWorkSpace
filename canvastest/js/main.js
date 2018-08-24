
$(function(){
    'use strict';
    
    $("#zoom01").gzoom({
        sW: 960,
        sH: 522,
        lW: 2400,
        lH: 1305,
        lighbox: true
    });
    
    $(".zoom_no_lbox").gzoom({
        sW: 300,
        sH: 225,
        lW: 1024,
        lH: 768,
        lightbox: false
    });
        
});

