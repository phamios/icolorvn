 
<?php
$attributes = array('class' => 'form clearfix', 'id' => 'frmMainSearchForm', 'autocomplete' => 'off');
?>
<?php echo form_open_multipart('home/tim_kiem', $attributes); ?>
<div class="input-wrapper clearfix"> 
    <input
           placeholder="Bạn muốn tìm gì hôm nay?" id="search-keyword"
           name="keyword" class="input search-keyword"
           autocomplete="off" onkeyup="SuggestSearch(event);"
           onkeydown="CheckTimer()" type="text"> 
    <input value="Tìm" id="search-submit" name="bttsearch"
           class="submit-button search-submit" type="submit"> 
</div>  
<?php echo form_close(); ?> 