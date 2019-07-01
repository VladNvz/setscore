function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
	$('#img_captcha').bind('click', function() {
		$('#img_captcha').attr('src', 'captcha.php?' + random(10000, 99999));
	});
});