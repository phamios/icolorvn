<div class="box grid_12">
	 <?php echo form_open_multipart('admincp/sitecontent'); ?>
	Lọc theo loại sản phẩm:
	<select name="select_type">
		<option value="0">--------</option>
		<?php foreach($alltype as $type):?>
			<option value="<?php echo $type->id;?>"><?php echo $type->nametype;?></option>
		 <?php endforeach;?>
	</select>
	<input type="submit" name="submit" value="Xem" />
	 <?php echo form_close(); ?>
	<div class="box-content no-pad">
		<table id="sample-table-1" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>No</th>
					<th>Loại</th>
					<th>Danh mục</th>
					<th>Tên sản phẩm</th>
					<th>Ảnh</th>
					<th>Lượt xem</th>
					<th>Lượt thích</th>
					<th>Tình trạng</th>
					<th>Thứ tự</th>
					<th>Nổi bật</th>
					<th>Ngày nhập</th>
					<th>Tùy chọn</th>
				</tr>
			</thead>
			<tbody>
			<?php $i=0; ?>
			<?php if($allcontents <> null):?>
			<?php foreach($allcontents as $content):?>
			<?php $i = $i+1;?>
				<tr>
					<td><?php echo $i;?>
					</td>
					<td><?php foreach($alltype as $type):?> <?php if($type->id == $content->typeid):?>
					<?php echo $type->nametype;?> <?php endif;?> <?php endforeach;?></td>
					<td><?php foreach($allcate as $cate):?> <?php if($cate->id == $content->cateid):?>
					<?php echo $cate->catename;?> <?php endif;?> <?php endforeach;?></td>
					<td><a
						href="<?php echo site_url('admincp/edit_sitecontent/'.$content->id);?>"><?php echo $content->namecontent;?>
					</a></td>

					<td><img
						src="<?php echo base_url('src/imagescontent/'.$content->images);?>"
						width="85px" alt="" /></td>
					<td><?php echo $content->countlog;?></td>
					<td><?php echo $content->likelog;?></td>
					<td><?php if($content->active == 1):?> <a
						href="<?php echo site_url("admincp/active_app/".$content->id."/0");?>">
							 <i class="icon-ok bigger-120"></i>  </a> <?php else:?>
						<a
						href="<?php echo site_url("admincp/active_app/".$content->id."/1");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/unactive.gif");?>" /> </a> <?php endif;?>

					</td>
					<td>
						 <script type="text/javascript">
			                    function set_sorthot(selectObj,id_num) {
			                        var id = selectObj.value;
			                        var dataString = id;
			                        var num = id_num;
			                        $.ajax({
			                            url: "<?php echo base_url() . 'index.php/admincp/itemhot_sort/'; ?>" + dataString + "/" + num,
			                            type: 'POST',
			                            data: dataString,
			                            success: function(output_string) {
			                            	alert('Đã cập nhật xong cho ' + ' <?php echo $content->namecontent;?>');
			                            },
			                            error: function() {
			                                alert('null');
			                            }
			                        });
			                    }
			                </script>
						<?php if($content->needhave == 1):?>
								<select name="sort_num" style="width:50px;" onchange="set_sorthot(this,<?php echo $content->id?>);">
										<option value="0">--</option>
										<?php for($i=0;$i<=10;$i++): ?>

										<?php if($content->sort_num == $i):?>
										<option value="<?php echo $content->sort_num;?>" selected="selected"><?php echo $content->sort_num;?></option>
										<?php else:?>
										<option value="<?php echo $i;?>"><?php echo $i;?></option>
										<?php endif;?>
										<?php endfor;?>

								</select>

						<?php else:?>

						<?php endif;?>
					</td>
					<td><?php if($content->needhave == 1):?> <a
						href="<?php echo site_url("admincp/needhave/".$content->id."/0");?>">
                                                 <i class="icon-ok bigger-120"></i>  </a> <?php else:?>
						<a
						href="<?php echo site_url("admincp/needhave/".$content->id."/1");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/unactive.gif");?>" /> </a> <?php endif;?>
					</td>
					<td>
                                            <span class="label label-inverse arrowed-in"> <?php echo $content->datecreated;?></span>

					</td>
					<td><a
						href="<?php echo site_url('admincp/edit_sitecontent/'.$content->id);?>"><i class="icon-edit bigger-120"></i></a>

						<a
						href="<?php echo site_url('admincp/del_sitecontent/'.$content->id);?>"><i class="icon-trash bigger-120"></i></a>
					</td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
