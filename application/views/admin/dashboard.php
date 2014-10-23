<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Quản trị hệ thống website</title>
		<link href="<?php echo base_url('iconw.png');?>" rel="shortcut icon" type="image/x-icon">
        <meta name="description" content="overview &amp; stats" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!---jQuery Files-->
        <?php if ($this->router->fetch_method() == 'menutop'): ?>
            <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-1.7.1.min.js') ?>"></script>
            <script src="<?php echo base_url('themes/huyxom/admin/appstore/js/jquery-ui-1.8.17.min.js') ?>"></script>
        <?php endif; ?>

		<?php if($this->router->fetch_method() == 'notification'):?>
			 <link href="<?php echo base_url('themes/multiselect/css') ?>/multiselect.css" media="screen" rel="stylesheet" type="text/css">
		<?php endif; ?>

        <!--basic styles-->
		<?php if ($this->router->fetch_method() == 'add_sitecontent' || $this->router->fetch_method() == 'add_news' || $this->router->fetch_method() == 'add_notification'): ?>
        <script src="<?php echo base_url('themes/admincp') ?>/ckeditor/ckeditor.js"></script>

        <script>
            CKEDITOR.replace('editor1', {
                fullPage: true,
                allowedContent: true
            });
        </script>
		<?php endif; ?>
        <link href="<?php echo base_url('themes/admincp') ?>/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="<?php echo base_url('themes/admincp') ?>/assets/css/bootstrap-responsive.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/font-awesome.min.css" />

        <!--[if IE 7]>
          <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/font-awesome-ie7.min.css" />
        <![endif]-->

        <!--page specific plugin styles-->

        <!--fonts-->

        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" />

        <!--ace styles-->

        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace.min.css" />
        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace-responsive.min.css" />
        <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace-skins.min.css" />

        <!--[if lte IE 8]>
          <link rel="stylesheet" href="<?php echo base_url('themes/admincp') ?>/assets/css/ace-ie.min.css" />
        <![endif]-->

        <!--inline styles related to this page-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <!-- ------GALLERY -->


       <!-- <script type="text/javascript" src="http://malsup.github.com/jquery.form.js"></script> -->
        <script type="text/javascript">
            $(document).ready(function() {
				 $('.colorpicker').colorpicker();
                $('form').submit(function() {
                    var bar = $('.bar');
                    var percent = $('.percent');
                    var status = $('#status');
                    $(this).ajaxForm({
                        beforeSend: function() {
                            status.html();
                            var percentVal = '0%';
                            bar.width(percentVal)
                            percent.html(percentVal);
                        },
                        uploadProgress: function(event, position, total, percentComplete) {
                            var percentVal = percentComplete + '%';
                            bar.width(percentVal)
                            percent.html(percentVal);
                        },
                        complete: function(xhr) {
                            status.html(xhr.responseText);
                        }
                    });
                });
            });
        </script>

        <style>
            .progress { position:relative; width:400px; border: 1px solid #ddd; padding: 1px; border-radius: 3px; }
            .bar { background-color: #B4F5B4; width:0%; height:20px; border-radius: 3px; }
            .percent { position:absolute; display:inline-block; top:3px; left:48%; }
        </style>



    </head>

    <body>
        <div class="navbar">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a href="#" class="brand">
                        <small>
                            <i class="icon-leaf"></i>
                            Quản trị hệ thống website
                        </small>
                    </a><!--/.brand-->

                    <ul class="nav ace-nav pull-right">
                        <?php $this->load->view('admin/widget/user'); ?>

                    </ul><!--/.ace-nav-->
                </div><!--/.container-fluid-->
            </div><!--/.navbar-inner-->
        </div>

        <div class="main-container container-fluid">
            <a class="menu-toggler" id="menu-toggler" href="#">
                <span class="menu-text"></span>
            </a>

            <div class="sidebar" id="sidebar">
                <?php $this->load->view('admin/menu'); ?>
                <div class="sidebar-collapse" id="sidebar-collapse">
                    <i class="icon-double-angle-left"></i>
                </div>
            </div>

            <div class="main-content">
                <div class="breadcrumbs" id="breadcrumbs">
                    <?php $this->load->view('admin/breadcrumbs'); ?>
                </div>

                <div class="page-content">
                    <?php if ($this->router->fetch_method() == 'index'): ?>
                        <?php $this->load->view("admin/index"); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'usercp'): ?>
                        <?php $this->load->view('admin/default/usercp'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'type'): ?>
                        <?php $this->load->view('admin/default/type'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_type'): ?>
                        <?php $this->load->view('admin/default/add_type'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_type'): ?>
                        <?php $this->load->view('admin/default/edit_type'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'categorytype'): ?>
                        <?php $this->load->view('admin/default/category'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_cate'): ?>
                        <?php $this->load->view('admin/default/add_cate'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_cate_hot'): ?>
                        <?php $this->load->view('admin/default/cate_hot'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'sitecontent'): ?>
                        <?php $this->load->view('admin/default/sitecontent'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_sitecontent'): ?>
                        <?php $this->load->view('admin/default/add_sitecontent'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'content'): ?>
                        <?php $this->load->view('admin/default/content'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_catecontent'): ?>
                        <?php $this->load->view('admin/default/edit_catecontent'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_news'): ?>
                        <?php $this->load->view('admin/default/add_news'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'blockip'): ?>
                        <?php $this->load->view('admin/default/blockip'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_ip'): ?>
                        <?php $this->load->view('admin/default/add_ip'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'adminuser'): ?>
                        <?php $this->load->view('admin/default/adminuser'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'add_useradmin'): ?>
                        <?php $this->load->view('admin/default/add_useradmin'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_useradmin'): ?>
                        <?php $this->load->view('admin/default/edit_useradmin'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'searchadmin'): ?>
                        <?php $this->load->view('admin/default/searchadmin'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'fmenu'): ?>
                        <?php $this->load->view('admin/default/fmenu'); ?>
                    <?php endif; ?>

                    <?php if ($this->router->fetch_method() == 'edit_sitecontent'): ?>
                        <?php $this->load->view('admin/default/edit_sitecontent'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_news'): ?>
                        <?php $this->load->view('admin/default/edit_news'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'listusertype'): ?>
                        <?php $this->load->view('admin/default/listusertype'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'site_config'): ?>
                        <?php $this->load->view('admin/default/site_config'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_config'): ?>
                        <?php $this->load->view('admin/default/add_config'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'edit_config'): ?>
                        <?php $this->load->view('admin/default/edit_config'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'notification'): ?>
                        <?php $this->load->view('admin/default/notification'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'add_notification'): ?>
                        <?php $this->load->view('admin/default/add_notification'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'newcate'): ?>
                        <?php $this->load->view('admin/default/newcate'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'warranty'): ?>
                        <?php $this->load->view('admin/default/warranty'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'slide'): ?>
                        <?php $this->load->view('admin/default/slide'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'advertis'): ?>
                        <?php $this->load->view('admin/default/banner_link'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'report'): ?>
                        <?php $this->load->view('admin/default/report'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'menufoot'): ?>
                        <?php $this->load->view('admin/default/menufoot'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'menutop'): ?>
                        <?php $this->load->view('admin/default/menutop'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'gallery'): ?>
                        <?php $this->load->view('admin/default/gallery'); ?>
                    <?php endif; ?>
                     <?php if ($this->router->fetch_method() == 'store'): ?>
                        <?php $this->load->view('admin/default/list_store'); ?>
                    <?php endif; ?>
                     <?php if ($this->router->fetch_method() == 'ad_store'): ?>
                        <?php $this->load->view('admin/default/add_store'); ?>
                    <?php endif; ?>
                    <?php if ($this->router->fetch_method() == 'copy_item'): ?>
                        <?php $this->load->view('admin/default/cron_item'); ?>
                    <?php endif; ?>


                </div>
                <!--/.page-content-->
            </div><!--/.main-content-->
        </div><!--/.main-container-->

        <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-small btn-inverse">
            <i class="icon-double-angle-up icon-only bigger-110"></i>
        </a>

        <!--basic scripts-->

        <!--[if !IE]>-->

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

        <!--<![endif]-->

        <!--[if IE]>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->

        <!--[if !IE]>-->

        <script type="text/javascript">
            window.jQuery || document.write("<script src='<?php echo base_url('themes/admincp') ?>/assets/js/jquery-2.0.3.min.js'>" + "<" + "/script>");
        </script>

        <!--<![endif]-->

        <!--[if IE]>
<script type="text/javascript">
window.jQuery || document.write("<script src='<?php echo base_url('themes/admincp') ?>/assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

        <script type="text/javascript">
            if ("ontouchend" in document)
                document.write("<script src='assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");
        </script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/bootstrap.min.js"></script>

        <!--page specific plugin scripts-->

        <!--[if lte IE 8]>
          <script src="<?php echo base_url('themes/admincp') ?>/assets/js/excanvas.min.js"></script>
        <![endif]-->

        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery-ui-1.10.3.custom.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.ui.touch-punch.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.slimscroll.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.easy-pie-chart.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/jquery.sparkline.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/flot/jquery.flot.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/flot/jquery.flot.pie.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/flot/jquery.flot.resize.min.js"></script>

        <!--ace scripts-->

        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/ace-elements.min.js"></script>
        <script src="<?php echo base_url('themes/admincp') ?>/assets/js/ace.min.js"></script>

        <!--inline scripts related to this page-->

        <script type="text/javascript">
            $(function() {
                $('.easy-pie-chart.percentage').each(function() {
                    var $box = $(this).closest('.infobox');
                    var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
                    var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
                    var size = parseInt($(this).data('size')) || 50;
                    $(this).easyPieChart({
                        barColor: barColor,
                        trackColor: trackColor,
                        scaleColor: false,
                        lineCap: 'butt',
                        lineWidth: parseInt(size / 10),
                        animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
                        size: size
                    });
                })

                $('.sparkline').each(function() {
                    var $box = $(this).closest('.infobox');
                    var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
                    $(this).sparkline('html', {tagValuesAttribute: 'data-values', type: 'bar', barColor: barColor, chartRangeMin: $(this).data('min') || 0});
                });




                var placeholder = $('#piechart-placeholder').css({'width': '90%', 'min-height': '150px'});
                var data = [
                    {label: "social networks", data: 38.7, color: "#68BC31"},
                    {label: "search engines", data: 24.5, color: "#2091CF"},
                    {label: "ad campaings", data: 8.2, color: "#AF4E96"},
                    {label: "direct traffic", data: 18.6, color: "#DA5430"},
                    {label: "other", data: 10, color: "#FEE074"}
                ]
                function drawPieChart(placeholder, data, position) {
                    $.plot(placeholder, data, {
                        series: {
                            pie: {
                                show: true,
                                tilt: 0.8,
                                highlight: {
                                    opacity: 0.25
                                },
                                stroke: {
                                    color: '#fff',
                                    width: 2
                                },
                                startAngle: 2
                            }
                        },
                        legend: {
                            show: true,
                            position: position || "ne",
                            labelBoxBorderColor: null,
                            margin: [-30, 15]
                        }
                        ,
                        grid: {
                            hoverable: true,
                            clickable: true
                        }
                    })
                }
                drawPieChart(placeholder, data);

                /**
                 we saved the drawing function and the data to redraw with different position later when switching to RTL mode dynamically
                 so that's not needed actually.
                 */
                placeholder.data('chart', data);
                placeholder.data('draw', drawPieChart);



                var $tooltip = $("<div class='tooltip top in hide'><div class='tooltip-inner'></div></div>").appendTo('body');
                var previousPoint = null;

                placeholder.on('plothover', function(event, pos, item) {
                    if (item) {
                        if (previousPoint != item.seriesIndex) {
                            previousPoint = item.seriesIndex;
                            var tip = item.series['label'] + " : " + item.series['percent'] + '%';
                            $tooltip.show().children(0).text(tip);
                        }
                        $tooltip.css({top: pos.pageY + 10, left: pos.pageX + 10});
                    } else {
                        $tooltip.hide();
                        previousPoint = null;
                    }

                });


                var d1 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.5) {
                    d1.push([i, Math.sin(i)]);
                }

                var d2 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.5) {
                    d2.push([i, Math.cos(i)]);
                }

                var d3 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.2) {
                    d3.push([i, Math.tan(i)]);
                }


                var sales_charts = $('#sales-charts').css({'width': '100%', 'height': '220px'});
                $.plot("#sales-charts", [
                    {label: "Domains", data: d1},
                    {label: "Hosting", data: d2},
                    {label: "Services", data: d3}
                ], {
                    hoverable: true,
                    shadowSize: 0,
                    series: {
                        lines: {show: true},
                        points: {show: true}
                    },
                    xaxis: {
                        tickLength: 0
                    },
                    yaxis: {
                        ticks: 10,
                        min: -2,
                        max: 2,
                        tickDecimals: 3
                    },
                    grid: {
                        backgroundColor: {colors: ["#fff", "#fff"]},
                        borderWidth: 1,
                        borderColor: '#555'
                    }
                });


                $('#recent-box [data-rel="tooltip"]').tooltip({placement: tooltip_placement});
                function tooltip_placement(context, source) {
                    var $source = $(source);
                    var $parent = $source.closest('.tab-content')
                    var off1 = $parent.offset();
                    var w1 = $parent.width();

                    var off2 = $source.offset();
                    var w2 = $source.width();

                    if (parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2))
                        return 'right';
                    return 'left';
                }


                $('.dialogs,.comments').slimScroll({
                    height: '300px'
                });


                //Android's default browser somehow is confused when tapping on label which will lead to dragging the task
                //so disable dragging when clicking on label
                var agent = navigator.userAgent.toLowerCase();
                if ("ontouchstart" in document && /applewebkit/.test(agent) && /android/.test(agent))
                    $('#tasks').on('touchstart', function(e) {
                        var li = $(e.target).closest('#tasks li');
                        if (li.length == 0)
                            return;
                        var label = li.find('label.inline').get(0);
                        if (label == e.target || $.contains(label, e.target))
                            e.stopImmediatePropagation();
                    });

                $('#tasks').sortable({
                    opacity: 0.8,
                    revert: true,
                    forceHelperSize: true,
                    placeholder: 'draggable-placeholder',
                    forcePlaceholderSize: true,
                    tolerance: 'pointer',
                    stop: function(event, ui) {//just for Chrome!!!! so that dropdowns on items don't appear below other items after being moved
                        $(ui.item).css('z-index', 'auto');
                    }
                }
                );
                $('#tasks').disableSelection();
                $('#tasks input:checkbox').removeAttr('checked').on('click', function() {
                    if (this.checked)
                        $(this).closest('li').addClass('selected');
                    else
                        $(this).closest('li').removeClass('selected');
                });


            });
        </script>


    </body>
</html>
