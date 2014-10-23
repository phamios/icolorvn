<div class="box grid_12">
	<div class="box-head">
		<h2>List Content</h2>
	</div>
	<div class="box-content no-pad">
		<table class="display" id="example">
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
							<img src="<?php echo base_url("themes/huyxom/admin/active.gif");?>" /> </a> <?php else:?>
						<a
						href="<?php echo site_url("admincp/active_app/".$content->id."/1");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/unactive.gif");?>" /> </a> <?php endif;?>

					</td>
					<td><?php if($content->needhave == 1):?> <a
						href="<?php echo site_url("admincp/needhave/".$content->id."/0");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/active.gif");?>" /> </a> <?php else:?>
						<a
						href="<?php echo site_url("admincp/needhave/".$content->id."/1");?>">
							<img src="<?php echo base_url("themes/huyxom/admin/unactive.gif");?>" /> </a> <?php endif;?>
					</td>
					<td><?php echo $content->datecreated;?>
					</td>
					<td><a
						href="<?php echo site_url('admincp/edit_sitecontent/'.$content->id);?>">Sửa</a>

						<a
						href="<?php echo site_url('admincp/del_sitecontent/'.$content->id);?>">Xoá</a>
					</td>
				</tr>
				<?php endforeach; ?>
				<?php endif;?>
			</tbody>
		</table>
	</div>
</div>
