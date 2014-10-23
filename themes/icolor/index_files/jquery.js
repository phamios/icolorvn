/*Created date  : 24th june, 2013*/
/*Description   : scripts for classified page V2*/
var domain = ".thegioididong.com";
var path = "/";
var sClassified = true;
var QUICK_POST_ADS = true;
function QuickPost2() {
    if (QUICK_POST_ADS) {
        QUICK_POST_ADS = false;
        var data = {};
        POSTAjax('/rao-vat-may-cu/aj/ClassifiedV2/QuickPostV3', data, BeforeSendAjax, function (e) {
            if (e !== null && e != '' && e != undefined) {
                $('body #post-ads-container').remove();
                $('body').append(e);
                $.fancybox.close();
                $("#openfancyclquick").fancybox({
                    'transitionIn': 'elastic',
                    'transitionOut': 'elastic',
                    'showCloseButton': false,
                    'margin': 0,
                    'padding': 1,
                    'modal': true,
                    'scrolling': 'no',
                    'beforeClose': function () {
                        if ($('.step2').is(':visible')) {
                            $('.step2').hide();
                            $('.step1').show();
                            $("#openfancyclquick").click();
                            return false;
                        }
                    }
                });
                $("#openfancyclquick").click();
                $('#dlding').fadeOut(1000);
                $('#category option[value="1"]').attr("selected", "selected");
            }
            QUICK_POST_ADS = true;
        }, ErrorAjax, true);
    }
}

