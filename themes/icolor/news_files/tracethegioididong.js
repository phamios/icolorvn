$(window).load(function () {
    var urltrackingroot = tgddctr_urlroot;
    var qs = getQueryStrings();
    var keyword = qs["key"];
    var categoryid = -1;
    if (typeof (GL_CATEGORYID) != 'undefined')
        categoryid = GL_CATEGORYID;
    var productid = -1;
    if (typeof (ProductID) != 'undefined')
        var productid = ProductID;
    if (keyword == undefined)
        keyword = '';
    var urlrefer = document.referrer;
    if (urlrefer == undefined)
        urlrefer = '';
    var urlpara = urltrackingroot + "/tracking/load?urlrefer=" + urlrefer + "&key=" + keyword + "&categoryid=" + categoryid + "&productid=" + productid;
    var imgload = "<img width=\"0\" heigth=\"0\" id=\"imgtrack\" onload=\"" + urlpara + "\" src=\"" + urlpara + "\" />";
    $("body").append(imgload);
});
$(window).unload(function () {

});

function getQueryStrings() {
    var assoc = {};
    var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');

    for (var i in keyValues) {
        var key = keyValues[i].split('=');
        if (key.length > 1) {
            assoc[decode(key[0])] = decode(key[1]);
        }
    }
    return assoc;
}
