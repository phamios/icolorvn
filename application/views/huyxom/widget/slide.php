<?php if($slide_list <> NULL):?>
<section id="page_introduction"
	class="row-fluid camera_intro">
		&nbsp;
	</section> 
<div class="touchslider">
	<div class="touchslider-viewport"
		style="width: 500px; overflow: hidden">
		<div>
			<div class="touchslider-item">
				<?php foreach($slide_list as $image):?>
		<img src="<?php echo base_url('src/slidejs/'.$image->imageslink);?>"
			alt=" ">

			<?php endforeach;?>
			</div>

		</div>
	</div>
</div>
<!-- End SlidesJS Required --> 
			<?php endif;?>