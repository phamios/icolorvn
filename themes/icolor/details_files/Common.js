/*
* Created       : Nguyen Duc Hien
* Created Date  : 25th Dec 2012
*/

var fileUpload = "";
var remainLength = 5;
var TGDD_CDN_VERSION = '';
var i = 0;
function Runplaceholder(str, textinput) {
    var arr = str.split(" ");
    textinput += arr[i] + " ";
    $('#search-keyword').attr('placeholder', textinput);
    i++;
    if (i < arr.length) {
        setTimeout("Runplaceholder('" + str + "','" + textinput + "')", 400);
    }
}

function FormatPhone(obj, val, event) {
    var pos = doGetCaretPosition(obj);
    val = val.replace(/-/g, '');
    if (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if ((keycode >= '48' && keycode <= '57') || (keycode >= '96' && keycode <= '105')) {
            if (val.length <= 4) {
                obj.value = val;
            }
            else if (val.length > 4 && val.length <= 7) {
                obj.value = val.substr(0, 4) + "-" + val.substr(4);
            }
            else if (val.length > 7) {
                obj.value = val.substr(0, 4) + "-" + val.substr(4, 3) + "-" + val.substr(7);
            }
        }
        else if (keycode == '37' || keycode == '38') {
            if (val.length <= 4) {
                obj.value = val;
                setCaretPosition(obj, pos);
            }
            else if (val.length > 4 && val.length <= 7) {
                obj.value = val.substr(0, 4) + "-" + val.substr(4);
                setCaretPosition(obj, pos);
            }
            else if (val.length > 7) {
                obj.value = val.substr(0, 4) + "-" + val.substr(4, 3) + "-" + val.substr(7);
                setCaretPosition(obj, pos);
            }
        }
    }
    else {
        //        if (val.length <= 4) {
        //            obj.value = val;
        //            setCaretPosition(obj, pos);
        //        }
        //        else if (val.length > 4 && val.length <= 7) {
        //            obj.value = val.substr(0, 4) + "-" + val.substr(4);
        //            setCaretPosition(obj, pos);
        //        }
        //        else if (val.length > 7) {
        //            obj.value = val.substr(0, 4) + "-" + val.substr(4, 3) + "-" + val.substr(7);
        //            setCaretPosition(obj, pos);
        //        }
    }
}

function doGetCaretPosition(ctrl) {
    var CaretPos = 0; // IE Support
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
        // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
    return (CaretPos);
}
function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

