function ShowHelp(contentid, contenttypeid) {
}
function InitBalloonTooltip() {
    for (var i = 0; i < arrHelpProps.length; i++) {
        InitBalloon("prop", arrHelpProps[i], "topLeft", "bottomLeft");
    }
    for (var i = 0; i < arrHelpGrps.length; i++) {
        InitBalloon("grp", arrHelpGrps[i], "topLeft", "bottomLeft");
    }
}
function InitBalloon(propType, helpObj, tipPos, balloonPos) {
    $('#' + propType + '_' + helpObj.id).qtip({
        content: helpObj.c,
        position: { corner: { tooltip: balloonPos, target: tipPos} },
        style: { border: { width: 2, radius: 2 }, tip: true, name: 'cream' }
    });
}
function ShowHelp(contentid, contenttype) {
    var newwindow = window.open("/noi-dung-tro-giup-" + contenttype + "-" + contentid, "helpwindow", "status=0,toolbar=0,resizable=0,width=400,height=400");
    try {
        if (newwindow.focus)
            newwindow.focus();
    }
    catch (e)
    { }
}