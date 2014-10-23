
var jLastIndex = 0;
var PageIndex = 0;
var flasg = 0;
var waitpiont = -1;
var i = 0;
var comuntity = -1;
$(document).ready(function () {

    $(window).scroll(function () { StickyLeftSideBar(); });

    $('ul.location-list li a').live("click", function () {
        $('#provinceid').val($(this).attr('data-id'));
        var provinceId = $(this).attr('data-id');
        var c_name = 'CK_CHECK_PROVINCE_OF_USER';
        var expiredays = (30 * 365);
        setCookie(c_name, provinceId, expiredays);
        window.location.reload();
    });
    //Load more paging
    $('#loadMore').live('click', (function (e) {
        LoadMoreNewsHome("/tin-tuc/ajax/HomeNews/LoadMoreNews");
    }));
    //search Load more 
    $('#loadMoreSearch').click(function () {
        LoadsMoreSearch("/tin-tuc/ajax/SearchsNews/SearchPaging");
    });

    //Search Location Home new
    $("#SuggestSearch .search-suggestion ul li.selected a").bind("keypress", function (e) {
        if (e.keyCode == 13) {
            window.location = $('#SuggestSearch div.search-suggestion ul li.selected a').attr('href');
        }
    });
    //Home Search news Home
    document.getElementById("search-keyword").focus();
    $('#search-keyword').keyup(function () {
        $('#search-keyword').keyup(SuggestSearch);
    });

    var Pointer = 0;
    $('.ui-tabs-nav-item').live("mouseenter", function () {
        if (Pointer == 0) {
            Pointer = 1;
            $('.ui-tabs-panel').hide();
            var tmp = $(this).attr('id').replace('nav-', '');
            $('#' + tmp).fadeIn(300);
            $('.ui-tabs-nav-item a').css('background-color', '#333');
            $(this).find('a').css('background-color', '#555');
            window.clearInterval(slideTimer);
        }
    });
    $('.ui-tabs-nav-item').live("mouseleave", function () {
        var s = $('.ui-tabs-nav-item').length;
        var count = 1;
        Pointer = 0;
        $('#nav-fragment- 1').css('background-color', '#333');
            slideTimer = setInterval(function () {
                $('.ui-tabs-nav-item a').css('background-color', '#333');
                var x = count++ % s + 1;
                $('#nav-fragment-' + x).find('a').css('background-color', '#555');
                $('.ui-tabs-panel').hide();
                $('#fragment-' + x).fadeIn(500);
            }, 2000)
    });

    $('#selectArea').live("click", function () {
        if ($('#allprovince option:selected').val() != -1) {
            var iprovince = $('#allprovince option:selected').val();
            var c_name = 'CK_CHECK_PROVINCE_OF_USER';
            $('#provinceid').val(iprovince);
            var expiredays = (30 * 365);
            setCookie(c_name, iprovince, expiredays);
            window.location.reload();
        }
        else {
            $('.splash-wrapper').css('display', 'block');
            $('body').css('overflow', 'auto');
        }
    });


    //AutoSilder();
});


//// delete cookie
//function Delete_Cookie(name, path, domain) {
//    if (getCookie(name))
//        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") +
//                                        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
//}
function StickyLeftSideBar() {
    var scroll_top = $(window).scrollTop();
    var _height = $('#site-body .sidebar').height();
    //var _offset_top = $('#site-wrapper .main #news-navigation').offset().top;
    var _offset_top = $('#site-wrapper .main').offset().top;
    var _offset_bottom = $('#site-footer').offset().top;

    if (scroll_top < _offset_top) {
        $('#site-body .sidebar').removeClass('sticky').removeClass('absolute');
    }
    else {
        if (scroll_top + _height < _offset_bottom) {
            $('#site-body .sidebar').addClass('sticky').removeClass('absolute');
        }
        else {
            $('#site-body .sidebar').removeClass('sticky').addClass('absolute');
        }
    }
}
function mOver(id) {
    $('.ui-tabs-panel').hide();
    var tmp = $('.ui-tabs-nav-item').attr('id').replace('nav-', '');
    $('#' + tmp).fadeIn(100);
    $('.ui-tabs-nav-item a').css('background-color', '#333');
    $(this).find('a').css('background-color', '#555');
    window.clearInterval(slideTimer);
}

