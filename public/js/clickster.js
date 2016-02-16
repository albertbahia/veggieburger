$(document).ready(function() {
$(".btn").on("click", function(){
    var bid = $(this).attr("id");
		var url = window.location.pathname + "eat/" +  bid;
		console.log(url);
		window.location.replace(url);
});		
});		




