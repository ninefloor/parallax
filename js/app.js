let nav = $("nav ul li"); // 버튼을 변수에 할당
let cont = $("#contents > div"); // 컨텐츠를 변수에 할당

nav.click(function(e){
  e.preventDefault(); // #의 기본 기능 차단
  let target = $(this); // 클릭한 타겟을 변수에 할당
  let idx = target.index(); // 클릭한 타겟의 인덱스 할당
  // alert(idx);

  let section = cont.eq(idx); // 클릭한 버튼과 컨텐츠를 연결
  let offset = section.offset().top; // 각 컨텐츠의 오프셋 값을 할당
  console.log(offset);

  $("html, body").animate({scrollTop: offset}, 600, "swing");
})