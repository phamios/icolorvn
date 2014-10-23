

<div class="box grid_12">
	<div class="box-content no-pad">
		<table id="sample-table-2"
			class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th width="5%">ID</th>
					<th width="15%">Hiển thị trang chủ</th>
					<th  width="20%">Thứ tự hiển thị trang chủ</th>
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
					<td><script type="text/javascript">
                    function set_sorthot(selectObj,id_num) {
                        var id = selectObj;
                        var dataString = id;
                        var num = id_num;
                        $.ajax({
                            url: "<?php echo base_url() . 'index.php/admincp/show_type_main/'; ?>" + dataString + "/" + num,
                            type: 'POST',
                            data: dataString,
                            success: function(output_string) {
                            	alert('Đã cập nhật xong cho ' + ' <?php echo $type->nametype;?> , Refresh lại trang để thấy thay đổi !');
                            },
                            error: function() {
                                alert('null');
                            }
                        });
                    }

                    function set_sorthot_type(selectObj,id_num) {
                        var id = selectObj.value;
                        var dataString = id;
                        var num = id_num;
                        $.ajax({
                            url: "<?php echo base_url() . 'index.php/admincp/set_sorthot_type/'; ?>" + dataString + "/" + num,
                            type: 'POST',
                            data: dataString,
                            success: function(output_string) {
                            	alert('Đã cập nhật thứ tự cho ' + ' <?php echo $type->nametype;?> , Refresh lại trang để thấy thay đổi !');
                            },
                            error: function() {
                                alert('null');
                            }
                        });
                    }
                </script>
                <?php if($type->hot_main == 1):?>
                	<a href="#" onclick="set_sorthot(0,<?php echo $type->id?>)">Hiện</a>
                	<?php else:?>
                	<a href="#" onclick="set_sorthot(1,<?php echo $type->id?>)">Ẩn</a>
                	<?php endif;?>
                </td>

                <td>
                	 <?php if($type->hot_main == 1):?>
						<select name="sort_num" style="width:50px;" onchange="set_sorthot_type(this,<?php echo $type->id?>);">
							<?php for($i=0;$i<=9;$i++): ?>
							<?php if($type->hot_order == $i):?>
							<option value="<?php echo $type->hot_order;?>" selected="selected"><?php echo $type->hot_order?></option>
							<?php else:?>
							<option value="<?php echo $i;?>"><?php echo $i;?></option>
							<?php endif;?>
							<?php endfor;?>

					</select>
                	<?php else:?>

                	<?php endif;?>
                </td>
					<td><a
						href="<?php echo site_url('admincp/edit_type/' . $type->id); ?>"><?php echo $type->nametype; ?>
                                </a></td>
					<td><?php echo $type->sethome ?></td>
					<td>
                                <?php if ($type->active != 0): ?>
                                    <a
						href="<?php echo site_url('admincp/statuschange/' . $type->id . '/0'); ?>">

							<span class="label label-success">Dừng</span>
					</a>
                                <?php else: ?>
                                    <a
						href="<?php echo site_url('admincp/statuschange/' . $type->id . '/1'); ?>">
							<span class="label label-warning">Kích hoạt</span>
					</a>
                                <?php endif; ?>
                            </td>

					<td><a
						href="<?php echo site_url('admincp/edit_type/' . $type->id); ?>"><i
							class="icon-edit bigger-120"></i></a> <a
						href="<?php echo site_url('admincp/del_type/' . $type->id); ?>"><i
							class="icon-trash bigger-120"></i></a></td>
				</tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
		</table>
	</div>
</div>
