$(document).ready(function () {
	$('#broSend').click(function () {
		console.log($('#broWeight').val());
		var json = {};
		json.weight = parseInt($('#broWeight').val();
		json.gender = $('#broGender').val();
		json.age = parseInt($('#Broage').val();
		json.squat = parseInt($('#brosquat').val());
		json.dead = parseInt($('#broDead').val();
		json.last = $('#BroLast').val();
		json.bench = parseInt($('#broBench').val();
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

