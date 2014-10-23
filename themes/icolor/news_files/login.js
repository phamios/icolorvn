function CallAjaxPostLogin(url, dat, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

/******************* LOGIN - HOME *****************************/
$(document).ready(function () {
    var cusid = $("#hfCusid").val();
    if (cusid != undefined) {
        //show location alert
        var ProvinceId = getCookie("CK_CHECK_PROVINCE_OF_USER");
        if (ProvinceId != "") {
            if (ProvinceId != $('#cityID').val())
                $("#divshowlocation").css('display', 'block');
            $("#divshowlocation").delay(2000).fadeOut();
        }
    }
});

/*validate phone number*/
function validatePhoneInput(strMobile) {
    //check phone
    var regphn = /^(((09)[0-9][2-9][0-9]{6})|((012)[0-9][2-9][0-9]{6})|((016)[2-9]{2}[0-9]{6}))$/;
    if (!regphn.test(strMobile))
        return false;
    return true;
}

function Failed(e) {
    $("#spanmsg").html('Lỗi: ' + e.toString());
}

function ValidatePassword() {

    var pass = $("#txtpassword").val();
    var msg = $("#spanmsg");
    if (pass == "") {
        msg.addClass("error");
        msg.html("Vui lòng nhập mật khẩu");
        return false;
        $("#txtpassword").focus();

    } else if (pass.indexOf(' ') >= 0) {
        msg.addClass("error");
        msg.html("Mật khẩu không được chứa khoảng trắng");
        return false;
        $("#txtpassword").focus();

    } else if (pass.length < 6 || pass.length > 20) {
        msg.addClass("error");
        msg.html("Mật khẩu phải có độ dài 6-20 ký tự");
        return false;
        $("#txtpassword").focus();
    } else {
        msg.html("");
    }
    return true;
}

/*Main function to validate Login*/
function FormatValidateCharBlur(iduser) {

    var str = $('#' + iduser + '').val();
    if (isNaN(str)) {
        CheckRegisterFormEmail_Login(iduser);
    }
    else {
        CheckRegisterFormPhone_Login(iduser);
    }
}

function CheckRegisterFormEmail_Login(e) {

    var strEmail = $('#' + e + '').val();
    var msg = $("#spanmsg");
    // check email
    if (strEmail == '') {
        msg.addClass("error");
        msg.html("Vui lòng nhập Email hoặc số điện thoại");
        $("#txtusername").focus();
        return false;
    }
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(strEmail)) {
        msg.addClass("error");
        msg.html("Email không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    // return true;
    CheckExistEmail(strEmail);
}

function CheckRegisterFormPhone_Login(m) {

    var msg = $("#spanmsg");
    var strMobile = $('#' + m + '').val();
    // check phone number
    if (strMobile == '') {
        msg.addClass("error");
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;

    } else if (!validatePhoneInput(strMobile)) {
        msg.addClass("error");
        msg.html("Số điện thoại không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    CheckExistPhone(strMobile);
}

function CheckExistPhone(strMobile) {
    var data = { strMobile: strMobile };
    CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, CheckPhoneNumberValidSuccessed2, Failed, true);
}

function CheckExistEmail(strEmail) {

    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, CheckEmailValidSuccessed, Failed, true);
}

function CheckPhoneNumberValidSuccessed2(e) {
    var msg = $("#spanmsg");
    if (e == "False") {
        msg.addClass("error");
        msg.html("Số điện thoại chưa được đăng ký");
        return;
        //  $("#txtusername").focus();
    } else {
        msg.html("");
    }
}

function CheckEmailValidSuccessed(e) {
    var msg = $("#spanmsg");
    if (e == "False") {
        msg.addClass("error");
        msg.html("Email chưa được đăng ký");
        // $("#txtusername").focus();
        return;
    } else {
        msg.html("");
    }
}

function khongsudung() {
    //function ValidateBeforeSubmit() {
    //    var username = $("#txtusername").val();
    //    var pass = $("#txtpassword").val();
    //    if (username == "") {
    //        FormatValidateCharBlur('txtusername');
    //        return false;
    //    } else if (pass == "") {
    //        ValidatePassword();
    //        return false;
    //    } else { //validate OK
    //        var $form = $('#form-login');
    //        $form.ajaxSubmit({
    //            success: function (e) {
    //                if (e.indexOf("ERRORUSER") > -1) {
    //                    $("#spanmsg").addClass("error");
    //                    $("#spanmsg").html("Nhập email hoặc số điện thoại");
    //                    $("#txtusername").focus();
    //                } else if (e.indexOf("ERRORPWD") > -1) {
    //                    $("#spanmsg").addClass("error");
    //                    $("#spanmsg").html("Vui lòng nhập mật khẩu");
    //                    $("#txtpassword").focus();
    //                }
    //                else if (e.indexOf("ERROR") > -1) {
    //                    $("#spanmsg").addClass("error");
    //                    $("#spanmsg").html("Thông tin đăng nhập không chính xác");
    //                } else {
    //                    window.location = e;
    //                }
    //            }
    //        });
    //    }
    //}
}

/*Get login status - Success or fail*/
//function ValidateBeforeSubmit() {

//    var curURL = document.referrer;
//    if (curURL == "")
//        curURL = window.location.href;
//    if (curURL.indexOf("dang-nhap") > -1 || curURL.indexOf("dang-ky") > -1)
//        curURL = "/";

//    var username = $("#txtusername").val();
//    var pass = $("#txtpassword").val();
//    if (username == "") {
//        FormatValidateCharBlur('txtusername');
//        // return false;
//        return;
//    } else if (pass == "") {
//        ValidatePassword();
//        //return false;
//        return;
//    } else { //validate OK
//        var $form = $('#form-login');
//        $form.ajaxSubmit({
//            success: function (e) {
//                if (e == -1) {
//                    $("#spanmsg").addClass("error");
//                    $("#spanmsg").html("Nhập email hoặc số điện thoại");
//                    $("#txtusername").focus();
//                } else if (e == -2) {
//                    $("#spanmsg").addClass("error");
//                    $("#spanmsg").html("Vui lòng nhập mật khẩu");
//                    $("#txtpassword").focus();
//                }
//                else if (e == 0) {
//                    $("#spanmsg").addClass("error");
//                    $("#spanmsg").html("Thông tin đăng nhập không chính xác");
//                }
//                else { //success
//                    window.location = curURL;
//                }
//            }
//        });
//    }
//}


function ValidateBeforeSubmit() {
    var username = $("#txtusername").val();
    var pass = $("#txtpassword").val();
    if (username == "") {
        FormatValidateCharBlur('txtusername');
         return false;
    } else if (pass == "") {
        ValidatePassword();
        return false;
    } else { //validate OK
        var $form = $('#form-login'); 
        $form.ajaxSubmit({
            success: function (e) {
                var vl = "";
                var url = "";
                if (e.indexOf("@") > -1) {
                    vl = e.substr(0, e.indexOf("@"));
                    url = e.substr(e.indexOf("@") + 1);
                } else {
                    vl = e;
                }

                if (vl == "-1") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Nhập email hoặc số điện thoại");
                    $("#txtusername").focus();
                } else if (vl == "-2") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Vui lòng nhập mật khẩu");
                    $("#txtpassword").focus();
                }
                else if (vl == "0") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Thông tin đăng nhập không chính xác");
                }
                else { //success
                    window.location = url;
                }
            }
        });
    }
}


