var page_g_pl = 1;
var rownumber_g_pl = 12;
var page_g_gl_winday = 0;
var total = 0;

var GAME_PRELAUNCH_CUSTOMER_BOX_CALLING_FLAG = true;
function LoadPrelaunchCustomer() {
    debugger;
    if (!GAME_PRELAUNCH_CUSTOMER_BOX_CALLING_FLAG)
        return;
    GAME_PRELAUNCH_CUSTOMER_BOX_CALLING_FLAG = false;
    var productid = parseInt($("#hdProductID").val());
    var data = { intProductID: productid};
    CallAjaxPost("/aj/GameV2/PreLaunchCustomer/", data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            if ($('#box-customer-prelaunch').length == 0) {
                $('#box-customer-prelaunch').remove();
                $('body').append(e);
            }
            else {
                $('#box-customer-prelaunch').replaceWith(e);
            }
            $.fancybox.close();
            LoadDefault_Game_PreLaunch_Customer();
            $("a.listcustomer").click();
        }
        $('#dlding').fadeOut(1000);
        GAME_PRELAUNCH_CUSTOMER_BOX_CALLING_FLAG = true;
    }, ErrorAjax, true);
}
function GetQuestionResultWin(idpriceforecast) {
    try {
        $.ajax({
            url: '/aj/GameV2/GetQuestionResultWin',
            type: 'GET',
            data: { intPriceForeCastID: idpriceforecast },
            cache: true,
            success: function (d) {
                if (d != null || d != '') {
                    $("#g-pl-sr table table").prepend(d);
                }
                $.fancybox.update();
            }
        });

    } catch (e) {

    }
}
function LoadDefault_Game_PreLaunch_Customer() {
    $(document).ready(function () {
        //open list customer
        $(".listcustomer").fancybox({
            'width': 830,
            'height': 535,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'showCloseButton': false,
            'autoScale': false,
            'margin': 0,
            'padding': 0
        });
        $('[id$=g-pl-bs]').click(function () {
            page_g_pl = 1;
            page_g_gl_winday = 0;
            total = 0;
            $(".g-gl-total").html("");
            $("#g-pl-sr table tr.tritem").remove();
            $("#g-pl-sr table tr.tritemwin").remove();
            $('#g-pl-sr').hide();
            $('.g-pl-loading').show();
            $('.control').hide();

            SearchRegisteredPreLaunch();

            window.setTimeout('PreventMultipleClick()', 1000)
        });
        $(".g-gl-more").click(function () {
            $(".g-gl-more").hide();
            $(".g-pl-loading-more").show();
            SearchRegisteredPreLaunch();
        });
    });
}

