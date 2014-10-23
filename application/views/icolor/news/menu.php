<ul class="naviation-items nolist"> 
    <li  class="act" rel="menu"  name="0"><a
            href="<?php echo site_url();?>">iColor Shop</a> 
        </li> 
        <li    rel="menu"  name="0"><a
            href="<?php echo site_url('news');?>">Trang tin</a> 
        </li>  
    <?php $i = 0 ?>
    <?php foreach ($allcatenews as $menu): ?>
        <?php $i = $i + 1; ?>
        <?php if ($i == 1): ?>
            <?php $id = 'firstnews' ?>
        <?php else: ?>
            <?php $id = 'menuCat_' . $menu->id; ?>
        <?php endif; ?>
        <li  rel="menu" id="<?php echo $id; ?>" name="0"><a
                href="<?php echo site_url('news/danhmuc/'.mb_strtolower(url_title(removesign($menu->catename.'-'.$menu->id)))).'.html'?>"><?php echo $menu->catename; ?></a> 
        </li>  
    <?php endforeach; ?> 
</ul>