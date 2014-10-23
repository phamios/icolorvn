
<div class="container" style="background:white;">


	<div id="main_column" class="span8 pull-left">

	<?php foreach($details_news as $row):?>
 
		<div class="article_summary">
			<h2>
				<?php echo $row->title?>
			</h2>

			<div class="article_info">
				<span class="entry_date"> <i class="icon-calendar"></i> &nbsp;
					<?php echo $row->createdate?></span>   </span>
			</div>
			<!--end of article_info-->

			<div class="summary" style="text-align: center;">
				<img
					src="<?php echo base_url('src/news/'.$row->images);?>"
					alt="" width="400" height="210">
				<p> </p>
			</div>
		</div>

		<div class="article_detail">
			 
			 <p><?php echo $row->content?></p>
			<p>&nbsp;</p>
			<p>
				Nguồn: <a
					href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"
					target="_blank"><?php echo site_url()?></a>
			</p>
		</div> 
		<hr>
		<div class="fb-comments"  data-href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>" data-numposts="10"></div>
		<?php endforeach;?>
	</div>
	<!--end of main_column-->

	<div id="side_bar" class="span4 pull-right">
		<div class="visible-phone">
			<hr>
		</div>

		<section id="articles_categories">
		<ul class="nav nav-pills nav-stacked">
			<?php foreach($randomnews as $new):?>
				<li>
					<a href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($new->title.'-'.$new->id)))).'.html'?>">
						<?php echo $new->title;?>
					</a>
				</li>
			<?php endforeach;?>
		</ul>
		</section> 
	</div>
	<!--end of side_bar-->
</div>
