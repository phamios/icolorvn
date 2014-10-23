<html>
<meta charset="utf-8">
<body>
<a href="<?php echo site_url('admin_store');?>">Home</a>
|
<a href="<?php echo site_url('admin_store/cate');?>">Cate</a>
|
<a href="<?php echo site_url('admin_store/news');?>">News</a>
|
<a href="<?php echo site_url('admin_store/logs');?>">Logs</a>
|
<hr />
<div style="clear: both;">
<?php if($this->router->fetch_method() == 'index'):?> 
<?php endif;?>
<?php if($this->router->fetch_method() == 'cate'):?>
<?php $this->load->view("huyxom/admin/store_cate");?> 
<?php endif;?>
<?php if($this->router->fetch_method() == 'news'):?>
<?php $this->load->view("huyxom/admin/store_news");?> 
<?php endif;?>
<?php if($this->router->fetch_method() == 'logs'):?>
<?php $this->load->view("huyxom/admin/store_logs");?> 
<?php endif;?>
</div>
</body>
</html>
