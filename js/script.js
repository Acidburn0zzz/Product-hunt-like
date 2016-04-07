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
    // systeme coeur like
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
    // systeme coeur like
    // scroll
      window.onscroll = function() {myFunction()};
      window.onscroll = function() {
              if (window.pageYOffset >= 350){
                  $('#sidebar').css({position: 'fixed', left: '33px', top: '30px'});
              }
              else {
                  $('#sidebar').css({position: '', right: '', top: ''});
              }
          }
    // scroll

});

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
