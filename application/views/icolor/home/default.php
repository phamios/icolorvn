<div style="clear:both;    width:20%;  background-color:#FF8A00;
		  border-bottom-left-radius:5px;
		  border-bottom-right-radius:5px;
		  border-top-left-radius:5px;
		  border-top-right-radius:5px;
		  color:#FFFFFF;
			text-transform:uppercase;
		   padding: 5px 10px 5px;">
	Sản phẩm hot nhất
</div>
<br/>
<ul class="product-list nolist clearfix">
<?php foreach($itemhot as $row):?>
<li data-webstatus="4">
<!--    <span class="badge bestsell"></span>-->
    <a href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>" alt="<?php echo $row->namecontent;?>">
        <div class="img clearfix">
            <img src="<?php echo base_url('src/imagescontent/thumb_'.$row->images);?>" alt="<?php echo $row->namecontent;?>">
        </div>
        <div class="name clearfix">
            <h3><?php echo $row->namecontent; ?></h3>
            <div class="price-list clearfix">
                <cite class="price"><?php echo number_format($row->coins);?>₫</cite><del class="old-price"></del>
            </div>
        </div>
    </a>
    <a class="more-detail clearfix" href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>" alt="<?php echo $row->namecontent;?>">
        <h3 class="clearfix"><?php echo $row->namecontent; ?></h3>
        <div class="price-list clearfix">
            <cite class="price">
			<?php if($row->coins <> 0):?>
			<?php echo number_format($row->coins);?>₫
			<?php endif; ?>
			</cite>
            <del class="old-price"></del>
        </div>
        <ul class="nolist clearfix">
            <li><?php echo $row->features; ?></li>
        </ul>
        <div class="promotion clearfix"></div>
    </a>
</li>
<?php endforeach;?>
</ul>
 <div class="show_result_homepage"></div>


