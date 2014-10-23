<ul class="span12">
 	<?php $i=1;?>
	<?php foreach($itemhot as $row):?>
	 <?php if($i  == 1):?>
		<li class="single_products span3 one">
	<?php elseif($i == 2):?>
		<li class="single_products span3 two">
	<?php elseif($i == 3):?>
		<li class="single_products span3 three">
	<?php elseif($i == 4):?>
		<li class="single_products span3 four">  
	<?php else:?>
		<?php $i = 1;?>
		<li class="single_products span3 one">
	<?php endif;?>
		<div class="product_cover"> 
			<?php if($row->needhave == 1):?>
			<div class="product_label">
				<!--PRODUCT LABELS: NEW or SALE-->
				<div class="ribbon ribbon-new">
					<div class="ribbon-stitches-top"></div>
					<span> HOT! </span>
					<div class="ribbon-stitches-bottom"></div>
				</div>
			</div>
			<?php endif;?>
			
			<a href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>"> <img
				src="<?php echo base_url('src/imagescontent/'.$row->images);?>" alt="<?php echo $row->namecontent;?>"
				title="<?php echo $row->namecontent;?>" height="260" width="260"> </a>
			<div class="products_summary clearfix">
				<a href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>"><?php echo $row->namecontent;?></a>
			 	<p></p>
				<!--<div style="clear:both;width:100%">
					<div class="show_like_item">
						<a style="font-size:12px;" href="<?php echo site_url('like/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html';?>">
							<span style="padding-left:30px;"><?php echo $row->likelog?> thích</span>
						</a>
					</div>
					<div class="show_cost_item">
						<span  style="padding-left:30px;">
						<a style="font-size:12px;" href="<?php echo site_url('like/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html';?>">
						<?php echo $row->countlog?> xem
						</a>
						</span>
					</div>
				</div>   -->
				<p>&nbsp;</p>
				<p>
				<span class="label label-important"><?php echo number_format($row->coins);?> vnđ</span>
				</p>
			</div>

		</div>
	</li>
	<?php $i=$i+1;?>
	 <?php endforeach;?>
</ul>


<ul class="span12">
 	<?php $i=1;?>
	<?php foreach($allitem as $row):?>
	 <?php if($i  == 1):?>
		<li class="single_products span3 one">
	<?php elseif($i == 2):?>
		<li class="single_products span3 two">
	<?php elseif($i == 3):?>
		<li class="single_products span3 three">
	<?php elseif($i == 4):?>
		<li class="single_products span3 four">  
	<?php else:?>
		<?php $i = 1;?>
		<li class="single_products span3 one">
	<?php endif;?>
		<div class="product_cover"> 
			<?php if($row->needhave == 1):?>
			<div class="product_label">
				<!--PRODUCT LABELS: NEW or SALE-->
				<div class="ribbon ribbon-new">
					<div class="ribbon-stitches-top"></div>
					<span> HOT! </span>
					<div class="ribbon-stitches-bottom"></div>
				</div>
			</div>
			<?php endif;?>
			
			<a href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>"> <img
				src="<?php echo base_url('src/imagescontent/'.$row->images);?>" alt="<?php echo $row->namecontent;?>"
				title="<?php echo $row->namecontent;?>" height="260" width="260"> </a>
			<div class="products_summary clearfix">
				<a href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>"><?php echo $row->namecontent;?></a>
			 	<p></p>
				<!--<div style="clear:both;width:100%">
					<div class="show_like_item">
						<a style="font-size:12px;" href="<?php echo site_url('like/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html';?>">
							<span style="padding-left:30px;"><?php echo $row->likelog?> thích</span>
						</a>
					</div>
					<div class="show_cost_item">
						<span  style="padding-left:30px;">
						<a style="font-size:12px;" href="<?php echo site_url('like/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html';?>">
						<?php echo $row->countlog?> xem
						</a>
						</span>
					</div>
				</div>   -->
				<p>&nbsp;</p>
				<p>
					<span class="label label-important" ><?php echo number_format($row->coins);?> vnđ</span>
				</p>
			</div>

		</div>
	</li>
	<?php $i=$i+1;?>
	 <?php endforeach;?>
</ul>

 

