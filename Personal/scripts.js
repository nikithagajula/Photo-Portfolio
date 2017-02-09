/*jslint browser: true*/
/*global $, jQuery*/
var currentIdx = 0,
    items = $('.container div'),
    itemAmt = items.length;

/*jshint strict: true */
function cycleItems() {
    'use strict';
    var item = $('.container div').eq(currentIdx);
    items.hide();
    item.css('display', 'inline-bock');
}

/*jshint strict: true */
var autoSlide = setInterval(function () {
    'use strict';
    currentIdx += 1;
    if (currentIdx > itemAmt - 1) {
        currentIdx = 0;
    }
    cycleItems();
}, 3000);

$('.next').click(function () {
    'use strict';
    clearInterval(autoSlide);
    currentIdx += 1;
    if (currentIdx > itemAmt - 1) {
        currentIdx = 0;
    }
    cycleItems();
});

$('.prev').click(function () {
    'use strict';
    clearInterval(autoSlide);
    currentIdx -= 1;
    if (currentIdx < 0) {
        currentIdx = itemAmt - 1;
    }
    cycleItems();
});