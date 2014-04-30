$(document).ready(function()
	{
		console.log('hello');
		var width=$("#image").width();
		console.log(width);
		if(width>300)
			{
				$('#image').width(300);
				$('#image').height(300);
			}
		else
			{
				var width=$('#image_container').width();
				$('#image').width(width);
				$('#image').height(width);
			}
	})
