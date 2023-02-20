const $$ = (selector) => document.querySelector(selector);

// Header Event init
addEventListener("click", (e) => {
  console.log(e.target);
  // 회원 메뉴바가 열린상태에서 다른 곳을 클릭하면 메뉴바 숨기기
  if (e.target.id !== "userImg") {
    $$("#userImg").classList.remove("toggle");
    $$(".menubar").style.display = "none";
  } // if

  // 검색바에 포커스가 없을 때 입력테스트 삭제버튼 숨기기
  if (e.target.id !== "search") {
    $$(".cancel").style.display = "none";
  } // if
});

// 회원 이미지 클릭 시 메뉴바 표시
$$("#userImg").addEventListener("click", () => {
  if ($$("#userImg").classList.toggle("toggle")) {
    $$(".menubar").style.display = "block";
  } else {
    $$(".menubar").style.display = "none";
  }
});

// 검색바에 포커스가 있을 때 입력테스트 삭제버튼 표시
$$("#search").addEventListener("click", () => {
  console.log("click");
  $$(".cancel").style.display = "block";
});