/******************* LOGIN - HOME END *****************************/

/*=======================FORGET PASSWORD======================*/

function Validateforgetpass() {
    var strEmail = $("#popupemailforget").val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (strEmail == "") {
        $("#spforget").html("Vui lòng nhập Email của bạn");
        $("#popupemailforget").focus();
        return false;
    }
    else if (!regem.test(strEmail)) {
        $("#spforget").html("Email không đúng định dạng");
        $("#popupemailforget").focus();
        return false;
    } else if (!CheckExistEmailForgetPass(strEmail)) {
        $("#spforget").html("Email không tồn tại trong hệ thống");
        $("#popupemailforget").focus();
        return false;
    }
    return true;
}

function CheckExistEmailForgetPass(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {

        if (e == "False") {
            return false;
        }
    }, function (e) { }, true);
    return true;
}

/*Send link to email to reset password*/
function SendLinkToResetPassword() {
    var Email = $("#popupemailforget").val();
    if (!Validateforgetpass()) {
        return;
    }
    else {
        $("#spforget").html("");
        var data = { strEmail: Email };
        CallAjaxPostLogin("/aj/Common/ResetPasswordFromEmail/", data, function (e) {
            if (e == 1) {
                alert("Vui lòng kiểm tra email của bạn để tạo mật khẩu mới");
                $.fancybox.close();
            } else {
                $("#spforget").html("Không lấy được mã để active. Vui lòng kiểm tra lại");
            }
        }, function () { alert('Loi') }, true);
    }
}