$(document).ready(function () {
    //title
    $('#titleads').live('focus', function () {
        if ($.trim($(this).val()) == '') {
            CreateMessage(1);
        }
    });

    $('.warning ul li a').live('click', function () {
        alert($('.warning ul li a').attr('href'));
        return;
    });

    $('#titleads').live('blur', function () {
        if ($.trim($(this).val()) != '') {
            $('.wrapper-input').removeClass('mustfill');
        }
        $('.warning').hide();
        $('.arrow').hide();
    });

    $('#contentwrapper').live('focus', function () {
        if ($(this).text() == '') {
            CreateMessage(2);
        }
    });

    $('#contentwrapper').live('blur', function () {
        if ($('#contentwrapper').text() != '') {
            $('#contentwrapper').removeClass('mustfill');
        }
        $('.warning').hide();
        $('.arrow').hide();
        CreateMessage(3);
    });

    //price
    $('#txtPrice').live('focus', function () {
        $(this).next('.formerror').hide();
    });

    $('#txtPrice').live('blur', function () {
        if ($.trim($(this).val()) != '') {
            //$('#txtPrice').next('.formerror').text('X').show();
            $('#txtPrice').removeClass('mustfill');
        }
    });

    $('#txtPrice, #txtMobile').live("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('#contentwrapper').live("paste", function (e) {
        e.preventDefault();
    });

    $('#productpick').live('change', function () {
        if ($('#productpick option:selected').val() == 0) {
            $(this).next('.formerror').text('X').show();
        }
        else {
            $(this).next('.formerror').hide();
        }
    });

    $('#provincepick').live('change', function () {
        if ($('#provincepick option:selected').val() == 0) {
            $(this).next('.formerror').text('X').show();
        }
        else {
            $(this).next('.formerror').hide();
        }
    });

    $('#txtFullName').live('keyup', function (e) {
        this.value = this.value.replace(/[\*\^\'\!\@\$\<\>\%\{\}\+\=\#\&\_\]\[\?]/g, '');
    });

    $('#txtFullName').live('blur', function () {
        if ($.trim($('#txtFullName').val()) != '') {
            $('#txtFullName').removeClass('mustfill');
        }
    });

    //$('#titleads').live('keyup', function (e) {
    //    this.value = this.value.replace(/[\*\^\'\!\@\$\<\>\%\{\}\+\=\#\&\_\]\[\?\;\:]/g, '');
    //});

    $('#txtMobile').live('focus', function () {
        $('.warning').show();
        $('.arrow').show();
        CreateMessage(4);
    });

    $('#txtMobile').live('blur', function () {
        if ($.trim($('#txtMobile').val()) == '') {
            $('.warning').hide();
            $('.arrow').hide();
        }
        else {
            $('#txtMobile').removeClass('mustfill');
        }
    });

    $('#email').live('focus', function () {
        if ($.trim($(this).val()) == '') {
            $('.warning').show();
            $('.arrow').show();
            CreateMessage(5);
        }
    });

    $('#email').live('blur', function () {
        $('.warning').hide();
        $('.arrow').hide();
    });

    var charactersAllowed = 160;
    $('#titleads').live("keyup", function () {
        //this.value = this.value.replace(/[\*\^\'\!\@\$\<\>\%\{\}\+\=\#\&\_\]\[\?]/g, '');
        var left = charactersAllowed - $(this).val().length;
        if (left < 0) {
            left = 0;
            return;
        }
        $('#remainning').text('TIÊU ĐỀ (' + $(this).val().length + '/160)');
    });

    $('#contentwrapper').live("keyup", function (e) {
        var otext = $('#contentwrapper').text();
        var currentLength = otext.length;
        var maxLength = 2000;

        if (currentLength > maxLength) {
            $(this).text(otext.substr(0, maxLength));
        } 
        var remainning = 2000 - otext.length;
        if (remainning < 0) {
            remainning = 0;
            return;
        }
    });

    $('#contentwrapper').live('paste', function () {
        window.setTimeout(do_sanitize, 5);
    });

    $('#txtPrice').live('keyup', function (event) {
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
        var $this = $(this);
        var num = $this.val().replace(/,/gi, "");
        if (num > 999999999) num = "999999999";
        $this.val(num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    });

    $('#txtPrice, .editprice').live('keypress', function (e) {
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('#txtMobile').live('keypress', function (e) {
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });
});

function RemoveRougeChar(convertString) {
    if (convertString.substring(0, 1) == ",") {
        return convertString.substring(1, convertString.length)
    }
    return convertString;
}

var SUBMIT_NEXT_STEP = true;
function NextStep($form, submitbtn) {
    if (!SUBMIT_NEXT_STEP)
        return;

    var valid = true;

    var data = GetAllFormData($form);

    data.titleads = data.titleads.replace(/[\*\^\'\!\@\$\<\>\%\{\}\+\=\#\&\_\]\[\?]/g, '');
    if ($.trim(data.titleads) == '') {
        valid = false;
        $('.wrapper-input').addClass('mustfill');
        $('.showerror').text('Tiêu đề chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
    }
    else {
        if ($.trim(data.titleads).length > 160 || $.trim(data.titleads).length < 10) {
            valid = false;
            $('.wrapper-input').addClass('mustfill');
            $('.showerror').text('Tiêu đề chưa hợp lệ. tối thiểu 10 ký tự, tối đa 160 ký tự').fadeIn();
            CreateMessage(1);
            return;
        }
    }

    var dataContent = $('#contentwrapper').html().replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
    var dataContenttest = $('#contentwrapper').text();

    if ($.trim($('#contentwrapper').text()) == '') {
        valid = false;
        $('#contentwrapper').addClass('mustfill');
        $('.showerror').text('Nội dung tin đăng chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
    }
    else {
        if (dataContenttest.length > 2000 || dataContenttest.length < 20) {
            valid = false;
            $('#contentwrapper').addClass('mustfill');
            $('.showerror').text('Nội dung tin đăng tối thiểu 20 ký tự, tối đa 2000 ký tự').fadeIn();
            CreateMessage(2);
            return;
        }
    }

    if (data.txtPrice == '') {
        valid = false;
        $('#txtPrice').addClass('mustfill');
        $('.showerror').text('Giá bán chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
    }

    var tmpPrice = data.txtPrice.replace(/\,/g, '');
    var regPrice = /([1-9]{1}\d)$/;
    if (tmpPrice != '' && tmpPrice <= 0) {
        valid = false;
        $('#txtPrice').addClass('mustfill');
        $('.showerror').text('Giá bán chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
        return;
    }
    data.txtPrice = tmpPrice;

    if (data.txtFullName == '') {
        valid = false;
        $('#txtFullName').addClass('mustfill');
        $('.showerror').text('Họ tên chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
    }
    else {
        if (data.txtFullName.length > 50 || data.txtFullName.length < 2) {
            valid = false;
            $('#txtFullName').addClass('mustfill');
            $('.showerror').text('Họ tên tối thiểu 2 ký tự, tối đa 50 ký tự').fadeIn();
            return;
        }
    }

    var fileUpload = '';
    $('#lpreview li').find("img").each(function () {
        if ($(this).parent().attr('data') == 'completed') {
            if (fileUpload != "") fileUpload += ";";
            fileUpload += $(this).attr("name");
        }
    });

    data.lUpimage = '';
    data.lUpimage = fileUpload;
    data.contentwrapper = dataContent;

    if (data.txtMobile == '') {
        valid = false;
        $('#txtMobile').addClass('mustfill');
        $('.showerror').text('Bạn chưa điền số điện thoại').fadeIn();
    }
    else {
        regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
        if (data.txtMobile != '' && !regPhone.test(data.txtMobile)) {
            valid = false;
            $('#txtMobile').addClass('mustfill');
            $('.showerror').text('Số điện thoại chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
            CreateMessage(4);
            return;
        }
    }

    if ($.trim(data.email) != '') {
        if (!ValidateEmail(data.email)) {
            valid = false;
            $('#email').addClass('mustfill');
            CreateMessage(5);
            $('.showerror').text('Email chưa hợp lệ. Mời bạn kiểm tra lại').fadeIn();
            return;
        }
    }

    if (!valid) {
        $('.showerror').text('Bạn cần điền đầy đủ các thông tin!').fadeIn();
        return;
    }
    else
        $('.showerror').hide();

    if (SUBMIT_NEXT_STEP) {
        SUBMIT_NEXT_STEP = false;
        POSTAjax('/rao-vat-may-cu/aj/ClassifiedV2/SubmitToPreview', data, BeforeSendAjax, function (e) {
            if (e !== null && e != '' && e != undefined) {
                var previewHtml = '';
                previewHtml += '<div class="product-list-wrapper-left">';
                previewHtml += '<ul id="all" class="main-content clearfix">';
                previewHtml += e;
                previewHtml += '</ul>';
                previewHtml += '</div>';
                $('#post-ads-container .step2 #preview-wrapper').html(previewHtml);
                $('#post-ads-container .step1').hide();

                $('#post-ads-container .step2').show();
                //$.fancybox.close();
                $("#openfancyclquick").fancybox({
                    'transitionIn': 'fade',
                    'transitionOut': 'fade',
                    'showCloseButton': false,
                    'margin': 0,
                    'padding': 1,
                    'modal': true,
                    'width': 600,
                    'scrolling': 'no',
                    'beforeClose': function () {
                        if ($('.step2').is(':visible')) {
                            $('.step2').hide();
                            $('.step1').show();
                            $("#openfancyclquick").click();
                            return false;
                        }
                    }
                });

                //$('.fancybox-inner').css('width', '600px');
                $.fancybox.update();
            }

        }, ErrorAjax, true);
    }
    SUBMIT_NEXT_STEP = true;
    $('#dlding').hide();

}

var SUBMIT_FINAL_STEP = true;
function FinalStep($form, submitbtn) {
    if (submitbtn)
        $(submitbtn).css("visibility", "hidden");
    else
        $("#finalstep").css("visibility", "hidden");

    if (!SUBMIT_FINAL_STEP)
        return;

    var data = GetAllFormData($form);

    var dataContent = $('#contentwrapper').html().replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
    data.contentwrapper = dataContent;

    var fileUpload = '';
    $('#lpreview li').find("img").each(function () {
        if ($(this).parent().attr('data') == 'completed') {
            if (fileUpload != "") fileUpload += ";";
            fileUpload += $(this).attr("name");
        }
    });

    data.lUpimage = '';
    data.lUpimage = fileUpload;

    POSTAjax('/rao-vat-may-cu/aj/ClassifiedV2/ClassifiedFormSubmitEvent', data, BeforeSendAjax, function (e) {
        if (e !== null && e != '' && e != undefined) {
            var tmp = JSON.parse(e);
            if (tmp.type == -1) {
                if (tmp.resultMessage) {
                    if (submitbtn)
                        $(submitbtn).css("visibility", "visible");
                    else
                        $("#finalstep").css("visibility", "visible");
                    alert(tmp.resultMessage[0]);
                }
                else
                    alert('Lỗi');
            }
            else {
                var html = RenderMessage(tmp.classifiedId, data.txtMobile);
                $.fancybox.close();
                $("#openfancyclquick").fancybox({
                    'transitionIn': 'fade',
                    'transitionOut': 'fade',
                    'showCloseButton': false,
                    'margin': 0,
                    'padding': 1,
                    'width': 600,
                    'modal': true,
                    'scrolling': 'no'
                });

                $('#post-ads-container .step1 .frm').html(html).fadeIn();
                $('#post-ads-container .step1').removeClass('step1');
                $('#dlding').fadeOut(1000);

                try {
                    if (submitbtn.id == "finalstep") {
                        $.fancybox.close();
                    }
                } catch (e) {

                }

                $.fancybox.update();
            }
        }

        SUBMIT_FINAL_STEP = true;
    }, ErrorAjax, true);
}

function RenderMessage(id, phone) {
    $('#post-ads-container .step1').css('width', '600px!important');
    $.fancybox.update();
    $('.modal-header h4').text('Bạn đã đăng tin rao vặt thành công');
    var html = '';
    html += '<div id="divMessage">';
    html += '<p>Nếu muốn tin của bạn xuất hiện tại Box Rao vặt trên trang chủ Thegioididong.com,';
    html += 'mời bạn sử dụng số điện thoại <strong>' + phone + '</strong> soạn tin theo cú pháp <strong>XN</strong> <strong>' + id + '</strong> gửi <strong>1900 561 292</strong> (Phí nhắn tin là 1000đ)';
    html += '</p>';
    html += '<div class="clearfix like">';
    html += '<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fthegioididongcom&amp;width=115&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;send=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:115px; height:21px;" allowTransparency="true"></iframe></div>';
    html += '</div>';
    return html;
}


var qo_submitting = false;
function SubmitQuickOrderDelay() {
    qo_submitting = false;
}

function MessageBox(mess) {
    var html = '';
    html += '<div id="messbox" class="mess-box">';
    html += '<div class="tit">Thông báo<a href="javascript:void(0);" onclick="$.fancybox.close();" class="close"></a>';
    html += '</div>';
    html += '<p>';
    html += mess;
    html += '</p>';
    html += '</div>';

    $('body #messbox').remove();
    $('body').append(html);
    $('body #messbox').show();
}

var POST_PREVIEW_FLAG = true;
function Preview($form, submitbtn) {
    var valid = true;

    var data = GetAllFormData($form);

    data.query = data.query.replace(/[\*\^\'\!\@\$\<\>\%\{\}\+\=\#\&\_\]\[\?]/g, '');

    //var rgextitle = /(!|\$|%|\^)/;
    //if (!rgextitle.test(data.query))
    //{
    //    valid = false;
    //    $form.find('*[name=query]').parent().find('.formerror').text('Không sử dụng ký tự đặc biệt').show();
    //}

    if (data.query == '') {
        valid = false;
        $('#query').next('.formerror').text('X').show();
    }

    if (data.query.length > 160) {
        valid = false;
        $('#query').next('.formerror').text('Quá 160 ký tự').show();
    }

    var dataContent = $('#txtContent').html().replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
    var dataContenttest = $('#txtContent').text();

    if (dataContenttest == '') {
        valid = false;
        $('#txtContent').next('.formerror').text('X').show();
    }

    if (dataContenttest.length > 2000) {
        valid = false;
        $('#txtContent').next('.formerror').text('Tối đa 2000 ký tự').show();
    }

    if (dataContenttest != "" && dataContenttest.length < 20) {
        valid = false;
        $('#txtContent').next('.formerror').text('Nội dung tin quá ngắn (Tối thiểu 20 ký tự)').show();
    }

    if (data.txtPrice == '') {
        valid = false;
        $('#txtPrice').next('.formerror').text('X').show();
    }

    var tmpPrice = data.txtPrice.replace(/\,/g, '');
    var regPrice = /([1-9]{1}\d)$/;
    if (tmpPrice <= 0) {
        valid = false;
        $('#txtPrice').next('.formerror').text('Giá bán chưa đúng').show();
    }
    data.txtPrice = tmpPrice;

    if (data.productpick == 0) {
        valid = false;
        $('#productpick').next('.formerror').text('X').show();
    }

    if (data.provincepick == 0) {
        valid = false;
        $('#provincepick').next('.formerror').text('X').show();
    }

    if (data.txtFullName == '') {
        valid = false;
        $('#txtFullName').next('.formerror').text('X').show();
    }

    if (data.txtFullName.length > 50) {
        valid = false;
        $('#txtFullName').next('.formerror').text('Quá 50 ký tự').show();
    }

    if (data.txtFullName.length < 2) {
        valid = false;
        $('#txtFullName').next('.formerror').text('Tên tối thiểu 2 ký tự').show();
    }

    regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
    if (!regPhone.test(data.txtMobile)) {
        valid = false;
        $('#txtMobile').next('.formerror').text('Chưa đúng định dạng').show();
    }

    if (data.txtMobile == '') {
        valid = false;
        $('#txtMobile').next('.formerror').text('X').show();
    }

    //if (data.txtEmail != '') {
    //    var regMail = /^((\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3})|(\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}\.[a-zA-Z]{2}))$/;
    //    if (!regMail.test(data.txtEmail)) {
    //        valid = false;
    //        $form.find('*[name=txtEmail]').parent().find('.help').text('Email chưa đúng định dạng').show();
    //    }
    //}

    if (data.txtCaptcha == '') {
        valid = false;
        $form.find('*[name=txtCaptcha]').parent().find('.formerror2').show();
    }

    if (!data.chkrules) {
        valid = false;
        alert("Bạn phải đồng ý với các điều khoản đăng tin của chúng tôi.");
    }

    if (!valid) {
        if (submitbtn)
            $(submitbtn).css("visibility", "visible");
        else
            $("#subformbut").css("visibility", "visible");
        window.setTimeout("SubmitQuickOrderDelay()", 1000);
        $('.require').show();
        return;
    }
    else
        $('.require').hide();

    data.autocomplete = ''; fileUpload = '';
    $('#thumbnails li').find("img").each(function () {
        if (fileUpload != "") fileUpload += ";";
        fileUpload += $(this).attr("name");
    });
    data.lUpimage = '';
    data.lUpimage = fileUpload;
    //data.htmlcontent = dataContent;
    //data.txtContent = dataContenttest;
    data.txtContent = dataContent;

    if (POST_PREVIEW_FLAG) {
        POST_PREVIEW_FLAG = false;
        POSTAjax('/rao-vat-may-cu/aj/ClassifiedV2/SubmitToPreview', data, BeforeSendAjax, function (e) {
            if (e !== null && e != '' && e != undefined) {
                var previewHtml = '';
                previewHtml += '<div class="product-list-wrapper-left">';
                previewHtml += '<ul id="all" class="main-content clearfix">';
                previewHtml += e;
                previewHtml += '</ul>';
                previewHtml += '</div>';
                $('#container-post .step2 #preview-wrapper').html(previewHtml);
                $('.step1').hide();
                $('.step2').show().css({
                    left: -($('.step2').width())
                }).animate({
                    left: 0
                }, 500);
                $("#openfancyclquick").fancybox({
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'showCloseButton': false,
                    'margin': 0,
                    'padding': 1,
                    'modal': true,
                    'scrolling': 'no',
                    'beforeClose': function () {
                        if ($('.step2').is(':visible')) {
                            $('.step2').hide();
                            $('.step1').show();
                            $("#openfancyclquick").click();
                            return false;
                        }
                    }
                });
            }
            $('#dlding').fadeOut(1000);
            POST_PREVIEW_FLAG = true;
        }, ErrorAjax, true);
    }
}

function Goback() {
    $('.step2').hide();
    $('.step1').show().css({
        left: -($('.step1').width())
    }).animate({
        left: 0
    }, 500);
}

function RemoveImage(id) {
    if (id.toString().indexOf('img-') >= 0)
        id = id.toString().replace('img-', '');

    var imgName = $('#img-' + id).attr("name");

    $('#img-' + id).attr('data', 'false');
    $('#img-' + id).children('img').attr('src', 'http://s.tgdd.vn/v2013/raovat/Content/images/sites/icon-no-img.png');
    $('#img-' + id).children('.progressbar').html('');
    var _numOfImages = $('#thumbnail li').length;
    $.ajax({
        url: "/rao-vat-may-cu/aj/ClassifiedV2/RemoveImage",
        type: "POST",
        cache: false,
        data: { imageName: imgName, numOfImages: _numOfImages },
        beforeSend: function (d) {

        },
        success: function (result) {
        },
        error: function (d) {
            var result = $.parseJSON(d);
            alert(result.success);
            if (result.success == false) {
                alert('Quá trình xóa file bị lỗi.');
                return;
            }
        }
    })
}

function CreateMessage(type) {

    if (type == 1) {
        var template = '<ul>';
        template += '<li>Không gõ từ "Bán" trong tiêu đề</li>';
        template += '<li>Tối đa 160 ký tự</li>';
        template += '<li>Dùng Tiếng Việt có dấu</li>';
        template += '<li>Một tin rao chỉ tối đa 1 sản phẩm</li>';
        template += '<li>Không quảng cáo shop, spam</li>';
        template += '<li>Tin vi phạm có thể bị xóa mà không báo trước. <a href="/quy-dinh-dang-tin-rao-vat" target="_blank">Xem quy định và hướng dẫn.</a></li>';
        template += '</ul>';
        $('.warning').html(template).fadeIn();
        $('.warning').css({ 'margin-top': '26px', 'padding': '5px' });
        $('.arrow').css({ 'padding-left': '2px', 'margin-left': '5px', 'margin-top': '34px' });
    }
    if (type == 2) {
        var template = '<ul>';
        template += '<li>Dùng Tiếng Việt có dấu</li>';
        template += '<li>Nhấn Enter để xuống dòng khi viết dài sẽ giúp tin của bạn dễ đọc hơn</li>';
        template += '<li>Nội dung tin rao càng đầy đủ và chính xác, cơ hội bán càng cao</li>';
        template += '</ul>';
        $('.warning').html(template).fadeIn();
        $('.warning').css({ 'margin-top': '90px', 'padding': '5px' });
        $('.arrow').css({ 'padding-left': '2px', 'margin-left': '5px', 'margin-top': '100px' });
    }
    if (type == 3) {
        var template = '<ul>';
        template += '<li>Dung lượng tối đa 2MB/ảnh</li>';
        template += '<li>Chỉ hình chụp sản phẩm thực tế mới được duyệt</li>';
        template += '<li>Hình lấy trên mạng có kèm địa chỉ website sẽ bị xóa</li>';
        template += '<div><img src="/rao-vat-may-cu/Content/images/sites/correct-img.png"></div>';
        template += '</ul>';
        $('.warning').html(template).fadeIn();
        $('.warning').css({ 'margin-top': '278px', 'padding': '5px' });
        $('.arrow').css({ 'padding-left': '2px', 'margin-left': '5px', 'margin-top': '288px' });
    }
    if (type == 4) {
        var template = '<ul>';
        template += '<li>Bạn có thể xóa tin đã rao thông qua sms bằng số điện thoại này.</li>';
        template += '</ul>';
        $('.warning').html(template).fadeIn();
        $('.warning').css({ 'margin-top': '478px', 'padding': '5px' });
        $('.arrow').css({ 'padding-left': '2px', 'margin-left': '5px', 'margin-top': '488px' });
    }

    if (type == 5) {
        var template = '<ul>';
        template += '<li>Không bắt buộc</li>';
        template += '<li>Dùng để nhận thông báo về tin của bạn (khi được duyệt, xóa...)</li>';
        template += '</ul>';
        $('.warning').html(template).fadeIn();
        $('.warning').css({ 'margin-top': '478px', 'padding': '5px' });
        $('.arrow').css({ 'padding-left': '2px', 'margin-left': '5px', 'margin-top': '488px' });
    }

    $('.arrow').fadeIn();
}
