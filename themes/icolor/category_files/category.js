﻿function AddToCompare(n,t){if(COMPARE_ARR_PRODUCT_ID.length>=4){alert("Không thể so sánh nhiều hơn 4 sản phẩm");return}if(COMPARE_ARR_PRODUCT_ID.indexOf(t)>=0){alert("Bạn đã chọn so sánh sản phẩm này rồi");return}COMPARE_ARR_PRODUCT_ID.push(t);var i=JSON.stringify(COMPARE_ARR_PRODUCT_ID);POSTAjaxJSON("/aj/Category/ProductCompare/",i,BeforeSendAjax,function(i){$("#dlding").fadeOut(300),i!=null&&(n!=undefined&&$(n).parent(".add-to-compare").replaceWith('<div id="addedtocompare-'+t+'" class="add-to-compare is-added clearfix"><span onclick="RemoveFromCompare('+t+')">Đã chọn so sánh<\/span><\/div>'),$("#catprodcmpr").html(i.responseText),$("body,html").animate({scrollTop:0},500),$("#catprodcmpr .compare-chart-wrapper .compare-chart li.row:gt(5)").hide(),$("#catprodcmpr .compare-chart-wrapper .compare-chart li.row:last").show()),RefreshCompareView()},ErrorAjax,!0)}function RemoveFromCompare(n){COMPARE_ARR_PRODUCT_ID=jQuery.grep(COMPARE_ARR_PRODUCT_ID,function(t){return t!=n});var t=JSON.stringify(COMPARE_ARR_PRODUCT_ID);POSTAjaxJSON("/aj/Category/ProductCompare/",t,BeforeSendAjax,function(t){t!=null&&($("#addedtocompare-"+n).replaceWith('<div class="add-to-compare clearfix"><span onclick="AddToCompare(this, '+n+')">Thêm vào so sánh<\/span><\/div>'),$("#catprodcmpr").html(t.responseText)),RefreshCompareView(),$("#dlding").fadeOut(300)},ErrorAjax,!0)}function RemoveAllCompare(){COMPARE_ARR_PRODUCT_ID=[],$("#catprodcmpr").html(""),$("div[id^=addedtocompare-]").each(function(){var n=$(this).attr("id").replace("addedtocompare-","");$(this).replaceWith('<div class="add-to-compare clearfix"><a href="javascript:void(0)" onclick="AddToCompare(this, '+n+')">Thêm vào so sánh<\/a><\/div>')}),SHOW_COMPARE_CONTENT=!0,EXPAND_PRODUCT_COMPARE_TABLE=!0}function ShowCompareContent(){$(".compare-chart-wrapper").slideDown(500),SHOW_COMPARE_CONTENT=!1}function ExpandProductCompareTable(){EXPAND_PRODUCT_COMPARE_TABLE?($("#catprodcmpr .compare-chart-wrapper .compare-chart li.row:gt(5)").slideDown(),$("#catexpcpr").html("[<b>-<\/b> Thu gọn]"),EXPAND_PRODUCT_COMPARE_TABLE=!1):($("#catprodcmpr .compare-chart-wrapper .compare-chart li.row:gt(5)").hide(),$("#catprodcmpr .compare-chart-wrapper .compare-chart li.row:last").show(),$("#catexpcpr").html("<b>+<\/b> Mở rộng"),EXPAND_PRODUCT_COMPARE_TABLE=!0)}function RefreshCompareView(){SHOW_COMPARE_CONTENT||$(".compare-chart-wrapper").show(),EXPAND_PRODUCT_COMPARE_TABLE||($("#catprodcmpr .compare-chart-wrapper .compare-chart li.row:gt(5)").slideDown(),$("#catexpcpr").html("[<b>-<\/b> Thu gọn]"))}function LoadMoreProductCat(){if(_CAT_LOADING_FLAG){if(_CAT_LOADING_FLAG=!1,_CAT_PAGE_INDEX==-1)return;_CAT_LOADING_FLAG=!1,_CAT_LOAD_MORE_DATA=$.extend({},_CAT_LOAD_MORE_DATA,{iPageIndex:_CAT_PAGE_INDEX+1}),POSTAjax("/aj/Category/LoadMoreProduct/",_CAT_LOAD_MORE_DATA,function(){$(".pager > h2 > a").html('Bạn vui lòng chờ trong giây lát...<img style="margin:-3px 15px" src="/Content/images/miscs/processing.gif" />')},function(n){if($(".pager").remove(),CAT_LOADING_FLAG=!0,n==null||n=="")_CAT_PAGE_INDEX=-1,_CAT_LOADING_FLAG=!1;else{_CAT_PAGE_INDEX++;var t=$(n).find("> li").addClass("justadd");$(".product-list").append(t),$(".product-list").after($("<div>"+n+"<\/div>").find(".pager")),$(".product-list li.shock-price.justadd").each(function(){LoadShockPriceInfo($(this),$(this).data("id"))}),$(".product-list li.preorder.justadd").each(function(){LoadPreorderInfo($(this),$(this).data("id"))}),$(".product-list li.price-forcast.justadd").each(function(){LoadPriceForcastInfo($(this),$(this).data("id"))}),$(".product-list li.justadd").removeClass("justadd"),_CAT_LOADING_FLAG=!0}StickyLeftSideBar()},ErrorAjax,!0)}}function HideCompareContent(){SHOW_COMPARE_CONTENT=!0,$(".compare-chart-wrapper").slideUp()}function LoadPriceForcastInfo(n,t){data={iProductId:t},POSTAjax("/aj/Game/CAT_GetPriceForcastInfo/",data,function(){},function(t){var i,r,f,u;t._status==1&&(i='<div class="price-list clearfix"><cite class="price">'+formatNumberValue(t._totalAnswer)+" người đã tham gia<\/cite><\/div>",$(n).find(".name.clearfix").append(i),FLAG_LOADPRICEFORCASTINFO&&(FLAG_LOADPRICEFORCASTINFO=!1,r='<span class="status black clock" id="pf-clock1"><\/span>',$(n).find(".name.clearfix").prepend(r),$(n).find(".pf-button").show(),t._status==1?(f=(new Date).getFullYear(),u=new cdtime("pf-clock1",t._time),u.displaycountdown("days",displayCountDown2)):$("#pf-clock1").html("Đã hết thời hạn Dự đoán giá")))},function(){},!0)}function LoadPreorderInfo(n,t){data={iProductId:t},POSTAjax("/aj/Game/CAT_GetPreorderInfo/",data,function(){},function(t){if(t._status==1)var i=t._totalOrder>0?'<span class="status blue">Ưu đãi lớn (Đã có '+formatNumberValue(t._totalOrder)+" người đặt mua)<\/span>":'<span class="status blue clock">Ưu đãi lớn<\/span>';$(n).find(".name.clearfix").prepend(i)},function(){},!0)}function LoadShockPriceInfo(n,t){data={iProductId:t},POSTAjax("/aj/Game/CAT_GetShockPriceInfo/",data,function(){},function(t){var i,r;(t._status==1||t._status==4)&&(i='<del class="old-price">',i+=t._oldPrice+"<\/del>",i+='<cite class="price">',i+=t._newPrice,i+='<span class="discount-note"> giảm <strong>',i+=100-t._percent,i+="%<\/strong><\/span><\/cite>",$(n).find(".price-list").html(i),t._left>0&&(r='<span class="status blue clock">Chỉ còn '+formatNumberValue(t._left)+" sản phẩm<\/span>",$(n).find(".name.clearfix").prepend(r)))},function(){},!0)}function StickyLeftSideBar(){var n=$(window).scrollTop(),t=$("#site-body .product-sidebar").height(),i=$("#site-wrapper .product-body .main").offset().top,r=$("#site-footer").offset().top;n<i?$("#site-body .product-sidebar").removeClass("sticky").removeClass("absolute"):n+t<r?$("#site-body .product-sidebar").addClass("sticky").removeClass("absolute"):$("#site-body .product-sidebar").removeClass("sticky").addClass("absolute")}function ShowCategoryAddToCompareBox(n){$(n).parent("div").parent("div").append('<div class="search-input-wrapper clearfix"><input placeholder="Nhập tên sản phẩm" type="text" name="product-keyword" class="input product-keyword" value="" onkeyup="CategorySuggestCompare(this, event)" id="txtproductcomparesearch"><\/div>'),$(n).removeAttr("onclick"),$(n).parent("div").parent("div").find("input").focus()}function CategorySuggestCompare(n,t){var f=$(n).val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi,""),u=f.trim().toLowerCase(),i,r;if(u.length<2){$(".search-suggestion-list").hide();return}if(t.which==40){$("#categorycomparesuggest li.selected").length==0?$("#categorycomparesuggest li:first").addClass("selected"):(i=$("#categorycomparesuggest li.selected").next(),$("#categorycomparesuggest li.selected").removeClass("selected"),i.addClass("selected"));return}if(t.which==38){$("#categorycomparesuggest li.selected").length==0?$("#categorycomparesuggest li:last").addClass("selected"):(i=$("#categorycomparesuggest li.selected").prev(),$("#categorycomparesuggest li.selected").removeClass("selected"),i.addClass("selected"));return}t.which==13?$(".search-suggestion-list li.selected").find("a").click():t.which!=40&&t.which!=38&&(r=0,(GL_CATEGORYID==42||GL_CATEGORYID==44||GL_CATEGORYID==522||GL_CATEGORYID==49)&&(r=GL_CATEGORYID),$.ajax({url:"/tim-kiem/aj/SuggestCompare/",type:"GET",data:{iCategory:r,sKeyword:u},dataType:"json",cache:!0,success:function(t){var r;if(t!=null){t=t.i;var u=t.length,i="";for(i='<div class="search-suggestion-wrapper clearfix"><ul class="search-suggestion-list nolist clearfix" id="categorycomparesuggest">',r=0;r<u;r++)i+='<li><a href="javascript:void(0)" onclick="AddToCompare(undefined, ',i+=t[r][0],i+=')"><strong>',i+=t[r][1],i+="<\/strong><\/a><\/li>";$(n).parent("div").parent("div").find(".search-suggestion-wrapper").remove(),$(n).parent("div").parent("div").append(i)}}}))}function AccessorySuggestDevice(n,t){if(FL_ACCESSORYSUGGESTDEVICE){var r=$(n).val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi,""),i=r.trim().toLowerCase();if(i.length<2){$(".search-suggestion-list").hide();return}t.which==13?$(".search-suggestion-list li.selected").find("a").click():t.which!=40&&t.which!=38&&(FL_ACCESSORYSUGGESTDEVICE=!1,$.ajax({url:"/tim-kiem/aj/SuggestAccessoryDevice",type:"GET",data:{sKeyword:i},dataType:"json",cache:!0,beforeSend:function(){$("#dlding").show()},success:function(t){var r;if(FL_ACCESSORYSUGGESTDEVICE=!0,$("#dlding").fadeOut(),t!=null){$(".device-tooltip").remove(),t=t.i;var u=t.length,i="";for(i='<ul id="deviceaccessory" class="search-suggestion-list nolist clearfix" tabindex="1">',r=0;r<u;r++)i+='<li><a href="/phu-kien'+t[r][2]+'">',i+="<strong>",i+=t[r][1],i+="<\/strong><\/a><\/li>";$(n).parent("div").parent("div").find(".search-suggestion-list").remove(),$(n).parent("div").parent("div").append(i)}}}))}}function FilterAccessoryByDevice(n){window.location.href=n}function MinimizeAccessoryParadise(){CreateCookie("CK_AP_CATEGORY","1",7),window.location.reload()}function MaximizeAccessoryParadise(){Delete_Cookie("CK_AP_CATEGORY","",".thegioididong.com"),Delete_Cookie("CK_AP_CATEGORY","",".www.thegioididong.com"),Delete_Cookie("CK_AP_CATEGORY","","www.thegioididong.com"),window.location.reload()}function AccessoryParadizePopup(){POSTAjax("/aj/Category/AccessoryParadisePopup",{},BeforeSendAjax,function(n){if(n!=null||n!=""){try{$("#pu-accessoryparadise").remove(),$("body").append(n)}catch(t){}$.fancybox.close(),$(".listcustomer-predistion").fancybox({width:830,height:535,autoScale:!1,transitionIn:"none",transitionOut:"none",showCloseButton:!1,autoScale:!1,margin:0,padding:0}),$("[id$=prephonenumber]").ForceNumericOnly(),$("input[name=txtNumber]").live("keypress",function(n){var t=n.which||n.keyCode,i=parseInt($(this).attr("id").replace("txtNumber",""));if(t>31&&(t<48||t>57))return!1;t!=8&&t!=46&&$("#txtNumber"+(i+1)).val()==""&&$("#txtNumber"+(i+1)).focus()}),$("[id$=g-pd-bs]").click(function(){page_g_pd=0,total=0,$(".g-pd-total").html(""),$("#g-pd-sr table tr.tritem").remove(),$("#g-pd-sr").hide(),$(".g-pd-loading").show(),$(".g-pd-control").hide(),SearchRegisteredPredistion(),window.setTimeout("PreventMultipleClick()",1e3)}),$(".g-pd-more").click(function(){$(".g-pd-more").hide(),$(".g-pd-loading-more").show(),SearchRegisteredPredistion()}),$(".listcustomer-predistion-win").fancybox({width:830,height:535,autoScale:!1,transitionIn:"none",transitionOut:"none",showCloseButton:!1,autoScale:!1,margin:0,padding:0}),$("[id$=g-pd-bs-win]").click(function(){page_g_pd=0,total=0,$(".g-pd-total-win").html(""),$("#g-pd-sr-win table tr.tritem").remove(),$("#g-pd-sr-win").hide(),$(".g-pd-loading-win").show(),$(".g-pd-control-win").hide(),SearchRegisteredPredistionWin(),window.setTimeout("PreventMultipleClick()",1e3)}),$(".g-pd-more-win").click(function(){$(".g-pd-more-win").hide(),$(".g-pd-loading-more-win").show(),SearchRegisteredPredistionWin()}),$("#prefullname").blur(function(){Predistion_checkInput($(this),"Vui lòng nhập họ tên.","",!0)}),$("#prephonenumber").blur(function(){Predistion_CheckPhoneExist(!0)}),$("#preemail").blur(function(){Predistion_CheckEmailExist(!0)}),$("ul.tabs li").click(function(){$("ul.tabs li").removeClass("active"),$(this).addClass("active"),$(".tab_content").fadeOut(0);var n=$(this).find("a").attr("href");return $(n).fadeIn(1e3),!1}),$('input[name="fullname"]').live("keyup",function(n){var t,r;if(n.keyCode!=32&&n.keyCode!=8){var u=$(this).val(),i=u.split(" "),f=[],e="";if(i.length>0){for(t=0;t<i.length;t++)i[t].trim()!=""&&i[t].trim()!=" "&&f.push(i[t].trim().charAt(0).toUpperCase()+i[t].trim().slice(1));for(r=0;r<f.length;r++)e+=f[r]+" "}else e=u.charAt(0).toUpperCase()+u.slice(1);$(this).val($.trim(e))}}),$("#box-customer-predistion .close").attr("onclick","CloseAndShowPopupAccessory();"),$("#box-customer-predistion-win .close").attr("onclick","CloseAndShowPopupAccessory();"),$("#openfancyaccparadise").fancybox({transitionIn:"none",transitionOut:"none",showCloseButton:!1,margin:0,padding:1,modal:!0}),$("#openfancyaccparadise").click()}$("#dlding").fadeOut(1e3),QUICK_ORDER_BOX_CALLING_FLAG=!0},ErrorAjax,!0)}function CloseAndShowPopupAccessory(){$.fancybox.close(),$(".paradiseacc .more").click()}function FormatPhone(n,t,i){var u=doGetCaretPosition(n),r;t=t.replace(/-/g,""),i&&(r=i.keyCode?i.keyCode:i.which,r>="48"&&r<="57"||r>="96"&&r<="105"?t.length<=4?n.value=t:t.length>4&&t.length<=7?n.value=t.substr(0,4)+"-"+t.substr(4):t.length>7&&(n.value=t.substr(0,4)+"-"+t.substr(4,3)+"-"+t.substr(7)):(r=="37"||r=="38")&&(t.length<=4?(n.value=t,setCaretPosition(n,u)):t.length>4&&t.length<=7?(n.value=t.substr(0,4)+"-"+t.substr(4),setCaretPosition(n,u)):t.length>7&&(n.value=t.substr(0,4)+"-"+t.substr(4,3)+"-"+t.substr(7),setCaretPosition(n,u))))}function doGetCaretPosition(n){var t=0,i;return document.selection?(n.focus(),i=document.selection.createRange(),i.moveStart("character",-n.value.length),t=i.text.length):(n.selectionStart||n.selectionStart=="0")&&(t=n.selectionStart),t}function setCaretPosition(n,t){if(n.setSelectionRange)n.focus(),n.setSelectionRange(t,t);else if(n.createTextRange){var i=n.createTextRange();i.collapse(!0),i.moveEnd("character",t),i.moveStart("character",t),i.select()}}function ShowMessage(n,t){alert(t),$(n).focus()}function BeforeSendAjax(){$("#dlding").show()}function ErrorAjax(){}function CallAjaxPost(n,t,i,r,u,f){$.ajax({async:f,url:n,data:t,type:"POST",cache:!1,beforeSend:function(){i()},success:function(n){r(n)},error:function(){u()}})}function formatNumberValue(n){for(var i=n.toString().length,r=0,u="",f="",t;i%3!=0;)i++,r++;if(r!=0)for(t=0;t<r;t++)u+="0";for(u+=n.toString(),t=0;t<i;t++)f+=u.charAt(t),t>0&&(t+1)%3==0&&t!=i-1&&(f+=".");return f.substring(r)}function HideSmartphonePromote(){CreateCookie("CK_TGDD_SMARTPHONE_PROMOTE","1",7),$(".smartphonepromote").remove()}function CloseHuaweiMascot(){CreateCookie("CK_HUAWEI_MASCOT","1",7),$(".huaweimascot").fadeOut()}function LoadHuaweiMascot(){var n=getCookie("CK_HUAWEI_MASCOT");if(n==null||typeof n=="undefined")try{$("#HalloweenFestID").remove(),setTimeout(function(){$(".huaweimascot").fadeIn()},3e4)}catch(t){}}var COMPARE_ARR_PRODUCT_ID=[],SHOW_COMPARE_CONTENT=!0,EXPAND_PRODUCT_COMPARE_TABLE=!0,FLAG_LOADPRICEFORCASTINFO,FL_ACCESSORYSUGGESTDEVICE;$(document).ready(function(){var t,i,r,n;$("#site-header #user-zone .user-location a.location").click(function(){$("#site-header #user-zone .user-location .select-location-wrapper").css("display","block")}),$("#site-header #user-zone .user-location .select-location-wrapper").mouseover(function(){$("#site-header #user-zone .user-location .select-location-wrapper").css("display","block")}).mouseout(function(){$("#site-header #user-zone .user-location .select-location-wrapper").css("display","none")}),$("#site-header #site-search .form .input-wrapper input").click(function(){$("#site-header #site-search .form .search-suggestion-wrapper").css("display","block")}),$("#site-header #site-search .form .search-suggestion-wrapper").mouseover(function(){$("#site-header #site-search .form .search-suggestion-wrapper").css("display","block")}).mouseout(function(){$("#site-header #site-search .form .search-suggestion-wrapper").css("display","none")}),$(".product-list-wrapper .product-list li.double-col:not(.is-banner)").live({mouseenter:function(){$(this).find(".feature-product-detail-wrapper").fadeIn({duration:300,queue:!1,complete:function(){$(this).find(".more-detail").fadeIn(200)}})},mouseleave:function(){$(this).find(".feature-product-detail-wrapper").find(".more-detail").fadeOut({duration:100,queue:!1,complete:function(){$(this).parent().hide()}})}}),$(".product-body .main .product-wrapper .product-filter-wrapper .title, .product-body .main .product-wrapper .product-filter-wrapper .filter").live("mouseover",function(){$(this).addClass("on-hover")}).live("mouseout",function(){$(this).removeClass("on-hover")}),$.waypoints.settings.scrollThrottle=1,$("#site-wrapper .product-body .main .product-wrapper .product-filter-wrapper").waypoint(function(n,t){t==="down"?($(this).addClass("product-filter-wrapper-sticky"),$("#site-wrapper .product-body .main .product-wrapper .product-compare-wrapper").addClass("product-compare-wrapper-sticky")):($(this).removeClass("product-filter-wrapper-sticky"),$("#site-wrapper .product-body .main .product-wrapper .product-compare-wrapper").removeClass("product-compare-wrapper-sticky"))}),$(window).scroll(function(){StickyLeftSideBar()}),$(".product-body .main .product-wrapper .compare-chart-wrapper .compare-chart li.expand-button-wrapper").click(function(){$(".product-body .main .product-wrapper .compare-chart-wrapper .compare-chart li.hide").toggleClass("show")}),t=$(".product-body .main .product-wrapper .product-list-wrapper .product-list li.double-col .banner-wrapper .image-wrapper .slides_container .slide").length,t>1&&(i=Math.floor(Math.random()*t+1)-1,r=$(".product-body .main .product-wrapper .product-list-wrapper .product-list li.double-col .banner-wrapper .image-wrapper .slides_container .slide").eq(i),$(".product-body .main .product-wrapper .product-list-wrapper .product-list li.double-col .banner-wrapper .image-wrapper .slides_container .slide").eq(i).remove(),$(".product-body .main .product-wrapper .product-list-wrapper .product-list li.double-col .banner-wrapper .slides_container").prepend(r)),$(".product-body .main .product-wrapper .product-list-wrapper .product-list li.double-col .banner-wrapper .image-wrapper").slides({preload:!0,generateNextPrev:!0,generatePagination:!0,preload:!0,preloadImage:"Content/images/miscs/loading_03.gif",play:5e3,pause:2500,slideSpeed:450,hoverPause:!0}),$(".product-list li.shock-price").each(function(){LoadShockPriceInfo($(this),$(this).data("id"))}),$(".product-list li.preorder").each(function(){LoadPreorderInfo($(this),$(this).data("id"))}),$(".product-list li.price-forcast").each(function(){LoadPriceForcastInfo($(this),$(this).data("id"))}),n=0,$("#txtproductcomparesearch").live("keyup",function(t){t.keyCode==40&&(t.preventDefault(),$("#categorycomparesuggest").length>0&&($("#categorycomparesuggest").focus(),$("#categorycomparesuggest li").eq(0).addClass("hover"),n=0))}),$("#categorycomparesuggest").live("keydown",function(t){var i,r;t.preventDefault(),i=$("#categorycomparesuggest li").length,i>0&&(t.keyCode==40?(n++,n>i-1&&(n=0),$("#categorycomparesuggest li.hover").removeClass("hover"),$("#categorycomparesuggest li").eq(n).addClass("hover")):t.keyCode==38?(n--,n<0&&(n=i-1),$("#categorycomparesuggest li.hover").removeClass("hover"),$("#categorycomparesuggest li").eq(n).addClass("hover")):t.keyCode==13&&(r=$("#categorycomparesuggest li").eq(n).find("a").attr("href"),window.location.href=r))}),LoadMascot(),LoadHuaweiMascot()}),FLAG_LOADPRICEFORCASTINFO=!0,FL_ACCESSORYSUGGESTDEVICE=!0,jQuery.fn.ForceNumericOnly=function(){return this.each(function(){$(this).keydown(function(n){if(n.shiftKey||n.ctrlKey||n.altKey)n.preventDefault();else{var t=n.charCode||n.keyCode||0;return t==8||t==9||t==46||t>=35&&t<=40||t>=48&&t<=57||t>=96&&t<=105}})})},FormatNumeric=function(n){var i,t;for(n!=""&&(i=parseInt(n),n=i.toString()),n+="",x=n.split("."),x1=x[0],x2=x.length>1?","+x[1]:"",t=/(\d+)(\d{3})/;t.test(x1);)x1=x1.replace(t,"$1,$2");return x1+x2},ValidPhoneNumber=function(n){if(n=n.replace(/-/g,""),n==""||n.length<10||n.length>11)return!1;var t="";return(t=n.length==11?n.substr(0,4):n.substr(0,3),t=="099"||t=="0199"||t=="091"||t=="094"||t=="0123"||t=="0125"||t=="0127"||t=="0129"||t=="0124"||t=="095"||t=="092"||t=="0188"||t=="0186"||t=="097"||t=="098"||t=="096"||t=="0162"||t=="0163"||t=="0164"||t=="0165"||t=="0166"||t=="0167"||t=="0168"||t=="0169"||t=="0197"||t=="0198"||t=="090"||t=="093"||t=="0122"||t=="0126"||t=="0121"||t=="0128"||t=="0120")?!0:!1},isEmail=function(n){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(n)?!0:!1};
//@ sourceMappingURL=category.min.js.map