function SearchRegisteredPreLaunch() {
    var filter = document.getElementById('g-pl-sf').value;

    if ((priceforecaststatus == 2 || priceforecaststatus == 5) && filter.length == 0 && $(".listcustomer_prelaunch tr.tritemwin").length == 0) {
        GetQuestionResultWin(priceforecastid);
    }
    LoadRegisteredPrelaunch(filter, page_g_pl, rownumber_g_pl);
    return true;
}
var GAME_LoadDefaultRegisteredPreLaunch_FLAG = false;
function LoadDefaultRegisteredPreLaunch() {
    debugger;
    if (GAME_LoadDefaultRegisteredPreLaunch_FLAG)
        return;

    //if (page_g_pl > 1) return;
    $('#g-pl-sf').val('');
    $("#g-pl-sr table table").html('');
    $(".g-gl-total").html('');
    page_g_pl = 1;
    total = 0;
    var filter = "";
    if ($('#g-pl-sf') != null && $('#g-pl-sf').val() != undefined) {
        filter = $('#g-pl-sf').val();
    }

    if ((priceforecaststatus == 2 || priceforecaststatus == 5) && filter.length == 0) {
        GetQuestionResultWin(priceforecastid);
    }
    LoadRegisteredPrelaunch(filter, page_g_pl, rownumber_g_pl);
    _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'DuDoanGia_Danhsach', , true]);
    GAME_LoadDefaultRegisteredPreLaunch_FLAG = true;

    return true;
}
var GAME_LoadDefaultRegisteredPreLaunchWin_FLAG = false;
function LoadDefaultRegisteredPreLaunchWin() {
    if (GAME_LoadDefaultRegisteredPreLaunchWin_FLAG)
        return;
    location.hash = "danh-sach-trung-thuong-du-doan-gia";
    //if (page_g_pl > 1) return;
    $('#g-pl-sf').val('');
    $("#g-pl-sr table table").html('');
    $(".g-gl-total").html('');
    page_g_pl = 1;
    total = 0;
    var filter = document.getElementById('g-pl-sf').value;

    if ((priceforecaststatus == 2 || priceforecaststatus == 5) && filter.length == 0) {
        GetQuestionResultWin(priceforecastid);
    }
    LoadRegisteredPrelaunch(filter, page_g_pl, rownumber_g_pl);
    _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'DuDoanGia_Danhsach', , true]);
    GAME_LoadDefaultRegisteredPreLaunchWin_FLAG = true;

    return true;
}
function LoadRegisteredPrelaunch(f, p, r) {
    $.ajax({
        type: "GET",
        cache: false,
        data: { intPriceForeCastID: priceforecastid, filter: f, pageindex: p, rownumber: r },
        url: "/aj/GameV2/LoadRegisteredPrelaunch",
        beforeSend: function () {
            if (p == 1) {
                $('#g-pl-sr').hide();
                $('.g-pl-loading').show();
                $('.control').hide();
                $(".g-gl-more").hide();
            }
        },
        success: function (args) {
            if (args && args.pl) {

                var rs = "";
                if (total == 0) {
                    total = args.totalrecord;
                }
                if ($(".g-gl-total").html() == "") {
                    $(".g-gl-total").html(args.totalrecord);
                }
                var resultmore = parseInt($(".g-gl-total").html());
                var totalcurr = $("#g-pl-sr table table tr.tritem").length;
                var pl = eval(args.pl);
                for (var i = 0; i < pl.length; i++) {
                    if (f.length > 0) {
                        rs += "<tr class='" + (pl[i].ISWIN == "1" ? "tritemwin" : "tritem") + "'>";
                    }
                    else {
                        rs += "<tr class='tritem'>";
                    }
                    //rs += "<td class='tb_list_border_bottom precol1'>" + (total - (((p - 1) * r) + i)) + ".</td>";
                    if (priceforecaststatus == 2 || priceforecaststatus == 5) {
                        rs += "<td class='tb_list_border_bottom precol71'>" + formatNumberValue((total - totalcurr - i)) + ".</td>";
                        rs += "<td class='tb_list_border_bottom precol72'>" + pl[i].FULLNAME + "</td>";
                        rs += "<td class='tb_list_border_bottom precol73'>" + pl[i].PREPRICE + "</td>";
                        rs += "<td class='tb_list_border_bottom precol74'>" + pl[i].MOBILE + "</td>";
                        rs += "<td class='tb_list_border_bottom precol75'>" + pl[i].CREATEDDATE + "</td>";
                        rs += "<td class='tb_list_border_bottom precol76'>-</td>";
                        rs += "<td class='tb_list_border_bottom precol77'>-</td>";
                    }
                    else {
                        rs += "<td class='tb_list_border_bottom precol1'>" + formatNumberValue((total - totalcurr - i)) + ".</td>";
                        rs += "<td class='tb_list_border_bottom precol2'>" + pl[i].FULLNAME + "</td>";
                        rs += "<td class='tb_list_border_bottom precol3'>" + pl[i].PREPRICE + "</td>";
                        rs += "<td class='tb_list_border_bottom precol4'>" + pl[i].MOBILE + "</td>";
                        rs += "<td class='tb_list_border_bottom precol5'>" + pl[i].CREATEDDATE + "</td>";
                    }
                    rs += "</tr>";
                }

                //$("#g-pl-sr table").append(rs);
                $("#g-pl-sr table table").append(rs);
                if ($(".listcustomer_prelaunch tr").length < 13) {
                    $(".listcustomer_prelaunch").removeAttr("style");
                    $(".tb_list_border tr.trhead td.precolhead_1").addClass("precolhead1");
                    $(".tb_list_border tr.trhead td.precolhead_2").addClass("precolhead2");
                    $(".tb_list_border tr.trhead td.precolhead_3").addClass("precolhead3");
                    $(".tb_list_border tr.trhead td.precolhead_4").addClass("precolhead4");
                    $(".tb_list_border tr.trhead td.precolhead_5").addClass("precolhead5");
                    $(".tb_list_border tr.trhead td.precolhead_1").removeClass("precolhead_1");
                    $(".tb_list_border tr.trhead td.precolhead_2").removeClass("precolhead_2");
                    $(".tb_list_border tr.trhead td.precolhead_3").removeClass("precolhead_3");
                    $(".tb_list_border tr.trhead td.precolhead_4").removeClass("precolhead_4");
                    $(".tb_list_border tr.trhead td.precolhead_5").removeClass("precolhead_5");
                }
                else {
                    $(".tb_list_border tr.trhead td.precolhead1").addClass("precolhead_1");
                    $(".tb_list_border tr.trhead td.precolhead2").addClass("precolhead_2");
                    $(".tb_list_border tr.trhead td.precolhead3").addClass("precolhead_3");
                    $(".tb_list_border tr.trhead td.precolhead4").addClass("precolhead_4");
                    $(".tb_list_border tr.trhead td.precolhead5").addClass("precolhead_5");
                    $(".tb_list_border tr.trhead td.precolhead1").removeClass("precolhead1");
                    $(".tb_list_border tr.trhead td.precolhead2").removeClass("precolhead2");
                    $(".tb_list_border tr.trhead td.precolhead3").removeClass("precolhead3");
                    $(".tb_list_border tr.trhead td.precolhead4").removeClass("precolhead4");
                    $(".tb_list_border tr.trhead td.precolhead5").removeClass("precolhead5");
                    if (resultmore > r) {
                        $(".listcustomer_prelaunch").attr("style", "overflow-x:hidden;overflow-y:scroll;width:900px;height:367px");
                    }
                    else if (total > r) {
                        $(".listcustomer_prelaunch").attr("style", "overflow-x:hidden;overflow-y:scroll;width:900px;height:433px");
                    }

                }

                //hide loading
                if (p == 1) {
                    $('#g-pl-sr').show();
                    $('.g-pl-loading').hide();
                    $('.control').show();
                }
                else {
                    $(".g-gl-more").show();
                    $(".g-pl-loading-more").hide();
                }
                if (resultmore > r) {
                    $(".g-gl-more").show();
                    $(".g-gl-total").html(resultmore - r);
                }
                else {
                    $(".g-gl-more").hide();
                    //$(".listcustomer_prelaunch").attr("style", "overflow-x:hidden;overflow-y:scroll;width:800px;height:433px");
                }
                page_g_pl++;
            }
        },
        error: function (e) {
        },
        complete: function (e) {
            if (p > 1) {
                var winheight = $(".listcustomer_prelaunch tr.tritemwin").length * 61;
                $('.listcustomer_prelaunch').animate({
                    scrollTop: (372 * p) + winheight
                }, 0);
            }
        }
    });
}
PreventMultipleClick = function () {
    $('#g-pl-sr').show();
    $('.g-pl-loading').hide();
    $('.control').show();
}
SearchRegisteredPreLaunchKeydown = function (evt) {

    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if (keyCode == 13) {
        $("#g-pl-bs").click();
        return false;
    }
    return true;
}
