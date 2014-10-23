<div class="box grid_12">
    <div class="box-head">
        <h2>Tin tức trên site</h2>
    </div>
    <div class="box-content no-pad"> 
        <table   class="display" id="example">
            <thead>
                <tr>
                    <th width="5%">Chuyên mục</th> 
                    <th width="5%">Ảnh minh họa</th>
                    <th width="25%">Tiêu đề</th>
                    <th width="35%">Diễn giải</th>
                    <th width="15%">Ngày khởi tạo</th>
                    <th width="10%">Active</th>
                    <th width="35%">Tuỳ chỉnh</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($listcontent <> null): ?>
                    <?php foreach ($listcontent as $row): ?>
                        <tr>
                            <td ><?php foreach ($allcatenews as $cate): ?>
                                    <?php if ($cate->id == $row->menuid): ?>
                                        <?php echo $cate->catename; ?>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </td>
                            <td>
                                <img src="<?php echo base_url('src/news/thumb_' . $row->images); ?>" alt="img"/>
                            </td>
                            <td><a href="<?php echo site_url('admincp/edit_news/' . $row->id); ?>" ><?php echo $row->title; ?></a></td>
                            <td style="font-size:9px;"><?php
                                $new_chuoi = '';
                                $mang = explode(' ', strip_tags($row->content));
                                foreach ($mang as $k => $v) {
                                    if (strlen($new_chuoi . $v) < 80) {
                                        $new_chuoi.=$v . ' ';
                                    } else {
                                        break;
                                    }
                                }

                                $chuoimoi = preg_replace("/<.*?>/", "", $new_chuoi);
                                echo strip_tags($chuoimoi);
                                ?></td>
                            <td><?php echo $row->createdate; ?></td>
                            <td><?php if ($row->active == 1): ?>
                                    UnActive
                                <?php else: ?>
                                    Active
        <?php endif; ?></td>
                            <td><a
                                    href="<?php echo site_url('admincp/delcontent/' . $row->id); ?>"
                                    > <img src="<?php echo base_url('themes/huyxom/admin/appstore/img/icons/basic/delete.png'); ?>" alt="" /> Xoá </a>
                                <a href="<?php echo site_url('admincp/edit_news/' . $row->id); ?>" ><img src="<?php echo base_url('themes/huyxom/admin/appstore/img/icons/basic/save.png'); ?>" alt="" /> Sửa</a></td>
                        </tr>
    <?php endforeach; ?>
<?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
