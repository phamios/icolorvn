<div>
    <div class="endtitle"></div>
    <div class="endtitlearrow"></div>
</div> 
<div class="clearfix"></div>

<ul id="news-list" style="margin-top: 0px;" class="clearfix">
    <?php if($details_news <> NULL):?>
    <?php foreach($details_news as $news):?>
    <li>
        <div class="newstitle">
           <?php echo $news->title?>
        </div>
        <div class="info">
            <div class="nameuser">
               <?php echo $news->createdate?>
            </div> 
        </div>
        <div class="clearfix"></div>
        <div class="content-info"> 
                <div class="contentimg">
                    <img class="titleimg"
                         src="<?php echo base_url('src/news/'.$news->images) ?>"
                         alt="<?php echo $news->title?>"
                         title="<?php echo $news->title?>" 
                         width="50%">
                </div> 
            <div class="clearfix"></div>
           <?php echo $news->content; ?>
        </div> 
    </li>
    <?php endforeach;?>
    <?php else:?>
    <li>
        Bài viết không tồn tại trên hệ thống ! <br/>
        Quay lại trang tin <a href="<?php echo site_url('news');?>"><b> Ấn vào đây</b></a><br/>
        Chuyển sang trang mua bán <a href="<?php echo site_url('');?>"><b> Ấn vào đây</b></a><br/>
    </li>
    <?php endif;?>
</ul>

 
 
