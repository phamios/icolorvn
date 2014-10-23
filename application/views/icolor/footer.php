<a id="openfancypassword" href="#pu-store" style="display: none">openfancy</a>
<!-- forget password end -->
<script type="text/javascript">
    var keydtdd = 'dien thoai, dien thoai di dong, dtdd, smartphone, gia dien thoai, khuyen mai dien thoai, điện thoại di động, điện thoại, giá điện thoại, dien thoai gia re, dien thoai, dien thoai di dong, dtdd, smartphone, gia dien thoai, khuyen mai dien thoai, dien thoai di dong, dien thoai, gia dien thoai, dien thoai gia re';
    var keylaptop = 'Laptop, máy tính xách tay, máy tính, Ultralbook, netbook, Notebook, giá laptop, giá máy tính xách tay, laptop cảm ứng, Laptop Touch, Laptop, may tinh xach tay, may tinh, Ultralbook, netbook, Notebook, gia laptop, gia may tinh xach tay, laptop cam ung, Laptop Touch';
    var keymaytinhbang = 'Máy tính bảng, may tinh bang, may, tinh bang, máy, tính, bảng, tablet, gia may tinh bang, mua ban may tinh bang, May tinh bang, may tinh bang, may, tinh bang, may, tinh, bang, tablet, gia may tinh bang, mua ban may tinh bang';
    var keymayanhso = 'Camera, máy ảnh, máy ảnh số, máy chụp hình, may quay phim, giá camera, giá máy chụp ảnh, Compact, DSLR, Digital Cameras, Camera, may anh, may anh so, may chup hinh, may quay phim, gia camera, gia may chup anh, Compact, DSLR, Digital Cameras';
    var keyphukien = 'Phụ kiện, phu kien, accessories, giá cả phụ kiện, thông tin chi tiết phụ kiện, Phu kien, phu kien, accessories, gia ca phu kien, thong tin chi tiet phu kien';
    var game = 'Trò chơi trên mobile, game mobile, Tro choi tren mobile, game mobile';
    var ungdung = 'Ứng dụng, Ung dung';
</script>

<footer id="site-footer" class="container align-center clearfix">
    <div class="footer-link-wrapper clearfix">
        <div class="col about-us">
            <div class="col-title"><a href="#" title="Giới Thiệu"><b>THÔNG TIN</b></a></div>
            <ul class="nolist">
                <?php foreach ($menu_1 as $menu1): ?>
                    <li><a href="<?php echo $menu1->menutext ?>" title="<?php echo $menu1->menuname ?>"><?php echo $menu1->menuname ?></a></li>
                <?php endforeach; ?>
                <!--                <li><a id="lnkRedirectToMobile" onclick="return RedirectToMobile(this);" href="http://m.thegioididong.com/" title="Phiên bản mobile">Phiên bản mobile</a></li>-->

            </ul>
        </div>
        <div class="col for-customer">
            <div class=" col-title"><a href="#" title="Hỗ Trợ Khách Hàng"><b>CHÍNH SÁCH</b></a></div>
            <ul class="nolist">
                <?php foreach ($menu_2 as $menu2): ?>
                    <li><a href="<?php echo $menu2->menutext ?>" title="<?php echo $menu2->menuname ?>"><?php echo $menu2->menuname ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php foreach ($meta as $m): ?>
            <div class="col customer-support">
                <div class="clearfix col-title"><b>HỖ TRỢ KHÁCH HÀNG</b></div>
                <div class="clearfix">
                	<?php if( $m->contact_1 <> null || $m->hotline_1 <> null ):?>
                    <?php echo $m->contact_1 . ' - ' . $m->hotline_1; ?><br/>
                    <?php endif;?>
                    <?php if( $m->contact_2 <> null || $m->hotline_2 <> null ):?>
                    <?php echo $m->contact_2 . ' - ' . $m->hotline_2; ?><br/>
                    <?php endif;?>
                    <?php if( $m->contact_3 <> null || $m->hotline_3 <> null):?>
                    <?php echo $m->contact_3 . ' - ' . $m->hotline_3; ?><br/>
                    <?php endif;?>
                    <?php if( $m->contact_4 <> null || $m->hotline_4 <> null ):?>
                    <?php echo $m->contact_4 . ' - ' . $m->hotline_4; ?><br/>
                    <?php endif;?>
                </div>
            </div>

        <div class="col promotion">
			 <div class="clearfix col-title">
                    <b>KHIẾU NẠI - HOTLINE</b>
                </div>
                <div class="clearfix">
                	<?php if( $m->contact_5 <> null || $m->hotline_5 <> null):?>
                    <?php echo $m->contact_5 . ' - ' . $m->hotline_5; ?>
                    <?php endif;?>
                </div>
        </div>
		 <?php endforeach; ?>
    </div>

    <div class="copyright">iColor 47 Xã Đàn - Đống Đa - Hà Nội - <a href="<?php echo site_url();?>">iColorvn.vn</a>  
    	<br/><br/>
    	<span style="margin-left:30px;padding-left:150px;"><iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ficolorvn.vn&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px;" allowTransparency="true" ></iframe></span>
    </div>

    <!-- <div class="footer-banner">
         <span>Thanh toán an toàn với</span>
         <a href="#" title="Tiền mặt" class="tienmat"></a>
         <a href="#" title="Chuyển khoản" class="chuyenkhoan"></a>
         <a href="#" title="Internet Banking" class="internetbanking"></a>
         <a href="#" title="Thẻ ATM nội địa" class="theatm"></a>
         <a href="#" title="Thẻ VISA" class="visa"></a>
         <a href="#" title="Thẻ Master" class="mastercard"></a>
     </div> -->
    <div style="text-align: center; margin-left:20px;">

    </div>
    <div class="footer-navigation-wrapper clearfix">
        <ul class="nolist clearfix">
            <li><a href="#">iPhone 5s</a></li>
            <li><a href="#">Galaxy Grand 2</a></li>
            <li><a href="#">Lumia 525</a></li>
            <li><a href="#">Dell Venue 8 Pro</a></li>
            <li><a href="#">iphone 6</a></li>
            <li><a href="#">Samsung</a></li>
            <li><a href="#">Nokia</a></li>
            <li><a href="#">Sony Xperia</a></li>
            <li><a href="#">Moto G</a></li>
            <li><a href="#">Xperia Z1</a></li>
            <li><a href="#">Galaxy Note 3</a></li>
            <li><a href="#">Asus T100</a></li>
            <li><a href="#">Smartwatch</a></li>
            <li><a href="#">Galaxy Gear</a></li>
            <li><a href="#">Game windows phone</a></li>
            <li><a href="#">Ứng dụng android</a></li>
            <li><a href="#">Galaxy</a></li>
            <li><a href="#">Lumia</a></li>
            <li><a href="#">Xperia</a></li>
            <li><a href="#">Oppo</a></li>
            <li><a href="#">Sony Vaio</a></li>
            <li><a href="#">Nokia Lumia</a></li>
            <li><a href="#">Samsung Galaxy</a></li>
            <li><a href="#">Samsung Galaxy S5</a></li>
            <li><a href="#">Lumia 1520</a></li>
            <li><a href="#">HTC One Max</a></li>
            <li><a href="#">Game Android</a></li>
            <li><a href="#">iPad Air</a></li>
            <li><a href="#">iPad Mini 2</a></li>

        </ul>
    </div>

