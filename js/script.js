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
				act.addClass('card animated fadeIn');
				prev.insertAfter(act);
             }
        }
    })
    var nbLike = 0;
    $('.fa-heart').on('click', function(e) {
      if(nbLike > 0){
        $(this).css("color", "#999");
        nbLike = 0;
        $(this).siblings("#nb-like").html(parseInt($(this).siblings("#nb-like").html())-1);
      }
      else {
       $(this).css("color","red");
       nbLike = 1;
       $(this).siblings("#nb-like").html(parseInt($(this).siblings("#nb-like").html())+1);
      }

          });  
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
