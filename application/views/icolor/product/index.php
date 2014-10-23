<script type="text/javascript" src="<?php echo base_url('themes/icolor')?>/js/jssor.core.js"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/icolor')?>/js/jssor.utils.js"></script>
    <script type="text/javascript" src="<?php echo base_url('themes/icolor')?>/js/jssor.slider.js"></script>
    <script>
        jssor_slider1_starter = function (containerId) {
            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

                    $SpacingX: 10,                                  //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                    $SpacingY: 3,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
                    $DisplayPieces: 6,                              //[Optional] Number of pieces to display, default value is 1
                    $ParkingPosition: 204,                          //[Optional] The offset position to park thumbnail,

                    $DirectionNavigatorOptions: {
                        $Class: $JssorDirectionNavigator$,              //[Requried] Class to create direction navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        $Steps: 3                                       //[Optional] Steps to go for each navigation request, default value is 1
                    }
                }
            };

            var jssor_slider1 = new $JssorSlider$(containerId, options);
        }
    </script>
<?php if ($allitem <> null): ?>
    <?php foreach ($allitem as $row): ?>
        <div class="product-name">
            <h1><?php echo $catename ?> - <b> <?php echo $row->namecontent ?></b></h1>
        </div>
        <div class="wrapper-left">
            <div class="wrapper-left-top">
                <!--Slide-->

                 <div id="slider1_container" style="position: relative; width: 700px;
        height: 420px;">

        <!-- Loading Screen -->
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
                background-color: #000; top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
            <div style="position: absolute; display: block; background: url(<?php echo base_url('themes/icolor')?>/img/loading.gif) no-repeat center center;
                top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
        </div>

        <!-- Slides Container -->
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 700px; height: 300px;
            overflow: hidden;">
           <!--   <div>
                <img u="image" src="<?php echo base_url('src/imagescontent/' . $row->images); ?>" />
                <img u="thumb" src="<?php echo base_url('src/imagescontent/thumb_' . $row->images); ?>" />
            </div>
            <div>
                <img u="image" src="<?php echo base_url('src/imagescontent/' . $row->ifiles_2); ?>" />
                <img u="thumb" src="<?php echo base_url('src/imagescontent/thumb_' . $row->ifiles_2); ?>" />
            </div>
            <div>
                <img u="image" src="<?php echo base_url('src/imagescontent/' . $row->ifiles_3); ?>" />
                <img u="thumb" src="<?php echo base_url('src/imagescontent/thumb_' . $row->ifiles_3); ?>" />
            </div>-->
            <?php foreach($gallery as $image):?>
            	<div>
                <img u="image" src="<?php echo base_url('src/items/' . $image->imageslink); ?>" />
                <img u="thumb" src="<?php echo base_url('src/items/' . $image->imageslink); ?>" width="72px" height="72px"/>
            </div>
            <?php endforeach;?>
        </div>

        <!-- Thumbnail Navigator Skin Begin -->
        <div u="thumbnavigator" class="jssort05" style="position: absolute; width: 500px; height: 60px; left:50px; bottom: 20px;">
            <!-- Thumbnail Item Skin Begin -->
            <style>

                /* jssor slider thumbnail navigator skin 05 css */
                /*
                .jssort05 .p           (normal)
                .jssort05 .p:hover     (normal mouseover)
                .jssort05 .pav           (active)
                .jssort05 .pav:hover     (active mouseover)
                .jssort05 .pdn           (mousedown)

                .jssort05 .f
                {
                    clip: rect(8px 63px 63px 8px);
                }
                .jssort05 .i
                {
                    position: absolute;
                    background: #000;
                    filter: alpha(opacity=30);
                    opacity: .3;
                    width: 72px;
                    height: 72px;
                    top: 0;
                    left: 0;

                	transition: background-color .6s;
                    -moz-transition: background-color .6s;
                    -webkit-transition: background-color .6s;
                    -o-transition: background-color .6s;
                }
                .jssort05 .pav .i
                {
                    background: #fff;
                    filter: alpha(opacity=80);
                    opacity: .8;
                }
                .jssort05 .pdn .i { background: none; }

                .jssort05 .p:hover .i, .jssort05 .pav:hover .i
                {
                    background: #fff;
                    filter: alpha(opacity=30);
                    opacity: .3;
                }
                .jssort05 .p:hover .i
                {
                	transition: none;
                    -moz-transition: none;
                    -webkit-transition: none;
                    -o-transition: none;
                } */
            </style>
            <div u="slides" style="cursor: move;">
                <div u="prototype" class="p" style="POSITION: absolute; WIDTH: 72px; HEIGHT: 72px; TOP: 0; LEFT: 0;">
                    <div class="o" style="position:absolute;top:1px;left:1px;width:72px;height:72px;overflow:hidden;">
                        <ThumbnailTemplate class="b" style="width:72px;height:72px; border: none;position:absolute; TOP: 0; LEFT: 0;"></ThumbnailTemplate>
                        <div class="i"></div>
                        <ThumbnailTemplate class="f" style="width:72px;height:72px;border: none;position:absolute; TOP: 0; LEFT: 0;"></ThumbnailTemplate>
                    </div>
                </div>
            </div>
            <!-- Thumbnail Item Skin End -->

            <!-- Direction Navigator Skin Begin -->
            <style>
                /* jssor slider direction navigator skin 06 css */
                /*
                .jssord06l              (normal)
                .jssord06r              (normal)
                .jssord06l:hover        (normal mouseover)
                .jssord06r:hover        (normal mouseover)
                .jssord06ldn            (mousedown)
                .jssord06rdn            (mousedown)
                */
                .jssord06l, .jssord06r, .jssord06ldn, .jssord06rdn
                {
            	    position: absolute;
            	    cursor: pointer;
            	    display: block;
                    background: url(<?php echo base_url('themes/icolor/img/d06.png') ?>) no-repeat;
                    overflow:hidden;
                }
                .jssord06l { background-position: -8px -38px; }
                .jssord06r { background-position: -68px -38px; }
                .jssord06l:hover { background-position: -128px -38px; }
                .jssord06r:hover { background-position: -188px -38px; }
                .jssord06ldn { background-position: -248px -38px; }
                .jssord06rdn { background-position: -308px -38px; }
            </style>
            <!-- Arrow Left -->
            <span u="arrowleft" class="jssord06l" style="width: 45px; height: 45px; top: 123px; left: -40px;">
            </span>
            <!-- Arrow Right -->
            <span u="arrowright" class="jssord06r" style="width: 45px; height: 45px; top: 123px; right: -40px">
            </span>
            <!-- Direction Navigator Skin End -->
        </div>

        <script>
            jssor_slider1_starter('slider1_container');
        </script>
    </div>

                <!--End slide-->

                <!--News-->
                <div class="news-wrapper">
                </div>
                <div class="clear"></div>


                <div class="wrapper-specification"  >
                    <?php echo  $row->description ?>
                </div>
                <div class="clear"></div>
                <div id="productinfo" class="displaynone">

                </div>


                <!--End news-->
                <!--Information-->
                <div class="information-detail">
                     <div id="productinfo-content"  >

                        <div class="clear"></div>
                    </div>

                </div>
                <!--End information-->
            </div>
            <!--Comment-->
            <div class="wrapper-left-bottom">
                <div class="product-feature-list-wrapper photo-video-wrapper clearfix" style="margin-bottom: 0;">
                    <h3 class="clearfix" style="display: none">Nhận Xét</h3>
                </div>
                <div class="spec-detail-wrapper photo-album-wrapper clearfix">
                    <div id="comment" cmtcategoryid="2" siteid="0" detailid="58119" cateid="42" urlpage="/dtdd/nokia-lumia-520" nameproduct="Nokia Lumia 520">

                        <div id="comment-wrapper">
                            <!-- Begin Facebook Plugin-->
                            <div id="fb-root"></div>
                            <script>(function(d, s, id) {
                                            var js, fjs = d.getElementsByTagName(s)[0];
                                            if (d.getElementById(id))
                                                return;
                                            js = d.createElement(s);
                                            js.id = id;
                                            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
                                            fjs.parentNode.insertBefore(js, fjs);
                                        }(document, 'script', 'facebook-jssdk'));</script>
                            <div class="fb-comments" data-href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>" data-width="670" data-numposts="5" data-colorscheme="light"></div>
                            <!--  End Facebook Plugin-->



                        </div>
                    </div>
                </div>
            </div>
            <!--End comment-->
        </div>
        <div class="wrapper-right">

            <div class="wrapper-normal-sell">
                <div class="price">
                    <span class="mprice">
                        <a href="javascript:void(0);" title="Giá bán <?php echo $row->namecontent ?>">
                            Giá bán: <?php echo number_format($row->coins) ?> ₫
                        </a>
                    </span>
					<br/>
					Tình trạng:
					<span style="color:blue;">

					<strong>
					<?php if($row->status_amount==1):?>
						Còn hàng
					<?php else: ?>
						Hết hàng
					<?php endif;?>
					 </strong>
					</span>
					<br/><br/>
					<span >
					<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ficolorvn.vn&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px;" allowTransparency="true"></iframe>

					<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-share-button" data-href=" <?php echo $_SERVER['REQUEST_URI'] ?>  " data-type="button_count"></div>
					</span>
                </div>
                <div class="promotion">
                </div>