</footer>

<style type="text/css">
    .voucher-wrapper ul {
        position: relative;
    }

    .voucher-wrapper ul li {
        position: absolute;
    }

    .voucher-wrapper ul li img {
        width: 100%;
    }
</style>
<script type="text/javascript">
    var arrFooterBannerLength = $('.voucher-wrapper ul li').length;
    setInterval(function() {
        if (arrFooterBannerLength >= 2) {
            $('.voucher-wrapper ul li:last').animate({
                top: '80px'
            }, 500, function() {
                var tmp = $(this);
                $(this).remove();
                $(tmp).removeAttr('style');
                $('.voucher-wrapper ul').prepend(tmp);
            });
        }
    }, 3000);

    function RedirectToMobile(a) {
        //$('#lnkRedirectToMobile').click(function (e) {
        //e.preventDefault();
        var expiredays = (30 * 365);
        var c_name = 'CK_TGDD_WEB_VERSION';
        CreateCookie(c_name, 'MOBILE', expiredays);
        window.location = $(a).attr('href');
        return false;
        //});
    }
</script>


</div>
<div id="dlding">
    Bạn vui lòng chờ trong giây lát...<img style="margin: -3px 15px" src="<?php echo base_url('themes/icolor') ?>/index_files/processing.gif">
</div>

<script defer="defer" async="async" type="text/javascript" src="<?php echo base_url('themes/icolor') ?>/index_files/conversion.js">
</script>
<noscript>
<div style="display: inline;">
    <img height="1" width="1" style="border-style: none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/947481767/?value=0&amp;label=_GxDCKnh6wQQp9nlwwM&amp;guid=ON&amp;script=0" />
</div>
</noscript>


<!--<div style="right: 0px; width: 0px;" id="noelevent">
<?php //$this->load->view('icolor/widget/popup'); ?>
</div>-->
<style type="text/css">
    /* Noel Event */
    #noelevent { display: none; position: absolute; overflow-x: hidden; height: 260px; }
    /* // Noel Event */
</style>



<script type="text/javascript" charset="utf-8" src="<?php echo base_url('themes/icolor') ?>/index_files/aQw_002.js"></script></body></html>