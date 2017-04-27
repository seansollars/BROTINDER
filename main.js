$(document).ready(function () {
	$('#broSend').click(function () {
		console.log($('#broWeight').val());
		var json = {};
		json.weight = $('#broWeight').val();
		http.post('/bro', json, function(data, status, xhr) {
			console.log('it sent');
		}, function(xhr, status, error) {
			console.log('it did not send');
		});
	});
	
	// op generics
	var http = {};
	http.post = function (url, json, success, error) {
		$.ajax({
			url: 'http://localhost:3000'
			, method: 'POST'
			, data: json
			, success: function (data, statusText, jqXHR) {
				if (success) success(data, statusText, jqXHR);
			}
			, error: function (jqXHR, textStatus, errorThrown) {
				if (error) error(jqXHR, textStatus, errorThrown);
			}
		});
	};
});