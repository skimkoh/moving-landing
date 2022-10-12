(function () {
  //main Animation
  function runmanLoad() {
    var num = 1;
    var speed = 1100;
    var maxImgCount = 5;
    var $content = $(".running_man");
    var $man = $(".man");

    //do the man running after addclass
    $.when($content.addClass("active")).done(function () {
      $man.animate({ left: 0 }, 1200);

      setInterval(function () {
        num = num + 1;
        //back to the first img
        if (num > 0 && num === maxImgCount) {
          num = 1;
        }

        console.log("num: " + num);

        //change the img url per 0.08sec
        var newLInk = num + ".png";
        $man.css({ "background-image": "url(" + newLInk + ")" });
      }, speed);
    });
  }

  //window preload images
  function addLoadEvent(runmanLoad) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
      window.onload = runmanLoad;
    } else {
      window.onload = function () {
        if (oldonload) {
          oldonload();
        }
        runmanLoad();
      };
    }
  }

  addLoadEvent(runmanLoad);
})();
