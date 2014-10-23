<div class="container">
<?php foreach($allitem as $row):?>
	<section id="product_detail" class="span12"> <section id="main_section"
		class="span12">

	<h1 class="lead product_name span12">
	<?php echo $row->namecontent?>
		<!--Free Shipping-->
		<span class="label label-success"> &nbsp; Free Shipping </span>

		<!--Availability-->

		<!--Edit button-->
	</h1>

	<section id="product_photos" class="span8 pull-left">

	<div id="myCarousel" class="carousel slide">

		<div class="carousel-inner">
			<div class="item">
				<a class="fancybox" rel="product_photos"
					href="<?php echo base_url('src/imagescontent/'.$row->images);?>">
					<?php if($row->images <> NULL):?>
					<img
					src="<?php echo base_url('src/imagescontent/'.$row->images);?>"
					alt="" height="427" width="640"> 
					<?php else:?>
					<img
					src="<?php echo base_url('src/default.jpg');?>"
					alt="" height="427" width="640"> 
					<?php endif;?>
					</a>
			</div>
			<div class="item">
				<a class="fancybox" rel="product_photos"
					href="<?php echo base_url('src/imagescontent/'.$row->ifiles_2);?>">
					<?php if($row->images <> NULL):?>
					<img
					src="<?php echo base_url('src/imagescontent/'.$row->ifiles_2);?>"
					alt="" height="427" width="640"> 
					<?php else:?>
					<img
					src="<?php echo base_url('src/imagescontent/'.$row->images);?>"
					alt="" height="427" width="640"> 
					<?php endif;?> </a>
			</div>
			<div class="item">
				<a class="fancybox" rel="product_photos"
					href="<?php echo base_url('src/imagescontent/'.$row->ifiles_3);?>">
					<?php if($row->images <> NULL):?>
					<img
					src="<?php echo base_url('src/imagescontent/'.$row->ifiles_3);?>"
					alt="" height="427" width="640"> 
					<?php else:?>
					<img
					src="<?php echo base_url('src/imagescontent/'.$row->images);?>"
					alt="" height="427" width="640"> 
					<?php endif;?></a>
			</div>
		</div>

		<!-- Carousel nav -->
		<a class="carousel-control left" href="#myCarousel" data-slide="prev">
			‹ </a> <a class="carousel-control right" href="#myCarousel"
			data-slide="next"> › </a>
	</div>
	</section> <section id="product_sidebar" class="span40 pull-right">

	<div id="shopping info">
		<div class="btn-group checkout-button-group">

			<!-- SALE
							============================================-->
			<button class="btn btn-primary btn-large main-button">
				<a class="checkout_button" href="#"><?php echo number_format($row->coins); ?>
					VNĐ</a>
			</button>
			<button class="btn btn-primary btn-large dropdown-toggle"
				data-toggle="dropdown">
				<span class="caret"></span>
			</button>


		</div>
		<!--end of btn-group-->

		<!--SOCIAL BUTTONS-->

		<div id="social_buttons">
			<ul id="social_buttons_inner">
				<li class="inner_buttons hidden-phone"><a href="#"
					onclick="
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
      'facebook-share-dialog', 
      'width=626,height=436'); 
    return false;"> <img src="<?php echo base_url('src/share.png');?>"
						alt="share on facebook" /> </a></li>
				<li class="inner_buttons hidden-phone">
					<ul class="unstyled">
						<li class="pinterest first">
							<div class="fb-like"
								data-href="<?php if($facebook_link <> NULL){echo $facebook_link;}else{?>https://www.facebook.com/khoungdungandroid<?php }?>"
								data-colorscheme="light" data-layout="button_count"
								data-action="like" data-show-faces="true"></div></li>
					</ul></li>
				
				<li class="inner_buttons hidden-phone">
				<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<g:plusone></g:plusone>
				</li>
				
				<li class="inner_buttons hidden-phone">
				<a href="<?php echo site_url('like/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html';?>">
				<img src="<?php echo base_url('src/like_.png');?>" width="50px" height="19px" alt="like button" />
				</a>
				</li>

			</ul>
		</div>
		<!--end of social buttons-->


	</div>
	<!--end of shopping info-->

	<div id="infoTabs">
		<ul class="nav nav-tabs" id="tabs">
			<li class="active"><a href="#description"> Mô tả </a>
			</li>
			<li><a href="#specs"> Đặc điểm </a>
			</li>
			 
		</ul>

		<div class="tab-content">
			<div class="tab-pane active" id="description">
				<p class="product_description"><?php echo $row->description;?></p>
			</div>

			<div class="tab-pane" id="specs">
				<p class="product_configuration">
					<?php echo $row->features?><br> 
				</p>
			</div>
 
		</div>
	</div>

	 
	

	</section> <!--end of product sidebar--> 
	 
	</section> <!--end of main section-->
	<div class="fb-comments" style="clear:both;padding:30px;" data-href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html';?>" data-numposts="10"></div>
	<?php endforeach;?> <!-- EXTRA SECTION ( ACCESSORIES + RELATED ITEMS) : 25-26 QUERIES
	========================================================--> <!-- Accessories: 13 QUERIES -->
	<?php if($relateitem != NULL):?>
	<section id="accessory" class="relationship_items row-fluid">
	<h6 class="lead">
		<span>Sản phẩm liên quan</span>
	</h6>
	<div
		style="display: block; text-align: center; float: none; position: relative; top: auto; right: auto; bottom: auto; left: auto; z-index: auto; width: 1108px; height: 325px; margin: 0px; overflow: hidden;"
		class="caroufredsel_wrapper">
		<ul
			style="text-align: left; float: none; position: absolute; top: 0px; right: auto; bottom: auto; left: 101px; margin: 0px; width: 7148px; height: 324px;"
			id="accessory_slider" class="relationship_slider">
		
			<?php foreach($relateitem as $row):?>
			<li><a
				href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>">

					<img src="<?php echo base_url('src/imagescontent/'.$row->images);?>"
					alt="" height="180" width="180"> </a> 
				<div class="extra_info">
					<a
						href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>">
						<?php echo $row->namecontent;?></a>
					<!--Product Price -->
					<p class="products_price"><?php echo number_format($row->coins);?> VND</p>
				</div>
			</li>
			<?php endforeach;?>
 
		</ul>
	</div>
 
	<a style="display: block;" class="prev" id="accessory_slider_prev"
		href="#"><span>prev</span> </a> <a style="display: block;"
		class="next" id="accessory_slider_next" href="#"><span>next</span> </a>
	</section> 
	<?php endif;?>
	  </section>

</div>
