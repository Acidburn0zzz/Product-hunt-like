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

    $('.commentaire').click(function(){
        $('.modal-box').attr("id", "modal-active");
        $('.text_card_modal').append($(this).closest('.icone_text_global').prev().children('h2').text());
        $('.text_card_modal').append('</br>'+$(this).closest('.icone_text_global').prev().children('p').text());
        $('.image-modal').append("<img src='"+$(this).closest('.text_global_card').prev().children(':first').attr('src')+"'>");

        commentaireList();
    });

    $('.modal-close').click(function(){
        $('.modal-box').attr("id", "modal-close");
        $('.image-modal').text('');
        $('.text_card_modal').text('');
        $('.modal_bas').text('');
    })

    // systeme coeur like
    var nbLike = 0;
    $('.fa-heart').click(function(e) {
        console.log('e')
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
                $('#sidebar').css({position: 'fixed',display: 'block', left: '122px', top: '31px'});
                $('.global_centre').css({marginLeft: '165px'});
            }
            else {
                $('#sidebar').css({position: '', left: '', top: ''});
                $('.global_centre').css({marginLeft: ''});
            }
        }
    // scroll

    //navbar
    $('.fa-chevron-down').click(function(){
      if ($(".modal-nav").css("display","block")) {}
      $(".modal-nav").css("display","block");
      $(".modal-nav").css({position: 'absolute',top:'30px', left:'50px'});
      // $(".triangle").css({position: 'absolute',top:'10px', left:'50px'})
    });
});

function commentaireList() {
    $.getJSON('js/commentaire.json',function(data){
       $.each(data,function(index,d){
           $('.modal_bas').prepend(
               "<div class=commentaire_global>"+
                  "<div class='pseudo_et_date'>"+
                      "<div class='pseudo'>"+d.pseudo+"</div>"+
                      "<div class='date'>-Protocol Administrator</div>"+
                  "</div>"+
                  "<div class='comments'>"+d.com+"</div>"
           );
           if(index == 3){
               return false;
           }

       });
   });
}
