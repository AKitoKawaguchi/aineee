$(function(){
    var day = [];
    day.push(["4/3","12:00"]);
    day.push(["4/3","12:00"]);
    day.push(["4/2","12:00"]);
    day.push(["4/1","12:00"]);
    var obj = {};
    day.forEach(e => {
        console.log(e);
      if (obj[e]) {
        obj[e] += 1;
       }else {
       obj[e] = 1;
      }
    })

    console.log(obj["4/3,12:00"]);
    $(".page1").delay(1650).fadeOut(100,function(){
        $("body").addClass("appear");
    })
    $.fn.animate2 = function (properties, duration, ease) {
        ease = ease || 'ease';
        var $this = this;
        var cssOrig = { transition: $this.css('transition') };
        return $this.queue(next => {
            properties['transition'] = 'all ' + duration + 'ms ' + ease;
            $this.css(properties);
            setTimeout(function () {
                $this.css(cssOrig);
                next();
            }, duration);
        });
    };

    $(".fadeUp").delay(1000).animate2({"transform":"scaleY(0)"},200)
    $(".header-menu").on("click",function(){
        if($(".a1").hasClass("aa1")){
            //非表示にする方
            $(".menu-list").css({"animation-name":"Menu-list2"});
            $(".a1").removeClass("aa1");
            $(".a2").removeClass("aa2");
            $(".a1").addClass("aa11");
            $(".a2").addClass("aa22");
            $(".i__ab").css({"visibility":"visible"});

        }else{
            $(".menu-list").css({"visibility":"visible"});
            $(".menu-list").css({"animation-name":"Menu-list1"})
            $(".a1").removeClass("aa11");
            $(".a2").removeClass("aa22");
            $(".a1").addClass("aa1");
            $(".a2").addClass("aa2");
            $(".i__ab").css({"visibility":"hidden"});
        }
    });

  var topB=$('#up');
  topB.hide();
    
  //ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      // 画面を80pxスクロールしたら、ボタンを表示する
      topB.fadeIn();
    }else{
      // 画面が80pxより上なら、ボタンを表示しない
      topB.fadeOut();
    }
   });

   topB.click(function(){
    $('body,html').animate({scrollTop: 0},500);
    return false;
  });

  function draw(color){
    var canvas = document.getElementById('cvs');
    if ( ! canvas || ! canvas.getContext ) {
    return false;
    }
    var cvs = canvas.getContext('2d');

    cvs.strokeStyle = color;
    cvs.lineWidth = 2;
    cvs.beginPath(); /* 図形を描き始めることを宣言 */
    cvs.moveTo(20, 15); /* 図形の描き始めを移動 */
    cvs.lineTo(13, 22); /* 図形の線の終わりを決める */
    cvs.moveTo(20, 15); /* 図形の描き始めを移動 */
    cvs.lineTo(27, 22); /* 図形の線の終わりを決める */
    cvs.stroke(); /* 描いた図形を線で表示させる */
   }
   draw("#fff");

   topB.hover(
    function(){
        draw("#0000ff");
    },
    function(){
        draw("#fff");
    }
   );

   $(window).scroll(function(){
    if($(this).scrollTop()>140){
        $(".header-logo").css("visibility","visible");
    }else{
        $(".header-logo").css("visibility","hidden");
    }
   })
})