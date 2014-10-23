<div class="topimgtopic">
    <ul>
        <?php foreach($top_3_news as $row):?>
        <li><a
                href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"><img
                    alt="<?php echo "iColorvn.vn - ".$row->title?>"  title="<?php echo "iColorvn.vn - ".$row->title?>"
                    src="<?php echo base_url('src/news/'.$row->images);?>"
                    height="250" width="424"> </a> 
            <div class="title">
                <div class="text">
                    <a
                        href="<?php echo site_url('tin_chi_tiet/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>"><?php echo $row->title?></a>
                </div>
            </div></li> 
       <?php endforeach; ?>
    </ul>

</div>