/*Validate password before process*/
function validatePasswordForgetPassword(ctl1, ctl2) {
    var pass1 = $('#' + ctl1 + '').val();
    var pass2 = $('#' + ctl2 + '').val();
    if (pass1 == "") {
        $("#spanmsgforget").html("Vui lòng nhập mật khẩu");
        $('#' + ctl1 + '').focus();
    } else if (pass1.length < 6) {
        $("#spanmsgforget").html("Mật khẩu phải có ít nhất 6 kí tự");
        $('#' + ctl1 + '').focus();
    } else if (pass1.length > 20) {
        $("#spanmsgforget").html("Mật khẩu tối đa 20 kí tự");
        $('#' + ctl1 + '').focus();
    } else if (pass2 == "") {
        $("#spanmsgforget").html("Vui lòng xác nhận mật khẩu");
        $('#' + ctl2 + '').focus();
    } else if (pass2.length < 6) {
        $("#spanmsgforget").html("Mật khẩu phải có ít nhất 6 kí tự");
        $('#' + ctl2 + '').focus();
    }
    else if (pass2.length > 20) {
        $("#spanmsgforget").html("Mật khẩu tối đa 20 kí tự");
        $('#' + ctl2 + '').focus();
    } else if (pass1 != pass2) {
        $("#spanmsgforget").html("Mật khẩu không giống nhau");
    } else {
        $("#form-pass").submit();
    }
}

/*=======================FORGET PASSWORD END======================*/

/***************************REGISTER******************************/

/*Check validate email*/
function CheckRegisterFormEmail_Register(e) {
    var strEmail = $('#' + e + '').val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // check email
    if (strEmail == '') {
        $("#login-error").css('display', 'block');
        $("#login-error").addClass("error");
        $("#login-error").html("Vui lòng nhập địa chỉ Email");
        $("#txtemail").focus();
        return;
    }
    else if (!regem.test(strEmail)) {
        $("#login-error").css('display', 'block');
        $("#login-error").addClass("error");
        $("#login-error").html("Email không đúng định dạng");
        $("#txtemail").focus();
        return;
    }
    CheckExistEmail_Register(strEmail);
}

/*Check email to register - If existed, return error*/
function CheckExistEmail_Register(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e.toString() == "True" || e.toString() == "ERR") {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
        }
    }, function () {
    }, true);
}

/*Send link to email to register account*/
function SendLinkToRegister() {
    var Email = $("#txtemail").val();
    $("#login-error").html("");
    $("#login-error").css("display", "none");
    var data = { strEmail: Email };
    CallAjaxPostLogin("/aj/Common/SendEmailRegister/", data, function (e) {
        if (e == -1) {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
        }
        else if (e == 1) {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
        } else {
            $("#login-error").css('display', 'block');
            // $("#login-error").html("Lỗi trong việc gửi email. Vui lòng thử lại sau.");
            $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
        }
    }, function () { alert('Loi') }, true);
}

