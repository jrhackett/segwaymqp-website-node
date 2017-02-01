(function($) {
	$(document).ready(function() {
		$(".choice-inner").height($(".choice-inner").width());
	})

	$("#no-id").on("click", function(e) {
		e.preventDefault();
		window.location.replace("/checkin");
	});
})(jQuery);