// !!!!! Onload
var cdn = 'http://s.tgdd.vn/v2013/Content/';
$(document).ready(function () {

    $('#search-keyword').focus(function () {
        $('#search-submit').addClass('active');
    });

    $('#search-keyword').blur(function () {
        $('#search-submit').removeClass('active');
    });

    //$('#location').click(function () {
    //    $('.list-province').show();
    //});

    $('#location').click(function () {
        if ($('.list-province').is(':visible')) {
            $('.list-province').hide();
            $('#ascrail2000').hide();
            $(this).removeClass('active');
        }
        else {
            $('.list-province').show();
            $('#ascrail2000').show();
            $(this).addClass('active');
        }
    });

    $(".fancypassforget").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'fade',
        'showCloseButton': false,
        'margin': 0,
        'padding': 0,
        'modal': true
    });

    $('#login').click(function (e) {
        var $target = $(e.target);
        if (!$target.is('#txtusername') && !$target.is('#txtpassword') && !$target.is('#submit-login') && !$target.is('#lost-password')) {
            if ($('.wrapp-frmRegis').is(':visible')) {
                $('.wrapp-frmRegis').hide();
            }
            if ($('.wrapp-frmLogin').is(':visible')) {
                $('.wrapp-frmLogin').hide();
            }
            else {
                $('.wrapp-frmLogin').show();
            }
        }
    });

    $('#register').click(function (e) {
        var $target = $(e.target);
        if (!$target.is('#txtemail') && !$target.is('#submit-register')) {
            if ($('.wrapp-frmLogin').is(':visible')) {
                $('.wrapp-frmLogin').hide();
            }
            if ($('.wrapp-frmRegis').is(':visible')) {
                $('.wrapp-frmRegis').hide();
            }
            else {
                $('.wrapp-frmRegis').show();
            }
        }
    });

    // tự động viết hoa txt
    /*$('input[name="txtFullName"]').live('keyup', function (e) {
        if (e.keyCode != 32 && e.keyCode != 8) {
            var string = $(this).val();
            var arr = string.split(" ");
            var arrresult = [];
            var result = "";
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].trim() != "" && arr[i].trim() != " ") {
                        arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                    }
                }
                for (var j = 0; j < arrresult.length; j++) {
                    result += arrresult[j] + " ";
                }
            }
            else {
                result = string.charAt(0).toUpperCase() + string.slice(1);
            }
            $(this).val($.trim(result));
        }
    });*/
    // tự động viết hoa sau khi ket thuc 1 tu
    $('input[name="txtFullName"]').live('keyup', function (e) {
        if (e.keyCode == 32) {
            var string = $(this).val();
            var arr = string.split(" ");
            var arrresult = [];
            var result = "";
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].trim() != "" && arr[i].trim() != " ") {
                        arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                    }
                }
                for (var j = 0; j < arrresult.length; j++) {
                    result += arrresult[j] + " ";
                }
            }
            else {
                result = string.charAt(0).toUpperCase() + string.slice(1);
            }
            $(this).val(result);
        }
    });
    $('input[name="txtFullName"]').live('blur', function (e) {
        debugger;
        var string = $(this).val();
        var arr = string.split(" ");
        var arrresult = [];
        var result = "";
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].trim() != "" && arr[i].trim() != " ") {
                    arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                }
            }
            for (var j = 0; j < arrresult.length; j++) {
                result += arrresult[j] + " ";
            }
        }
        else {
            result = string.charAt(0).toUpperCase() + string.slice(1);
        }
        $(this).val(result);
    });
    // Không nhập chữ trong ô nhập số điện thoại
    $('input[name="txtphone"], input[name="txtMobile"], input[name="txtPhoneNumber"], input[name="tel"]').live('keypress', function (e) {
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('input[name="txtphone"], input[name="txtMobile"], input[name="txtPhoneNumber"], input[name="tel"], input[name="txtNumber"]').live("cut copy paste", function (e) {
        e.preventDefault();
    });

    _get_location();
    //LoadFreeCampaign();
    var splash = $('.splash-wrapper');
    if (splash.css('display') == 'block') {
        $('body').css('position', 'relative');
    }
    //LoadProvince();
    $('#site-header #user-zone .user-location a.location').click(function () {
        $('#site-header #user-zone .user-location .select-location-wrapper').css('display', 'block');
        $('#localtion-search').focus();
    });

    $('#site-header #user-zone .user-location .select-location-wrapper').mouseover(function () {
        $('#site-header #user-zone .user-location .select-location-wrapper').css('display', 'block');
    }).mouseout(function () {
        $('#site-header #user-zone .user-location .select-location-wrapper').css('display', 'none');
    });

    $('#site-header #site-search .form .input-wrapper input').click(function () {
        $('#site-header #site-search .form .search-suggestion-wrapper').css('display', 'block');
    });

    $('#site-header #site-search .form .search-suggestion-wrapper').mouseover(function () {
        $('#site-header #site-search .form .search-suggestion-wrapper').css('display', 'block');
    }).mouseout(function () {
        $('#site-header #site-search .form .search-suggestion-wrapper').css('display', 'none');
    });

    $('#site-header-n #search-site .wrapp-input input').click(function () {
        $('#site-header-n #search-site .search-suggestion-wrapper').css('display', 'block');
    });

    $('#site-header-n #search-site .search-suggestion-wrapper').mouseover(function () {
        $('#site-header-n #search-site .search-suggestion-wrapper').css('display', 'block');
    }).mouseout(function () {
        $('#site-header-n #search-site .search-suggestion-wrapper').css('display', 'none');
    });

    // Product list item's information slide top on hover		
    $('.product-list-wrapper .product-list li:not(.double-col)').live({
        mouseenter:
            function () {
                $(this).find('.more-detail').animate({
                    'top': 0
                }, {
                    duration: 500,
                    queue: false,
                    complete: function () {
                    }
                });
            },
        mouseleave:
            function () {
                $(this).find('.more-detail').animate({
                    'top': 220
                }, {
                    duration: 500,
                    queue: false,
                    complete: function () {
                    }
                });
            }
    });

    $("#SuggestSearch .search-suggestion ul li.selected a").bind("keypress", function (e) {
        if (e.keyCode == 13) {
            window.location = $('#SuggestSearch div.search-suggestion ul li.selected a').attr('href');
        }
    });

    // Fix double click on navigation on tablet
    $('#site-body .navigation-banner .navigation ul li a').mouseenter(function () {
        $(this).addClass('hover');
    }).mouseleave(function () {
        $(this).removeClass('hover');
    })

    $('#ads-name, #ads-submit').click(function () {
        CreateClassified();
        if ($(window).scrollTop() < 300) {
            var y = $(window).scrollTop();  // current y position on the page
            $('#form-wrapper .ads-form-wrapper').fadeIn(300);
            var formwrapp = $('#form-wrapper .ads-form-wrapper').height();
            $(window).scrollTop(y + formwrapp - $(window).scrollTop()).fadeIn(500);
        }
        else {
            $('#form-wrapper .ads-form-wrapper').fadeIn(300);
        }

        if ($('#select-category :selected').text() == "") {
            $('#select-category').val(-1);
            $("#select-category option[value=-1]").attr("selected", "selected");
        }

        var IdProvince = getCookie('CK_CHECK_PROVINCE_OF_USER');
        if ($('#select-location :selected').text() == "") {
            $('#select-location').val(IdProvince);
            $("#select-location option[value=" + IdProvince + "]").attr("selected", "selected");
        }
    });

    $('#cancel-ads').live("click", function () {
        $('#select-category option[value="-1"]').attr("selected", "selected");
        //$('#title').val('');
        $('#query').val('');
        $('#price').val('');
        $('#content').val('');
        $('#phone').val('');
        $('#email').val('');
        //var liIds = $('#thumbnail li img').map(function (i, n) {
        //    return $(n).attr('id');
        //}).get().join(',');
        var liIds = $('#thumbnail li img').map(function (i, n) {
            RemoveImage($(n).attr('id'));
        });
        $('.ads-form-wrapper').fadeOut();
    });

    $('#price').live('keypress', function (e) {
        //var e = event || evt; // for trans-browser compatibility
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('#phone').live('keypress', function (e) {
        //var e = event || evt; // for trans-browser compatibility
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('#phone').live('blur', function (e) {
        var num = $.trim($('#phone').val());
        if (num == '')
            return;
        //if (num.indexOf(0) == 0 || num.indexOf(0) == 3)
        //num = setCharAt(num, num.indexOf(0), "");

        $('#phone').val(num);
    });

    $('#price').live('blur', function () {
        ValidateAndFormatNumber(this);
        //$('#price').val($('#price').val().replace('₫',''));
        //$('#price').val(ValidateAndFormatNumber(this) + ' ₫');
    });

    $('ul.location-list li a').live("click", function () {
        $('#provinceid').val($(this).attr('data-id'));
        var provinceId = $(this).attr('data-id');
        var c_name = 'CK_CHECK_PROVINCE_OF_USER';
        var expiredays = (30 * 365);
        CreateCookie(c_name, provinceId, expiredays);
        window.location.reload();
    });

    $('ul.l-location li a').live("click", function () {
        $('#provinceid').val($(this).attr('data-id'));
        var provinceId = $(this).attr('data-id');
        var c_name = 'CK_CHECK_PROVINCE_OF_USER';
        var expiredays = (30 * 365);
        CreateCookie(c_name, provinceId, expiredays);
        window.location.reload();
    });

    $('#localtion-search').live('keypress', function (event) {
        if (event.which == '13') {
            var provinceId = $('#location-suggestion-wrapper ul li.selected a').attr('data-id').trim();
            $('#provinceid').val($('#location-suggestion-wrapper ul li.selected a').attr('data-id').trim());
            var c_name = 'CK_CHECK_PROVINCE_OF_USER';
            var expiredays = (30 * 365);
            CreateCookie(c_name, provinceId, expiredays);
            window.location.reload();
        }
    });

    $('#selectArea').live("click", function () {
        if ($('#allprovince option:selected').val() != -1) {
            var iprovince = $('#allprovince option:selected').val();
            var c_name = 'CK_CHECK_PROVINCE_OF_USER';
            $('#provinceid').val(iprovince);
            var expiredays = (30 * 365);
            CreateCookie(c_name, iprovince, expiredays);
            window.location.reload();
        }
        else {
            $('.splash-wrapper').css('display', 'block');
            $('body').css('overflow', 'auto');
        }
    });

    //$('#user-zone .user-account-wrapper').hover(function (e) {
    //    if ($('#user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display") == "none") {
    //        $('#user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display", "block");
    //    }
    //    else {
    //        $('#user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display", "none");
    //    }
    //});


    $(".user-account-wrapper").live('mouseover', function () {
        $(this).find('.user-avatar .user-menu-wrapper').css("display", "block");
    }).live('mouseout', function () {
        $(this).find('.user-avatar .user-menu-wrapper').css("display", "none");
    });

    $(".forgetpass").fancybox({
        'width': 830,
        'height': 535,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'showCloseButton': false,
        'autoScale': false,
        'margin': 0,
        'padding': 0,
        'modal': true
    });
    //CallSuggestPerTimer(1000);
});

var GET_LOCATION_FLAG2 = true;
function LoadLocation() {
    if (GET_LOCATION_FLAG2) {
        GET_LOCATION_FLAG2 = false;
        var ck = getCookie('CK_CHECK_PROVINCE_OF_USER');
        $.ajax({
            url: '/aj/Common/GetLocation/?v=' + ck + '_' + TGDD_CDN_VERSION,
            type: 'GET',
            cache: true,
            dataType: 'html',
            beforeSend: function () {
                $('.hloading').show();
            },
            success: function (e) {
                GET_LOCATION_FLAG2 = true;
                if (e != "") {
                    var _pn = $(e)[1].innerHTML;
                    var _d = $(e).find('> li');
                    $('.l-location').html(_d);
                    $('#location span.block').text(_pn);

                    $('.hloading').hide();
                }
                else {
                    LoadLocation();
                }
            },
            error: function () {
                $('.hloading').hide();
            }
        })
    }

    //$('.l-location').getNiceScroll().resize();
}

var beginTime = 0;
var endTime = 0;
function CheckTimer() {
    var d = new Date();
    if (beginTime == 0 && endTime == 0) {
        beginTime = d.getTime();
    }
    return;
}

function SetTimeer(t) {
    CallSuggestPerTimer(t);
}


function CallSuggestPerTimer(t) {
    setTimeout(function () {
        var s = new Date();
        var myTime = s.getTime();
        if (beginTime == endTime) {
            if (myTime - endTime < 750 && myTime - endTime >= 0) {
                SetTimeer(t);
                return;
            }
            else if (myTime - endTime >= 750) {
                CallSuggest();
                return;
            }
        }
        else
            return;
    }, t);
}

var FLAG_CREATE_CLASSIFIED = true;
function CreateClassified() {
    if (FLAG_CREATE_CLASSIFIED == false) return;
    $.ajax({
        url: '/aj/Home/CreateClassifiedAds/',
        type: "GET",
        cache: false,
        data: {},
        beforeSend: function () {
            $('.loader-create-classified').show();
        },
        success: function (result) {
            $('.loader-create-classified').hide();
            if (result != null) {
                $('.ads-form-wrapper').html(result);
                FLAG_CREATE_CLASSIFIED = true;
            }
        },
        error: function (d) {
            $('.loader-create-classified').hide();
        }
    })
}

var FLAG_GET_NEW_CLASSIFIED = true;
function GetNewClassifieds() {
    var provinceId = parseInt(getCookie('CK_CHECK_PROVINCE_OF_USER'));
    if (FLAG_GET_NEW_CLASSIFIED == false)
        return;
    FLAG_GET_NEW_CLASSIFIED = false;
    $.ajax({
        url: '/aj/Home/GetNewListClassifieds/',
        type: "GET",
        cache: false,
        data: { ProvinceId: provinceId },
        beforeSend: function () {
        },
        success: function (result) {
            if (result != null) {
                $('ul.ads-list').animate({ opacity: 0.5 }, 300).fadeOut(10);
                $('ul.ads-list').css('height', $('ul.ads-list').height());
                $('ul.ads-list').html(result);
                $('ul.ads-list').animate({ opacity: 1 }, 300).fadeIn(300);
                FLAG_GET_NEW_CLASSIFIED = true;
            }
        },
        error: function (d) {
        }
    })
}
var FLAG = true;
function ReloadDataBaseScreen() {
    debugger;
    if (SCREEN_RESOLUTION == 1024) {
        $('ul.product-list > li').eq(9).hide();
        $('ul.product-list > li').eq(10).hide();
        $('ul.product-list > li').eq(11).hide();
        $('ul.product-list > li').eq(15).hide();
        $('ul.product-list > li').eq(19).hide();
    }
    else {
        $('ul.product-list > li').eq(9).show();
        $('ul.product-list > li').eq(10).show();
        $('ul.product-list > li').eq(11).show();
        $('ul.product-list > li').eq(15).show();
        $('ul.product-list > li').eq(19).show();
    }
    return;
    SCREEN_RESOLUTION = $.extend({}, SCREEN_RESOLUTION, { resolution: SCREEN_RESOLUTION, ProvinceId: _provinceId })
    if (FLAG == false)
        return;
    FLAG = false;
    POSTAjax(
           '/aj/Home/ReloadDataBaseScreen/',
           SCREEN_RESOLUTION,
          BeforeSendAjax,
           function (e) {
               $('#dlding').fadeOut(300);
               if (e != null) {
                   $('.product-list').html(e);
                   $('.product-list li.shock-price').each(function () {
                       try {
                           LoadHomeShockPriceInfo($(this), $(this).data('id'));
                       } catch (e) {

                       }
                   });

                   $('.product-list li.preorder').each(function () {
                       try {
                           LoadHomePreorderInfo($(this), $(this).data('id'));
                       } catch (e) {

                       }
                   });

                   $('.product-list li.priceforcast').each(function () {
                       try {
                           LoadHomePriceForcastInfo($(this), $(this).data('id'));
                       } catch (e) {

                       }
                   });

               }
           },
           function () { },
           true
           );
    FLAG = true;
}

function LoadProvince() {
    if (FLAG == false)
        return;
    FLAG = false;
    POSTAjax(
           '/aj/Home/GenerateProvinceOnLoadPage/',
           _data_provinceId,
          BeforeSendAjax,
           function (e) {
               $('#dlding').fadeOut(300);
               if (e != null) {
                   $('ul.location-list').html($(e)[0]);
                   $('#block-location').text($(e)[1]);
                   FLAG = true;
               }
           },
           function () { },
           true
           );
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

// Calling a AJAX request with 'POST' type and JSON data type
function POSTAjaxJSON(url, dat, befHandle, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        cache: false,
        beforeSend: function () {
            befHandle();
        },
        complete: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

// BeforeSendAjax
function BeforeSendAjax() {
    $('#dlding').show();
}

// ErrorAjax
function ErrorAjax() {
    // Not implemented yet
}

function CallAjaxPost(url, dat, befHandle, sucHandle, errHandle, asy) {
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

var click = false;
$('#post-ads').live("click", function () {
    $('#post-ads').attr('disabled', 'disabled');

    click = true;
    var options = {
        //target: '#showmessage',   // target element(s) to be updated with server response 
        beforeSubmit: showRequest,  // pre-submit callback 
        success: showResponse,  // post-submit callback 
        //clearForm: true        // clear all form fields after successful submit 

        // other available options: 
        //url:       url         // override for form's 'action' attribute 
        //type:      type        // 'get' or 'post', override for form's 'method' attribute 
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
        //resetForm: true        // reset the form after successful submit 

        // $.ajax options can be used here too, for example: 
        //timeout:   3000 
    };

    // bind to the form's submit event 
    //$('#form-ads').submit(function () {

    // inside event callbacks 'this' is the DOM element so we first 
    // wrap it in a jQuery object and then invoke ajaxSubmit 
    if (PrepareSubmit(click) == true) {
        $('#Ispost').val(0);

        $('#form-ads').ajaxSubmit(options);
    }

    // !!! Important !!! 
    // always return false to prevent standard browser submit and page navigation 
    //return false;
    //});
});

/*/
 * -------------------------- Functions Use for Post New ClassifiedAds --------------------------/
 */
function showRequest(formData, jqForm, options) {
    // formData is an array; here we use $.param to convert it to a string to display it 
    // but the form plugin does this for you automatically when it submits the data 
    var queryString = $.param(formData);
    $('#form-ads .form-wrapper').append('<div id="fade-add-classifieds"><div class="div-loading">Vui lòng chờ trong giây lát!</div></div>');
    $('#fade-add-classifieds').css({ 'filter': 'alpha(opacity=80)' }).fadeIn();
    // jqForm is a jQuery object encapsulating the form element.  To access the 
    // DOM element for the form do this: 
    // var formElement = jqForm[0]; 

    //alert('About to submit: \n\n' + queryString);

    // here we could return false to prevent the form from being submitted; 
    // returning anything other than false will allow the form submit to continue 
    return true;
}

function showResponse(response) {
    console.log(response);
    if (response == "fail_when_post_Ads") {

        //Remove all image have already uploaded
        $('#thumbnail li').find("img").each(function () {
            var imgId = $(this).attr('id');
            RemoveImage(imgId);
        });

        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Quá trình đăng tin xảy ra lỗi.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });

        return;
    }

    if (response == -1) {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Tiêu đề tin đăng không hợp lệ.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == -2) {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Giá bán không hợp lệ.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == -3) {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Nội dung tin đăng không hợp lệ. \nTối thiếu từ 20 ký tự trở lên");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == -4) {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Số điện thoại không hợp lệ.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == -5) {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Họ tên không hợp lệ. \nTối thiếu từ 05 ký tự trở lên");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == "Wrong capcha") {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Mã xác nhận không đúng.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == "Null capcha") {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Bạn chưa nhập mã xác nhận.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == "ip detected maximum") {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Bạn đã đăng tin vượt quá số lần cho phép trên một ngày.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == "ip detected") {
        $('#divcapcha').show();
        $('#showcap').val(true);
        $('#post-ads').removeAttr('disabled', 'disabled');
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response == "denied") {
        $('#post-ads').removeAttr('disabled', 'disabled');
        alert("Bạn không thể đăng tin rao vặt trên website thegioididong vì đăng quá nhiều tin spam.");
        $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
            $('#fade-add-classifieds').remove();
        });
        return;
    }

    if (response) {
        $('#post-ads').removeAttr('disabled', 'disabled');
        $('#showmessage').css({ 'float': 'left' });
        $('#showmessage').addClass('clearfix');
        $('#showmessage').html('');
        $('#showmessage').append(RenderMessage(response));
    }

    $('#post-ads').removeAttr('disabled', 'disabled');
    $('.ads-form-wrapper').slideUp('fast');
    $('#select-category option[value="-1"]').attr("selected", "selected");
    //$('#title').val('');
    $('#query').val('');
    $('#price').val('');
    $('#content').val('');
    $('#phone').val('');
    $('#email').val('');
    $('#thumbnail li').find("img").each(function () {
        $(this).parent().remove();
        $(this).remove();
    });
    $('#form-ads .form-wrapper #fade-add-classifieds').fadeOut(function () {
        $('#fade-add-classifieds').remove();
    });
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function RenderMessage(id) {
    var html = '';
    html = '<div id="divMessage">';
    html += 'Cám ơn bạn đã đăng tin Rao vặt tại thegioididong.';
    html += '<div>Mã tin đăng của bạn là:<strong> ' + id + '.</strong></div>';
    html += '<div>(Tin đăng của qúy khách sẽ được hiển thị khoảng 30 phút sau).</div>';
    html += '<div>Để xác thực tin đăng vui lòng nhắn tin theo cú pháp: </div>';
    html += '<div><strong>XN</strong> <strong>' + id + '</strong> gửi <strong>1900 561 292</strong> (Phí nhắn tin là 1000đ)</di>';
    html += '</div>';
    return html;
}

function PrepareSubmit() {
    if (click) {
        $form = $('#form-ads');
        if ($form.find('select[name="select-category"]').val() == -1) {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Sản phẩm</span>');
            $form.find('select[name="select-category"]').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        }
        else {
            $('#mess-rule').html('');
        }

        if ($form.find('select[name="select-location"]').val() == -1) {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Tỉnh/Thành</span>');
            $('.require-field').show();
            $form.find('select[name="select-location"]').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        } else {
            $('#mess-rule').html('');
        }

        if ($.trim($form.find('input[name="query"]').val()) == '') {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Tiêu đề</span>');
            $("#title-require").removeClass('hidden');
            $("#title-require").addClass("require-field");
            $form.find('input[name="query"]').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        } else {
            if ($("#title-require").hasClass('require-field')) {
                $("#title-require").removeClass('require-field');
                $("#title-require").addClass('hidden');
                $('#mess-rule').html('');
            }
        }

        if ($.trim($form.find('input[name="price"]').val()) == '' || $.trim($form.find('input[name="price"]').val()).replace('/,/gi', '') <= 0) {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Giá</span>');
            $("#price-require").removeClass('hidden');
            $("#price-require").addClass("require-field");
            $form.find('input[name="price"]').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        } else {
            if ($("#price-require").hasClass('require-field')) {
                $("#price-require").removeClass('require-field');
                $("#price-require").addClass('hidden');
                $('#mess-rule').html('');
            }
        }

        if ($.trim($('#content').val()) == '') {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Nội dung</span>');
            $("#content-require").removeClass('hidden');
            $("#content-require").addClass("require-field");
            $('#content').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        } else {
            if ($("#content-require").hasClass('require-field')) {
                $("#content-require").removeClass('require-field');
                $("#content-require").addClass('hidden');
                $('#mess-rule').html('');
            }
        }

        if ($.trim($form.find('input[name="nameCustomer"]').val()) == '') {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Họ tên</span>');
            $("#name-require").removeClass('hidden');
            $("#name-require").addClass("require-field");
            $form.find('input[name="nameCustomer"]').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        } else {
            if ($("#name-require").hasClass('require-field')) {
                $("#name-require").removeClass('require-field');
                $("#name-require").addClass('hidden');
                $('#mess-rule').html('');
            }
        }

        var valid = true;
        regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
        if (!regPhone.test($form.find('input[name="phone"]').val().replace(/-/gi, ''))) {
            valid = false;
        }
        if ($.trim($form.find('input[name="phone"]').val()) == '' || !valid) {
            $('#mess-rule').append('<span style="color:red">Bạn vui lòng điền đầy đủ thông tin cần thiết: Số điện thoại</span>');
            $("#phone-require").removeClass('hidden');
            $("#phone-require").addClass("require-field");
            $form.find('input[name="phone"]').focus();
            $('#post-ads').removeAttr('disabled');
            return false;
        } else {
            if ($("#phone-require").hasClass('require-field')) {
                $("#phone-require").removeClass('require-field');
                $("#phone-require").addClass('hidden');
                $('#mess-rule').html('');
            }
        }

        if ($.trim($form.find('input[name="email"]').val()) != '') {
            if (!ValidateEmail($.trim($form.find('input[name="email"]').val()))) {
                $('#mess-rule').append('<span style="color:red">Email không hợp lệ!</span>');
                $('#post-ads').removeAttr('disabled');
                return false;
            }
        }
        else {
            $('#mess-rule').html('');
        }

        if ($('#divcapcha').is(':visible')) {
            if ($.trim($('#capchavalue').val()) == "") {
                $('#mess-rule').append('<span style="color:red">Bạn chưa nhập mã xác nhận!</span>');
                $('#post-ads').removeAttr('disabled');
                return false;
            }
            else {
                $('#mess-rule').html('');
            }
        }


        if ($("#rule-ads").prop('checked') == false) {
            $('#post-ads').removeAttr('disabled');
            $('#mess-rule').append('<span style="color:red">Bạn phải đồng ý với các điều khoản đăng tin của chúng tôi.</span>');
            return false;
        }
        else {
            $('#mess-rule').html('');
        }


        $('#thumbnail li').find("img").each(function () {
            if (fileUpload != "") fileUpload += ";";
            fileUpload += $(this).attr("name");
        });
        $('#lUpimage').val(fileUpload);
        return true;
    }
}
/**
 *-------------------------- End functions for post new classifiedAds --------------------------/
**/


/**
 *-------------------------- Some function to validate input --------------------------/
**/
// !!!!! Validate an email
function ValidateEmail(input) {
    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if (!emailRegex.test(input))
        return false;
    return true;
}
// !!!!! Validate an phone
function ValidatePhoneNumber(phone) {
    var regEx = new RegExp(/^((09[0-9]{8})|(01[0-9]{9}))$/);
    if (!regEx.test(phone)) {
        return false;
    }
    return true;
}
// !!!!! Validate input Number
function ValidateAndFormatNumber(NumberTextBox) {
    var min = 0;
    max = 999999999;
    if (NumberTextBox.value == "") return;

    UnFormatNumber(NumberTextBox);

    var IsFound = /^-?\d+\.{0,1}\d*$/.test(NumberTextBox.value);
    if (!IsFound) {
        //alert("Not a number");
        //NumberTextBox.value = FormatNumbers(min,min,max);
        NumberTextBox.focus();
        NumberTextBox.select();
        return;
    }

    if (isNaN(parseFloat(NumberTextBox.value))) {
        //alert("Number exceeding float range");
        //NumberTextBox.value = FormatNumbers(max,min,max);
        NumberTextBox.focus();
        NumberTextBox.select();
    }
    NumberTextBox.value = FormatNumbers(NumberTextBox.value, min, max);
    //return FormatNumbers(NumberTextBox.value, min, max);
    //    NumberTextBox.value = FormatNumbers(NumberTextBox.value,2,',','.','','','-','',min,max);
}

// !!!!!! Format numbers with commas
function FormatNumbers(fnum, min, max) {
    if (fnum < min)
        fnum = min.toString();
    if (fnum > max)
        fnum = max.toString();
    var orgfnum = fnum;
    var flagneg = false;

    //    if (fnum.charAt(0) == "-") {
    //        flagneg = false;
    //        fnum = fnum.substr(1, fnum.length - 1);
    //    }    
    psplit = fnum.split(".");

    var cnum = psplit[0],
        parr = [],
        j = cnum.length,
        m = Math.floor(j / 3),
        n = cnum.length % 3 || 3;

    // break the number into chunks of 3 digits; first chunk may be less than 3
    for (var i = 0; i < j; i += n) {
        if (i != 0) { n = 3; }
        parr[parr.length] = cnum.substr(i, n);
        m -= 1;
    }

    // put chunks back together, separated by comma
    fnum = parr.join(",");

    // add the precision back in
    //if (psplit[1]) {fnum += "." + psplit[1];}
    if (orgfnum.indexOf(".") != -1) {
        fnum += "." + psplit[1];
    }

    if (flagneg == true) {
        fnum = "-" + fnum;
    }

    return fnum;
}

// !!!!!! Replace commas
function UnFormatNumber(obj) {
    if (obj.value == "") return;

    obj.value = obj.value.replace(/,/gi, "");
}

// !!!!!! Suggest Search Home page
var strPathCatImg = 'http://cdn.tgdd.vn/category/';
var strPathProImg = 'http://cdn.tgdd.vn/products/images/';
var strPathManuImg = 'http://cdn.tgdd.vn/brand/'
//var strSubmitsuggest = 0;
function SuggestSearch(e) {
    var d = new Date();
    endTime = d.getTime();
    beginTime = endTime;
    if (e.which == 40) {
        if ($('#SuggestSearch div.search-suggestion ul li.selected').length == 0) {
            $('#SuggestSearch div.search-suggestion ul li.li-item:first').addClass('selected');
            //$('#search-keyword').val($('#SuggestSearch div.search-suggestion ul li.selected:first a.clearfix div.content div.name').text());
        }
        else {
            var t = $('#SuggestSearch div.search-suggestion ul li.selected').next();
            if (t.hasClass('li-group'))
                t = t.next();
            $('#SuggestSearch div.search-suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            //$('#search-keyword').val(t.find('a.clearfix div.content div.name').text());
        }
        return;
    }
    else if (e.which == 38) {
        if ($('#SuggestSearch div.search-suggestion ul li.selected').length == 0) {
            $('#SuggestSearch div.search-suggestion ul li.li-item:last').addClass('selected');
            //$('#search-keyword').val($('#SuggestSearch div.search-suggestion ul li.selected:last a.clearfix div.content div.name').text());
        }
        else {
            var t = $('#SuggestSearch div.search-suggestion ul li.selected').prev();
            if (t.hasClass('li-group'))
                t = t.prev();
            $('#SuggestSearch div.search-suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            //if (t.find('a.clearfix div.content div.name').text() == '')
            //    $('#search-keyword').val(t.find('a.clearfix').text());
            //else
            //    $('#search-keyword').val(t.find('a.clearfix div.content div.name').text());
        }
        return;
    }
    SetTimeer(1);
}

function CallSuggest() {
    var kw = $('#search-keyword').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim().toLowerCase();
    if (kwt.length < 2) {
        $('#SuggestSearch').hide();
        return;
    }
    if (kwt.length >= 2) {
        $.ajax({
            url: '/tim-kiem/aj/SuggestSearch',
            type: 'GET',
            data: { Key: kwt },
            dataType: 'json',
            cache: true,
            success: function (d) {
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
                            lpros += '<a href="/game-ung-dung' + d[j][7] + '" class="clearfix">';
                        }
                        else {
                            lpros += '<a href="' + d[j][7] + '" class="clearfix">';
                        }
                        lpros += '<div class="img">';
                        lpros += '<img src="' + strPathProImg + d[j][0] + '/' + d[j][3] + '/' + d[j][5] + '" title="' + d[j][4] + '">';
                        lpros += '</div>';
                        lpros += '<div class="content" style="position: relative;">';
                        lpros += '<div class="name">' + d[j][4] + '</div>';
                        if (d[j][10].toString() == "giasoc") {
                            lpros += '<span class=\"badge red\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">GIÁ SỐC</span>';
                        }
                        else if (d[j][10].toString() == "dattruoc") {
                            lpros += '<span class=\"badge green\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">ĐẶT TRƯỚC</span>';
                        }
                        else if (d[j][10].toString() == "dudoangia") {
                            lpros += '<span class=\"badge green\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">DỰ ĐOÁN GIÁ</span>';
                        }
                        else if (d[j][10].toString() == "camkettot") {
                            lpros += '<span class=\"badge commitment\" style="position: absolute; color: #fff; font-size: 10px; height: 59px;"></span>';
                        }
                        else if (d[j][10].toString() == "kmlon") {
                            lpros += '<span class=\"badge orange\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">KM LỚN</span>';
                        }
                        else if (d[j][10].toString() == "hot") {
                            lpros += '<span class=\"badge bestsell\" style="position: absolute; color: #fff; font-size: 10px; height: 59px;">HOT</span>';
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
                hasSearch = 0;
            }
        })
    }
}

function GoToHelp() {
    location.href = "http://thegioididong.com/ho-tro-khach-hang";
}

// !!!!!! Submit Search Form
function submitSearchForm() {
    var strkeydtdd = keydtdd.split(",");
    var strkeylaptop = keylaptop.split(",");
    var strkeymaytinhbang = keymaytinhbang.split(",");
    var strkeymayanhso = keymayanhso.split(",");
    var strkeyphukien = keyphukien.split(",");
    var strgame = game.split(",");
    var strungdung = ungdung.split(",");
    var kw = $('#search-keyword').val().replace(/:|;|!|@|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|\/|`|~|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, ' ');
    var kwt = kw.trim();
    if ($('#SuggestSearch div.search-suggestion ul li.selected').length != 0) {
        $('#SuggestSearch div.search-suggestion ul li.selected').each(function () {
            var link = $(this).children('a').attr('href');
            window.location = link;
        });
    }
    else {
        if (kwt != '' & kwt.length >= 2) {
            //Điện thoại di động, DTDD, điện thoại, smartphone, điện thoại 2 sim, giá điện thoại
            for (var i = 0; i < strkeydtdd.length; i++) {
                if (kwt.toLowerCase().trim() == strkeydtdd[i].toLowerCase().trim()) {
                    window.location = '/dtdd';
                    return false;
                }
            }
            for (var i = 0; i < strkeylaptop.length; i++) {
                if (kwt.toLowerCase().trim() == strkeylaptop[i].toLowerCase().trim()) {
                    window.location = '/laptop';
                    return false;
                }
            }
            for (var i = 0; i < strkeymaytinhbang.length; i++) {
                if (kwt.toLowerCase().trim() == strkeymaytinhbang[i].toLowerCase().trim()) {
                    window.location = '/may-tinh-bang';
                    return false;
                }
            }
            for (var i = 0; i < strkeymayanhso.length; i++) {
                if (kwt.toLowerCase().trim() == strkeymayanhso[i].toLowerCase().trim()) {
                    window.location = '/may-anh-so';
                    return false;
                }
            }
            for (var i = 0; i < strkeyphukien.length; i++) {
                if (kwt.toLowerCase().trim() == strkeyphukien[i].toLowerCase().trim()) {
                    window.location = '/phu-kien';
                    return false;
                }
            }
            for (var i = 0; i < strgame.length; i++) {
                if (kwt.toLowerCase().trim() == strgame[i].toLowerCase().trim()) {
                    window.location = '/game-ung-dung';
                    return false;
                }
            }
            for (var i = 0; i < strungdung.length; i++) {
                if (kwt.toLowerCase().trim() == strungdung[i].toLowerCase().trim()) {
                    window.location = '/game-ung-dung';
                    return false;
                }
            }
            if (kwt.toLowerCase().indexOf("khuyen mai") == 0 || kwt.toLowerCase().indexOf("khuyến mãi") == 0) {
                window.location = '/tin-tuc-dien-dan/khuyen-mai/31';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sieu thi") == 0 || kwt.toLowerCase().indexOf("siêu thị") == 0) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }

            if (kwt.toLowerCase().trim() == "điện thoại di động" || kwt.toLowerCase().trim() == "dtdd" || kwt.toLowerCase().trim() == "điện thoại" || kwt.toLowerCase().trim() == "smartphone" || kwt.toLowerCase().trim() == "điện thoại 2 sim" || kwt.toLowerCase().trim() == "giá điện thoại") {
                window.location = '/dtdd';
                return false;
            }
                //Laptop, máy tính xách tay, máy tính, Ultralbook, netbook, Notebook, giá laptop, giá máy tính xách tay, laptop cảm ứng, Laptop Touch
            else if (kwt.toLowerCase().trim() == "laptop" || kwt.toLowerCase().trim() == "máy tính xách tay" || kwt.toLowerCase().trim() == "ultralbook" || kwt.toLowerCase().trim() == "netbook" || kwt.toLowerCase().trim() == "notebook" || kwt.toLowerCase().trim() == "giá laptop" || kwt.toLowerCase().trim() == "giá máy tính xách tay" || kwt.toLowerCase().trim() == "laptop cảm ứng" || kwt.toLowerCase().trim() == "laptop touch") {
                window.location = '/laptop';
                return false;
            }
                //Tablet, máy tính bảng, giá tablet, giá máy tính bảng,
            else if (kwt.toLowerCase().trim() == "tablet" || kwt.toLowerCase().trim() == "máy tính bảng" || kwt.toLowerCase().trim() == "giá tablet" || kwt.toLowerCase().trim() == "giá máy tính bảng") {
                window.location = '/may-tinh-bang';
                return false;
            }
                //Camera, máy ảnh, máy ảnh số, máy chụp hình, may quay phim, giá camera, giá máy chụp ảnh
            else if (kwt.toLowerCase().trim() == "camera" || kwt.toLowerCase().trim() == "máy ảnh" || kwt.toLowerCase().trim() == "máy ảnh số" || kwt.toLowerCase().trim() == "máy chụp hình" || kwt.toLowerCase().trim() == "may quay phim" || kwt.toLowerCase().trim() == "giá camera" || kwt.toLowerCase().trim() == "giá máy chụp ảnh") {
                window.location = '/may-anh-so';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("san pham ") == 0 || kwt.toLowerCase().indexOf("sản phẩm ") == 0) {
                kwt = kwt.replace('san pham ', '');
                kwt = kwt.replace('sản phẩm ', '');
                window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("tin tuc ") == 0 || kwt.toLowerCase().indexOf("tin tức ") == 0) {
                kwt = kwt.replace('tin tuc ', '');
                kwt = kwt.replace('tin tức ', '');
                window.location = '/tim-kiem-tin-tuc?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("rao vat ") == 0 || kwt.toLowerCase().indexOf("rao vặt ") == 0) {
                kwt = kwt.replace('rao vat ', '');
                kwt = kwt.replace('rao vặt ', '');
                window.location = '/rao-vat-may-cu?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sim so ") == 0 || kwt.toLowerCase().indexOf("sim số ") == 0) {
                window.location = '/sim-so-the-cao-thu-cuoc';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sieu thi ") == 0 || kwt.toLowerCase().indexOf("siêu thị ") == 0) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("game ") == 0) {
                kwt = kwt.replace('game ', '');
                kwt = kwt.replace('game ', '');
                window.location = '/game-ung-dung?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("ung dung ") == 0 || kwt.toLowerCase().indexOf("ứng dụng ") == 0) {
                kwt = kwt.replace('ung dung ', '');
                kwt = kwt.replace('ứng dụng ', '');
                window.location = '/game-ung-dung?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("khuyen mai") == 0 || kwt.toLowerCase().indexOf("khuyến mãi") == 0) {
                window.location = '/tin-tuc-dien-dan/khuyen-mai/31';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sieu thi") == 0 || kwt.toLowerCase().indexOf("siêu thị") == 0) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }
            else if (typeof searchpage == 'undefined') {
                if (typeof FilterValue == 'undefined') {
                    window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                    return false;
                }
                else {
                    if (FilterValue == "42" || FilterValue == "522" || FilterValue == "44" || FilterValue == "49" || FilterValue == "-888888") {
                        //window.location = '/tim-kiem?key=' + encodeURIComponent(kwt) + "&F=c:" + FilterValue;
                        window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                        return false;
                    }
                    else {
                        window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                        return false;
                    }
                }
            }
            else if (searchpage == 1) {
                window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (searchpage == 2) {
                window.location = '/rao-vat-may-cu?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (searchpage == 3) {
                window.location = '/tim-kiem-tin-tuc?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (searchpage == 4) {
                window.location = '/sim-so-the-cao-thu-cuoc';
                return false;
            }
            else if (searchpage == 5) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }
            else if (searchpage == 6) {
                window.location = '/game-ung-dung?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else {
                window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
        }
    }
    return false;
}

// !!!!!! Suggest Province Home page 
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
        url: '/aj/Common/SuggestProvince',
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

// !!!!!! Subscribe
$('#frmNewsletterSubscribeFT').live('submit', function (e) {
    var $form = $(this);
    ajaxPostForm($form, e,
        function () {
            $('#QO-Frm').remove();
            $('.loading').show();
        },
        function (data) {
            $('.loading').hide();
            $('#QO-Frm').remove();
            if (data == null || data == '0') {
                window.location.href = '/subscribe';
            }
            else {
                alert('Bạn đã đăng ký nhận tin khuyến mãi thành công.');
            }
        });
});
/*==================================*/
/*ContactUs*/
/*==================================*/
function ReportSupport(type) {
    //$("#img_process").removeClass("temp_processing_img");
    //$("#img_process").addClass("processing_img");
    var name = document.getElementById("fullname");
    var email = document.getElementById("email");
    var dllsubject = document.getElementById("topic-filter");
    var sub = dllsubject.value;
    var mobile = document.getElementById("tel");
    var title = document.getElementById("title");
    var message = document.getElementById("message");
    if (sub == "-1") {
        alert("Vui lòng chọn chủ đề !");
        return false;
    }
    if (title.value == "") {
        alert("Vui lòng nhập tiêu đề !");
        title.focus();
        return false;
    }
    if (message.value == "") {
        alert("Vui lòng nhập nội dung !");
        message.focus();
        return false;
    }
    if (name.value == "") {
        alert("Vui lòng nhập họ tên !");
        name.focus();
        return false;
    }
    if (type == 1 && email.value == "") {
        alert("Vui lòng nhập email!");
        email.focus();
        return false;
    }
    else if (email.value != "") {
        if (!ValidateEmail(email.value)) {
            alert("Email không hợp lệ !");
            email.focus();
            return false;
        }
    }
    if (mobile.value != "") {
        if (!ValidatePhoneNumber(mobile.value)) {
            alert("Số điện thoại không hợp lệ !");
            mobile.focus();
            return false;
        }
    }
    return true;
}
function Report_Support() {
    var dllsubject = document.getElementById("topic-filter");
    $("#hftopicname").val($("#topic-filter option:selected").text());
    var sub = dllsubject.value;
    //var title = document.getElementById("title");
    var message = document.getElementById("message");
    var valid = true;
    if (sub == "-1") {
        //alert("Vui lòng chọn chủ đề !");
        //return false;
        $("select").parent().find('.formerror').show();
        valid = false;
    }
    //if (title.value == "") {
    //    //alert("Vui lòng nhập tiêu đề !");
    //    //title.focus();
    //    $(title).parent().find('.formerror').show();
    //    valid= false;
    //}
    if (message.value == "") {
        //alert("Vui lòng nhập nội dung !");
        //message.focus();
        $(message).parent().find('.formerror').show();
        valid = false;
    }
    if (valid == true) {
        $.fancybox.close();
        $("#customerinfo").trigger('click');
    }
}
function Report_Support_Finish() {
    var name = document.getElementById("fullname");
    var email = document.getElementById("email");
    var mobile = document.getElementById("tel");
    var valid = true;
    if (name.value == "") {
        $(name).parent().find('.formerror').show();
        valid = false;
    }
    if (email.value == "") {
        $(email).parent().find('.formerror').show();
        valid = false;
    }
    else if (email.value != "") {
        if (!ValidateEmail(email.value)) {
            $(email).parent().find('.formerror').text("Email không hợp lệ !").show();
            valid = false;
        }
    }
    if (mobile.value != "") {
        if (!ValidatePhoneNumber(mobile.value)) {
            $(".help").hide();
            $(mobile).parent().find('span').attr("class", "formerror").text("Số điện thoại không hợp lệ !").show();
            valid = false;
        }
    }
    $("#hfname").val(name.value);
    $("#hfemail").val(email.value);
    $("#hfphone").val(mobile.value);
    if (valid == true) {
        $(".formerror,.help").hide();
        $("#submitfinish").click();
    }
}
// set cookie
function CreateCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; visited=true; path=/; domain=.thegioididong.com; expires=" + exdate.toUTCString() + ";");
    Delete_Cookie(c_name, "", ".thegioididong.com");
    Delete_Cookie(c_name, "", ".www.thegioididong.com");
    Delete_Cookie(c_name, "", "www.thegioididong.com");
    document.cookie = c_name + "=" + c_value;
}

// get cookie
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

// delete cookie
function Delete_Cookie(name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

function GetAllFormData($f) {
    var dataElement = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea').each(function () {
        dataElement[$(this).attr('name')] = $(this).val().trim();
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
    POSTAjax('/aj/Common/SubmitFooterSubscirbe', data, BeforeSendAjax, function (e) {
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
    }, ErrorAjax, true);
}

var GET_LOCATION_FLAG = true;
function _get_location() {
    if (GET_LOCATION_FLAG) {
        GET_LOCATION_FLAG = false;
        var ck = getCookie('CK_CHECK_PROVINCE_OF_USER');
        $.ajax({
            url: '/aj/Common/GetLocation/?v=' + ck + '_' + TGDD_CDN_VERSION,
            type: 'GET',
            cache: true,
            dataType: 'html',
            beforeSend: function () {
                $('.loader').show();
            },
            success: function (e) {
                GET_LOCATION_FLAG = true;
                if (e != "") {
                    var _pn = $(e)[1].innerHTML;
                    var _d = $(e).find('> li');
                    $('#location-list').html(_d);
                    $('#location-name-p').text(_pn);
                    $('#location-view-info').text(_pn);
                    $('.loader').hide();
                }
            },
            error: function () {
                $('.loader').hide();
            }
        })
    }
}


function formatNumberValue(number) {
    var intLength = number.toString().length;
    var intLeft = 0;
    var strNumber = '';
    var strNewNumber = '';
    while (intLength % 3 != 0) {
        intLength++;
        intLeft++;
    }
    if (intLeft != 0) {
        for (var intCount = 0; intCount < intLeft; intCount++) {
            strNumber += '0';
        }
    }
    strNumber += number.toString();
    for (var intCount = 0; intCount < intLength; intCount++) {
        strNewNumber += strNumber.charAt(intCount);

        if (intCount > 0 && (intCount + 1) % 3 == 0 && intCount != intLength - 1) {
            strNewNumber += '.';
        }
    }
    strNewNumber = strNewNumber.substring(intLeft);
    return strNewNumber;
}

function LoadHomePreorderInfoSuggest(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetPreorderInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1 && e._totalOrder > 0) {
                html = '<div class="price" style="color: #0876E6; font-size: 11px; font-weight: bold;">(ĐÃ CÓ ' + formatNumberValue(e._totalOrder) + ' NGƯỜI ĐẶT MUA)</div>';
                var item = document.getElementById(ctrl);
                if (item != null) {
                    $(item).parent("div").append(html);
                    $(item).attr("id", "");
                    return;
                }
                else {
                    return;
                }
            }
        },
        function () { },
        true
        );
}

function LoadHomePreorderInfo(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetPreorderInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1 && e._totalOrder > 0) {
                var html = 'Ưu đãi lớn (Đã có ' + formatNumberValue(e._totalOrder) + ' người đặt mua)';
                if ($(ctrl).find('.status.blue').length > 0) {
                    $(ctrl).find('.status.blue').text(html);
                }
                else {
                    $(ctrl).find('.name.clearfix').prepend('<span class="status blue">Ưu đãi lớn (Đã có ' + formatNumberValue(e._totalOrder) + ' người đặt mua)</span>');
                }
            }
        },
        function () { },
        true
        );
}

function LoadHomeShockPriceInfoSuggest(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetShockPriceInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1 || e._status == 4) {
                var html = '<div class="price">';
                html += '<del class="old-price">';
                html += e._oldPrice + '</del>';
                html += '<cite class="price" style="display:block; color: #FF0000; margin-right: 5px;">';
                html += e._newPrice;
                html += '<span style="color: #666666; font-size: 11px; font-weight: bold; line-height: 14px;"> giảm <strong style="color: #FF0000; font-size: 14px; font-weight: bold; line-height: 1em;">';
                html += 100 - e._percent;
                html += '%</strong></span></cite>';
                html += '</div>';
                //var html2 = '<span class="status blue">Chỉ còn ' + e._left + ' sản phẩm</span>';
                var item = document.getElementById(ctrl);
                item.outerHTML = html;
                //$(ctrl).find('.name.clearfix').prepend(html2);
            }
        },
        function () { },
        true
        );
}


function LoadHomeShockPriceInfo(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetShockPriceInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1 || e._status == 4) {
                var html = '<del class="old-price">';
                html += e._oldPrice + '</del>';
                html += '<cite class="price" style="display:block">';
                html += e._newPrice;
                html += '<span class="discount-note"> giảm <strong>';
                html += 100 - e._percent;
                html += '%</strong></span></cite>';

                $(ctrl).find('.price-list').html(html);
                if (e._left > 0) {
                    var html2 = '<span class="status blue">Chỉ còn ' + formatNumberValue(e._left) + ' sản phẩm</span>';
                    $(ctrl).find('.name.clearfix').prepend(html2);
                }
            }
        },
        function () { },
        true
        );
}

function LoadHomePriceForcastInfo(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetPriceForcastInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1) {
                var html = ' (Đã có ' + formatNumberValue(e._totalAnswer) + ' người tham gia)';
                var cur = $(ctrl).find('.status.blue').text();
                $(ctrl).find('.status.blue').text(cur + html);
            }
        },
            function () { },
            true
        );
}


var fc_min = 3;
var fc_sec = 0;
var fc_pause = false;
function FreeCampaignCountDown() {
    if (fc_pause)
        return;
    fc_sec--;
    if (fc_sec < 0) {
        fc_sec = 59;
        fc_min--;
        if (fc_min < 0) {
            $('#divFreeCampaign').hide();
            CloseFreeCampaign();
        }
        else {
            FreeCampaignRemain();
        }
    }
    else {
        FreeCampaignRemain();
    }
}

function FreeCampaignRemain() {
    var text = fc_min + ':' + (fc_sec >= 10 ? fc_sec : '0' + fc_sec) + ' giây';
    $('#spFreeCampaignClock').html(text);
    setTimeout('FreeCampaignCountDown()', 1000);
}

function CloseFreeCampaign() {
    $('#divFreeCampaign').hide();
    POSTAjax('/aj/Game/CloseFreeCampaign/', {}, BeforeSendAjax, function (e) { $('#dlding').fadeOut(1000); }, ErrorAjax, true);
}

var FLAG_SUBMITFREECAMPAIGN = true;
function SubmitFreeCampaign() {
    if (!FLAG_SUBMITFREECAMPAIGN)
        return;
    FLAG_SUBMITFREECAMPAIGN = false;
    var data = GetAllFormData($('#frmFreeCampaignOrder'));
    POSTAjax('/aj/Game/SubmitFreeCampaign/', data, BeforeSendAjax, function (e) {
        FLAG_SUBMITFREECAMPAIGN = true;
        if (e == null || e == '') {
            alert('Chức năng đang được bảo trì, vui lòng thử lại sau');
            location.reload();
        }
        else {
            if (e._status == undefined) {
                $('#divFreeCampaign').replaceWith(e);
            }
            else if (e._status == 0) {
                var text = '';
                for (var idx in e._errors) {
                    text += '-' + e._errors[idx] + '\n';
                }
                alert(text);
            }
            else if (e._status == -1) {
                alert('Chức năng đang được bảo trì, vui lòng thử lại sau');
                location.reload();
            }
        }
        $('#dlding').fadeOut(1000);
    }, ErrorAjax, true);
}

var FLAG_LOADFREECAMPAIGN = true;
function LoadFreeCampaign() {
    if (!FLAG_LOADFREECAMPAIGN)
        return;

    var ckFreeCampaign = getCookie('FREE_CAMPAIGN_COO_SES');
    if (ckFreeCampaign != '' && ckFreeCampaign != null) {
        try {
            var objFreeCampaign = JSON.parse(ckFreeCampaign);
            if (objFreeCampaign.Order == 1 || objFreeCampaign.Close) {
                return;
            }
        }
        catch (err) { }
    }

    FLAG_LOADFREECAMPAIGN = false;
    var data = {};

    $.ajax({
        url: '/aj/Game/FreeCampaign/',
        type: 'GET',
        cache: true,
        dataType: 'application/json',
        beforeSend: function () {
            $('#dlding').show();
        },
        success: function (e) {
            FLAG_LOADFREECAMPAIGN = true;
            if (e == null || e == '') {
                //
            }
            else {
                if (e._status == undefined) {
                    $('#divFreeCampaign').remove();
                    $('body').append(e);
                    FreeCampaignCountDown();
                }
                else if (e._status == 0) {
                    setTimeout('LoadFreeCampaign()', 1000 * e._remain);
                }
                else if (e._status == -1) {
                }
            }
            $('#dlding').fadeOut(1000);
        },
        error: function () {
            $('.loader').hide();
        }
    })

}

var mascotBrandUrl = '';
var mascotPriceUrl = '';
var mascotHideInCategoryPage = false;
var mascotCatgoryTimeout = null;
var FLAG_LOADMASCOT = true;
function LoadMascot() {
    if (!FLAG_LOADMASCOT)
        return;

    if (typeof (mascotCategoryID) == 'undefined')
        return;

    FLAG_LOADMASCOT = false;
    var data = { categoryid: mascotCategoryID };
    $.ajax({
        url: '/aj/Category/MascotPopup/',
        type: 'POST',
        data: data,
        beforeSend: function () {
            $('#dlding').show();
        },
        success: function (e) {
            FLAG_LOADMASCOT = true;
            if (e == null || e == '') {
            }
            else {
                try {
                    if (e._status == undefined) {
                        if ($('#mascot').length > 0)
                            $('#mascot').remove();
                        if ($("#HalloweenFestID").css("display") == "block") {
                            $("#HalloweenFestID").attr("style", "display:block;bottom: 143px;");
                        }
                        $('body').append(e);

                    }
                    else if (e._status == 0) {
                        setTimeout('LoadMascot()', 1000 * e._timeremain);
                    }
                } catch (e) { }
            }
            $('#dlding').fadeOut(1000);
        },
        error: function () {
            $('#dlding').fadeOut(1000);
        },
        complete: function () {
            $('#dlding').fadeOut(1000);
        }
    })
}


var FLAG_LOADMASCOT_DETAIL = true;
function LoadMascotDetail() {
    debugger;
    if (!FLAG_LOADMASCOT_DETAIL)
        return;

    if (typeof (mascotCategoryID) == 'undefined' || typeof (ProductID) == 'undefined')
        return;

    FLAG_LOADMASCOT_DETAIL = false;
    var data = { categoryid: mascotCategoryID, productid: ProductID };
    $.ajax({
        url: '/aj/Category/MascotPopupDetail/',
        type: 'POST',
        data: data,
        beforeSend: function () {
            $('#dlding').show();
        },
        success: function (e) {
            FLAG_LOADMASCOT_DETAIL = true;
            if (e == null || e == '') {
            }
            else {
                try {
                    if (e._status == undefined) {

                        if ($('#mascot').length > 0)
                            $('#mascot').remove();
                        $('body').append(e);
                    }
                    else if (e._status == 0) {
                        debugger;
                        setTimeout('LoadMascotDetail()', 1000 * e._timeremain);

                    }
                } catch (e) { }
            }
            $('#dlding').fadeOut(1000);
        },
        error: function () {
            $('#dlding').fadeOut(1000);
        },
        complete: function () {
            $('#dlding').fadeOut(1000);
        }
    })
}

function MascotNarrowDown(ctrl, type, url) {
    var desUrl = '/' + caturl;
    if (type == 1) {
        mascotBrandUrl = url;
        _gaq.push(['_setAccount', 'UA-918185-9']);
        _gaq.push(['_trackPageview', '/InsitePromotion/Mascot/BrandSuccess']);
    }
    else if (type == 2) {
        mascotPriceUrl = url;
        _gaq.push(['_setAccount', 'UA-918185-9']);
        _gaq.push(['_trackPageview', '/InsitePromotion/Mascot/PriceSuccess']);
    }
    if (mascotBrandUrl != '') {
        desUrl += '-' + mascotBrandUrl;
    }
    if (mascotPriceUrl != '') {
        desUrl += '?p=' + mascotPriceUrl;
    }
    POSTAjax(
      desUrl,
      {},
      BeforeSendAjax,
      function (e) {
          $('#dlding').fadeOut(300);
          $('div#catlistproduct').replaceWith($(e).find('div#catlistproduct'));
          $('.breadcrumb').replaceWith($(e).find('.breadcrumb'));
          $('.product-filter-wrapper.clearfix').replaceWith($(e).find('.product-filter-wrapper.clearfix'));
          $('div#mascot ul li.hover').removeClass('hover');
          $(ctrl).addClass('hover');
          if (mascotCatgoryTimeout != null) {
              clearTimeout(mascotCatgoryTimeout)
          }
          mascotCatgoryTimeout = setTimeout(function () {
              MascotNextProgam(3);
          }, 60000);
          window.history.pushState('object or string', 'Title', desUrl);
      },
      function () { },
      true
      );
}

function GoBackMascot() {
    var desUrl = '/' + caturl;
    mascotBrandUrl = '';
    if (mascotPriceUrl != '') {
        desUrl += '?p=' + mascotPriceUrl;
    }
    POSTAjax(
      desUrl,
      {},
      BeforeSendAjax,
      function (e) {
          $('#dlding').fadeOut(300);
          $('div#catlistproduct').replaceWith($(e).find('div#catlistproduct'));
          $('.breadcrumb').replaceWith($(e).find('.breadcrumb'));
          $('.product-filter-wrapper.clearfix').replaceWith($(e).find('.product-filter-wrapper.clearfix'));
          POSTAjax(
            '/aj/Category/MascotPopup',
            { step: 2, categoryid: mascotCategoryID, manufacturer: mascotBrandUrl, price: mascotPriceUrl, random: 0 },
            BeforeSendAjax,
            function (e) {
                $('#dlding').fadeOut(300);
                $('div#mascot').replaceWith($('<div>' + e + '</div>').find('div#mascot'));
                mascotHideInCategoryPage = false;
            },
            function () { },
            true
            );
          window.history.pushState('object or string', 'Title', desUrl);
      },
      function () { },
      true
      );
}

function FinishMascot(ctrl) {
    POSTAjax(
    '/aj/Category/MascotPopup',
    { categoryid: mascotCategoryID, close: 1 },
    BeforeSendAjax,
    function (e) {
        _gaq.push(['_setAccount', 'UA-918185-9']);
        _gaq.push(['_trackPageview', '/InsitePromotion/Mascot/Campaign_Success']);
        setTimeout(function () { window.location = $(ctrl).data('url'); }, 3000);
    },
    function () { },
    true
    );
}

function FinishMascotMascotDetail(ctrl) {
    POSTAjax(
    '/aj/Category/MascotPopupDetail',
    { categoryid: mascotCategoryID, productid: ProductID, close: 1 },
    BeforeSendAjax,
    function (e) {
        _gaq.push(['_setAccount', 'UA-918185-9']);
        _gaq.push(['_trackPageview', '/InsitePromotion/Mascot/TraGop_Success']);
        setTimeout(function () { window.location = $(ctrl).data('url'); }, 3000);
    },
    function () { },
    true
    );
}

function CloseMascot() {
    var expiredays = 7;
    var c_name = 'CK_TGDD_MASCOT';
    CreateCookie(c_name, 'MOBILE', expiredays);
    _gaq.push(['_setAccount', 'UA-918185-9']);
    _gaq.push(['_trackPageview', '/InsitePromotion/Mascot/Fail']);
    $('div#mascot').remove();
}


function MascotNextProgam(forceStep) {
    if (typeof (ProductID) == 'undefined')
        ProductID = 0;
    POSTAjax(
    '/aj/Category/MascotPopup',
    { categoryid: mascotCategoryID, productid: ProductID, step: forceStep },
    BeforeSendAjax,
    function (e) {
        $('#dlding').fadeOut(300);
        $('div#mascot').replaceWith($('<div>' + e + '</div>').find('div#mascot'));
        mascotHideInCategoryPage = false;
    },
    function () { },
    true
    );
}

function CloseMascotRepayment() {
    var c_name = 'TGDD_MASCOT_REPAYMENT';
    CreateCookie(c_name, '1', 7);
    $('div#mascot').remove();
}

var FLAG_LOADMASCOT_REPAYMENT = true;
function LoadMascotRepayment() {
    if (!FLAG_LOADMASCOT_REPAYMENT)
        return;
    FLAG_LOADMASCOT_REPAYMENT = false;
    var data = { categoryid: mascotCategoryID, productid: ProductID };
    $.ajax({
        url: '/aj/Category/MascotPopupRepayment/',
        type: 'POST',
        data: data,
        beforeSend: function () {
            $('#dlding').show();
        },
        success: function (e) {
            FLAG_LOADMASCOT_REPAYMENT = true;
            if (e == null || e == '') {
            }
            else {
                try {
                    if (e._status == undefined) {
                        if ($('#mascot').length > 0)
                            $('#mascot').remove();
                        $('body').append(e);
                    }
                    else if (e._status == 0) {
                        debugger;
                        setTimeout('LoadMascotRepayment()', 1000 * e._timeremain);
                    }
                } catch (e) { }
            }
            $('#dlding').fadeOut(1000);
        },
        error: function () {
            $('#dlding').fadeOut(1000);
        },
        complete: function () {
            $('#dlding').fadeOut(1000);
        }
    })
}

var FLAG_SUBMITREPAYMENTMASCOT = true;
function SubmitRepaymentMascot() {

    if (!FLAG_SUBMITREPAYMENTMASCOT)
        return;
    var data = GetAllFormData($('#frmMascotRepayment'));
    $('#frmMascotRepayment .error').remove();
    if (data.txtFullName == '') {
        $('<span class="clearfix error">Vui lòng nhập họ tên</span>').insertBefore('#frmMascotRepayment .redbutton');
        return;
    }

    if (data.txtMobile == '') {
        $('<span class="clearfix error">Vui lòng nhập số điện thoại</span>').insertBefore('#frmMascotRepayment .redbutton');
        return;
    }

    regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
    if (!regPhone.test(data.txtMobile)) {
        $('<span class="clearfix error">Số điện thoại không đúng định dạng</span>').insertBefore('#frmMascotRepayment .redbutton');
        return;
    }
    FLAG_SUBMITREPAYMENTMASCOT = false;
    POSTAjax(
    '/aj/Order/SubmitMascotRepayment',
    data,
    BeforeSendAjax,
    function (e) {
        FLAG_SUBMITREPAYMENTMASCOT = true;
        $('#dlding').fadeOut(300);
        if (e == null || e == '') {
            alert('Chức năng đang được cập nhật, vui lòng thử lại sau');
        }
        else {
            if (e._status == -1) {
                var html = '';
                for (var idx in e._errors) {
                    html += '-' + e._errors[idx] + '\n';
                }
                alert(html);
            }
            else if (e._status == 0) {
                alert('Chức năng đang được cập nhật, vui lòng thử lại sau');
            }
            else {
                CreateCookie('CK_TGDD_MASCOT_REPAYMENT', '1', 7);
                $('#frmMascotRepayment').replaceWith('<p>Gửi thông tin thành công!</p>');
                setTimeout(function () {
                    $('#mascot').remove();
                }, 2000);
            }
        }
    },
    function () { },
    true
    );
}

function HideCategoryKeyValue(id) {
    $('.keyvalue').hide();
    $('.product-filter-wrapper').removeAttr('style');
    var expiredays = (7 * 365);
    CreateCookie('CK_C_K_V_' + id, '1', expiredays);
}
//viết hoa chữ cái đầu tiên
function UpcaseFirstCharareter(ctrl, e) {
    if (e.keyCode != 32 && e.keyCode != 8) {
        var string = $(ctrl).val();
        var arr = string.split(" ");
        var arrresult = [];
        var result = "";
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].trim() != "" && arr[i].trim() != " ") {
                    arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                }
            }
            for (var j = 0; j < arrresult.length; j++) {
                result += arrresult[j] + " ";
            }
        }
        else {
            result = string.charAt(0).toUpperCase() + string.slice(1);
        }
        $(ctrl).val($.trim(result));
    }

}
function getUserFacebook() {
    try {
        var xmlhttp = new XMLHttpRequest();
        var url = "http://www.facebook.com/thegioididongcom";
        var urldomain1 = "https://graph.facebook.com/?ids=" + encodeURIComponent(url) + "";
        xmlhttp.open("GET", urldomain1, false);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xmlhttp.send();
        var data = xmlhttp.response;
        debugger;

        data = data.toString().replace(url, 'data');
        var obj = JSON.parse(data);
        var link_id = "";
        if (obj.data != null) {
            link_id = obj.data.id;
        }


        if (link_id != "") {
            xmlhttp = new XMLHttpRequest();
            urldomain = "https://graph.facebook.com/oauth/access_token?client_id=1423496261124080&client_secret=96c692c3b825a90135503214ea318d31&grant_type=client_credentials";
            xmlhttp.open("GET", urldomain, false);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xmlhttp.send();
            var data2 = xmlhttp.response.toString();
            var access_token = data2.split("access_token=")[1];
            xmlhttp = new XMLHttpRequest();
            var urldomain = "https://graph.facebook.com/search?access_token=" + access_token + "&q=SELECT%20TOP%2010%20uid%20FROM%20page_fan%20WHERE%20page_id='" + link_id + "'";
            xmlhttp.open("GET", urldomain, false);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xmlhttp.send();
            var data3 = xmlhttp.response;
            var obj1 = JSON.parse(data3);
        }
        //document.getElementById(item.id + "_count").innerHTML = ConvertIntStringFb(count.toString().trim());
    }
    catch (err) {
        $(item).remove();
    }

}


function countFacebook(item) {
    try {
        var xmlhttp = new XMLHttpRequest();
        var url = $(item).attr("link-data");
        if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {
            url = url.replace('http://', '');
            url = url.replace('https://', '');
        }
        //var urldomain = "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url='" + url + "'";
        var urldomain = "https://graph.facebook.com/fql?q=SELECT%20total_count%20FROM%20link_stat%20WHERE%20url='" + url + "'";
        xmlhttp.open("GET", urldomain, false);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xmlhttp.send();
        var data = xmlhttp.response;
        var obj = JSON.parse(data);
        var count;
        if (obj.data.length > 0) {
            count = obj.data[0].total_count;
        } else {
            count = 0;
        }
        var itemcount = document.getElementById(item.id.toString() + "_count");
        itemcount.innerHTML = ConvertIntStringFb(count.toString().trim());
    }
    catch (err) {
        $(item).remove();
    }

}

function countFacebookSV(item, url) {
    if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {
        url = url.replace('http://', '');
        url = url.replace('https://', '');
    }
    try {
        $.ajax({
            url: '/aj/Common/SearchValueCount/',
            type: 'GET',
            data: { txtURLs: url },
            beforeSend: function () {
            },
            success: function (result) {
                var itemcount = document.getElementById(item.id.toString() + "_count");
                itemcount.innerHTML = ConvertIntStringFb(result.toString().trim());
            },
            error: function (result) {
            }
        })
    }
    catch (err) {
        $(item).remove();
    }

}

function GenFacebookFinal(id) {
    debugger;
    var item = document.getElementById(id);
    if (item == null)
        return;
    var url = $(item).attr("link-data");
    var style = $(item).attr("style");
    var strAppend = "";
    if (style == undefined)
        strAppend += "<table id=\"" + id + "\" class=\"fbcontent\" link-data=\"" + url + "\" onmouseover=\"countFacebook(this)\">";
    else
        strAppend += "<table id=\"" + id + "\" style=\"" + style + "\" class=\"fbcontent\" link-data=\"" + url + "\" onmouseover=\"countFacebook(this)\">";
    strAppend += "<tbody>";
    strAppend += "<tr>";
    strAppend += "<td style='vertical-align: middle; width: 54px !important; height: 21px !important; float: left;' id=\"" + id + "_contentfb\">";
    strAppend += "<ul id=\"sfb_ul\" class=\"socialcount\" data-url=\"" + url + "\" data-counts=\"true\" style=\" margin-left: 0; margin: 0;left: 0;padding: 0;\">";
    strAppend += "<li class=\"facebook pluginConnectButton\">";
    strAppend += "<a href=\"https://www.facebook.com/sharer/sharer.php?u=" + url + "\" target=\"_blank\" class=\"pluginButton pluginButtonInline pluginConnectButtonDisconnected\" title=\"Share on Facebook\">";
    strAppend += "<div>";
    strAppend += "<button type=\"submit\">";
    strAppend += "<i class=\"pluginButtonIcon img sp_like sx_like_thumb\"></i>";
    strAppend += "<span class=\"accessible_elem\">Thích</span>";
    strAppend += "</button>";
    strAppend += "</div>";
    strAppend += "</a>";
    strAppend += "</li>";
    strAppend += "</ul>";
    strAppend += "</td>";
    strAppend += "<td style=\"vertical-align: top; position: relative;\">";
    strAppend += "<div style=\"float: left; margin-top: 0px; margin-left: -1px;\">";
    strAppend += "<div class=\"pluginCountButton pluginCountNum\"><span id=\"u_0_7\"><span id=\"" + id + "_count\" class=\"pluginCountTextConnected\"></span></span></div>";
    strAppend += "<div class=\"pluginCountButtonNub\"><s></s><i></i></div>";
    strAppend += "</div>";
    strAppend += "</td>";
    strAppend += "</tr>";
    strAppend += "</tbody>";
    strAppend += "</table>";
    item.outerHTML = strAppend;
    countFacebookSV(item, url);
}

function ConvertIntStringFb(strInt) {
    var overstring = "";
    var count = 0;
    for (var i = (strInt.length - 1) ; i >= 0; i--) {
        overstring += strInt[i];
        count++;
        if (count == 3 && i > 0) {
            overstring += ".";
            count = 0;
        }
    }
    var strFinal = "";
    for (var i = (overstring.length - 1) ; i >= 0; i--) {
        strFinal += overstring[i];
    }
    return strFinal;
}


function PopUpHtmlInfo(id) {
    POSTAjax('/aj/Common/PopUpHtmlInfo', { intHtmlInfoID: id }, BeforeSendAjax, function (e) {
        if (e == null || e == '')
            return;
        debugger;
        try {
            $('#pu-popuphtmlinfo').remove();
            $('body').append(e);
        } catch (e) {

        }
        $.fancybox.close();
        $("#of-popuphtmlinfo").fancybox({
            'transitionIn': 'none',
            'transitionOut': 'none',
            'showCloseButton': false,
            'margin': 0,
            'padding': 1,
            'modal': true
        });
        $("#of-popuphtmlinfo").click();
        $('#dlding').fadeOut(500);
    }, ErrorAjax, true);
}