function backupnenkhongxai() {
    //function submitsendEmail() {
    //    var Email = $("#txtemail").val();
    //    var $form = $("#form-register");

    //    $form.ajaxSubmit({
    //        success: function (e) {
    //            if (e.indexOf('SUCCESS') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#divcaptcha").css("display", "none");
    //                $("#divconfirmcaptcha").css("display", "none");
    //                $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
    //            }
    //            else if (e.indexOf('ERRSENDEMAIL') > 0) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Không gửi được email, vui lòng thử lại sau.");
    //            } else if (e.indexOf('ERREMAIL') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
    //                $("#txtemail").focus();
    //            } else if (e.indexOf('ERRCODE') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Lỗi lấy code gửi mail, vui lòng thử lại sau.");
    //            } else if (e.indexOf('ERROREMPTYCAPTCHA') > -1) {
    //                $("#divcaptcha").css("display", "block");
    //                $("#divconfirmcaptcha").css("display", "block");
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("<p>Bạn đã đăng ký vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
    //                $("#txtcaptcha").focus();
    //            } else if (e.indexOf('ERRORCAPTCHA') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Mã bảo mật không đúng.");
    //                $("#txtcaptcha").focus();
    //            } else if (e.indexOf('ERROEXISTEMAIL') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
    //                $("#txtcaptcha").focus();
    //            }
    //        }
    //    });
    //}

}

function submitsendEmail() {
    var Email = $("#txtemail").val();
    var $form = $("#form-register");

    $form.ajaxSubmit({
        success: function (e) {
            if (e == 1) {
                $("#login-error").css('display', 'block');
                $("#divcaptcha").css("display", "none");
                $("#divconfirmcaptcha").css("display", "none");
                $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
            }
            else if (e == 0) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Không gửi được email, vui lòng thử lại sau.");
            } else if (e == -3) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
                $("#txtemail").focus();
            } else if (e == -4) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Email không hợp lệ");
                $("#txtemail").focus();
            }
            else if (e == -5) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập địa chỉ Email");
                $("#txtemail").focus();
            }
            else if (e == -1) {
                $("#divcaptcha").css("display", "block");
                $("#divconfirmcaptcha").css("display", "block");
                $("#login-error").css('display', 'block');
                $("#login-error").html("<p>Bạn đã đăng ký vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
                $("#txtcaptcha").focus();
            } else if (e == -2) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Mã bảo mật không đúng.");
                $("#txtcaptcha").focus();
            }
        }
    });
}

/*Validate to show check icon*/
function ValidateRegisterName() {
    var name = $("#txtname").val();
    name = name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    if (name == "") {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Vui lòng nhập tên của bạn");
        $("#txtname").focus();
    } else {
        $("#login-error").html("");
        $("#login-error").css('display', 'none');
        $("#txtname").val(name.trim());
        $("#spcheckname").html("<img border=\"0\" alt=\"Tên OK\" src=\"/Content/images/sites/check-icon.png\"/>");
    }
}

/*Validate to show check icon*/
function ValidateRegisterPassword() {

    var pass1 = $("#txtpassword").val().trim();

    if (pass1 == "") {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Vui lòng nhập mật khẩu của bạn");
        $("#txtpassword").focus();
    } else if (pass1.length < 6) {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Mật khẩu phải có ít nhất 6 kí tự");
        $("#txtpassword").focus();
    } else if (pass1.length > 20) {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Mật khẩu tối đa 20 kí tự");
        $("#txtpassword").focus();
    } else {
        $("#login-error").html("");
        $("#login-error").css('display', 'none');
        $("#spcheckpass").html("<img border=\"0\" alt=\"Tên OK\" src=\"/Content/images/sites/check-icon.png\"/>");
    }

}

