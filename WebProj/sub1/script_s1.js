$(document).ready(function () {
(function () {
	'use strict';
	window.addEventListener('load', function () {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);	 
	})();

(function ($) {
	$.fn.extend({
		sendform: function () {
			var name = $('#Name').val(); var age = $('#age').val(); var email = $('#email').val(); var pwd = btoa($('#password').val()); var skilcategory = $('#skillcategory option:selected').val();
			var comments = $('#comment').val(); var insurance = $('#insurance').val(); var place = $('#place').val();
			if (age > 1 && insurance > 1) {
				$.ajax({
					type: 'POST',
					url: 'http://localhost:8080/action/method',
					data: {
						"personal": {
							"name": name, "age": age, "email": email, "pwd": pwd
						}, "skill": { "skilcategory": skilcategory, "comments": comments },
						"work": { "insurance": insurance, "place": place, }
					},
					dataType: 'json',
					success: function (response, xhr) {
						{
							console.log(response);
						}
					},
					error: function (error) {
						console.log("Something went wrong", error);
					}
				});
			} else alert("Please Check the input values!")
		},
	})
})(jQuery);

});