function mOut(id) {
    var s = $('.ui-tabs-nav-item').length;
    var count = 1;
    Pointer = 0;
    $('#nav-fragment- 1').css('background-color', '#333');
    slideTimer = setInterval(function () {
        $('.ui-tabs-nav-item a').css('background-color', '#333');
        var x = count++ % s + 1;
        $('#nav-fragment-' + x).find('a').css('background-color', '#555');
        $('.ui-tabs-panel').hide();
        $('#fragment-' + x).fadeIn(500);
    }, 5000);

}
function AutoSilder() {
    var s = $('.ui-tabs-nav-item').length;
    var count = 1;
    $('#nav-fragment- 1').css('background-color', '#333');
    slideTimer = setInterval(function () {
        $('.ui-tabs-nav-item a').css('background-color', '#333');
        var x = count++ % s + 1;
        $('#nav-fragment-' + x).find('a').css('background-color', '#555');
        $('.ui-tabs-panel').hide();
        $('#fragment-' + x).fadeIn(500);
    }, 5000);
}

function submitSearchForm() {
    var kw = $('#search-keyword').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|\/|`|~|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    $(this).val(kw);
    var kwt = kw.trim().toLowerCase();
    if (kwt != '') {
        window.location = '/tim-kiem-tin-tuc?key=' + encodeURIComponent(kwt);
        return false;
    }
    return false;
}
function LoadMoreNewsHome(strurl) {
    var PagesIndex = parseInt($('#hdtxtPagesIndex').val()) + 1;
    dat = { intPagesIndex: PagesIndex };
    i = 0;
    $.ajax({
        type: "POST",
        url: strurl,
        dataType: "json",
        cache: false,
        data: dat,
        beforeSend: function () {
            $('#Loading_AJX').show();
            $('#ViewMore_AJX').hide();
        },
        success: function (data) {
            try {
                if (location.href.indexOf("/trang/") != -1)
                {
                    window.history.pushState('', '', "/" + location.href.substring(location.href.indexOf("tin-tuc"), location.href.indexOf("/trang/")) + '/trang/' + PagesIndex);
                } else
                {
                    window.history.pushState('', '', "/" + location.href.substring(location.href.indexOf("tin-tuc"), location.href.length) + '/trang/' + PagesIndex);
                }
            }
            catch (e) { window.location.hash = "#" + (Index) + "#" + $("#hfCatID").val(); }
            $("#news-list").append(data.strHtml);
            waitpiont = 0;
            StickyLeftSideBar();
            if (parseInt(data.intflags) == -1) {
                $('#Loading_AJX').hide();
                $('#ViewMore_AJX').hide();
            } else {
                $('#hdtxtPagesIndex').val(parseInt(PagesIndex));
                $('#Loading_AJX').hide();
                $('#ViewMore_AJX').show();
            }
        },
        error: function () {
        }
    });
}
function startTime() {
    //CallCommunityByJavascript();
    //setTimeout(function () { startTime() }, 60000);
}

function LoadsMoreSearch(strurl) {
    var PagesIndex = parseInt($('#hdPagesIndexSearch').val()) + 1;
    dat = { strPageIndex: PagesIndex };
    $.ajax({
        type: "POST",
        url: strurl,
        dataType: "json",
        cache: false,
        data: dat,
        beforeSend: function () {
            $('#Loading_AJX').show();
            $('#ViewMore_AJX').hide();
        },
        success: function (data) {
            if (data != null) {
                $("#ulSearchRessult").append(data.html);

                if (data.showpagsing == false) {
                    $('#Loading_AJX').hide();
                    $('#ViewMore_AJX').hide();
                } else {
                    $('#hdPagesIndexSearch').val(parseInt(PagesIndex));
                    $('#Loading_AJX').hide();
                    $('#ViewMore_AJX').show();
                }
            }
        },
        error: function () {
        }
    });
}
var hotNews;


function NextRecentFromCommunity() {
    debugger;
    hotNews = $("#hotNews").html();
    if (CUR_POS_RECENT_FROM_COMM == 0 || CUR_POS_RECENT_FROM_COMM + 4 == CounterLI)
        return;
    if ($("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM + 3).attr("id") == "hotNews")
    {
        hot = $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM + 3);
        next = $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM + 4);
        $(next).show();
       $(hot).remove();
        $(next).after("<li id='hotNews'  class=\"content\">"+hotNews+"</li>");
    }
    $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM).hide();
    CUR_POS_RECENT_FROM_COMM++;
    Pointer++;
}

function PrevRecentFromCommunity() {
    if (Pointer == 0)
        return;
    else {
        debugger;
        hotNews = $("#hotNews").html();
        if ($("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM+3).attr("id") == "hotNews") {
            hot = $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM+3);
            next = $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM +2);
            $(next).hide();
            $(hot).remove();
            $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM + 1).after("<li id='hotNews'  class=\"content\">" + hotNews + "</li>");
        }
        $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM - 1).show();
       // $("#ulformForum > li").eq(CUR_POS_RECENT_FROM_COMM + 3).hide();
        CUR_POS_RECENT_FROM_COMM--;
        Pointer--;
    }
}


//Search News Home
function SearchHomeNews() {
    var pagesize = 5;
    var kw = $('#search-keyword').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim().toLowerCase();
    if (kwt.length < 3) {
        $('#SuggestSearch').hide();
        return;
    }
    var Filter = "";
    dat = { strKey: kwt };
    $.ajax({
        type: "POST",
        url: "/tin-tuc/ajax/HomeNews/SearchNew",
        dataType: "json",
        cache: false,
        data: dat,
        success: function (data) {
            $(".search-suggestion").append(data.strHTMl);
        },
        error: function () {
        }
    });
}
//!!!!!! Suggest Province Home page 
function SuggestProvince(e) {
    if (e.which == 40) {
        if ($('#location-suggestion-wrapper ul li.selected').length == 0) {
            $('#location-suggestion-wrapper ul li.p-item:first').addClass('selected');
            $('#localtion-search').val($('#location-suggestion-wrapper ul li.p-item:first a').text());
        }
        else {
            var t = $('#location-suggestion-wrapper ul li.selected').next();
            $('#location-suggestion-wrapper ul li').removeClass('selected');
            t.addClass('selected');
            $('#localtion-search').val(t.find('a').text());
        }
        return;
    }
    else if (e.which == 38) {
        if ($('#location-suggestion-wrapper ul li.selected').length == 0) {
            $('#location-suggestion-wrapper ul li.p-item:last').addClass('selected');
            $('#localtion-search').val($('#location-suggestion-wrapper ul li.p-item:last a').text());
        }
        else {
            var t = $('#location-suggestion-wrapper ul li.selected').prev();
            $('#location-suggestion-wrapper ul li.selected').removeClass('selected');
            t.addClass('selected');
            $('#localtion-search').val(t.find('a').text());
        }
        return;
    }

    var kw = $('#localtion-search').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim();

    $.ajax({
        url: '/ajax/Common/SuggestProvince',
        type: 'GET',
        data: { keyword: kwt },
        cache: false,
        dataType: "html",
        success: function (d) {
            if (d == null || d == '') {
                $('#location-suggestion-wrapper').hide();
                return;
            }
            var html = '<ul class="location-list nolist clearfix" id="location-list">';
            html += d;
            html += '</ul>';
            $('#location-suggestion-wrapper').html('');
            $('#location-suggestion-wrapper').html(html);
            $('#location-suggestion-wrapper').show();
        },
        error: function (xmlHttpRequest) {
            if (xmlHttpRequest.readyState == 0 || xmlHttpRequest.status == 0)
                return;
            else {

            }
        }
    })
}

// !!!!!! Suggest Search Home page
var strPathCatImg = 'http://cdn.tgdd.vn/category/';
var strPathProImg = 'http://cdn.tgdd.vn/products/images/';
var strPathManuImg = 'http://cdn.tgdd.vn/brand/'
//var strSubmitsuggest = 0;
function SuggestSearch(e) {
    if (e.which == 40) {
        if ($('#SuggestSearch div.search-suggestion ul li.selected').length == 0) {
            $('#SuggestSearch div.search-suggestion ul li.li-item:first').addClass('selected');
            $('#search-keyword').val($('#SuggestSearch div.search-suggestion ul li.selected:first a.clearfix div.content div.name').text());
        }
        else {
            var t = $('#SuggestSearch div.search-suggestion ul li.selected').next();
            if (t.hasClass('li-group'))
                t = t.next();
            $('#SuggestSearch div.search-suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            $('#search-keyword').val(t.find('a.clearfix div.content div.name').text());
        }
        return;
    }
    else if (e.which == 38) {
        if ($('#SuggestSearch div.search-suggestion ul li.selected').length == 0) {
            $('#SuggestSearch div.search-suggestion ul li.li-item:last').addClass('selected');
            $('#search-keyword').val($('#SuggestSearch div.search-suggestion ul li.selected:last a.clearfix div.content div.name').text());
        }
        else {
            var t = $('#SuggestSearch div.search-suggestion ul li.selected').prev();
            if (t.hasClass('li-group'))
                t = t.prev();
            $('#SuggestSearch div.search-suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            if (t.find('a.clearfix div.content div.name').text() == '')
                $('#search-keyword').val(t.find('a.clearfix').text());
            else
                $('#search-keyword').val(t.find('a.clearfix div.content div.name').text());
        }
        return;
    }

    var kw = $('#search-keyword').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim().toLowerCase();
    if (kwt.length < 2) {
        $('#SuggestSearch').hide();
        return;
    }
    if (kwt.length > 2) {
        $.ajax({
            url: '/tim-kiem/aj/SuggestSearch',
            type: 'GET',
            data: { Key: kwt },
            dataType: 'json',
            cache: true,
            success: function (d) {
                strSubmitsuggest = 0;
                if (d == null) {
                    $('#SuggestSearch').hide();
                    return;
                }
                d = d.i;
                var rl = d.length;
                var html = '';
                var lpros = '';
                var lmanu = '';
                var lcat = '';
                var catetrack = {};
                html += '<div class="search-suggestion clearfix">';
                html += '<ul class="suggestion-list with-image nolist clearfix">';
                for (var j = 0; j < rl; j++) {
                    if (d[j][8] == '1') {
                        lpros += '<li class="li-item">';
                        if (d[j][0].trim() == "1783" || d[j][0].trim() == "1784") {
                            lpros += '<a href="/game-ung-dung-nhac' + d[j][7] + '" class="clearfix">';
                        }
                        else {
                            lpros += '<a href="' + d[j][7] + '" class="clearfix">';
                        }
                        lpros += '<div class="img">';
                        //lpros += '<img src="' + strPathProImg + d[j][0] + '/' + d[j][3] + '/' + d[j][5] + '" title="' + d[j][4] + '">';
                        lpros += '<img src="' + d[j][5] + '" title="' + d[j][4] + '">';
                        lpros += '</div>';
                        lpros += '<div class="content" style="position: relative;">';
                        lpros += '<div class="name">' + d[j][4] + '</div>';
                        if (d[j][10].toString() == "giasoc") {
                            lpros += '<span class=\"badge red\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">GIÁ SỐC</span>';
                        }
                        else if (d[j][10].toString() == "dattruoc") {
                            lpros += '<span class=\"badge green\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">ĐẶT TRƯỚC</span>';
                        }
                        else if (d[j][10].toString() == "camkettot") {
                            lpros += '<span class=\"badge commitment\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;"></span>';
                        }
                        else if (d[j][10].toString() == "kmlon") {
                            lpros += '<span class=\"badge orange\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">KM LỚN</span>';
                        }
                        else if (d[j][10].toString() == "hot") {
                            lpros += '<span class=\"badge red\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">HOT</span>';
                        }
                        else if (d[j][10].toString() == "moi") {
                            lpros += '<span class=\"badge\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">Mới</span>';
                        }
                        else {

                        }
                        if (d[j][10].toString() == "dattruoc") {
                            lpros += '<div id="' + d[j][3] + '_dattruoc" class="price">' + d[j][6] + '</div>';
                            var ctrlID = d[j][3].toString() + '_dattruoc';
                            LoadHomePreorderInfoSuggest(ctrlID, d[j][3]);
                        }
                        else if (d[j][10].toString() == "giasoc") {
                            lpros += '<div id="' + d[j][3] + '_giasoc" class="price">' + d[j][6] + '</div>';
                            var ctrlID = d[j][3].toString() + '_giasoc';
                            LoadHomeShockPriceInfoSuggest(ctrlID, d[j][3]);
                        }
                        else {
                            if (d[j][6].toString() == "Không kinh doanh") {
                                lpros += '<div class="price" style="color: #C1C1B7;">' + d[j][6] + '</div>';
                            }
                            else {
                                lpros += '<div class="price">' + d[j][6] + '</div>';
                            }
                        }
                        lpros += '<div class="note">' + d[j][9] + '</div>';
                        lpros += '</div>';
                        lpros += '</a>';
                        lpros += '</li>';
                    }
                }
                if (lpros != '')
                    html += lpros;
                html += '</ul>';
                html += '</div>';
                $('#SuggestSearch').html(html);
                $('#SuggestSearch').show();
            }
        })
    }
}
// CALLING AJAX
function POSTAjax(url, dat, befHandle, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        beforeSend: function () {
            befHandle();
        },
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

function GetAllFormData($f) {
    var dataElement = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea').each(function () {
        dataElement[$(this).attr('name')] = $(this).val();
    });
    $f.find('input[type=checkbox]').each(function () {
        dataElement[$(this).attr('name')] = $(this).attr('checked') == 'checked' ? true : false;
    });
    $f.find('select').each(function () {
        dataElement[$(this).attr('name')] = $(this).val();
        dataElement[$(this).attr('name') + 'text'] = $(this).find('option:selected').text();
    });
    var dataAttach = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea, select option:selected').each(function () {
        dataAttach = $.extend({}, dataAttach, $(this).data());
    });
    var dataReturn = $.extend({}, dataElement, dataAttach);
    return dataReturn;
}

var SUBMIT_FOOTER_SUBSCRIBE_FLAG = true;
function SubmitFooterSubscribe() {
    $('.subscribe-form').removeAttr('style');
    $('.subscribe-form .justadd').remove();
    if (!SUBMIT_FOOTER_SUBSCRIBE_FLAG)
        return;
    SUBMIT_FOOTER_SUBSCRIBE_FLAG = false;
    var data = GetAllFormData($('#frmFooterSubscribe'))
    POSTAjax('/tin-tuc/ajax/Common/SubmitFooterSubscirbe', data, function () { }, function (e) {
        if (e != null || e != '') {
            if (e.status == 1) {
                var html = '<div class="justadd">Cảm ơn bạn đã đăng ký. Chúng tôi sẽ sớm gửi những điều bất ngờ đến cho bạn.</div>';
                $('.subscribe-form').replaceWith(html);
            }
            else if (e.status == -1) {
                var html = '<ul class="justadd">';
                for (var i in e.errors) {
                    html += '<li>';
                    html += e.errors[i];
                    html += '</li>';
                }
                $('.subscribe-form').append(html).css('height', 'auto');
            }
            else {
                var html = '<div class="justadd">Chức năng đang được bảo trì, vui lòng thử lại sau</div>';
                $('.subscribe-form').append(html).css('height', 'auto');
            }
        }
        $('#dlding').fadeOut(1000);
        SUBMIT_FOOTER_SUBSCRIBE_FLAG = true;
    }, function () { }, true);
}
//local storage
function html5_storage_support() {  
    try {
        return 'localStorage' in window && window['localStorage'] == null;
    } catch (e) {
        return false;
    }
}
//CHECK TO SEE IF THE BROWSER IS COMPATIBLE 
if (!html5_storage_support) {
    alert("This Might Be a Good Time to Upgrade Your Browser or Turn On Jeavascript");
} else {

    //OPEN AND OR CREATE THE DATABASE ON THE USERS MACHINE
    

    function storeMyContact(v) {
        debugger;
        if (localStorage.getItem('listnewsviewck'))
        {
            var val = localStorage.getItem('listnewsviewck');
            var valarr1 = new Array();
            valarr1 = val.split('&');

            var valarr2 = new Array();
            valarr2 = v.split('&');
            var strvalue = '';
            if (valarr1.length > valarr2.length) {
                
                for (var i = 0; i < valarr1.length; i++)
                {
                    var va1 = new Array();
                    va1 = valarr1[i].split('=');
                    var y = 0;
                    for (var j = 0; j < valarr2.length; j++)
                    {
                        var va2 = new Array();
                        va2 = valarr2[j].split('=');
                        if (va1[0] == va2[0])
                        {
                            var str = va1[1];
                            if (str.indexOf(va2[1]) < 0)
                            {
                                str += "," + va2[1];
                            }
                            strvalue += va1[0] + "=" + str + "&";
                            y = 1;
                        }

                    }
                    if (y == 0)
                    {
                        strvalue += va1[0] + "=" + va1[1] + "&";
                    }
                }
            }
            else {
                for (var i = 0; i < valarr2.length; i++) {
                    var va1 = new Array();
                    va1 = valarr2[i].split('=');
                    var y = 0;
                    for (var j = 0; j < valarr1.length; j++) {
                        var va2 = new Array();
                        va2 = valarr1[j].split('=');
                        if (va1[0] == va2[0]) {
                            var str = va2[1];
                            if (str.indexOf(va1[1]) < 0) {
                                str += "," + va1[1];
                            }
                            strvalue += va1[0] + "=" + str + "&";
                            y = 1;
                        }

                    }
                    if (y == 0) {
                        strvalue += va1[0] + "=" + va1[1] + "&";
                    }
                }
            }
            if (strvalue.length > 0)
                strvalue = strvalue.substring(0, strvalue.length - 1);
            setHtmlStorage('listnewsviewck', strvalue, 172800);
        }
        else
        setHtmlStorage('listnewsviewck', v, 100800);
    }
    //GET STORED VALUES FROM KEYS TO DEFINE JAVASCRIPT VALUES OR DEFINE IF THEY DO NOT EXIST
    function getMyContact() {
        v = "";
        if (localStorage.getItem('listnewsviewck')) {
            v = localStorage.getItem('listnewsviewck');         
        }
        else {            
        }        
    }

    function clearLocal() {
        clear: localStorage.clear();
        return false;
    }
    function removeHtmlStorage(name) {
        localStorage.removeItem(name);
        localStorage.removeItem(name + '_time');
    }
    function setHtmlStorage(name, value, expires) {

        if (expires == undefined || expires == 'null') { var expires = 3600; } // default: 1h

        //var date = new Date();
        //var schedule = Math.round((date.setSeconds(date.getSeconds() + expires)) / 1000);

        localStorage.setItem(name, value);
        localStorage.setItem(name + '_time', expires);
    }

    function statusHtmlStorage(name) {

        var date = new Date();
        var current = Math.round(+date / 1000);

        // Get Schedule
        var stored_time = localStorage.getItem(name + '_time');
        if (stored_time == undefined || stored_time == 'null') { var stored_time = 0; }

        // Expired
        if (stored_time < current) {

            // Remove
            removeHtmlStorage(name);

            return 0;

        } else {

            return 1;
        }
    }
}