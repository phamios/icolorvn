 
<?php
$attributes = array('class' => 'form clearfix', 'id' => 'frmMainSearchForm', 'autocomplete' => 'off');
?>
<?php echo form_open_multipart('news/tim_kiem', $attributes); ?>
<div class="input-wrapper clearfix">
    <input id="btnCheckForum"
           style="width: 78px; float: left; background: white url('/dien-dan/Content/images/delete.png') no-repeat right center"
            value="Tin tức  " type="button">
    <input
           placeholder="Bạn muốn tìm gì hôm nay?" id="search-keyword"
           name="keyword" class="input search-keyword"
           autocomplete="off" onkeyup="SuggestSearch(event);"
           onkeydown="CheckTimer()" type="text"> 
    <input value="Tìm" id="search-submit" name="bttsearch"
           class="submit-button search-submit" type="submit">
    
    
</div> 

<?php echo form_close(); ?> 