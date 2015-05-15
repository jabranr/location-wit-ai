!(function(root, $, factory)	{
	root.LOCWIT = root.LOCWIT || factory(root, $);

	$(document).ready(function() {
		$('#submit').on('click', function(e)	{
			return LOCWIT.init( $('#query'), $('#output'), $(this) );
		});
	});


})(this, jQuery, function(root, $) {
	var app = {
		appId: '5555fe3b-a58f-44cc-8689-92daec576492',
		token: 'EEOSBAWMRZVQUMEIKCBAR2V6UWLNMWBW',
		api: 'https://api.wit.ai/message',
		version: '20150515',

		init: function(query, output, submit) {
			if ( ! query.val().length ) return query.focus();
			var that = this;

			$.ajax({
			  url: that.api,
			  data: {
			  	'v': that.version,
			    'q': query.val(),
			    'access_token' : that.token
			  },
			  dataType: 'jsonp',
			  method: 'GET',
			  success: function(data) {
			      if (data) {
			      	output.html(JSON.stringify(data, null, 4))
			      		.wrap( $('<pre />') );
			      }
			  },
			  error: function(xhr, error) {
			  	output
			  		.html(JSON.stringify(data, null, 4))
			  		.wrap( $('<pre />', {
				  		'class': 'error'
				  	}) );
			  }
			});
		}

	};

	return app;
});