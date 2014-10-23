<div class="row-fluid">
    <div class="span12">
        <!--PAGE CONTENT BEGINS-->


        <div class="space-6"></div>

        <div class="row-fluid">
            <div class="span7 infobox-container">
                <div class="infobox infobox-green  ">
                    <div class="infobox-icon">
                        <i class="icon-comments"></i>
                    </div>

                    <div class="infobox-data">
                        <span class="infobox-data-number"><?php echo $totaluser; ?></span>
                        <div class="infobox-content">thành viên</div>
                    </div>
                    <div class="stat stat-success"><?php echo $total_member; ?></div>
                </div>



                <div class="infobox infobox-blue2  ">
                    <div class="infobox-progress">
                        <div class="easy-pie-chart percentage" data-percent="35" data-size="40">
                            <span class="percent"><?php echo $total_member; ?></span> 
                        </div>
                    </div>

                    <div class="infobox-data">
                        <span class="infobox-text">Member</span>

                    </div>
                </div>


                <div class="infobox infobox-orange2  ">
                    <div class="infobox-chart">
                        <span class="sparkline" data-values="196,128,202,177,154,94,100,170,224"></span>
                    </div>

                    <div class="infobox-data">
                        <span class="infobox-data-number"><?php echo $total_rows; ?></span>
                        <div class="infobox-content">pageviews</div>
                    </div>

                    <div class="badge badge-success">
                        7.2%
                        <i class="icon-arrow-up"></i>
                    </div>
                </div> 

                <div class="infobox infobox-orange2  ">
                    <div class="infobox-chart">
                        <span class="sparkline" data-values="196,128,202,177,154,94,100,170,224"></span>
                    </div>

                    <div class="infobox-data">
                        <span class="infobox-data-number"><?php echo number_format($total_items_ped); ?></span>
                        <div class="infobox-content">Tổng bán</div>
                    </div>


                </div> 
                <div class="infobox infobox-orange2  ">
                    <div class="infobox-chart">
                        <span class="sparkline" data-values="196,128,202,177,154,94,100,170,224"></span>
                    </div>

                    <div class="infobox-data">
                        <span class="infobox-data-number"><?php echo number_format($total_amount); ?></span>
                        <div class="infobox-content">Doanh thu VNĐ</div>
                    </div> 
                </div> 

            </div>

            <div class="vspace"></div>

        </div><!--/.span-->

    </div><!--/.row-fluid-->
