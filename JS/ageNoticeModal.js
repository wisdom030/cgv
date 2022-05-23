// 연령 고지 모달 제어 스크립트
let ageNoticeOK = document.querySelector("#ageLimitGuidanceBtn");

ageNoticeOK.addEventListener('click',function(){
  numberSelectArrayAdult[0].click();  // 관람 인원수 성인 디폴트값인 0으로 초기화
  numberSelectArrayChild[0].click();  // 관람 인원수 어린이 디폴트값인 0으로 초기화
  numberSelectArraySenior[0].click(); // 관람 인원수 노인 디폴트값인 0으로 초기화
  numberSelectArrayDisable[0].click();  // 관람 인원수 장애인 디폴트값인 0으로 초기화
  showPersonSelectModal();  // 관람 인원수 모달 표시
});


