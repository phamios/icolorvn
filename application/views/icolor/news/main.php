<div class="clearfix"></div>
<div class="title">
<?php if($namecate <> NULL ):?>
        <?php echo $namecate; ?>
    <?php else: ?>
    Tin chung
    <?php endif;?>
</div>
<div class="clearfix"></div>
<div>
    <div class="endtitle"></div>
    <div class="endtitlearrow"></div>
</div>
 <?php if($total_news <> NULL):?>
<div class="clearfix"></div>
<ul id="news-list" style="margin-top: 0px;" class="clearfix">
   
    <?php foreach($total_news as $news):?>
    <li>
        <div class="newstitle">
            <a id="a_523797" href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($news->title.'-'.$news->id)))).'.html'?>">
               <?php echo $news->title;?></a>
        </div>
<!--        <div class="info"> 
            <div class="timepost">
                đăng lúc <span class="timer"><?php echo $news->createdate;?></span>
            </div>
        </div>-->
        <div class="clearfix"></div>
        <div class="content-info">
            <a href="#">
                <div class="contentimg">
                    <img class="titleimg"
                         src="<?php echo base_url('src/news/thumb_'.$news->images);?>"
                         alt="<?php echo $news->title;?>"
                         title="<?php echo $news->title;?>">
                </div> </a>
            <div class="clearfix"></div>
          <?php
                                $new_chuoi = '';
                                $mang = explode(' ', strip_tags($news->content));
                                foreach ($mang as $k => $v) {
                                    if (strlen($new_chuoi . $v) < 200) {
                                        $new_chuoi.=$v . ' ';
                                    } else {
                                        break;
                                    }
                                }

                                $chuoimoi = preg_replace("/<.*?>/", "", $new_chuoi);
                                echo strip_tags($chuoimoi);
                                ?>
        </div>
        <div class="contentfooter">
            <div class="commentnotify">
                <div class="countcomment">
                    <div class="countarea"><?php echo $news->createdate;?></div>
                    <div class="iconarea"></div>
                </div> 
            </div>
            <div class="viewdetail">
                <a href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($news->title.'-'.$news->id)))).'.html'?>">Xem
                    chi tiết</a>
            </div>
        </div>
    </li>
    <?php endforeach;?>
    
</ul>
<div class="pager">
    <div class="paging">                                                
        <?php echo $pages; ?>
    </div>
    

</div> 
<?php else:?>
        Danh mục không tồn tại trên hệ thống hoặc chưa có bài viết ! <br/>
        Quay lại trang tin <a href="<?php echo site_url('news');?>"><b> Ấn vào đây</b></a><br/>
        Chuyển sang trang mua bán <a href="<?php echo site_url('');?>"><b> Ấn vào đây</b></a><br/>
<?php endif; ?>



