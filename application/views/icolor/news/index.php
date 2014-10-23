<?php $this->load->view('icolor/news/header'); ?>
<body>

    <div id="site-wrapper" class="container align-center clearfix"> 
        <header id="site-header" class="clearfix"> 
         <hgroup id="site-brand" class="site-heading">
        <?php $this->load->view('icolor/widget/logo_site');?>
    </hgroup>
            <div id="site-search" class="form-wrapper search-form-wrapper">
                <?php $this->load->view('icolor/news/search_form'); ?>
            </div> 
        </header>

        <div id="site-body" class="inside-page-body news-body clearfix">
            
            <div class="main news-main">

                <div id="news-navigation"
                     class="navigation news-navigation clearfix">
                         <?php $this->load->view('icolor/news/menu'); ?>
                </div>
                <script>
                    $("#areacountnewtinmoi").html("<span>" + 60 + "</span>");
                    $("#areacountnewtinmoi").show();
                </script>
                <div class="clearfix"></div>
                <div id="fb-root"></div> 
                <div id="site-body" class="inside-page-body news-body clearfix">
                    <div class="main news-main">
                        <div class="news-list-wrapper clearfix">
                            <div class="box-top-home-news">
                                <!-- -------3 tin hot nhat  -->
                                <?php $this->load->view('icolor/news/hot_news'); ?>
                            </div>
                            <div class="main-left-wrapper" style="vertical-align: bottom"> 

                                <?php if ($this->router->fetch_class() == 'news'): ?> 
                                    <?php $this->load->view('icolor/news/main'); ?>
                                <?php endif; ?>
                                <?php if ($this->router->fetch_class() == 'tin_chi_tiet'): ?> 
                                    <?php $this->load->view('icolor/news/details'); ?>
                                <?php endif; ?>
                            </div>
                            <div class="main-right-wrapper">
                                <?php $this->load->view('icolor/news/main_right'); ?>
                            </div>
                        </div>
                    </div>


                </div>
                <p id="back-top" style="display: block;">
                    <a href="#top" title="Về Đầu Trang"><span></span> </a>
                </p>


            </div>

            <footer id="site-footer" class="container align-center clearfix">
                <div class="footer-link-wrapper clearfix">
                    <div class="col about-us">
                        <div class="col-title">
                            <a href="#" title="Giới Thiệu"><b>Giới Thiệu</b> </a>
                        </div>
                        <ul class="nolist">
                            <?php foreach ($menu_1 as $menu1): ?>
                                <li><a href="<?php echo $menu1->menutext ?>"
                                       title="<?php echo $menu1->menuname ?>"><?php echo $menu1->menuname ?>
                                    </a></li>
                            <?php endforeach; ?>
                            <!--                <li><a id="lnkRedirectToMobile" onclick="return RedirectToMobile(this);" href="http://m.thegioididong.com/" title="Phiên bản mobile">Phiên bản mobile</a></li>-->

                        </ul>
                    </div>
                    <div class="col for-customer">
                        <div class=" col-title">
                            <a href="#" title="Hỗ Trợ Khách Hàng"><b>Hỗ Trợ Khách Hàng</b> </a>
                        </div>
                        <ul class="nolist">
                            <?php foreach ($menu_2 as $menu2): ?>
                                <li><a href="<?php echo $menu2->menutext ?>"
                                       title="<?php echo $menu2->menuname ?>"><?php echo $menu2->menuname ?>
                                    </a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php foreach ($meta as $m): ?>
                        <div class="col customer-support">
                            <div class="clearfix col-title">
                                <b>Tổng đài bán hàng, tư vấn (7:30 - 22:00)</b>
                            </div>
                            <div class="clearfix">
                                <?php echo $m->contact_1 . ' - ' . $m->hotline_1; ?>
                                <br />
                                <?php echo $m->contact_2 . ' - ' . $m->hotline_2; ?>
                                <br />
                                <?php echo $m->contact_3 . ' - ' . $m->hotline_3; ?>
                                <br />
                                <?php echo $m->contact_4 . ' - ' . $m->hotline_4; ?>
                                <br />
                            </div>
                            <br>
                            <div class="clearfix col-title">
                                <b>Khiếu nại (8:00 - 21:30)</b>
                            </div>
                            <div class="clearfix">
                                <?php echo $m->contact_5 . ' - ' . $m->hotline_5; ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                    <div class="col promotion">
                        <ul class="anybanner clearfix">
                            <li><a href="#" target="_blank"><img style="cursor: pointer"
                                                                 src="<?php echo base_url('themes/icolor') ?>/index_files/02_12_2013_10_03_02_noel-banner.png"
                                                                 alt="" height="156" width="326"> </a>
                            </li>
                        </ul>

                    </div>

                </div>

                <div class="copyright">© 2013. Icolor [+]</div>
                <div style="text-align: center">Facebook Like</div>
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

            <!-- trung thu -->

        </div>
        <!-- Set province's user -->

        <script>window.onload = setheightTopMemberNew</script>
        <script type="text/javascript">
            $(document).ready(function() {
                window.setTimeout("runNoelEvent()", 30000);
                $("#noelevent").css("right", "0px");
                $("#noelevent").css("width", "0px");
            });
            function runNoelEvent() {
                $("#noelevent").css("top", (($(window).height() - 260) / 2 + $(document).scrollTop()) + "px");
                $("#noelevent").show();
                $("#noelevent").animate({"width": "+=208"}, "slow");
                window.setTimeout("runOutNoelEvent()", 10000);
            }
            function runOutNoelEvent() {
                $("#noelevent").animate({"width": "-=208px"}, "slow");
                window.setTimeout("runOffNoelEvent()", 500);
            }
            function runOffNoelEvent() {
                $("#noelevent").hide();
            }
        </script>
        <div style="right: 0px; width: 0px;" id="noelevent">
            <a href="#" target="_blank"><img
                    src="<?php echo base_url('themes/icolor/') ?>/news_files/bigScreen1.png"
                    style="height: 255px; width: 208px"
                    alt="Có gì HOT vào 10 giờ ngày 11/12/2013?"> </a>
        </div>
        <style type="text/css">
            /* Noel Event */
            #noelevent {
                display: none;
                position: absolute;
                overflow-x: hidden;
                height: 260px;
            }
            /* // Noel Event */
        </style>

</body>
</html>
