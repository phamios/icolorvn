<script type="text/javascript">
    $(document).ready(function() {
        window.setTimeout("runNoelEvent()", 1000);
        $("#noelevent").css("right", "0px");
        $("#noelevent").css("width", "0px");
    });
    function runNoelEvent() {
        $("#noelevent").css("top", (($(window).height() - 260) / 2 + $(document).scrollTop()) + "px");
        $("#noelevent").show();
        $("#noelevent").animate({"width": "+=208"}, "slow");
        window.setTimeout("runOutNoelEvent()", 3000);
    }
    function runOutNoelEvent() {
        $("#noelevent").animate({"width": "-=208px"}, "slow");
        window.setTimeout("runOffNoelEvent()", 1000);
    }
    function runOffNoelEvent() {
        $("#noelevent").hide();
    }
</script>

<a href="http://www.thegioididong.com/noel?src=popup" target="_blank">
    <img src="<?php echo base_url('themes/icolor') ?>/index_files/bigScreen1.png" style="height: 255px; width: 208px" alt="Có gì HOT vào 10 giờ ngày 11/12/2013?">
</a>
