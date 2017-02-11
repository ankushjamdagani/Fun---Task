$(document).ready(function () {
    var goClicky = (function () {
        return {
            getClick: function () {
                $('#body-wrapper').on('click', '.recursive-box', function (e) {
                    e.stopImmediatePropagation();
                    
                    if(goClicky.validateBoxCreation($(this))) {
                        $(this).html(`<div class="recursive-box"></div>`);
                    }
                });
            },

            validateBoxCreation : function (box) {
                var h = box.height();
                var w = box.width();
                console.log(h + ' x ' + w);

                // BOX creation is not possible if area is less than or equal to 0

                if(h*w <= 0) {
                    alert('hehehe');
                }

                return true;
            },

            triggerClick : function () {
                $('button').on('click', function () {
                    var x= $(document).width() / 2;
                    var y= $(document).height() / 2;
                    console.log(x + ' | ' + y);
                    document.elementFromPoint(x, y).click();
                });
            }
        }
    })();

    goClicky.getClick();
    goClicky.triggerClick();
});