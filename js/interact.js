$( document ).ready(function() {
    // cirlce click on third page
    $(".solution-rec-section .circ").click(function() {
        var target = $(this).attr("circleName");
        $(".circ-detailed-desc > div").css("display", "none");
        $("#" + target).fadeIn();
    });

    // down arrow click on the first page
    $(".icon-down").click(function() {
        var element = $(this).attr("showDropdown");
        if (element == "Employment") {
            $(".climate-globe-section .employment .desc").fadeIn();
        } else if (element == "Technological Advancement") {
            $(".climate-globe-section .tech-advancement .desc").fadeIn();
        }
    });
});