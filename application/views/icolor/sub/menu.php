<!-- Main left menu -->
<aside id="sidebar" class="sidebar product-sidebar left-sidebar">
    <nav class="navigation clearfix">
        <ul id="ulcatmenu" class="nolist clearfix">
            <?php if ($allcate <> NULL): ?>
                <?php $i = 0; ?>
                <?php foreach ($allcate as $row): ?>
                    <?php $i = $i + 1; ?>
                    <?php if ($i == 1): ?><?php $class = 'class="mobile"' ?><?php endif; ?>
                    <?php if ($i == 2): ?><?php $class = 'class="tablet"' ?><?php endif; ?>
                    <?php if ($i == 3): ?><?php $class = 'class="laptop"' ?><?php endif; ?>
                    <?php if ($i == 4): ?><?php $class = 'class="accessories"' ?><?php endif; ?>
                    <?php if ($i == 5): ?><?php $class = 'class="digital"' ?><?php endif; ?>
                    <?php if ($i == 6): ?><?php $class = 'class="oldproduct"' ?><?php endif; ?>
                    <?php if ($i == 7): ?><?php $class = 'class="ads"' ?><?php endif; ?>
                    <?php if ($i == 8): ?><?php $class = 'class="news"' ?><?php endif; ?> 
                    <li <?php echo $class; ?>  ><a href="<?php echo site_url('category/'.mb_strtolower(url_title(removesign($row->catename.'-'.$row->id)))).'.html'?>" <?php if($row->id == $cateid):?> class="active" <?php endif; ?>  ><?php echo $row->catename?></a></li>
                <?php endforeach; ?>
            <?php endif; ?>
            <!--    <li>
                     <a href="<?php echo site_url(); ?>sim-so-the-cao-thu-cuoc">Sim, thẻ, thu cước</a>
                     <span class="haschild"></span>
                     <ul class="nolist child">
                         <li><a href="<?php echo site_url(); ?>mua-ma-the-cao-dien-thoai">Mua thẻ cào</a></li>
                         <li><a href="<?php echo site_url(); ?>nap-tien-tra-truoc">Nạp trả trước</a></li>
                         <li class="last"><a href="<?php echo site_url(); ?>thanh-toan-cuoc-tra-sau">Nạp trả sau</a></li>
                     </ul>
                 </li> -->

        </ul>
    </nav>
</aside>