<?php $i = 0; ?>
<?php foreach($allnews as $row):?>
<?php $i = $i +1; ?>
<?php if($i == 1):?>
<div class="banner sidebar-banner clearfix">
	<!--    <h2 class="clearfix">
        <a href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>" title="<?php echo $row->title?>"><?php echo $row->title?></a>
    </h2> -->
	<div class="banner-img clearfix">
		<div class="img-wrapper">
			<a
				href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"
				title="<?php echo $row->title?>"> <img
				src="<?php echo base_url('src/news/'.$row->images);?>"
				alt="<?php echo "iColorvn.vn - ".$row->title?>" height="210"
				width="375">
			</a>
		</div>
		<div class="banner-description clearfix">
			<a
				href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"
				title="<?php echo $row->title?>"><?php echo $row->title?></a>
		</div>
	</div>
</div>
<?php else: ?>
<div class="news-list-wrapper clearfix">
	<ul class="news-list nolist clearfix">
		<li class="clearfix">
			<div class="news-avatar-wrapper">
				<a
					href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"
					title="<?php echo "iColorvn.vn - ".$row->title?>"> <img
					src="<?php echo base_url('src/news/thumb_'.$row->images);?>"
					alt="<?php echo "iColorvn.vn - ".$row->title?>" height="50"
					width="60">
				</a>
			</div>
			<div class="news-teaser-wrapper">
				<div class="news-teaser clearfix">
					<a
						href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"
						title="<?php echo "iColorvn.vn - ".$row->title?>"><?php echo $row->title?></a>
				</div>
				<div class="news-meta clearfix"><?php echo $row->createdate; ?></div>

			</div>
		</li>
	</ul>
	<div class="view-all">
		<a
			href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"
			title="Xem tất cả tin tức">Chi tiết<span style="font-size: 15px">»</span></a>
	</div>
</div>
<?php endif; ?>
<?php endforeach; ?>



<!--<div class="ads-wrapper clearfix">
    <div class="title-wrapper clearfix">
        <h2><a href="<?php echo site_url(); ?> rao-vat-may-cu" title="Rao vặt, máy cũ">Rao vặt, máy cũ</a></h2>

    </div>
    <ul class="ads-list nolist clearfix">
        <li><a href="<?php echo site_url(); ?> rao-vat-may-cu/dtdd/sony-xperia-m-den-dung-15-ngay-moi-ngon-3tr9-1004147" title="Sony Xperia M (đen) dùng 15 ngày mới ngon 3tr9 - Hà Nội"><h3>Sony xperia m (đen) dùng 15 ngày mới...</h3><cite class="price">3.900.000₫</cite></a></li><li><a href="<?php echo site_url(); ?> rao-vat-may-cu/dtdd/sony-arc-s-1003903" title="Sony ARC S - Hà Nội"><h3>Sony arc s</h3><cite class="price">3.200.000₫</cite></a></li><li><a href="<?php echo site_url(); ?> rao-vat-may-cu/dtdd/lumia-720-1003876" title="Lumia 720 . - Hà Nội"><h3>Lumia 720 .</h3><cite class="price">3.500.000₫</cite></a></li><li><a href="<?php echo site_url(); ?> rao-vat-may-cu/may-tinh-bang/may-tinh-bang-acer-iconia-a1-811-8-3g-16gb-1003732" title="Máy tính bảng acer iconia a1-811 8” 3g 16gb - Hà Nội"><h3>Máy tính bảng acer iconia a1-811 8” 3g...</h3><cite class="price">3.900.000₫</cite></a></li><li><a href="<?php echo site_url(); ?> rao-vat-may-cu/dtdd/iphone-3gs-8gb-ban-quoc-te-chuan-1003695" title="Iphone 3GS - 8GB bản Quốc tế chuẩn - Hà Nội"><h3>Iphone 3gs - 8gb bản quốc tế chuẩn</h3><cite class="price">1.700.000₫</cite></a></li>
    </ul>
</div>
<div class="form-wrapper create-ads-form-wrapper clearfix" id="form-wrapper">
    <div class="input-wrapper clearfix">
        <input placeholder="Bạn muốn rao bán gì?" onclick="QuickPost2()" name="ads-name" class="input ads-name" type="text">
        <input value="Đăng tin" onclick="QuickPost2()" name="ads-submit" class="submit-button ads-submit" type="button">

    </div>
    <div class="loader-create-classified"></div>
    <div id="showmessage"></div>
    <div class="ads-form-wrapper clearfix">
    </div>
</div>-->



<div class="ads-wrapper clearfix">
	<div class="title-wrapper clearfix">
		<h2>Cộng đồng</h2>
	</div>
	<div id="tags">
		<ul>
			<li class="tag1"><iframe
					src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Ficolorvn.vn&amp;width&amp;height=590&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=true&amp;show_border=true"
					scrolling="no" frameborder="0"
					style="border: none; overflow: hidden; height: 590px;"
					allowTransparency="true"></iframe></li>
		</ul>
	</div>
</div>


<div class="ads-wrapper clearfix">
	<div class="title-wrapper clearfix">
		<h2>Hot Deal</h2>
	</div>
	<div id="tags">
		<ul>
			<li class="tag1">
            	<?php if($slide_list <> null):?>
					<?php foreach($slide_list as $slide):?>
					<a href="<?php echo $slide->link?>"><img
							src="<?php echo base_url("src/slidejs/".$slide->imageslink);?>"
							width="300px" /></a>
					<?php endforeach;?>
				<?php endif;?>
			</li>
		</ul>
	</div>
</div>

<div class="ads-wrapper clearfix">
	<div class="title-wrapper clearfix">
		<h2>Ads</h2>
	</div>
	<div id="tags">
		<ul>
			<li class="tag1">
            	 <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- icolorvn -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-2583883486961262"
     data-ad-slot="6600085238"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
			</li>
			<li class="tag2">
				<script type="text/javascript"><!--
google_ad_client = "ca-pub-2583883486961262";
/* icolorvnsite */
google_ad_slot = "1502976039";
google_ad_width = 120;
google_ad_height = 240;
//-->
</script>
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
			</li>
		</ul>
	</div>
</div>






<div class="clearfix"></div>