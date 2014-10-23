<!-- JS xử lý phần thông báo trên site  -->
<script
	src="{template}/8d0211864803c95e7135be01e0336a8b1feffdcd.js"></script>
	<script src="http://store.analoguehouse.com/cache/3f9a0a897748ab2c0f2403b870b0e40e7de490db.1356687701.js"></script>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<script type="text/javascript">

   $(document).ready(function() {
			//FancyBox
			$('.fancybox').fancybox();
			
			//BOOTSTRAP TABS
			$('#tabs a').click(function (e) {
  				e.preventDefault();
  					$(this).tab('show');
				});
			
			//CAROUSEL
			$('.carousel').carousel({
  				interval: 4500,
  				pause:"hover"
			});

			//RELATED PRODUCTS SLIDER
			$('#related_products_slider').carouFredSel({
				width:"100%",
				height:325,
				items:3,
				scroll:1,
				duration: 200,
				auto:false,	
				prev: {	
					button	: "#related_products_slider_prev",
					key		: "left"
					},

				next: { 
					button	: "#related_products_slider_next",
					key		: "right"
				     }
			});	

			//ACCESSORIES SLIDER
			$('#accessory_slider').carouFredSel({
				width:"100%",
				height:325,
				items:3,
				scroll:1,
				auto:false,			
				prev: {	
					button	: "#accessory_slider_prev",
					key		: "left"
					},

				next: { 
					button	: "#accessory_slider_next",
					key		: "right"
				     }
			});	

		});

		 

</script>
<script type="text/javascript">
	 

	$(document).ready(function() {
	    var $window = $(window);

	        // MAIN SECTION
	        function checkWidth() {
		        if ($window.width() < 980) {
		            $('.single_products').removeClass('span3').addClass('span6');		         
		            $('.three').addClass('clearleft');		         
		        };

		        if ($window.width() >= 980) {
		        	$('.single_products').removeClass('span6').addClass('span3');
		            $('.three').removeClass('clearleft');	
		        };

		    }

			    // Execute on load
			    checkWidth();

			    // Bind event listener
			        $(window).resize(checkWidth);
	});	


	$(document).ready(function() {
		//FancyBox
		$('.fancybox').fancybox();
		
		//BOOTSTRAP TABS
		$('#tabs a').click(function (e) {
				e.preventDefault();
					$(this).tab('show');
			});
		
		//CAROUSEL
		$('.carousel').carousel({
				interval: 4500,
				pause:"hover"
		});

		//RELATED PRODUCTS SLIDER
		$('#related_products_slider').carouFredSel({
			width:"100%",
			height:325,
			items:3,
			scroll:1,
			duration: 200,
			auto:false,	
			prev: {	
				button	: "#related_products_slider_prev",
				key		: "left"
				},

			next: { 
				button	: "#related_products_slider_next",
				key		: "right"
			     }
		});	

		//ACCESSORIES SLIDER
		$('#accessory_slider').carouFredSel({
			width:"100%",
			height:325,
			items:3,
			scroll:1,
			auto:false,			
			prev: {	
				button	: "#accessory_slider_prev",
				key		: "left"
				},

			next: { 
				button	: "#accessory_slider_next",
				key		: "right"
			     }
		});	

	});

	// CHANGE CLASS VIA WINDOWS RESIZE 
	$(document).ready(function() {
	    var $window = $(window);

	        // MAIN SECTION
	        function checkWidth() {
		        if ($window.width() < 980) {
		            $('#product_photos').removeClass('span8').addClass('span12');
		            $('#product_sidebar').removeClass('span4').addClass('span12');
		        };

		        if ($window.width() >= 980) {
		        	$('#product_photos').removeClass('span12').addClass('span8');
		            $('#product_sidebar').removeClass('span12').addClass('span4');
		        };

		        if ($window.width() < 1200) {
		        	$('#example_photos li img').removeClass('styled_image').addClass('bare_image');
		        };	

		        if ($window.width() >= 1200) {
		        	$('#example_photos li img').removeClass('bare_image').addClass('styled_image');
		        };	
		    }

			    // Execute on load
			    checkWidth();

			    // Bind event listener
			        $(window).resize(checkWidth);
			});	
	// AJAX FAV
	$(document).ready(function() {
    $('a.Favorites_Save') .click (function() {
        var link = $(this).attr('href');
        $('.Favorites_Status').load(link, function() {$('.Favorites_Delete').show();});
        $(this).hide();
        return false;
    });
    $('a.Favorites_Save_Full') .click (function() {
        var link = $(this).attr('href');
        $('.Favorites_Status').load(link, function() {$('.Favorites_Delete').show();});
        $(this).hide();
        return false;
    });
    
    $('a.Favorites_Delete') .click (function() {
        var link = $(this).attr('href');
        $('.Favorites_Status').load(link, function() {$('.Favorites_Save').show();});
        $(this).hide();
        return false;
    });
});
</script>

 