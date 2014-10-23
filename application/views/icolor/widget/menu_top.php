
<?php if ($type_menu <> NULL): ?>
    <?php $i = 0; ?> 
    <?php foreach ($type_menu as $type): ?>
        <?php $i = $i + 1; ?> 
        <?php if ($i == 1): ?>
            <ul class="col1 nolist">
                <li class="mobile" ><a style="background-color: #<?php echo $type->color; ?>;" href="<?php echo site_url('type/' . mb_strtolower(url_title(removesign($type->nametype . '-' . $type->id)))) . '.html' ?>"><?php echo $type->nametype; ?></a></li>
            <?php endif; ?>
            <?php if ($i == 2): ?>
                <li class="tablet"><a style="background-color: #<?php echo $type->color; ?>;" href="<?php echo site_url('type/' . mb_strtolower(url_title(removesign($type->nametype . '-' . $type->id)))) . '.html' ?>"><?php echo $type->nametype; ?></a></li>
            <?php endif; ?>
            <?php if ($i == 3): ?>
                <li class="laptop last"><a style="background-color: #<?php echo $type->color; ?>;" href="<?php echo site_url('type/' . mb_strtolower(url_title(removesign($type->nametype . '-' . $type->id)))) . '.html' ?>"><?php echo $type->nametype; ?></a></li>
            </ul>
        <?php endif; ?>    
        <?php if ($i == 4): ?> 
            <ul class="col2 nolist">
                <li class="accessories"><a style="background-color: #<?php echo $type->color; ?>;" href="<?php echo site_url('type/' . mb_strtolower(url_title(removesign($type->nametype . '-' . $type->id)))) . '.html' ?>"><?php echo $type->nametype; ?></a></li> 
            <?php endif; ?>    
            <?php if ($i == 5): ?>
                <li class="oldproduct "><a style="background-color: #<?php echo $type->color; ?>;" href="<?php echo site_url('type/' . mb_strtolower(url_title(removesign($type->nametype . '-' . $type->id)))) . '.html' ?>"><?php echo $type->nametype; ?></a></li> 
            <?php endif; ?>  
            <?php if ($i == 6): ?>
                <li class="oldproduct last"><a style="background-color: #<?php echo $type->color; ?>;" href="<?php echo site_url('type/' . mb_strtolower(url_title(removesign($type->nametype . '-' . $type->id)))) . '.html' ?>"><?php echo $type->nametype; ?></a></li> 
            <?php endif; ?> 
        <?php endforeach; ?>
    <?php endif; ?>
</ul>
<ul class="col3 nolist last">
    <?php foreach ($news_menu as $menu): ?>
        <li class="promotion"><a href="<?php echo site_url('news/danhmuc/' . mb_strtolower(url_title(removesign($menu->catename . '-' . $menu->id)))) . '.html' ?>"><?php echo $menu->catename; ?> </a></li> 
        <?php endforeach; ?>
</ul>
</div>
<script type="text/javascript">
    $('.navigation .sim-card a').click(function(e) {
        debugger;
        e.preventDefault();
        _gaq.push(['_trackEvent', 'Button', 'Place', 'Sim']);
        url = $(this).attr('href');
        setTimeout(function() {
            window.location.href = url;
        }, 300);
    });
    $('.navigation .ads a').click(function(e) {
        debugger;
        e.preventDefault();
        _gaq.push(['_trackEvent', 'Button', 'Place', 'MayCu']);
        url = $(this).attr('href');
        setTimeout(function() {
            window.location.href = url;
        }, 300);
    });
</script>