$(document).ready(function () {
    var goClicky = (function () {
        var goInfinite = true;
        var interval;

        return {
            getClick: function () {
                $('#body-wrapper').on('click', '.recursive-box', function (e) {
                    e.stopImmediatePropagation();
                    
                    if(goClicky.validateBoxCreation($(this))) {
                        $(this).html(`<div class="recursive-box"></div>`);
                    }
                    else {
                        $('button').click();
                    }
                });
            },

            validateBoxCreation : function (box) {
                var h = box.height();
                var w = box.width();

                console.log(h + ' * ' + w);
                console.log(h * w);

                // Mathematical Solution: BOX creation is not possible if area is less than or equal to 0
                if(h*w <= 0) {
                    alert('Sorry Can\'t Fit another box');
                    goInfinite = false;
                    return false;
                }

                // Feasible Solution: Box creation is not feasible if either height is 1px or width is 1px
                if (h < 1 || w < 1) {
                    alert('Sorry Can\'t Fit another box');
                    goInfinite = false;
                    return false;
                }

                // Another concept tha occured to me at 4.43pm, How can I divide a box if they are repeating the previous values of height, width and area.
                // Awesome Solution: if previous height === present height, previous width === present width, previous area === present area
                // show alert ands return false

                return true;
            },

            // For auto triggering the click on the BOX taking the left corner as point of click 
            // if boxes are stacked to the top left corner.
            
            // triggerClick : function () {
            //     $('button').on('click', function () {
            //         if(goInfinite){
            //             interval = setInterval(function () {
            //                 document.elementFromPoint(0, 0).click();
            //             }, 500);
            //         }
            //         else {
            //             clearInterval(interval);
            //         }
            //     });
            // }
        }
    })();

    goClicky.getClick();
    // goClicky.triggerClick();
});