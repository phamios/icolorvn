Type.registerNamespace('tgdd.business');
tgdd.business.ProductHelperSvc=function() {
tgdd.business.ProductHelperSvc.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
tgdd.business.ProductHelperSvc.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return tgdd.business.ProductHelperSvc._staticInstance.get_path();},
GetResultRating:function(productId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetResultRating',false,{productId:productId},succeededCallback,failedCallback,userContext); },
ClearCacheGetRating:function(intProductID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'ClearCacheGetRating',false,{intProductID:intProductID},succeededCallback,failedCallback,userContext); },
InsertProductComment:function(objCommentBO,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'InsertProductComment',false,{objCommentBO:objCommentBO},succeededCallback,failedCallback,userContext); },
CheckPhoneNumberValid:function(strInput,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'CheckPhoneNumberValid',false,{strInput:strInput},succeededCallback,failedCallback,userContext); },
SendMailInfoRepayment:function(intProductID,intCategoryID,intGender,strFullname,strPhone,strEmail,strCareer,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SendMailInfoRepayment',false,{intProductID:intProductID,intCategoryID:intCategoryID,intGender:intGender,strFullname:strFullname,strPhone:strPhone,strEmail:strEmail,strCareer:strCareer},succeededCallback,failedCallback,userContext); },
GetStoreInfo:function(strkeyword,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetStoreInfo',false,{strkeyword:strkeyword},succeededCallback,failedCallback,userContext); },
GetStoreLatLng:function(StoreID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetStoreLatLng',false,{StoreID:StoreID},succeededCallback,failedCallback,userContext); },
GetDetailStore:function(StoreID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetDetailStore',false,{StoreID:StoreID},succeededCallback,failedCallback,userContext); },
GetResultBySiteFromQuery:function(strKeyword,strSite,intProvinceID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetResultBySiteFromQuery',false,{strKeyword:strKeyword,strSite:strSite,intProvinceID:intProvinceID},succeededCallback,failedCallback,userContext); },
GetResultBySiteFromQueryProduct:function(strKeyword,strSite,intProvinceID,intProductID,strProductCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetResultBySiteFromQueryProduct',false,{strKeyword:strKeyword,strSite:strSite,intProvinceID:intProvinceID,intProductID:intProductID,strProductCode:strProductCode},succeededCallback,failedCallback,userContext); },
SearchStoreByProvinceDistrict:function(strProvinceID,strDistrictID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SearchStoreByProvinceDistrict',false,{strProvinceID:strProvinceID,strDistrictID:strDistrictID},succeededCallback,failedCallback,userContext); },
SearchStoreByProvinceDistrictProduct:function(strProvinceID,strDistrictID,intProductID,strProductCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SearchStoreByProvinceDistrictProduct',false,{strProvinceID:strProvinceID,strDistrictID:strDistrictID,intProductID:intProductID,strProductCode:strProductCode},succeededCallback,failedCallback,userContext); },
GenListProvince:function(strSite,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GenListProvince',false,{strSite:strSite},succeededCallback,failedCallback,userContext); },
GetStoreByIdForOldProduct:function(intStoreId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetStoreByIdForOldProduct',false,{intStoreId:intStoreId},succeededCallback,failedCallback,userContext); },
GetStoreById:function(intStoreId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetStoreById',false,{intStoreId:intStoreId},succeededCallback,failedCallback,userContext); },
GetWarrantyById:function(intStoreId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetWarrantyById',false,{intStoreId:intStoreId},succeededCallback,failedCallback,userContext); },
GetWarrantyTCCById:function(intStoreId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetWarrantyTCCById',false,{intStoreId:intStoreId},succeededCallback,failedCallback,userContext); },
GetWarrantyDetailById:function(intCenterId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetWarrantyDetailById',false,{intCenterId:intCenterId},succeededCallback,failedCallback,userContext); },
GetWarranty:function(intProvinceID,intManufactoryID,intCategoryID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetWarranty',false,{intProvinceID:intProvinceID,intManufactoryID:intManufactoryID,intCategoryID:intCategoryID},succeededCallback,failedCallback,userContext); },
GenUrl:function(productCodes,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GenUrl',false,{productCodes:productCodes},succeededCallback,failedCallback,userContext); }}
tgdd.business.ProductHelperSvc.registerClass('tgdd.business.ProductHelperSvc',Sys.Net.WebServiceProxy);
tgdd.business.ProductHelperSvc._staticInstance = new tgdd.business.ProductHelperSvc();
tgdd.business.ProductHelperSvc.set_path = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_path(value); }
tgdd.business.ProductHelperSvc.get_path = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_path(); }
tgdd.business.ProductHelperSvc.set_timeout = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_timeout(value); }
tgdd.business.ProductHelperSvc.get_timeout = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_timeout(); }
tgdd.business.ProductHelperSvc.set_defaultUserContext = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_defaultUserContext(value); }
tgdd.business.ProductHelperSvc.get_defaultUserContext = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_defaultUserContext(); }
tgdd.business.ProductHelperSvc.set_defaultSucceededCallback = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_defaultSucceededCallback(value); }
tgdd.business.ProductHelperSvc.get_defaultSucceededCallback = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_defaultSucceededCallback(); }
tgdd.business.ProductHelperSvc.set_defaultFailedCallback = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_defaultFailedCallback(value); }
tgdd.business.ProductHelperSvc.get_defaultFailedCallback = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_defaultFailedCallback(); }
tgdd.business.ProductHelperSvc.set_enableJsonp = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_enableJsonp(value); }
tgdd.business.ProductHelperSvc.get_enableJsonp = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_enableJsonp(); }
tgdd.business.ProductHelperSvc.set_jsonpCallbackParameter = function(value) { tgdd.business.ProductHelperSvc._staticInstance.set_jsonpCallbackParameter(value); }
tgdd.business.ProductHelperSvc.get_jsonpCallbackParameter = function() { return tgdd.business.ProductHelperSvc._staticInstance.get_jsonpCallbackParameter(); }
tgdd.business.ProductHelperSvc.set_path("/Services/ProductHelperSvc.asmx");
tgdd.business.ProductHelperSvc.GetResultRating= function(productId,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetResultRating(productId,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.ClearCacheGetRating= function(intProductID,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.ClearCacheGetRating(intProductID,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.InsertProductComment= function(objCommentBO,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.InsertProductComment(objCommentBO,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.CheckPhoneNumberValid= function(strInput,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.CheckPhoneNumberValid(strInput,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.SendMailInfoRepayment= function(intProductID,intCategoryID,intGender,strFullname,strPhone,strEmail,strCareer,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.SendMailInfoRepayment(intProductID,intCategoryID,intGender,strFullname,strPhone,strEmail,strCareer,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetStoreInfo= function(strkeyword,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetStoreInfo(strkeyword,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetStoreLatLng= function(StoreID,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetStoreLatLng(StoreID,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetDetailStore= function(StoreID,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetDetailStore(StoreID,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetResultBySiteFromQuery= function(strKeyword,strSite,intProvinceID,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetResultBySiteFromQuery(strKeyword,strSite,intProvinceID,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetResultBySiteFromQueryProduct= function(strKeyword,strSite,intProvinceID,intProductID,strProductCode,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetResultBySiteFromQueryProduct(strKeyword,strSite,intProvinceID,intProductID,strProductCode,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.SearchStoreByProvinceDistrict= function(strProvinceID,strDistrictID,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.SearchStoreByProvinceDistrict(strProvinceID,strDistrictID,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.SearchStoreByProvinceDistrictProduct= function(strProvinceID,strDistrictID,intProductID,strProductCode,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.SearchStoreByProvinceDistrictProduct(strProvinceID,strDistrictID,intProductID,strProductCode,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GenListProvince= function(strSite,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GenListProvince(strSite,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetStoreByIdForOldProduct= function(intStoreId,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetStoreByIdForOldProduct(intStoreId,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetStoreById= function(intStoreId,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetStoreById(intStoreId,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetWarrantyById= function(intStoreId,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetWarrantyById(intStoreId,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetWarrantyTCCById= function(intStoreId,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetWarrantyTCCById(intStoreId,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetWarrantyDetailById= function(intCenterId,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetWarrantyDetailById(intCenterId,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GetWarranty= function(intProvinceID,intManufactoryID,intCategoryID,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GetWarranty(intProvinceID,intManufactoryID,intCategoryID,onSuccess,onFailed,userContext); }
tgdd.business.ProductHelperSvc.GenUrl= function(productCodes,onSuccess,onFailed,userContext) {tgdd.business.ProductHelperSvc._staticInstance.GenUrl(productCodes,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
Type.registerNamespace('tgdd.business.ProductSvc');
if (typeof(tgdd.business.ProductSvc.ProductCommentBO) === 'undefined') {
tgdd.business.ProductSvc.ProductCommentBO=gtc("tgdd.business.ProductSvc.ProductCommentBO");
tgdd.business.ProductSvc.ProductCommentBO.registerClass('tgdd.business.ProductSvc.ProductCommentBO');
}
if (typeof(tgdd.business.STORESEARCH) === 'undefined') {
tgdd.business.STORESEARCH=gtc("tgdd.business.STORESEARCH");
tgdd.business.STORESEARCH.registerClass('tgdd.business.STORESEARCH');
}
if (typeof(tgdd.business.UrlGenResult) === 'undefined') {
tgdd.business.UrlGenResult=gtc("tgdd.business.UrlGenResult");
tgdd.business.UrlGenResult.registerClass('tgdd.business.UrlGenResult');
}
