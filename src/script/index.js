(function ($) {
	$(document).ready(function () {

		// toggle header menu
		$(".toggle-menu").click(function () {
			$(this).toggleClass("on");
			$(".hidden-menu").slideToggle();
			return false;
		});

	});
})(jQuery);