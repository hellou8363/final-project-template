const $ = (selector) => document.querySelector(selector);
const all$ = (selector) => document.querySelectorAll(selector);

// 메인페이지의 산정보, 모집, 후기 글에 대한 가로 슬라이드 구현
// 조건: 타겟(.wrap)위엣 마우스를 스크롤 할 때
// 강제 shift를 적용해서 휠로 좌/우 이동이 되게 할 것
$(".wrap").addEventListener("wheel", (e) => {
  // document.body.style.overflow = "hidden";
  // console.log(window.scrollTop);
  e.currentTarget.scrollBy(e.deltaY * 3, 0);
  console.log(e.currentTarget);
});
$(".wrap").addEventListener("mouseout", (e) => {
  console.log('mouseout')
});
