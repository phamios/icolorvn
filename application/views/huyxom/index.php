<?php $this->load->view("icolor/header"); ?>

<script type="text/javascript">
    var cdnpath = 'http://s.tgdd.vn/v2013';
</script>
<div id="site-wrapper" class="container align-center clearfix">

    <div id="site-body" class="inside-page-body product-body sim-card-body clearfix">



        <input id="provinceid" type="hidden">
        <section class="content-block-wrapper navigation-banner clearfix">
            <div class="navigation">
                <?php $this->load->view('icolor/widget/menu_top');?>

            <div id="banner" class="banner">
               <?php $this->load->view('icolor/widget/index_banner'); ?>
            </div>

        </section>
        <section class="content-block-wrapper product-news clearfix">
            <div class="product-list-wrapper">
                <ul class="product-list nolist clearfix">
                    <?php $this->load->view('icolor/home/default'); ?>
                </ul>
                <script type="text/javascript">
                    $(document).ready(function() {
                        $('.product-list li.shock-price').each(function() {
                            try {
                                LoadHomeShockPriceInfo($(this), $(this).data('id'));
                            } catch (e) {
                            }
                        });
                        $('.product-list li.preorder').each(function() {
                            try {
                                LoadHomePreorderInfo($(this), $(this).data('id'));
                            } catch (e) {
                            }
                        });
                        $('.product-list li.priceforcast').each(function() {
                            try {
                                LoadHomePriceForcastInfo($(this), $(this).data('id'));
                            } catch (e) {
                            }
                        });
                    });
                </script>

            </div>
            <div class="news-wrapper">
                <?php $this->load->view('icolor/widget/index_news'); ?>

            </div>
        </section>
        <script type="text/javascript">
            var searchpage = 1;
            var _provinceId = 5;

            var lastWindowHeight = $(window).height();
            var lastWindowWidth = $(window).width();

            var SCREEN_RESOLUTION = 1280;

            $(window).resize(checkWindowSize);
            $(document).ready(function() {
                if ($(window).width() < 1160)
                {
                    SCREEN_RESOLUTION = 1024;
                    ReloadDataBaseScreen();
                }
            });

            function checkWindowSize() {
                if ($(window).height() != lastWindowHeight || $(window).width() != lastWindowWidth) {
                    lastWindowHeight = $(window).height();
                    lastWindowWidth = $(window).width();

                    if (lastWindowWidth >= 1160) {
                        SCREEN_RESOLUTION = 1280;
                        ReloadDataBaseScreen();
                    }
                    else {
                        SCREEN_RESOLUTION = 1024;
                        ReloadDataBaseScreen();
                    }
                }
            }

            var homepage = 1;
            var categoryName = 'Bạn muốn tìm gì hôm nay?';
            var idx = 0;
            $(document).ready(function() {
                $('#search-keyword').attr('placeholder', '');
                TypingPlaceHolder(categoryName, idx);
            });
            function TypingPlaceHolder(categoryName, idx)
            {
                if (idx >= categoryName.length)
                    return;
                var cur = $('#search-keyword').attr('placeholder');
                $('#search-keyword').attr('placeholder', cur + categoryName[idx]);
                idx++;
                setTimeout(function() {
                    TypingPlaceHolder(categoryName, idx);
                }, 25);
            }
            var _cposi = '1';
        </script>

    </div>
    <!-- Main Header - Search & Login  -->
    <?php $this->load->view('icolor/widget/main_header'); ?>
    <!-- forget password -->

    <?php $this->load->view("icolor/footer"); ?>
