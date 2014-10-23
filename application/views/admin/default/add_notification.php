 
<div class="box grid_12">
	<div class="box-head">
		<h2>Add Content</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<?php echo form_open_multipart('admincp/add_notification'); ?> 
			<div class="form-row">
				<div class="form-label">Chọn sản phẩm</div>
				<div class="form-item">
					<select multiple="multiple" id="my-select" name="items_id[]" style="width: 500px">
					  <?php foreach($products as $product):?>
						<option value='<?php echo $product->id;?>'><?php echo $product->namecontent;?></option> 
						<?php endforeach;?>
					</select>
					<script src="<?php echo base_url('themes/multiselect/js') ?>/jquery.multi-select.js" type="text/javascript"></script>
				</div>
			</div>
			<div class="form-row">
				<div class="form-label">Tiêu đề</div>
				<div class="form-item">
					<input type="text" name="tieude" />
				</div>
				<div class="clear"></div>
			</div>
			<div class="form-row">
				<div class="form-label">Nội dung</div>
				<div class="form-item">
					<textarea id="wysiwyg" name="noidung"
						style="height: 100px; width: 100%;"></textarea>
				</div>
				<div class="clear"></div>
			</div> 
                        <div class="form-row">
				<div class="form-label">Images:</div>
				<div class="form-item">
					<input type="file" name="images" size=40 />
				</div>

			</div>
			<div class="form-row">
				<div class="form-label"></div>
				<div class="span9">
					<input type="submit" name="notifysubmit" value="Chấp nhận" />
				</div>
				<div class="clear"></div>
			</div>
			<?php echo form_close(); ?>

		</div>
	</div>
</div>
