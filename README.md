# jquery-overflowscrollbtn
overflowした要素をボタンを押してスクロールするjQueryプラグインです。
It is a jQuery plugin that scrolls by pressing buttons overflowed elements.
スクロールさせたい要素に[class="ofsr"]を付けてください。
Please add [class = "ofsr"] to the element you want to scroll.
設定Setting
feed:移動するpx/Moving px
frame:移動する間隔/Spacing to move
jQuery.fn.ofsrplugin({
            feed: 5,
            frame: 10
        });
