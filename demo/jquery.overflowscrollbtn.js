(function ($) {
    $.fn.ofsrplugin = function (options) {
        var defalts = {
            feed: 1,
            frame: 1
        };
        var params = $.extend(true, {}, defalts, options);

        var len = $('.ofsr').length;

        var i;

        for (i = 0; i < len; i++) {
            if ($('.ofsr').eq(i).parent('div').hasClass() !== 'ofsrwrap') {
                var getId = $('orsr').eq(i).attr('id');

                if (getId === void 0) {
                    $('.ofsr').eq(i).attr('id', 'ofsrid_' + i).wrapAll('<div class="ofsrbase"><div class="ofsrwrap" id="ofsrwrapdiv_' + i + '"></div></div>').before('<p class="mousedownb">&#9650;</p>').after('<p class="mousedowna">&#9650;</p>');
                } else {
                    $('.ofsr').eq(i).attr('id', 'ofsrid_' + i + ' ' + getId).wrapAll('<div class="ofsrbase"><div class="ofsrwrap" id="ofsrwrapdiv_' + i + '"></div></div>').before('<p class="mousedownb">&#9650;</p>').after('<p class="mousedowna">&#9650;</p>');
                }

            }
        }

        $('.ofsrwrap').scroll(function () {
            count = $(this).scrollLeft();
        });

        var count;
        var countup;
        var setItv;

        $('.mousedownb').on('touchstart mousedown', function (e) {
            e.preventDefault();
            var mdId = $(this).parent('div').attr('id');
            var mdIdNo = mdId.split('_');
            var mdNo = mdIdNo[1];
            $(this).css('opacity', '0.7');

            count = $('#ofsrwrapdiv_' + mdNo).scrollLeft();
            countup = function () {
                var count2 = count - params.feed;
                $('#ofsrwrapdiv_' + mdNo).scrollLeft(count2);
            };

            setItv = setInterval(countup, params.frame);
        }).on('touchend mouseup', function (e) {
            e.preventDefault();
            $(this).css('opacity', '0.4');
            clearInterval(setItv);
        });

        $('.mousedowna').on('touchstart mousedown', function (e) {
            e.preventDefault();
            var mdId = $(this).parent('div').attr('id');
            var mdIdNo = mdId.split('_');
            var mdNo = mdIdNo[1];

            $(this).css('opacity', '0.7');

            count = $('#ofsrwrapdiv_' + mdNo).scrollLeft();
            countup = function () {
                var count2 = count + params.feed;
                $('#ofsrwrapdiv_' + mdNo).scrollLeft(count2);
            };

            setItv = setInterval(countup, params.frame);
        }).on('touchend mouseup', function (e) {
            e.preventDefault();
            $(this).css('opacity', '0.4');
            clearInterval(setItv);
        });

        return (this);
    };
})(jQuery);
