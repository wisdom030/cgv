// 예매된 티켓 조회 화면

// 숫자 표시 영역 인풋란
let ticketNumberPrintArea = document.querySelector("#inputReservationNumberWindow");
// 키패드 숫자버튼
let ticketingNumberButton = document.querySelectorAll("#ticketingTicketNumber");
// 인풋란 초기화 버튼
let ticketingClearButton = document.querySelector("#ticketingTicketClearButton");
// 인풋란 한 글자 지우는 버튼
let ticketingBackspaceButton = document.querySelector("#ticketingTicketBackspaceButton");
// 조회하기 버튼
let reservedTicketCheckButton = document.querySelector("#ticketingTicketInquiryBtn");
// 임시 예매되있는 번호
let tmpMathManNumber = "1111-1111"; // 수학자
let tmpLevenementNumber = "2222-2222"; // 레벤느망
let tmpTheBatmanNumber = "3333-3333"; // 더 배트맨

// 조회 버튼 클릭했을때
reservedTicketCheckButton.addEventListener("click",function(){
  let advanceTicketConfirmImage = document.querySelector("#availableTicketPage>main>#advanceTicketConfirm>#paymentContent>#paymentContentImg>img"); // 예매된 티켓 페이지의 이미지
  let advanceTicketConfirmName = document.querySelector("#availableTicketPage>main>#advanceTicketConfirm>#paymentContent>#paymentContentInfo");

  if(ticketNumberPrintArea.value == tmpTheBatmanNumber){
    advanceTicketConfirmImage.src = "./img/theBatman.jpg";
    advanceTicketConfirmName.innerHTML = `<h3><div id="ageLimit" class="ageLimit">15</div>
    더 배트맨</h3>
    <div id="paymentContentInfoTime" class="paymentContentInfoTime">
      <p>CGV 안산 2관 8층</p>
      <p>2022.04.13(수) 14 : 55 ~ 16 : 55<br>B3 B4</p>
    </div>
    <div id="paymentContentInfoNumber" class="paymentContentInfoNumber">
      <p>청소년 2매</p>
    </div>`;
    console.log("배트맨 예매정보 출력");
    showAvailableTicketPage();
  } else if (ticketNumberPrintArea.value == tmpLevenementNumber){
    advanceTicketConfirmImage.src = "./img/levenement.jpg";
    advanceTicketConfirmName.innerHTML = `<h3><div id="ageLimit" class="ageLimit">15</div>
    레벤느망</h3>
    <div id="paymentContentInfoTime" class="paymentContentInfoTime">
      <p>CGV 안산 2관 8층</p>
      <p>2022.04.13(수) 16 : 55 ~ 18 : 55<br>E3 E4</p>
    </div>
    <div id="paymentContentInfoNumber" class="paymentContentInfoNumber">
      <p>일반 2매</p>
    </div>`;
    console.log("레벤느망 예매정보 출력");
    showAvailableTicketPage();
  } else if (ticketNumberPrintArea.value == tmpMathManNumber){
    advanceTicketConfirmImage.src = "./img/mathMan.jpg";
    advanceTicketConfirmName.innerHTML = `<h3><div id="ageLimit" class="ageLimit">15</div>
    이상한 나라의 수학자</h3>
    <div id="paymentContentInfoTime" class="paymentContentInfoTime">
      <p>CGV 안산 2관 8층</p>
      <p>2022.04.13(수) 12 : 55 ~ 14 : 55<br>D1 D2 D3 D4</p>
    </div>
    <div id="paymentContentInfoNumber" class="paymentContentInfoNumber">
      <p>청소년 4매</p>
    </div>`;
    console.log("수학자 예매정보 출력")
    showAvailableTicketPage();
  } else {
    console.log("예매정보 조회실패");
    showUnAvailableTicketModal();
  }
});
// 초기화 버튼 클릭시
ticketingClearButton.addEventListener("click",function(){
  ticketNumberPrintArea.value= "";
});
// 숫자 패드 클릭시
ticketingNumberButton.forEach(function(v,i,a){
  v.addEventListener("click",function(e){
    let numberLength = 0;
    numberLength = ticketNumberPrintArea.value.length;
    if(numberLength == 4){
      ticketNumberPrintArea.value += "-"
      ticketNumberPrintArea.value += (e.target.innerHTML);
    } else if (numberLength == 9){
    } else {
      ticketNumberPrintArea.value += (e.target.innerHTML);
    }
  });
});
// 지우기 버튼 클릭시
ticketingBackspaceButton.addEventListener('click',function(){
  let numberLength = 0;
  numberLength = ticketNumberPrintArea.value.length;
  if(numberLength == 0){
  } else if (numberLength == 6){
    ticketNumberPrintArea.value = ticketNumberPrintArea.value.slice(length, -1);
    ticketNumberPrintArea.value = ticketNumberPrintArea.value.slice(length, -1);
  } else {
    ticketNumberPrintArea.value = ticketNumberPrintArea.value.slice(length, -1);
  }
});
