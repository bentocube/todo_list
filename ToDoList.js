$(document).ready(
	function(){
		$('#addButton').click(
			function(){
				var addItem = $('input[name=textItem]').val();
				$('ol').append('<li>' + addItem + '</li>');

			});

		$(document).on('dblclick', 'li', function(){
			$(this).toggleClass('strike').fadeOut('fast');
		});

		$('input').focus(function(){
			$(this).val('');
		});

	}
);
