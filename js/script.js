$(document).ready(function(){
    $('.fleche').click(function(){ // evenement click sur la class fleche pour vote ou unvote
		if ($(this).attr('class') == 'icone_text fleche fUp'){ // detect si vote pour ou vote contre
			//recupere nb vote pour et nb vote contre
			var likeThis = parseInt($(this).children(':last').text());
			var unlikeThis = parseInt($(this).next().children(':last').text());
			//incremente vote pour et affiche sur le bouton
			++likeThis;
			$(this).children(':last').text(likeThis);
		} else if ($(this).attr('class') == 'icone_text fleche fDown'){ //la meme que plus haut mais en différent
			var likeThis = parseInt($(this).prev().children(':last').text());
			var unlikeThis = parseInt($(this).children(':last').text());

			++unlikeThis;
			$(this).children(':last').text(unlikeThis);
		}
		var ratioLike = likeThis - unlikeThis;//ratio vote


		//C'est super long de naviguer dans le DOM donc création de variable contenant les chemin d'accès
		var flechePrev =  $(this).closest('.card').prev().children('.text_global_card').children('.icone_text_global').children('.icone').children('.fUp');

		var flecheNext = $(this).closest('.card').next().children('.text_global_card').children('.icone_text_global').children('.icone').children('.fUp');

		//recuperation des ration de vote des card precedente et suivante pour comparaison
		var ratioLikePrev = parseInt(flechePrev.children(':last').text()) - parseInt(flechePrev.next().children(':last').text());

		var ratioLikeNext = parseInt(flecheNext.children(':last').text()) - parseInt(flecheNext.next().children(':last').text());
		//comparaison des votes et changement de place des cards
        for(i=0; i<$('.fUp').length; i++){
			//creation des chemin d'accès (HTML) pour bouger les card
			var prev = $(this).closest('.card').prev();
			var next = $(this).closest('.card').next();
			var act = $(this).closest('.card');
			//Condition et inversion des card suivant leur ratio
            if(ratioLikePrev < ratioLike && prev.children(':first').text().trim() != 'Today'){
				act.addClass('card animated fadeIn');
				prev.insertAfter(act);
			} else if(ratioLikeNext > ratioLike){
				act.addClass('card animated fadeIn');
				act.insertAfter(next);
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
