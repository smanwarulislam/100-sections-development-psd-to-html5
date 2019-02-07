(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".staff-list").owlCarousel({
            items: 4,
            autoplay: false,
            margin: 30,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	