/*Get Gavatar of User*/
function get_gravatar(email, size) {
    if (email != "") {
        var MD5 = function (s) { function L(k, d) { return (k << d) | (k >>> (32 - d)) } function K(G, k) { var I, d, F, H, x; F = (G & 2147483648); H = (k & 2147483648); I = (G & 1073741824); d = (k & 1073741824); x = (G & 1073741823) + (k & 1073741823); if (I & d) { return (x ^ 2147483648 ^ F ^ H) } if (I | d) { if (x & 1073741824) { return (x ^ 3221225472 ^ F ^ H) } else { return (x ^ 1073741824 ^ F ^ H) } } else { return (x ^ F ^ H) } } function r(d, F, k) { return (d & F) | ((~d) & k) } function q(d, F, k) { return (d & k) | (F & (~k)) } function p(d, F, k) { return (d ^ F ^ k) } function n(d, F, k) { return (F ^ (d | (~k))) } function u(G, F, aa, Z, k, H, I) { G = K(G, K(K(r(F, aa, Z), k), I)); return K(L(G, H), F) } function f(G, F, aa, Z, k, H, I) { G = K(G, K(K(q(F, aa, Z), k), I)); return K(L(G, H), F) } function D(G, F, aa, Z, k, H, I) { G = K(G, K(K(p(F, aa, Z), k), I)); return K(L(G, H), F) } function t(G, F, aa, Z, k, H, I) { G = K(G, K(K(n(F, aa, Z), k), I)); return K(L(G, H), F) } function e(G) { var Z; var F = G.length; var x = F + 8; var k = (x - (x % 64)) / 64; var I = (k + 1) * 16; var aa = Array(I - 1); var d = 0; var H = 0; while (H < F) { Z = (H - (H % 4)) / 4; d = (H % 4) * 8; aa[Z] = (aa[Z] | (G.charCodeAt(H) << d)); H++ } Z = (H - (H % 4)) / 4; d = (H % 4) * 8; aa[Z] = aa[Z] | (128 << d); aa[I - 2] = F << 3; aa[I - 1] = F >>> 29; return aa } function B(x) { var k = "", F = "", G, d; for (d = 0; d <= 3; d++) { G = (x >>> (d * 8)) & 255; F = "0" + G.toString(16); k = k + F.substr(F.length - 2, 2) } return k } function J(k) { k = k.replace(/rn/g, "n"); var d = ""; for (var F = 0; F < k.length; F++) { var x = k.charCodeAt(F); if (x < 128) { d += String.fromCharCode(x) } else { if ((x > 127) && (x < 2048)) { d += String.fromCharCode((x >> 6) | 192); d += String.fromCharCode((x & 63) | 128) } else { d += String.fromCharCode((x >> 12) | 224); d += String.fromCharCode(((x >> 6) & 63) | 128); d += String.fromCharCode((x & 63) | 128) } } } return d } var C = Array(); var P, h, E, v, g, Y, X, W, V; var S = 7, Q = 12, N = 17, M = 22; var A = 5, z = 9, y = 14, w = 20; var o = 4, m = 11, l = 16, j = 23; var U = 6, T = 10, R = 15, O = 21; s = J(s); C = e(s); Y = 1732584193; X = 4023233417; W = 2562383102; V = 271733878; for (P = 0; P < C.length; P += 16) { h = Y; E = X; v = W; g = V; Y = u(Y, X, W, V, C[P + 0], S, 3614090360); V = u(V, Y, X, W, C[P + 1], Q, 3905402710); W = u(W, V, Y, X, C[P + 2], N, 606105819); X = u(X, W, V, Y, C[P + 3], M, 3250441966); Y = u(Y, X, W, V, C[P + 4], S, 4118548399); V = u(V, Y, X, W, C[P + 5], Q, 1200080426); W = u(W, V, Y, X, C[P + 6], N, 2821735955); X = u(X, W, V, Y, C[P + 7], M, 4249261313); Y = u(Y, X, W, V, C[P + 8], S, 1770035416); V = u(V, Y, X, W, C[P + 9], Q, 2336552879); W = u(W, V, Y, X, C[P + 10], N, 4294925233); X = u(X, W, V, Y, C[P + 11], M, 2304563134); Y = u(Y, X, W, V, C[P + 12], S, 1804603682); V = u(V, Y, X, W, C[P + 13], Q, 4254626195); W = u(W, V, Y, X, C[P + 14], N, 2792965006); X = u(X, W, V, Y, C[P + 15], M, 1236535329); Y = f(Y, X, W, V, C[P + 1], A, 4129170786); V = f(V, Y, X, W, C[P + 6], z, 3225465664); W = f(W, V, Y, X, C[P + 11], y, 643717713); X = f(X, W, V, Y, C[P + 0], w, 3921069994); Y = f(Y, X, W, V, C[P + 5], A, 3593408605); V = f(V, Y, X, W, C[P + 10], z, 38016083); W = f(W, V, Y, X, C[P + 15], y, 3634488961); X = f(X, W, V, Y, C[P + 4], w, 3889429448); Y = f(Y, X, W, V, C[P + 9], A, 568446438); V = f(V, Y, X, W, C[P + 14], z, 3275163606); W = f(W, V, Y, X, C[P + 3], y, 4107603335); X = f(X, W, V, Y, C[P + 8], w, 1163531501); Y = f(Y, X, W, V, C[P + 13], A, 2850285829); V = f(V, Y, X, W, C[P + 2], z, 4243563512); W = f(W, V, Y, X, C[P + 7], y, 1735328473); X = f(X, W, V, Y, C[P + 12], w, 2368359562); Y = D(Y, X, W, V, C[P + 5], o, 4294588738); V = D(V, Y, X, W, C[P + 8], m, 2272392833); W = D(W, V, Y, X, C[P + 11], l, 1839030562); X = D(X, W, V, Y, C[P + 14], j, 4259657740); Y = D(Y, X, W, V, C[P + 1], o, 2763975236); V = D(V, Y, X, W, C[P + 4], m, 1272893353); W = D(W, V, Y, X, C[P + 7], l, 4139469664); X = D(X, W, V, Y, C[P + 10], j, 3200236656); Y = D(Y, X, W, V, C[P + 13], o, 681279174); V = D(V, Y, X, W, C[P + 0], m, 3936430074); W = D(W, V, Y, X, C[P + 3], l, 3572445317); X = D(X, W, V, Y, C[P + 6], j, 76029189); Y = D(Y, X, W, V, C[P + 9], o, 3654602809); V = D(V, Y, X, W, C[P + 12], m, 3873151461); W = D(W, V, Y, X, C[P + 15], l, 530742520); X = D(X, W, V, Y, C[P + 2], j, 3299628645); Y = t(Y, X, W, V, C[P + 0], U, 4096336452); V = t(V, Y, X, W, C[P + 7], T, 1126891415); W = t(W, V, Y, X, C[P + 14], R, 2878612391); X = t(X, W, V, Y, C[P + 5], O, 4237533241); Y = t(Y, X, W, V, C[P + 12], U, 1700485571); V = t(V, Y, X, W, C[P + 3], T, 2399980690); W = t(W, V, Y, X, C[P + 10], R, 4293915773); X = t(X, W, V, Y, C[P + 1], O, 2240044497); Y = t(Y, X, W, V, C[P + 8], U, 1873313359); V = t(V, Y, X, W, C[P + 15], T, 4264355552); W = t(W, V, Y, X, C[P + 6], R, 2734768916); X = t(X, W, V, Y, C[P + 13], O, 1309151649); Y = t(Y, X, W, V, C[P + 4], U, 4149444226); V = t(V, Y, X, W, C[P + 11], T, 3174756917); W = t(W, V, Y, X, C[P + 2], R, 718787259); X = t(X, W, V, Y, C[P + 9], O, 3951481745); Y = K(Y, h); X = K(X, E); W = K(W, v); V = K(V, g) } var i = B(Y) + B(X) + B(W) + B(V); return i.toLowerCase() };
        var size = size || 80;
        return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
        // var imgURL = 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
        // $("#divavatar").html("<img src=" + imgURL + " border=\"0\" alt=\"Hình đại diện\" />");
        // $("#hfavatar").val(imgURL);
    } else {
        //    $("#divavatar").html("<img src=\"/Content/images/sites/avatar.png\" border=\"0\" alt=\"Hình đại diện\" />");
        return '/Content/images/sites/avatar.png';
    }
}

