// 인원수 선택 모달창
let personSelectCompleteButton = document.querySelector("#personSelectCompleteButton");  // 인원선택완료버튼
//let personSelectCancelButton = document.querySelector("#personSelectCancelButton"); // 인원선택취소버튼
let numberSelectArrayAdult = document.querySelectorAll("#adultPersonNumber");  // 성인 0-7 버튼
let numberSelectArrayChild = document.querySelectorAll("#childPersonNumber"); // 어린이 0-7 버튼
let numberSelectArraySenior = document.querySelectorAll("#seniorPersonNumber");  // 노인 0-7 버튼
let numberSelectArrayDisable = document.querySelectorAll("#disablePersonNumber"); // 장애인 0-7 버튼
let countAdult = 0; // 일반인 수
let countChild = 0; // 어린이 수
let countSenior = 0; // 노인 수
let countDisable = 0; // 장애인 수

// 어린이 어른 노인 장애인 순 가격표
let priceAdult = 10000;
let priceChild = 8000;
let priceSenior = 6000;
let priceDisable = 6000;
// 영화 금액의 합, 관람 인원수의 합
let movieTotalPrice = 0;
let movieTotalPeopleCount = 0;

// 해당 버튼 라인에서, SelectionBtnStyle Class를 제거함
function selectionButtonChange(targetButton){
  // 파라미터로는 누른 버튼의 id값과 일치하는 SelectionBtnStyle을 제거한다.
  document.querySelectorAll(`#${targetButton}`).forEach(function(v,i,a){
    v.classList.remove("SelectionBtnStyle");
  });
}
// 가격의 총액을 반환하는 함수
function priceTotal(paramAdult, paramChild, paramSenior, paramDisable){
  let resultTotal = paramAdult * priceAdult + paramChild * priceChild + paramSenior * priceSenior + paramDisable * priceDisable;
  //resultTotal = commaMaker(resultTotal);
  console.log(resultTotal);   
  return resultTotal;
}
// 선택 가능한 인원 수를 반환하는 함수
function selectableSeat(paramAdult, paramChild, paramSenior, paramDisable){
  let resultSeat = paramAdult + paramChild + paramSenior + paramDisable;
  console.log(resultSeat);
  return resultSeat;
}

// 성인 0-7 버튼 클릭시
numberSelectArrayAdult.forEach(function(v,i,a){
  v.addEventListener('click',function(e){
    countAdult = Number(e.target.innerHTML);
    selectionButtonChange(e.target.id);
    v.classList.add("SelectionBtnStyle");
    console.log(countAdult);
  });
});
// 어린이 0-7 버튼 클릭시
numberSelectArrayChild.forEach(function(v,i,a){
  a[i].addEventListener('click',function(e){
    countChild = Number(e.target.innerHTML);
    selectionButtonChange(e.target.id);
    v.classList.add("SelectionBtnStyle");
    console.log(countChild);
  });
});
// 노인 0-7 버튼 클릭시
numberSelectArraySenior.forEach(function(v,i,a){
  a[i].addEventListener('click',function(e){
    countSenior = Number(e.target.innerHTML);
    selectionButtonChange(e.target.id);
    v.classList.add("SelectionBtnStyle");
    console.log(countSenior);
  });
});
// 장애인 0-7 버튼 클릭시
numberSelectArrayDisable.forEach(function(v,i,a){
  a[i].addEventListener('click',function(e){
    countDisable = Number(e.target.innerHTML);
    selectionButtonChange(e.target.id);
    v.classList.add("SelectionBtnStyle");
    console.log(countDisable);
  });
});

// 인원 선택 완료 버튼 클릭시
personSelectCompleteButton.addEventListener('click',function(){
  movieTotalPeopleCount = selectableSeat(countAdult, countChild, countSenior, countDisable); // 총 인원수 계산
  movieTotalPrice = priceTotal(countAdult, countChild, countSenior, countDisable); // 티켓 금액 합계 계산
  // 7매 이하로 클릭했을때
  console.log("인원 선택 완료 클릭");
  // 7매 이하로 클릭했을때
  if(movieTotalPeopleCount <= 7 && movieTotalPeopleCount != 0){
    // 좌석 선택상태 초기화
    ticketCountAdult.innerHTML = countAdult + "매";
    ticketCountChild.innerHTML = countChild + "매";
    ticketCountSenior.innerHTML = countSenior + "매";
    ticketCountDisable.innerHTML = countDisable + "매";
    document.querySelector("#TicketingPrice").innerHTML = `${movieTotalPrice} 원`;
    maxSelectableCount = movieTotalPeopleCount;
    showSeatSelectPage(); // 좌석 선택 화면으로 이동
  } else if (movieTotalPeopleCount > 7) {
    document.querySelector("#personSelectModalAlertMessage").innerHTML = "<span>최대 7매</span>까지 가능합니다 <span>다시 선택해주세요</span>";
  } else{
    document.querySelector("#personSelectModalAlertMessage").innerHTML = "<span>최소 1매</span>이상 선택해야 합니다. <span>다시 선택해주세요</span>";
  }
  console.log(nowPage);
});

