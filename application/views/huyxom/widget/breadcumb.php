<section id="breadcumb" class="row-fluid hidden-phone">
<div id="breadcumb_content" class="container">
	<ul id="location">

		<li><a href="<?php echo site_url();?>">Home</a>
		</li>
		<?php if($this->router->fetch_class() == 'product'):?> 
		<li><a href="<?php echo site_url('category/'.mb_strtolower(url_title(removesign($catename.'-'.$cateid)))).'.html'?>"><?php echo $catename?></a></li>
		<li><a href="<?php echo $_SERVER['PHP_SELF'];?>"><?php echo $product_name?></a></li>
		<?php endif;?>
		<?php if($this->router->fetch_class() == 'category'):?>
		<li><a href="<?php echo site_url('category/'.mb_strtolower(url_title(removesign($catename.'-'.$cateid)))).'.html'?>"><?php echo $catename?></a></li>
		<?php endif;?>  
		<?php if($this->router->fetch_class() == 'search'):?>
		<li>Kết quả tìm kiếm: <b><?php echo $keyword;?></b></li>
		<?php endif;?> 
		
	</ul>
</div>
</section>
