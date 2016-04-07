$(document).ready(function(){
    $('.fUp').click(function(){
        var likeThis = parseInt($(this).children(':last').text())+1;
		var ratioLike = likeThis - parseInt($(this).next().children(':last').text());

        $(this).children(':last').text(likeThis);

		var flechePrev = $(this).closest('.card').prev().children('.text_global_card').children('.icone_text_global').children('.icone').children('.fUp');

		var ratioLikePrev = parseInt(flechePrev.children(':last').text()) - parseInt(flechePrev.next().children(':last').text());

        for(i=0; i<$('.fUp').length; i++){
            var likePrev = flechePrev.text();
			var prev = $(this).closest('.card').prev();
			var act = $(this).closest('.card');
            if(ratioLikePrev < ratioLike && prev.children(':first').text().trim() != 'Today'){
                 var prev = $(this).closest('.card').prev();
				 var act = $(this).closest('.card');

				  prev.insertAfter(act);
             }
        }
    })
})

function commentaire() {
  $('button').click(function() {
	  $.getJSON('commentaire.json',function(data){
		$.each(data,function(index,d){
			  $('#zone1').prepend('Com : ' + d.com + '<br>');
			  if (index == 3){
				  return false
			  }
		});
	});
  });
}
