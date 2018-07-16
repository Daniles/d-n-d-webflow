/**
 * d-n-d-webflow.js 0.1.1
 * https://github.com/Daniles/d-n-d-webflow
 *
 * (c) 2018+ Daniles
 */


var dndScrollEvent = new Event("scroll", {
    target: document
  });
document.onscroll = function(e) {
    dndScrollEvent = e;
};

function InitDNDWebflow(sliderId, scrollableSubstrate, isHorizontal) {
    if (isHorizontal) {
        $(function() {
            new Dragdealer(sliderId, {
                animationCallback: function(x, y) {
                    $(scrollableSubstrate).css( "top", (100 - x * 100) + "vh");
                    DispathEvent();
                }
            });
        })
    } else {
        $(function() {
            new Dragdealer(sliderId, {
                horizontal: false,
                vertical: true,
                animationCallback: function(x, y) {
                    $(scrollableSubstrate).css( "top", (100 - y * 100) + "vh");
                    DispathEvent();
                }
            });
        })
    }
}

function DispathEvent(){
    if (dndScrollEvent == null)
      return;
    var new_event = new Event(dndScrollEvent.type, dndScrollEvent);
    document.dispatchEvent(new_event);
}
