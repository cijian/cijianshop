$(function () {
    //head 弹出菜单部分
    var cateMenu = function () {
        var cateLiNum = $(".cateMenu li").length;
        $(".cateMenu li").each(function (index, element) {
            if (index < cateLiNum) {
                $(this).mouseenter(function () {
                    var obj = $(this).find(".list-item");
                    $(this).addClass("on");
                    obj.show();
                });
                $(this).mouseleave(function () {
                    $(this).removeClass("on");
                    $(this).find(".list-item").hide();
                })
            }
        })
    } ();

    $(".navCon_on").hover(function () {
            $(".cateMenu").show();
        },
        function () {
            $(".cateMenu").hide();
        });
    $('.ck-slide').ckSlide({
        autoPlay: true
    });

    ///*topBar置顶*/
    //var positionMenu = function (id) {
    //    var mc = document.getElementById(id);
    //    var minNumber = mc.offsetTop;
    //    var isIE6 = navigator.appVersion.indexOf("MSIE 6") > -1;
    //
    //    $(window).scroll(function () {
    //        var sh = document.documentElement.scrollTop || document.body.scrollTop;
    //        var th = document.documentElement.clientHeight;
    //        if (sh > minNumber) {
    //            mc.style.position = !isIE6 ? "fixed" : "absolute";
    //            mc.style.top = !isIE6 ? "0px" : sh + "px";
    //        } else {
    //            mc.style.position = "static";
    //            mc.style.top = minNumber + "px"
    //        }
    //    })
    //} ("topBar")
});