<header id="site-header" class="clearfix">
    <hgroup id="site-brand" class="site-heading">
        <?php $this->load->view('icolor/widget/logo_site');?>
    </hgroup>
	
    <div id="site-search" class="form-wrapper search-form-wrapper">
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

    </div>
    
</header>

<div id="form-forget-pass" class="success-lightbox-wrapper" style="display: none">
    <div class="success-lightbox clearfix">
        <div class="lightbox-title">
            <img alt="success" src="<?php echo base_url('themes/icolor') ?>/index_files/code.png"><h3>quên mật khẩu</h3>
            <div class="close-button"><a href="javascript:void(0);" class="image-replace" onclick="$.fancybox.close();">Close</a></div>
        </div>
        <div class="lightbox-content-wrapper clearfix">
            <div class="login-form">
                <div class="the-title" id="divwaiting" style="display: none; padding: 5px; text-align: center; color: #FF8800;">
                    <b>Đang xử lý, vui lòng đợi trong giây lát...
                        <img alt="loading" src="<?php echo base_url('themes/icolor') ?>/index_files/ajax-loader.gif" border="0"></b>
                </div>
                <div class="the-title">
                    Để cập nhật mật khẩu tài khoản của mình trên hệ 
                    thống thegioididong.com và dienmay.com, vui lòng soạn tin nhắn với nội 
                    dung như sau:<br>
                    <div class="spanpass">
                        <b>PW [Mật khẩu mới] </b>gửi <b>1900561292</b><br>
                        Ví dụ: <b>PW 123456</b> gửi <b>1900561292</b>
                        <br>
                    </div>
                    Hoặc nhập email vào bên dưới để nhận mã cập nhật:
                </div>
                <div class="the-form-wrapper">
                    <div class="row-wrapper clearfix">
                        <input class="input email" id="popupemailforget" name="popupemailforget" placeholder="Nhập Email của bạn" type="text">
                    </div>
                    <div class="row-wrapper btn clearfix">
                        <input class="submit" value="LẤY LẠI MẬT KHẨU" id="btnUpdatePassPopup" name="submit" onclick="SendLinkToResetPassword();" type="submit">
                    </div>
                    <div style="clear: both"></div>
                    <div class="row-wrapper clearfix" style="padding-top: 0;">
                        <span id="spforget" style="color: red; font-size: 11px; clear: both;"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>