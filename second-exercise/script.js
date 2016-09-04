$(document).ready(function() {
    $("#one").after("<p>I'm coming after you!</p>");
    $("#two").after($("p"));
});
