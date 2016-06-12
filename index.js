$(function(){
    event.preventDefault();

    $( '.c' ).hide();

  	$(window).scroll(
      		function(){
      			if($(this).scrollTop()>100){

      				$('ul').addClass('scrollnav');
              $( '.c' ).show('.c');
      				
      			}else{
              $('ul').removeClass('scrollnav');
              $( '.c' ).hide('.c');
            };
  	})
});




$(function(){
    $('.logopic').fadeOut();
    $(window).scroll(
          function(){
            $('.box1_cat').animate({left:0},500).fadeOut(200);

            if ($(this).scrollTop()>200){
              $('.logopic').fadeIn('slow');
              $('.box1_logo').fadeOut();
              // $('.box1_cat').animate({left:0},500).fadeOut(200);
              $('.box1_btn_img').fadeOut();
            }else{$('.logopic').fadeOut('slow');
              $('.box1_logo').fadeIn();
              // $('.box1_cat').animate({left:0},500).fadeIn(200);
              $('.box1_btn_img').fadeIn();

            }
          });

    $('.logopic').click(
          function(){
            $('html,body').stop(true,false).animate( {scrollTop:0},10 );
            return false;
          })
});




$(function(){

  	$('.tab').click(
          function(){
          	$('.smallrec').toggleClass('clickmove');
          	$('.tri').toggleClass('clickmove1');
          	$('.bigrec').toggleClass('clickmove2');
          	event.preventDefault();
  	});
});




$('a[href^="#').on('click',function(event){

    var target = $($(this).attr('href'));

    if(target.length){
          event.preventDefault();
          $('html,body').stop(true,false).animate( {scrollTop:target.offset().top},900 );
    }
});


  $(function(){
    $('.box2_content1').hide();
    $('.l_content').hide();
    $('.box2_content2').hide();
    $('.r_content').hide();
    $('.contentcircle').hide();

      $(window).scroll(
          function(){
            if($(this).scrollTop()>630){
              $('.contentcircle').fadeIn();
              $('.box2_content1').fadeIn(3000);
              $('.box2_content2').fadeIn(3000);
              $('.l_content').fadeIn();
              $('.r_content').fadeIn();
              $('.contentbg').addClass('contentbgblur');
              $('.contentcircle').addClass('contentcircleblur');
              
            }else{
              $('.contentcircle').fadeOut();
              $('.box2_content1').fadeOut();
              $('.box2_content2').fadeOut();
              $('.l_content').fadeOut();
              $('.r_content').fadeOut();
              $('.contentbg').removeClass('contentbgblur');
          	  $('.contentcircle').removeClass('contentcircleblur');
          	};
          })
  })


