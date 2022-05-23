// 유효하지 않은 티켓 모달 제어 스크립트

let unavailableTicketModalOKButton = document.querySelector("#ticketLookupFailureWindow");

// 모달창에서 확인을 눌렀을때
unavailableTicketModalOKButton.addEventListener("click",function(){
  // 입력한 예매번호 제거해야함
  showReservedTicketSearchPage(); // 티켓번호 검색화면으로 이동
});