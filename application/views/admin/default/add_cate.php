<div class="box grid_12">
	<div class="box-head">
		<h2>Add Category</h2>
	</div>
	<div class="box-content "> 
		  <?php echo form_open_multipart('admincp/add_cate'); ?> 
                        <div class="form-row">
                             <p class="form-label">Loại danh mục</p>
                            <div class="form-item"><?php if($alltype <> null):?>
                                    	<select name="typecate">
                                    	<option value="0" selected="selected">------------</option>
                                    	<?php foreach($alltype as $type):?>
                                    		<option   value="<?php echo $type->id;?>"><?php echo $type->nametype;?></option>
                                    	<?php endforeach;?> 
                                    	</select>
                                    	<?php endif;?></div>
                          
                        </div> 
                         <div class="form-row">
                            <div class="form-label">Tên danh mục</div>
                            <div class="form-item"><input type="text" name="namecategory" /></div> 
                        </div> 
                         <div class="form-row">
                            <div class="form-label">Danh mục cha</div>
                            <div class="form-item"><select name="cateroot">
                            				<option value="0" selected="selected">------------</option>
                                    	<?php foreach($allcate as $cate):?>
                                    		<option  value="<?php echo $cate->id;?>"><?php echo $cate->catename;?></option>
                                    	<?php endforeach;?> 
                                    	</select></div> 
                        </div> 
                        <div class="form-row"> 
                        	<div class="form-label">Kích hoạt</div>
                            <div class="form-item">  
                                     Active <input checked='checked' name='active' type='radio' value=1 />
                                  Unactive <input checked='checked' name='active' type='radio' value=0 />
                             </div> 
                            </div> 
                        <div class="form-row">
                            <div class="form-label"> </div>
                            <div class="form-item"><input type="submit" name="submit" value="Chấp nhận" /></div> 
                        </div> 
                        <?php echo form_close(); ?>  
	</div>
</div>
