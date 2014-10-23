<script type="text/javascript" src="<?php echo base_url('src/tinymce/js/tinymce/tinymce.min.js'); ?>"></script>
<script type="text/javascript">
    (function($) {
        $(document).ready(function() {

            tinymce.init({
                selector: "textarea#description",
                // theme: "simple", 
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
                style_formats: [
                    {title: 'Bold text', inline: 'b'},
                    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                    {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                    {title: 'Example 1', inline: 'span', classes: 'example1'},
                    {title: 'Example 2', inline: 'span', classes: 'example2'},
                    {title: 'Table styles'},
                    {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
                ]
            });
        });
    })(jQuery);
</script>
<script type="text/javascript">
    (function($) {
        $(document).ready(function() {

            tinymce.init({
                selector: "textarea#features",
                // theme: "simple",

                plugins: [
                    "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                    "save table contextmenu directionality emoticons template paste textcolor"
                ],
                content_css: "css/content.css",
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
                style_formats: [
                    {title: 'Bold text', inline: 'b'},
                    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                    {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                    {title: 'Example 1', inline: 'span', classes: 'example1'},
                    {title: 'Example 2', inline: 'span', classes: 'example2'},
                    {title: 'Table styles'},
                    {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
                ]
            });
        });
    })(jQuery);
</script>
<div class="box grid_12">
    <div class="box-head">
        <h2>Add Content</h2>
    </div>
    <div class="box-content">
        <div class="block-fluid">
            <?php echo form_open_multipart('admincp/add_sitecontent'); ?>
            <fieldset>
                <script type="text/javascript">
                    function changeitem(selectObj) {
                        var id = selectObj.value;
                        var dataString = id;
                        $.ajax({
                            url: "<?php echo base_url() . 'index.php/admincp/ajaxtypetocate/'; ?>" + dataString,
                            type: 'POST',
                            data: dataString,
                            success: function(output_string) {
                                $(".resultajax").html(output_string);
                            },
                            error: function() {
                                alert('null');
                            }
                        });
                    }
                </script>
                <div class="form-row">
                    <div class="form-label">Loại</div>
                    <div class="form-item">
                        <?php if ($alltype <> null): ?>
                            <select name="typeid" id="typeid" onchange="changeitem(this);">
                                <option value="0" selected="selected">------------</option>
                                <?php foreach ($alltype as $type): ?>
                                    <option value="<?php echo $type->id; ?>">
                                        <?php echo $type->nametype; ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-label">Danh mục</div>
                    <div class="form-item">
                        <span class="resultajax"> </span>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label">Tiêu đề</div>
                    <div class="form-item">
                        <input type="text" name="namecontent" />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-label">Giá:</div>
                    <div class="form-item">
                        <input type="text" name="coins" size="10" value="0" />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-label">Mô tả</div>
                    <div class="form-item">
                        <textarea id="description"  name="description"  style="height: 100px; width: 100%;">  </textarea>
                    </div> 
                </div>

                <div class="form-row">
                    <div class="form-label">Đặc điểm</div>
                    <div class="form-item">
                        <textarea id="features"  name="features" style="height: 100px; width: 100%;">
                                                        <ul>
                                                    <li>Màn hình:  </li>
                                                    <li>HĐH:  </li>
                                                    <li>CPU:  </li>
                                                     <li>RAM:  </li>  
                                                    <li>Camera:  </li>
                                                    <li>Dung lượng bộ nhớ:  </li> 
                                                    <li>Dung lượng pin:  </li> 
                                                     <li>Màu sắc:  </li>  
                                                    
                                                    </ul>
                                                        
                        </textarea>
                    </div> 
                </div>
                <div class="form-row">
                    <div class="form-label">Ảnh giới thiệu:</div>
                    <div class="form-item">
                        <div class="form-label"> rộng 699px - cao 390px</div>
                        <input type="file" name="images" size=40 /> 
                    </div>

                </div>


                <div class="form-row">
                    <div class="form-label">Screenshot 1:</div>
                    <div class="form-item">
                            <div class="form-label">  rộng 699px - cao 390px</div>
                        <input type="file" name="ifiles_2" size=40 />
                        <input type="hidden" name="ifiles" size=40 />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-label">Screenshot 2 (tùy chọn):</div>
                    <div class="form-item">
                        <div class="form-label"> rộng 699px - cao 390px</div>
                        <input type="file" name="ifiles_3" size=40 />
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-label">Kích hoạt</div>
                    <div class="span9">
                        <input type="radio" name="active" value="0" /> Không kích hoạt <input
                            type="radio" name="active" value="1" /> Kích hoạt
                    </div>
                    <div class="clear"></div>

                </div>
                <div class="form-row">
                    <div class="form-label"></div>
                    <div class="span9">
                        <input type="submit" name="submit" value="Chấp nhận" />
                    </div>
                    <div class="clear"></div>
                </div>
            </fieldset>

            <?php echo form_close(); ?>

        </div>
    </div>
</div>
