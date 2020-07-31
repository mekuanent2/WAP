$(document).ready(function () {
    var state = true;
    $("#start").click(function () {
        status = 1;
        var successText = 'YOU WON!';
        if(!state) {
            $(".boundary").removeClass('youlose');
            $("#status").text("Click 'S' to begin");
            state = true;
        }
        $(".boundary").mouseenter(function () {
           if($("#status").text() != successText) lost()
        });
        $("#end").mouseenter(function () {
            if(status==1) $("#status").text(successText);
            else lost()
        });
        $("#maze").mouseleave(function () {
            if($("#status").text() != successText) lost()
        });
        
    })
    function lost() {
        $(".boundary").addClass('youlose');
        $("#status").text("You Lost!! Click 'S' to restart");
        status = 0;
        state = false;
    }
})