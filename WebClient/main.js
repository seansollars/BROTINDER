$(document).ready(function () {
	$('#broSend').click(function () {
		console.log($('#broWeight').val());
		var json = {};
		json.weight = $('#broWeight').val();
		json.gender = $('#broGender').val();
		json.age = $('#Broage').val();
		json.squat = $('#brosquat').val();
		json.dead = $('#broDead').val();
		json.last = $('#BroLast').val();
		json.bench = $('#broBench').val();
		json.fname = $('#broFirst').val();
		
		http.post('/bro', json, function(data, status, xhr) {
			console.log('Match');
		}, function(xhr, status, error) {
			console.log('Not a match');
		});
	});
	
	// op generics
	var http = {};
	http.post = function (url, json, success, error) {
		$.ajax({
			url: 'http://10.10.88.180:3000' + url
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