function registerkhongxai() {
    //function CreateCustomer() {
    //    var $frm = $("#form-register-final");
    //    $frm.ajaxSubmit({
    //        success: function (e) {
    //            if (e.indexOf('FAIL') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Lỗi đăng ký thông tin thành viên, vui lòng thử lại sau.");
    //            } else if (e.indexOf('SUCCESS') > -1) {
    //                $("#login-error").css('display', 'block');
    //                $("#login-error").html("Đăng ký thành công. Click vào <a href=\"/\">đây</a> để trở về trang chủ");
    //            }
    //        }
    //    });
    //}
}

/*Save register information*/
function CreateCustomer() {
    var $frm = $("#form-register-final");
    $frm.ajaxSubmit({
        success: function (e) {
            if (e == -1) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập họ tên của bạn");
                $("#txtname").focus();
            } else if (e == -2) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập mật khẩu");
                $("#txtpassword").focus();
            }
            else if (e == 0) {

                $("#login-error").css('display', 'block');
                $("#login-error").html("Lỗi đăng ký thông tin thành viên, vui lòng thử lại sau.");
            }
            else {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Đăng ký thành công. Click vào <a href=\"/\">đây</a> để trở về trang chủ");
            }
        }
    });
}

/***************************REGISTER END******************************/

