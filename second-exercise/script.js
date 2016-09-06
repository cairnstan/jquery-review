$(document).ready(function() {
    //adds p element
    $("#one").after("<p>I'm coming after you!</p>");
    //moves p element to after div two
    $("#two").after($("p"));
    //removes p element
    $("p").remove();
});