<!--                <ul class="action-button">
                    <li><a href="#" class="buyNow radius" title=" " >MUA NGAY, GIAO TẬN NƠI<span>(xem hàng, không mua không sao)</span></a></li>
                    <li><a href="#" title=" " class="installment radius">MUA TRẢ GÓP<span>(từ 210.000đ/tháng)</span></a></li>
                    <li><a href="#" class="orderatstore radius" title=" "  >ĐẶT MUA TẠI CỬA HÀNG</a></li>

                </ul>-->

                <div class="features_info">
                     <?php echo $row->features?>
                </div>
                <div class="deliveryinfo clr">
                    <ul class="buy-call">
                        <li>Gọi điện thoại đặt mua:
                            <strong>
                                <?php if ($meta1 <> NULL): ?>
                                    <?php foreach ($meta as $row): ?>
                                        <?php echo $row->hotline_1; ?>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </strong></li>
                    </ul>
                    <ul>
                        <li>Nhận hàng trong <strong>30 phút </strong> tại <strong>Hà Nội</strong></li>
                    </ul>
                </div>
            </div>



            <!--End Kịch bản bán hàng-->

            <!--Compare products-->

            <!--End compare products-->
            <!--News products-->



            <!--End news products-->

            <!--Accessories products-->


            <!--End accessories products-->
            <!--Old products-->

            <!--End old products-->
            <!--Game App products--><!--End Game App products-->
            <!--Tips-->
           <!-- <div class="wrapper-tips">
                <h4><b>SMARTPHONE LÀM ĐƯỢC GÌ</b> CHO BẠN</h4>
                <ul>
                    <li>Gọi điện, nhắn tin trong nước/quốc tế miễn phí</li>
                    <li>Giúp bạn tìm đường đi, địa điểm ăn chơi</li>
                    <li>Nhắc ngày sinh nhật của người thân</li>
                    <li>Chặn cuộc gọi hoặc tin nhắn từ bất kỳ ai</li>
                </ul>
                <a href="<?php echo site_url(); ?>tin-tuc/tips-su-dung-smartphone/1042" title="smartphone làm được gì">Xem tất cả »</a>
            </div>            <!--End Tips-->

            <div class="clear"></div>
            <div class="wrapper-news">
                <h4><b><u>Sản phẩm cùng loại</ul></b> </h4>
                <ul class="news">
                    <?php foreach($relateitem as $row):?>
                    <li>
                        <a target="_blank" href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>" title="Hàng " độc"="" lumia="" 520="" phiên="" bản="" ssc="" napoli="" đẹp="" mê="" hồn"="">
                           <img src="<?php echo base_url('src/imagescontent/thumb_'.$row->images);?>" alt="Hàng "   height="40" width="60"></a>
                        <a target="_blank" href="<?php echo site_url('product/'.mb_strtolower(url_title(removesign($row->namecontent.'-'.$row->id)))).'.html'?>" title="Hàng " >
                           <span class="title"><?php echo $row->namecontent; ?></span>
                        </a>
                        <span class="caption"><?php echo number_format($row->coins);?>₫</span>
                    </li>
                    <?php endforeach;?>
                </ul>
                <div class="clear"></div>
            </div>

			<div class="wrapper-news">
                <h4><b><u>Chia sẻ</u></b> </h4>
                <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Ficolorvn.vn&amp;width&amp;height=590&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=true&amp;show_border=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:590px;" allowTransparency="true"></iframe>
                <div class="clear"></div>
            </div>

			 <div class="wrapper-news">
                <h4><b><u>Tin tức</u></b> </h4>
                <ul class="news">
                    <?php foreach($allnews as $row):?>
                    <li>
                        <a target="_blank" href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>" title="Hàng " độc"="" lumia="" 520="" phiên="" bản="" ssc="" napoli="" đẹp="" mê="" hồn"="">
                           <img src="<?php echo base_url('src/news/thumb_'.$row->images); ?>" alt="Hàng " độc"="" lumia="" 520="" phiên="" bản="" ssc="" napoli="" đẹp="" mê="" hồn"="" height="40" width="60"></a>
                        <a target="_blank" href="<?php echo site_url('news/'.mb_strtolower(url_title(removesign($row->title.'-'.$row->id)))).'.html'?>" title="Hàng " độc"="" lumia="" 520="" phiên="" bản="" ssc="" napoli="" đẹp="" mê="" hồn"="">
                           <span class="title"><?php echo $row->title?></span>
                        </a>
                        <span class="caption"><?php echo $row->createdate?></span>
                    </li>
                    <?php endforeach;?>
                </ul>
                <div class="clear"></div>
            </div>
			
			<!-- --> 
			 <div class="wrapper-news"> 
                <ul class="news"> 
                    <li> 
					<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- icolorvn -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-2583883486961262"
     data-ad-slot="6600085238"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
                    </li> 
                </ul>
                <div class="clear"></div>
            </div>


        </div>

    <?php endforeach; ?>
<?php endif; ?>

