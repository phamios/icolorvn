<?php $this->load->view('icolor/sub/header'); ?>

<div style="visibility: hidden; position: absolute; overflow: hidden; padding: 0px; width: 0px; left: 0px; top: 0px;" id="WzTtDiV"></div>
<div style="visibility: hidden; position: absolute; overflow: hidden; padding: 0px; width: 0px; left: 0px; top: 0px;" id="WzTtDiV"></div>
<div id="site-wrapper" class="container align-center clearfix">
	<?php $this->load->view('icolor/widget/main_header');?>
     
    <a id="openfancypassword" href="#pu-store" style="display: none">openfancy</a>
    <!-- forget password end -->
    <script type="text/javascript">
        var keydtdd = 'dien thoai, dien thoai di dong, dtdd, smartphone, gia dien thoai, khuyen mai dien thoai, điện thoại di động, điện thoại, giá điện thoại, dien thoai gia re, dien thoai, dien thoai di dong, dtdd, smartphone, gia dien thoai, khuyen mai dien thoai, dien thoai di dong, dien thoai, gia dien thoai, dien thoai gia re';
        var keylaptop = 'Laptop, máy tính xách tay, máy tính, Ultralbook, netbook, Notebook, giá laptop, giá máy tính xách tay, laptop cảm ứng, Laptop Touch, Laptop, may tinh xach tay, may tinh, Ultralbook, netbook, Notebook, gia laptop, gia may tinh xach tay, laptop cam ung, Laptop Touch';
        var keymaytinhbang = 'Máy tính bảng, may tinh bang, may, tinh bang, máy, tính, bảng, tablet, gia may tinh bang, mua ban may tinh bang, May tinh bang, may tinh bang, may, tinh bang, may, tinh, bang, tablet, gia may tinh bang, mua ban may tinh bang';
        var keymayanhso = 'Camera, máy ảnh, máy ảnh số, máy chụp hình, may quay phim, giá camera, giá máy chụp ảnh, Compact, DSLR, Digital Cameras, Camera, may anh, may anh so, may chup hinh, may quay phim, gia camera, gia may chup anh, Compact, DSLR, Digital Cameras';
        var keyphukien = 'Phụ kiện, phu kien, accessories, giá cả phụ kiện, thông tin chi tiết phụ kiện, Phu kien, phu kien, accessories, gia ca phu kien, thong tin chi tiet phu kien';
        var game = 'Trò chơi trên mobile, game mobile, Tro choi tren mobile, game mobile';
        var ungdung = 'Ứng dụng, Ung dung';</script>

    <div id="site-body" class="inside-page-body product-body sim-card-body clearfix">


        <div class="breadcrumb clearfix">
            <a href="<?php echo site_url(); ?>" title="Trang chủ">Trang chủ</a> &gt; 
            <?php if ($this->router->fetch_class() == 'product'): ?> 
                <a href="" title="<?php echo $typename ?>"><?php echo $typename ?></a> &gt; 
                <a href="#" title="<?php echo $catename ?>"><?php echo $catename ?></a> &gt; 
                <h2><?php echo $product_name; ?></h2>
            <?php endif; ?>
            <?php if ($this->router->fetch_class() == 'category'): ?> 
    <!--                <a href="" title="<?php echo $typename ?>"><?php echo $typename ?></a> &gt; -->
                <a href="<?php echo site_url('category/' . mb_strtolower(url_title(removesign($catename . '-' . $cateid)))) . '.html' ?>" title="<?php echo $catename ?>"><?php echo $catename ?></a> &gt; 
            <?php endif; ?>
            <?php if ($this->router->fetch_class() == 'type'): ?> 
                <a href="" title="<?php echo $typename ?>"><?php echo $typename ?></a> &gt;  
    <!--                <a href="<?php echo site_url('category/' . mb_strtolower(url_title(removesign($catename . '-' . $cateid)))) . '.html' ?>" title="<?php echo $catename ?>"><?php echo $catename ?></a> &gt; -->
            <?php endif; ?>

        </div>

        <div id="container-sidebar">
            <?php $this->load->view('icolor/sub/menu'); ?>

        </div>

        <?php if ($this->router->fetch_class() == 'category'): ?> 
            <?php $this->load->view('icolor/category/index'); ?>
        <?php endif; ?>
        <?php if ($this->router->fetch_class() == 'type'): ?> 
            <?php $this->load->view('icolor/type/index'); ?>
        <?php endif; ?>

        <?php if ($this->router->fetch_class() == 'product'): ?> 
            <div id="wrapper-detail-page" class="main product-main product-detail-main"> 
                <?php $this->load->view('icolor/product/index'); ?>
            </div>
        <?php endif; ?>


        <img style="display:none;" src="<?php echo base_url('themes/icolor/'); ?>/details_files/trackproductview.jpg" alt="tracking product detail view">

    </div>
    <?php
    $this->load->view('icolor/sub/footer')?>