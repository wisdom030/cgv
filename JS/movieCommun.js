// 영화 프로세스에 공통적으로 포함되어있는 요소를 제어하는 스크립트
let homeButton = document.querySelectorAll(".homeBtn"); // 홈버튼
let replyButton = document.querySelectorAll(".replyBtn"); // 뒤로가기 버튼

// 인자를 받아서 천단위 콤마 찍고 반환하는 함수
function commaMaker(number){
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function dayReplacer(dayNumber){
  switch(dayNumber){
    case 1 : { return "월"; break; }
    case 2 : { return "화"; break; }
    case 3 : { return "수"; break; }
    case 4 : { return "목"; break; }
    case 5 : { return "금"; break; }
    case 6 : { return "토"; break; }
    case 0 : { return "일"; break; }
    default : { break;}
  }
}

// 홈 버튼
homeButton.forEach(function(v,i,a){
  a[i].addEventListener('click',function(){
    // 홈 버튼 : 모든 선택을 리셋하고, 가장 최초의 화면으로 돌아간다.
    //console.log("clickHome");
    transitionChangeZeroSecond(className);
    showStoreSelectPage();
    console.log(nowPage);
  });
});

// 이전 버튼
replyButton.forEach(function(v,i,a){
  a[i].addEventListener('click',function(){
    // 이전으로 버튼 : 현재 페이지의 선택을 리셋하고, 이전 페이지로 돌아간다.
    console.log("Back");
    transitionChangeZeroSecond(className);
    pageChangeToBack(nowPage);
    console.log(nowPage);
  });
});

