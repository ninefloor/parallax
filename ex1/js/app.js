let nav = $(".menu li"); // 버튼을 변수에 할당
let cont = $("#contents > div"); // 컨텐츠를 변수에 할당

nav.click(function(e){
  e.preventDefault(); // #의 기본 기능 차단
  let target = $(this); // 클릭한 타겟을 변수에 할당
  let idx = target.index(); // 클릭한 타겟의 인덱스 할당
  // alert(idx);

  let section = cont.eq(idx); // 클릭한 버튼과 컨텐츠를 연결
  let offset = section.offset().top; // 각 컨텐츠의 오프셋 값을 할당
  console.log(offset);

  $("html, body").animate({scrollTop: offset}, 600, "easeInOutExpo");
})

// 브라우저 창을 스크롤 할 때 (이벤트)
$(window).scroll(function(){
  let wScroll = $(this).scrollTop(); // 현재의 scrollTop 값을 변수에 할당
  if(wScroll >= cont.eq(0).offset().top){
    nav.removeClass("active");
    nav.eq(0).addClass("active");
  } if(wScroll >= cont.eq(1).offset().top){
    nav.removeClass("active");
    nav.eq(1).addClass("active");
  } if(wScroll >= cont.eq(2).offset().top){
    nav.removeClass("active");
    nav.eq(2).addClass("active");
  } if(wScroll >= cont.eq(3).offset().top){
    nav.removeClass("active");
    nav.eq(3).addClass("active");
  } if(wScroll >= cont.eq(4).offset().top){
    nav.removeClass("active");
    nav.eq(4).addClass("active");
  } if(wScroll >= cont.eq(5).offset().top){
    nav.removeClass("active");
    nav.eq(5).addClass("active");
  }
})

$(".mNav").click(function(){
  // $(".menu").css("display","block");
  // $(".menu").toggle();
  // $(".menu").fadeToggle();
  $(".menu").slideToggle();
})

$(window).resize(function(){
  let wWidth = $(this).width();
  // 화면 width가 800 이상이면서 .menu가 가려져 있을 때 style 속성 삭제
  if(wWidth > 800 && $(".menu").is(":hidden")){
    $(".menu").removeAttr("style");
  }
})