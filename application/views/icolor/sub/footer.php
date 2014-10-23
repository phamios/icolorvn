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

    <div class="copyright">© 2014. <a href="<?php echo site_url();?>">iColorvn.vn</a> [+]
    	<br/><br/>
    	<span style="margin-left:30px;"><iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ficolorvn.vn&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px;" allowTransparency="true" ></iframe></span>
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


    <!-- Scripts từ các trang -->

    <script defer="defer" src="<?php echo base_url('themes/icolor/'); ?>/details_files/waypoints.js"></script>
    <script defer="defer" src="<?php echo base_url('themes/icolor/'); ?>/details_files/jquery_005.js"></script>
    <script defer="defer" src="<?php echo base_url('themes/icolor/'); ?>/details_files/jquery_002.js"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/icolor/'); ?>/details_files/balloon.js"></script>
    <script defer="defer" type="text/javascript" src="<?php echo base_url('themes/icolor/'); ?>/details_files/balloon-help.js"></script>
    <script defer="defer" type="text/javascript" src="<?php echo base_url('themes/icolor/'); ?>/details_files/jquery.js"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/icolor/'); ?>/details_files/MicrosoftAjax.js"></script>
    <script defer="defer" src="<?php echo base_url('themes/icolor/'); ?>/details_files/jquery_004.js"></script>
    <script defer="defer" src="<?php echo base_url('themes/icolor/'); ?>/details_files/productdetailnewV2.js"></script>
    <script defer="defer" src="<?php echo base_url('themes/icolor/'); ?>/details_files/game.js"></script>
    <script src="<?php echo base_url('themes/icolor/'); ?>/details_files/js.js"></script>
    <!-- Scripts Inline -->

    <script type="text/javascript">
                    var caturl = 'dtdd';
                    $('#ulcatmenu > li > a').each(function() {
                        var tmp = $(this).attr('href').replace('/', '');
                        if (tmp.indexOf(caturl) >= 0) {
                            $(this).addClass('active');
                            return;
                        }
                    });
                    $('#search-keyword').attr('placeholder', '');
                    var keyreplace = 'Bạn muốn tìm gì hôm nay?';
                    var idx = 0;
                    TypingPlaceHolder(keyreplace, idx);
                    function TypingPlaceHolder(keyreplace, idx) {
                        if (idx >= keyreplace.length)
                            return;
                        var cur = $('#search-keyword').attr('placeholder');
                        $('#search-keyword').attr('placeholder', cur + keyreplace[idx]);
                        idx++;
                        setTimeout(function() {
                            TypingPlaceHolder(keyreplace, idx);
                        }, 25);
                    }
    </script>
    <script type="text/javascript" src="<?php echo base_url('themes/icolor/'); ?>/details_files/jquery_003.js"></script>

</div>
<div id="dlding">
    Bạn vui lòng chờ trong giây lát...<img style="margin: -3px 15px" src="<?php echo base_url('themes/icolor/'); ?>/details_files/processing.gif">
</div>

<style type="text/css">
    /* Noel Event */
    #noelevent { display: none; position: absolute; overflow-x: hidden; height: 260px; }
    /* // Noel Event */
</style>


</body>
</html>