// 페이지 전환 함수를 모아둔 스크립트 파일입니다..
let nowPage = "storeSelectPage";

let storeSelectPage = document.querySelector("#storeSelectPage");
let movieSelectPage = document.querySelector("#currentScreeningsWindow");
let ageNoticeModal = document.querySelector("#ageLimitGuidanceWindow");
let personSelectModal = document.querySelector("#seeNumberSelectionWindow");
let seatSelectPage = document.querySelector("#seatSelectionWindow");
let reserveConfirmPage = document.querySelector("#reserveConfirmPage");
let reservedTicketSearchPage = document.querySelector("#advanceTicketInquiryWindow");
let availableTicketPage = document.querySelector("#availableTicketPage");
let unavailableTicketModal = document.querySelector("#ticketLookupFailureWindow");

// 현재 페이지를 전달받아 이 페이지의 이전페이지로 전환하는 함수
function pageChangeToBack(whereIsNowPage){
  switch(whereIsNowPage){
    case "movieSelectPage" :{
      // 영화 선택 화면에서 뒤로가기
      showStoreSelectPage();
      break;
    }
    case "ageNoticeModal" :{
      // 연령 고지 모달에서 뒤로가기
      showMovieSelectPage();
      break;
    }
    case "personSelectModal" :{
      // 인원 선택 모달에서 뒤로가기, 연령 고지 모달 건너뛰고 영화 선택 화면으로 가게 해뒀음
      showMovieSelectPage();
      break;
    }
    case "seatSelectPage" :{
      // 좌석 선택 화면에서 뒤로가기
      showPersonSelectModal();
      break;
    }
    case "reservedConfirmPage" : {
      // 예매 내용 확인 화면
      showSeatSelectPage();
      break;
    }
    case "reservedTicketSearchPage" : {
      // 예매되어있는 티켓 검색 화면
      showStoreSelectPage();
      break;
    }
    case "availableTicketPage" : {
      // 예매된 티켓 정보 표시 화면
      showReservedTicketSearchPage();
      break;
    }
    case "unavailableTicketModal" : {
      // 유효하지 않은 티켓 모달
      showReservedTicketSearchPage();
      break;
    }
    default : { break; }
  }
}
// 모든 화면 숨기는 함수
function hideAllPages(){
  storeSelectPage.style.visibility = "hidden";
  movieSelectPage.style.visibility = "hidden";
  ageNoticeModal.style.visibility = "hidden";
  personSelectModal.style.visibility = "hidden";
  seatSelectPage.style.visibility = "hidden";
  reserveConfirmPage.style.visibility = "hidden";
  reservedTicketSearchPage.style.visibility = "hidden";
  availableTicketPage.style.visibility = "hidden";
  unavailableTicketModal.style.visibility = "hidden";
}
// 가장 첫 화면 표시하는 함수
function showStoreSelectPage(){
  hideAllPages(); // 모든 화면을 숨긴다.
  storeSelectPage.style.visibility = "visible"; //티켓매점선택화면 표시
  nowPage = "storeSelectPage";
}
// 티켓 발행 방식 선택 페이지로 전환하는 함수 ( 폐ㅒ기 )
function showTicketPublishPage(){
  reservedTicketSearchPage.style.visibility = "hidden";
  storeSelectPage.style.visibility = "hidden";  // 메인 화면 숨김
}
// 영화 상영표 화면으로 전환하는 함수
function showMovieSelectPage(){
  movieSelectPage.style.opacity = '1'; // 영화 선택 화면 뚜렷하게
  hideAllPages();
  storeSelectPage.style.visibility = "hidden";  // 메인 화면 숨김
  ageNoticeModal.style.visibility = "hidden"; // 연령 고지 모달 숨김
  movieSelectPage.style.visibility = "visible"; // 영화 선택 화면 표시
  transitionChangeHalfSeceond(className); // 영화상영표 트랜지션 0.5s설정
  
  nowPage = "movieSelectPage";
}
// 연령 고지 모달 출력 함수
function showAgeNoticeModal(){
  transitionChangeZeroSecond(className);
  movieSelectPage.style.opacity = '0.6'; // 영화 선택 화면 흐리게
  ageNoticeModal.style.visibility = "visible"; // 연령 고지 모달 표시
  nowPage = "ageNoticeModal";
}
// 인원 선택 모달 출력 함수
function showPersonSelectModal(){
  resetSeatStatus();
  document.querySelector("#personSelectModalAlertMessage").innerHTML = "";
  seatSelectPage.style.opacity = '0.6'; // 좌석 선택 화면 흐리게
  ageNoticeModal.style.visibility = "hidden"; // 연령 고지 모달 숨김
  movieSelectPage.style.visibility = "hidden"; // 영화 선택 화면 숨김
  // 인원 선택 상태 0으로 초기화 //
  numberSelectArrayAdult[0].click();
  numberSelectArrayChild[0].click();
  numberSelectArraySenior[0].click();
  numberSelectArrayDisable[0].click();
  // 좌석 선택 가능 수 초기화
  ticketCountAdult.innerHTML = "0매";
  ticketCountChild.innerHTML = "0매";
  ticketCountSenior.innerHTML = "0매";
  ticketCountDisable.innerHTML = "0매";
  document.querySelector("#TicketingPrice").innerHTML = '0원'; 
  personSelectModal.style.visibility = "visible"; // 인원 선택 모달 표시
  seatSelectPage.style.visibility = "visible"; // 좌석 선택 화면 표시
  nowPage = "personSelectModal";
}
// 좌석 선택 페이지로 전환하는 함수
function showSeatSelectPage(){
  // 인원 선택을 마치면 각 좌석에 클릭했을때 이벤트 부여
  resetSeatAll();
  resetSeatStatus();  // 좌석 선택 상태 초기화
  seatSelectComplete.style.cursor = "default"; // 커서 디폴트로
  seatNumber.forEach(function seatClickEvent(v){
    if(!v.classList.contains("BookedSeat")){
      v.addEventListener("click",function seatEvent(e){
        seatStatusChange(e.target);
        console.log("좌석클릭");
      });
    }
  });
  seatSelectComplete.style.backgroundColor = "#D6D6D6";
  seatSelectPage.style.opacity = "1"; // 좌석 선택 화면 선명하게
  personSelectModal.style.visibility = "hidden";  // 인원 선택 모달 숨김
  reserveConfirmPage.style.visibility = "hidden"; // 예매 내역 확인 페이지 숨김
  seatSelectPage.style.visibility = "visible";
  
  
  nowPage = "seatSelectPage";
  
}
// 예매 내용 확인 화면으로 전환하는 함수
function showReserveConfirmPage(){
  seatSelectPage.style.visibility = "hidden"; // 좌석 선택 페이지 숨김
  reservedTicketSearchPage.style.visibility = "hidden"; // 예매 내용 검색 화면 숨김
  reserveConfirmPage.style.visibility = "visible"; // 예매 내용 확인 화면 표시
  nowPage = "reservedConfirmPage";
}
// 기존 예매된 티켓 검색하는 화면으로 전환
function showReservedTicketSearchPage(){
  ticketNumberPrintArea.value = ""; // 검색 인풋란 초기화
  storeSelectPage.style.visibility = "hidden"; // 메인 화면 숨김
  reservedTicketSearchPage.style.visibility = "visible"; // 예매된 티켓 검색 화면 표시
  availableTicketPage.style.visibility = "hidden"; // 예매된 영화 정보 화면 숨김
  unavailableTicketModal.style.visibility = "hidden"; // 유효하지 않은 티켓 모달 숨김
  // 예매된 티켓 검색 화면 뚜렷하게
  nowPage = "reservedTicketSearchPage";
}
// 유효성 검사에 성공후, 예매된 영화 정보를 보여주는 화면
function showAvailableTicketPage(){
  reservedTicketSearchPage.style.visibility = "hidden"; // 예매된 티켓 입력 화면 숨김
  availableTicketPage.style.visibility = "visible"; // 예매된 영화 정보 표시
  nowPage = "availableTicketPage";
}
// 유효성 검사에 실패후, 유효하지 않음을 알려주는 모달
function showUnAvailableTicketModal(){
  // 예매된 티켓 입력 화면 흐리게
  unavailableTicketModal.style.visibility = "visible";  // 유효하지 않은 티켓 모달 표시
  nowPage = "unavailableTicketModal";
}