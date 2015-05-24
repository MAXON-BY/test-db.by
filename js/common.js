$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 7500, //Set AutoPlay to  seconds

        navigation : true, // Show next and prev buttons
        singleItem:true,
        items : 1,
        itemsDesktop: false,

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
         itemsDesktopSmall : false,
         itemsTablet: false,
         itemsMobile : false
    });
	
});