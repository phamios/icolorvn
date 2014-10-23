<div id="fromtopright_tobottomfacebox">
    <div id="dvHotTopNews" class="tophot">
        <div class="titlebox">Tin mới nhất</div>
        <ul class="listtophot">
            <?php foreach($last_news as $top):?>
            <li><div class="content">
                    <a href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($top->title.'-'.$top->id)))).'.html'?>">
                    <?php echo $top->title;?></a>
                </div>
                <div class="clearfix"></div>
            </li>
            <?php endforeach;?>
        </ul>
    </div>

    <div class="hottopic">
        <div class="titlebox">Chủ đề sôi nổi 7 ngày qua</div>
        <ul>
            <?php foreach($top_news as $top):?>
            <li class="first">
                <div class="title">
                    <a
                        href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($top->title.'-'.$top->id)))).'.html'?>"><?php echo $top->title;?></a>
                </div>
                <div class="content">
                    <span class="countcomment"><?php echo $top->count?> lượt xem</span> 
                </div>
                <div class="footer"></div>
                <div class="clearfix"></div>
            </li>
            <?php endforeach;?>
        </ul>
    </div>
    <div class="clearfix"></div>
	
	 <div class="hottopic">
        <div class="titlebox">Ads</div>
        <ul>
           
            <li class="first"> 
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
    <div class="clearfix"></div>
	
    <div id="dvfromtopcomment_tobottomdivright"></div>
</div>