<div id="featured_posts" class="featured_section row-fluid">

	<div class="container">
		<?php foreach($allnews as $new):?>
		<div class="single-post span4">
			<a
				href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($new->title.'-'.$new->id)))).'.html'?>">

				<img
				src="<?php echo base_url('src/news/'.$new->images);?>"
				alt="<?php echo $new->title;?>"
				class="cover_photo" width="370" height="175"> </a> <br>

			<div class="summary">
				<a
				href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($new->title.'-'.$new->id)))).'.html'?>">
				<?php echo $new->title;?> </a>
				<p>
					<?php $new_chuoi='';
					$mang = explode(' ',strip_tags($new->content));
					foreach($mang as $k => $v)
					{
						if (strlen($new_chuoi.$v) < 200)
						{
							$new_chuoi.=$v.' ';
						}
						else
						{
							break;
						}
					}

					$chuoimoi =  preg_replace("/<.*?>/", "", $new_chuoi);
					echo strip_tags($chuoimoi);
					?>
				</p>
			</div>
			<!--Summary-->

		</div>
		<!--span4-->
		<?php endforeach;?>

	</div>
	<!--container-->

</div>
<!--featured_products-->
