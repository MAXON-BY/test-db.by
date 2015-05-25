$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 7500, //Set AutoPlay to  seconds

        navigation : true, // Show next and prev buttons
        singleItem : true,
        items : 1,
        itemsDesktop: false,

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
         itemsDesktopSmall : false,
         itemsTablet: false,
         itemsMobile : false
    });


    // Dropdown toggle Менюшка
    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown').toggle();
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
            $('.dropdown').hide();
        }
    });
	
});