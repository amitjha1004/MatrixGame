$( document ).ready(function(){
    var arr = [];
    count = 0;
    var min=2;
    var max=6;
    var random=Math.floor(Math.random() * (max - min) + min);
    var mat = random*random;
    var randlen = 400/random;

    for(var i =0; i< mat; i++){
      var a = '#'+Math.floor(Math.random()*16777215).toString(16);
       $('.box').append($('<div class="smallbox" style = "background-color:' + a +'"></div>'))
       // arr.push(a)
    }

    $('.smallbox').css({'height': randlen, 'width': randlen });
    $('.smallbox').click(function(){
       $(this).addClass("color");
       var len = $(".color").length;
       if (len===mat){
         $(".box").text("You Won!" + random + 'x' + random + 'match');
       }
    });
    setInterval(remove,10000);
})

function remove(){
  $('.color').each(function(){
      var a = '#'+Math.floor(Math.random()*16777215).toString(16);
       $(this).css("background-color", a);
  });
  $('.smallbox').removeClass("color");
}
