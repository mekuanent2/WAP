$(document).ready(function () {
    let animationIntervalId = null;
    let circles = $("#circles");

    $('#btnStart').on('click', ()  => {
        circles.empty();

        for (let i=0; i< parseInt($('#noOfCircles').val()); i++) {
            let circle = $("<div id=" + "'circle" + i + "'"  + " class='circle'></div>");
            let pos = {
                y: (Math.random() * (Math.random()*10 + 50)).toFixed(),
                x: (Math.random() * (Math.random()*10 + 50)).toFixed()
                };
            let color = randColor();
            circle.css(
                {
                    width: $('#width').val() + 'px',
                    height: $('#width').val() + 'px',
                    backgroundColor: color
                });
            circle.offset(
                {
                    top: (pos.x + i),
                    left: (pos.y + i)
                }
            );

            const animationIntervalId = startAmination(circle);

            circle.on('click', () => {
                clearInterval(animationIntervalId);
                circle.remove();
            });

            circles.append(circle);
        }
    });

    function startAmination(objCircle) {
        return setInterval(
            () => {
                objCircle.css({
                        width: (objCircle.width() + parseInt($('#amount').val())) + 'px',
                        height: (objCircle.height() + parseInt($('#amount').val())) + 'px',
                    });
                objCircle.offset({
                        top: objCircle.offsetX,
                        left: objCircle.offsetY
                    });
            }
            , parseInt($('#rate').val())
        );
    }

    $('#btnClear').on('click', () => {
        circles.children().each((i, e) => {
            $(e).click();
        });
    });

    function randColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});