/********************* LOGIN - MAIN **********************************/

function Checkdataonblur(iduser) {
    var str = $('#' + iduser + '').val();
    if (isNaN(str)) {
        CheckEmail_LoginMain(iduser);
    }
    else {
        CheckPhone_LoginMain(iduser);
    }
}

function CheckEmail_LoginMain(e) {
    var strEmail = $('#' + e + '').val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var msg = $("#login-error");
    // check email
    if (strEmail == '' || strEmail == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;
    }
    if (!regem.test(strEmail)) {
        $("#login-error").css('display', 'block');
        msg.html("Email không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    // return true;
    CheckExistEmailMain(strEmail);
}

function CheckPhone_LoginMain(m) {
    var msg = $("#login-error");
    var strMobile = $('#' + m + '').val();
    // check phone number
    if (strMobile == '' || strMobile == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;

    } else if (!validatePhoneInput(strMobile)) {
        $("#login-error").css('display', 'block');
        msg.html("Số điện thoại không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    msg.html("");
    $("#login-error").css('display', 'none');
    CheckExistPhoneMain(strMobile);
}

function CheckExistPhoneMain(strMobile) {
    var data = { strMobile: strMobile };
    CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, function (e) {
        if (e == "True")
            return true;
    }, Failed, true);
    return false;
}

function CheckExistEmailMain(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e == "True")
            return true;
    }, Failed, true);
    return false;
}

function ValidatePassMain(e) {
    var pass = $('#' + e + '').val();
    var msg = $("#login-error");
    if (pass == '' || pass == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Vui lòng nhập mật khẩu");
        $("#txtpassword").focus();
        return false;
    } else if (pass.indexOf(' ') >= 0) {
        $("#login-error").css('display', 'block');
        msg.html("Mật khẩu không được chứa khoảng trắng");
        return false;
        $("#txtpassword").focus();
    } else if (pass.length < 6 || pass.length > 20) {
        $("#login-error").css('display', 'block');
        msg.html("Mật khẩu phải có độ dài 6-20 ký tự");
        return false;
        $("#txtpassword").focus();
    }
    msg.html("");
    $("#login-error").css('display', 'none');
    return true;
}

