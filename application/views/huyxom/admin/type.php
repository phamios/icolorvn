<div class="box grid_12">
    <div class="box-head">
        <h2>List Type</h2>
    </div>
    <div class="box-content no-pad"> 
        <table class="display" id="example">
            <thead>
                <tr>                                    
                    <th width="15%">ID</th>
                    <th width="35%">Tên loại</th>  
                    <th width="35%">Thứ tự</th>  
                    <th width="35%">Tình trạng</th>
                    <th width="35%">Tuỳ chỉnh</th>                             
                </tr>
            </thead>
            <tbody>
                <?php if ($alltype <> null): ?>
                    <?php foreach ($alltype as $type): ?>
                        <tr>
                            <td><?php echo $type->id; ?></td> 
                            <td><a href="<?php echo site_url('admincp/edit_type/' . $type->id); ?>"><?php echo $type->nametype; ?> 
                                </a> </td> 
                            <td><?php echo $type->sethome ?></td>
                            <td>
                                <?php if ($type->active != 0): ?>
                                    <a href="<?php echo site_url('admincp/statuschange/' . $type->id . '/0'); ?>">Dừng</a>
                                <?php else: ?>
                                    <a href="<?php echo site_url('admincp/statuschange/' . $type->id . '/1'); ?>">Kích hoạt</a>
                                <?php endif; ?>
                            </td> 
 
                            <td><a href="<?php echo site_url('admincp/edit_type/' . $type->id); ?>">Sửa</a>

                                <a href="<?php echo site_url('admincp/del_type/' . $type->id); ?>">Xoá</a>
                            </td>                                 
                        </tr>
                    <?php endforeach; ?>   
                <?php endif; ?>                           
            </tbody>
        </table>
    </div>
</div>
