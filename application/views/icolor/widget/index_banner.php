<div class="banner-wrapper clearfix">
    <div class="arrow-wrapper mask clearfix">
        <div class="left-arrow">
            <a href="javascript:void(0);">
                <img src="<?php echo base_url('themes/icolor') ?>/index_files/icon-banner-arrow-left.png"></a>
        </div>
        <div class="right-arrow">
            <a href="javascript:void(0);">
                <img src="<?php echo base_url('themes/icolor') ?>/index_files/icon-banner-arrow-right.png"></a>
        </div>
    </div>
    <div class="the-mask clearfix">
        <div class="mask-left"></div>
        <div style="left: -985.432px; width: 4320px;" class="image-wrapper clearfix">
			<?php if($slide <> NULL): ?>
            <?php foreach($slide as $row):?>
            <div class="img">
                <a href="<?php echo $row->link;?>"  target="_blank">
                    <img style="cursor:pointer" src="<?php echo base_url('src/slidejs/'.$row->imageslink); ?>"  height="210" width="540" />
                </a>
            </div>
            <?php endforeach; ?>
           <?php endif; ?>
        </div>
        <div class="mask-right"></div>
    </div>
</div>
 