function khongxai() {
    //function ValidateDataBeforeLogin(u, p) {
    //    var us = $('#' + u + '').val();
    //    var pa = $('#' + p + '').val();
    //    if (us == '' || us == undefined) {
    //        Checkdataonblur(u);
    //        return false;
    //    }
    //    else if (pa == '' || pa == undefined) {
    //        ValidatePassMain(p);
    //        return false;
    //    }
    //    else {
    //        var $formMain = $('#form-login-main');
    //        $formMain.ajaxSubmit({
    //            success: function (e) {
    //                if (e.indexOf('ERRORLOGIN') > -1) {
    //                    $("#login-error").css('display', 'block');
    //                    $("#login-error").html("Lỗi đăng nhập. Vui lòng kiểm tra lại tài khoản.");
    //                } else if (e.indexOf('ERROREMPTYCAPTCHA') > -1) {
    //                    $("#divcaptcha").css("display", "block");
    //                    $("#divconfirmcaptcha").css("display", "block");
    //                    $("#login-error").css('display', 'block');
    //                    $("#login-error").html("<p>Bạn đã đăng nhập vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
    //                    $("#txtcaptcha").focus();
    //                }
    //                else if (e.indexOf('ERRORCAPTCHA') > -1) {
    //                    $("#login-error").css('display', 'block');
    //                    $("#login-error").html("Mã bảo mật không đúng.");
    //                    $("#txtcaptcha").focus();
    //                } else if (e.indexOf('ERRORINVALID') > -1) {
    //                    $("#login-error").css('display', 'block');
    //                    $("#login-error").html("Email hoặc số điện thoại không tồn tại.");
    //                    $("#txtusername").focus();
    //                }
    //                else {
    //                    window.location = e;
    //                }
    //            }
    //        });
    //    }
    //}


//function ValidateDataBeforeLogin(u, p) {
//    var curURL = document.referrer;
//    if (curURL == "")
//        curURL = window.location.href;
//    if (curURL.indexOf("dang-nhap") > -1 || curURL.indexOf("dang-ky") > -1)
//        curURL = "/";


//    var us = $('#' + u + '').val();
//    var pa = $('#' + p + '').val();
//    if (us == '' || us == undefined) {
//        Checkdataonblur(u);
//        return false;
//    }
//    else if (pa == '' || pa == undefined) {
//        ValidatePassMain(p);
//        return false;
//    }
//    else {
//        var $formMain = $('#form-login-main');
//        $formMain.ajaxSubmit({
//            success: function (e) {
//                if (e == 0) {
//                    $("#login-error").css('display', 'block');
//                    $("#login-error").html("Thông tin đăng nhập không chính xác.");
//                } else if (e == -1) {
//                    $("#divcaptcha").css("display", "block");
//                    $("#divconfirmcaptcha").css("display", "block");
//                    $("#login-error").css('display', 'block');
//                    $("#login-error").html("<p>Bạn đã đăng nhập vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
//                    $("#txtcaptcha").focus();
//                }
//                else if (e == -2) {
//                    $("#login-error").css('display', 'block');
//                    $("#login-error").html("Mã bảo mật không đúng.");
//                    $("#txtcaptcha").focus();
//                }
//                else {
//                    var url = $("#hfsession").val();
//                    alert(url);
//                  //  window.location = @sessionStorage[];
//                }
//            }
//        });
//    }
    //}

}

function ValidateDataBeforeLogin(u, p) {
    
    var us = $('#' + u + '').val();
    var pa = $('#' + p + '').val();
    if (us == '' || us == undefined) {
        Checkdataonblur(u);
        return false;
    }
    else if (pa == '' || pa == undefined) {
        ValidatePassMain(p);
        return false;
    }
    else {
        var $formMain = $('#form-login-main');
        $formMain.ajaxSubmit({
            success: function (e) {
                var vl = "";
                var url = "";
                if (e.indexOf("@") > -1) {
                    vl = e.substr(0, e.indexOf("@"));
                    url = e.substr(e.indexOf("@") + 1);
                } else {
                    vl = e;
                }

                if (vl == "0") {
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("Thông tin đăng nhập không chính xác.");
                } else if (vl == "-1") {
                    $("#divcaptcha").css("display", "block");
                    $("#divconfirmcaptcha").css("display", "block");
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("<p>Bạn đã đăng nhập vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
                    $("#txtcaptcha").focus();
                }
                else if (vl == "-2") {
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("Mã bảo mật không đúng.");
                    $("#txtcaptcha").focus();
                }
                else {
                     window.location = url;
                }
            }
        });
    }
}

/********************* LOGIN - MAIN END **********************************/