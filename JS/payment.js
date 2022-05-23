/*** 모달창  제어 ***/
(function () {
	//const DISCOUNTBUTTON = document.querySelector('.pointProcess');
	const MAINSKETCH = document.querySelectorAll('.mainSketch')[0];
	const CLOSEBUTTON = document.querySelectorAll('.closeButton');
	const ERRORREMOVE = document.querySelector('#errorClose');
	const ERRORBOX = document.querySelector('.pointError');
	//.onePage
	let mainBox = document.querySelector('.onePage');
	let grayPaper = document.querySelector('.grayWall');
	let baseModal = document.querySelector('.baseModal');
	let availableTicketPrintButton = document.querySelector('#printBtn');
	let ticketPage = document.querySelector('#availableTicketPage');
	let finallyPaymentPrice = 0; // 최종 결제금액
	let ticketPointPaymentButton = document.querySelector('#ticketPointPaymentButton');
	let ticketNormalPaymentButton = document.querySelector('#ticketNormalPaymentButton');
	let ticketConfirm = document.querySelector('#advanceTicketConfirm');
	let confirmPage = document.querySelector('#reserveConfirmPage');
	//let directButton = document.querySelector('.directProcess');
	let orderList = document.querySelector('.checkOrder');
	let firstPage = document.querySelector('.creditCard1');
	let secondPage = document.querySelector('.creditCard2');
	let thirdPage = document.querySelector('.completePage');
	let pageReturn = document.querySelector('.returnToprev');
	let homeReturn = document.querySelector('.returnTohome');

	ticketNormalPaymentButton.addEventListener('click', () => {
		let thisTitle = document.querySelector('.completePage h2');
		let thisPara = document.querySelector('.completePage p');
		let thisPara2 = document.querySelector('.completePage span');
		MAINSKETCH.style.top = '45rem';
		MAINSKETCH.style.left = '35rem';
		firstPage.style.left = '0rem';
		secondPage.style.left = '70rem';
		thirdPage.style.left = '140rem';
		thisTitle.innerHTML = '결제완료';
		thisPara.innerHTML = '결제가 완료 되었습니다';
		thisPara2.innerHTML = '카드와 티켓을 챙겨주세요';

		setTimeout(function () {
			//orderList.style.left = '-200rem';
			firstPage.style.left = '-70rem';
			secondPage.style.left = '0rem';
			thirdPage.style.left = '70rem';
		}, 3000);
		setTimeout(function () {
			//orderList.style.left = '-200rem';
			firstPage.style.left = '-140rem';
			secondPage.style.left = '-70rem';
			thirdPage.style.left = '0rem';
			homeReturn.style.display = 'inline-block';
			homeReturn.style.left = '0rem';
			homeReturn.style.top = '39.5rem';
		}, 5000);
	});
	/*** *
	notPoint.addEventListener('click', () => {
		mainBox.classList.remove('baseModal-open');
		grayPaper.classList.add('hidden');
		pointControl.value = pointUse.innerHTML;
	});

	for (i = 0; i < pageReturn.length; i++) {
		pageReturn.addEventListener('click', () => {
			//orderList.style.display = 'block';
			firstPage.style.left = '70rem';
			secondPage.style.left = '140rem';
			thirdPage.style.left = '210rem';
		});
	}
***/
	ticketPointPaymentButton.addEventListener('click', () => {
		/** 
    let typeChange1 = lastPayMent.innerHTML.replace(',', '');
		let typeChange2 = typeChange1.replace('원', '');
		let lastTotalPrice = document.querySelector('.lastTotalPrice');
		lastTotalPrice.innerHTML = parseInt(typeChange2);
    **/
		//baseModal.style.left = '60.8rem';
		//baseModal.style.top = '11rem';
		mainBox.classList.add('baseModal-open');
		grayPaper.classList.toggle('hidden');
	});

	for (j = 0; j < CLOSEBUTTON.length; j++) {
		CLOSEBUTTON[j].addEventListener('click', () => {
			mainBox.classList.remove('baseModal-open');
			grayPaper.classList.add('hidden');
			//baseModal.style.left = '33.5rem';
			//baseModal.style.top = '100rem';
		});

		ERRORREMOVE.addEventListener('click', () => {
			ERRORBOX.classList.add('hidden');
		});
	}

	availableTicketPrintButton.addEventListener('click', function () {
		let thisTitle = document.querySelector('.completePage h2');
		let thisPara = document.querySelector('.completePage p');
		let thisPara2 = document.querySelector('.completePage span');
		reserveConfirmPage.style.visibility = 'visible';
		MAINSKETCH.style.top = '45rem';
		MAINSKETCH.style.left = '35rem';
		MAINSKETCH.style.zIndex = '1000';
		thirdPage.style.left = '0rem';
		ticketPage.style.visibility = 'hidden';
		thisTitle.innerHTML = '출력 완료';
		thisPara.innerHTML = '예약 티켓 발권이 완료 되었습니다';
		thisPara2.innerHTML = '티켓을 챙겨주세요';
	});
})();
/*** *
(function () {
	const MAINSKETCH = document.querySelectorAll('.mainSketch')[0];
	const NEXTSCREEN = 70;
	let grayPaper = document.querySelector('.grayWall');
	let innerList = document.querySelectorAll('.modalSector');
	let nextProcess = document.querySelector('#applyButton');
	let moveRem = 0;
	let i = 0;

	nextProcess.addEventListener('click', () => {
		if (i < 1) {
			moveRem -= NEXTSCREEN;
			innerList[0].style.transform = `translateX(${moveRem}rem)`;
			innerList[1].style.transform = `translateX(${moveRem}rem)`;
			i++;
		} else {
			MAINSKETCH.classList.remove('baseModal-open');
			grayPaper.classList.add('hidden');
			moveRem += NEXTSCREEN;
			innerList[0].style.transform = `translateX(${moveRem}rem)`;
			innerList[1].style.transform = `translateX(${moveRem}rem)`;
			i = 0;
		}
	});
})();
***/
/*** 포인트 사용 ***/
//

(function () {
	const NUMBERPAD = Array.from(document.querySelectorAll('.keyPad>button'));
	const CLEARKEY = document.querySelector('.removeKey');
	const RESETKEY = document.querySelector('.resetKey');
	const CLOSEBUTTON = document.querySelector('#modalRemove');

	let mainBox = document.querySelector('.onePage');
	let grayPaper = document.querySelector('.grayWall');
	let nowValue = document.querySelector('#identifyPhone'); // 키패드 입력 값
	let increasePoint = document.querySelector('.plusPoint'); // 사용할 포인트 증가 버튼
	let decreasePoint = document.querySelector('.minusPoint'); // 사용할 포인트 감소 버튼
	let remainsPoint = document.querySelector('#remainsPoint'); // 사용 후 남은 포인트
	let pointControl = document.querySelector('#pointSelector'); // 사용할 포인트
	let pointUse = document.querySelector('#discountTicketPrice'); // 포인트 사용 시 할인 받는 금액
	let notPoint = document.querySelector('#cummulativeAction'); // 포인트 사용 안하고 적립 하는 버튼
	let discountStartbutton = document.querySelector('#notCummulative'); // 포인트 사용 버튼
	const MAXLENGTH = 13;
	const ENTERKEY = document.querySelector('.enterKey');
	let pointComma2 = document.querySelector('#totalPoint');
	let pointComma2Value = pointComma2.innerHTML;
	let pointTostring = pointComma2Value.replace(',', '');
	let currentValue = pointControl.innerHTML;
	let currentPoint = currentValue.replace(',', '');
	let revisedCurrent = parseInt(currentPoint) - 1000;
	let lastPoint = parseInt(pointTostring) - parseInt(currentPoint) + 1000;
	let cumma = revisedCurrent.toLocaleString('kr');
	let needPayment = document.querySelector('#totalTicketPrice');
	let payValue = needPayment.innerHTML;
	let filtration = payValue.replace('원', '');
	let pureValue = filtration.replace(',', '');
	let myPoint = parseInt(pureValue);
	let finalProcess = document.querySelector('#finallyTicketPrice');
	let finalPrice = myPoint - revisedCurrent;

	function floatNumber() {
		if (this.innerHTML != '입력') {
			nowValue.value += this.innerHTML;
		}
		//	blankNum = nowValue.value.length;
		nowValue.value = nowValue.value.replace(/^(01[0|1|7|9]{1})\-?(\d{4})\-?(\d{4})$/, '$1-$2-$3');
		if (nowValue.value.length > MAXLENGTH) {
			nowValue.value = nowValue.value.slice(0, MAXLENGTH);
		}
		/*** 
		if (nowValue.value.length < 4) {
			return nowValue;
		} else if (nowValue.value.length < 7) {
			blankNum += nowValue.value.substr(0, 3);
			blankNum += '-';
			blankNum += nowValue.value.substr(3);
			return blankNum;
		} else if (nowValue.value.length < 11) {
			blankNum += nowValue.value.substr(0, 3);
			blankNum += '-';
			blankNum += nowValue.value.substr(3, 4);
			blankNum += '-';
			blankNum += nowValue.value.substr(7);
			return blankNum;
		} else if (nowValue.value.length > MAXLENGTH) {
			blankNum = 0;
		}
		return blankNum;
	**/
	}

	function clearLetter() {
		nowValue.value = nowValue.value.slice(0, -1);
	}

	function clearAll() {
		nowValue.value = '';
	}

	NUMBERPAD.map((number) => {
		number.addEventListener('click', floatNumber);
	});
	CLEARKEY.addEventListener('click', clearLetter);
	RESETKEY.addEventListener('click', () => {
		clearAll();
	});
	CLOSEBUTTON.addEventListener('click', () => {
		nowValue.value = '010';
		pointComma2.innerHTML = 0;
		pointControl.innerHTML = 0;
		remainsPoint.innerHTML = 0;
		pointUse.innerHTML = '0 원';
	});
	ENTERKEY.addEventListener('click', () => {
		if (nowValue.value == '010-1111-1111' || nowValue.value == '000') {
			pointControl.innerHTML = 0;
			pointComma2.innerHTML = '10,000';
			remainsPoint.innerHTML = pointComma2.innerHTML;
		} else {
			pointComma2.innerHTML = 0;
			pointControl.innerHTML = 0;
			remainsPoint.innerHTML = 0;
		}
	});
	if (myPoint <= revisedCurrent + 1000) {
		increasePoint.style.visibility = 'hidden';
	} else {
		increasePoint.style.visibility = 'visible';
	}

	increasePoint.addEventListener('click', () => {
		let lastTotalPrice = document.querySelector('.lastTotalPrice');
		let pointComma2Value = pointComma2.innerHTML;
		let pointTostring = pointComma2Value.replace(',', '');
		let totalPoint = parseInt(pointTostring);
		let currentValue = pointControl.innerHTML;
		let currentPoint = currentValue.replace(',', '');
		let revisedCurrent = parseInt(currentPoint) + 1000;
		let lastPoint = totalPoint - parseInt(currentPoint) - 1000;
		let cumma = revisedCurrent.toLocaleString('kr');
		let pointUse = document.querySelector('#discountTicketPrice');
		let needPayment = document.querySelector('#totalTicketPrice');
		let payValue = needPayment.innerHTML;
		let filtration = payValue.replace('원', '');
		let pureValue = filtration.replace(',', '');
		let myPoint = parseInt(pureValue);
		let finalProcess = document.querySelector('#finallyTicketPrice');
		let finalPrice = myPoint - revisedCurrent;
		if (totalPoint >= revisedCurrent && myPoint >= revisedCurrent) {
			pointControl.innerHTML = cumma;
			remainsPoint.innerHTML = lastPoint.toLocaleString('kr');
			pointUse.innerHTML = `${pointControl.innerHTML} 원`;
		} else {
			revisedCurrent = totalPoint;
		}

		discountStartbutton.addEventListener('click', () => {
			mainBox.classList.remove('baseModal-open');
			grayPaper.classList.add('hidden');
			pointUse.innerHTML = `${pointControl.innerHTML} 원`;
			console.log(finalPrice);
			finalProcess.innerHTML = `${finalPrice.toLocaleString('kr')} 원`;
		});
	});
	decreasePoint.addEventListener('click', () => {
		let pointComma2Value = pointComma2.innerHTML;
		let pointTostring = pointComma2Value.replace(',', '');
		let currentValue = pointControl.innerHTML;
		let currentPoint = currentValue.replace(',', '');
		let revisedCurrent = parseInt(currentPoint) - 1000;
		let lastPoint = parseInt(pointTostring) - parseInt(currentPoint) + 1000;
		let cumma = revisedCurrent.toLocaleString('kr');
		let pointUse = document.querySelector('#discountTicketPrice');
		let needPayment = document.querySelector('#totalTicketPrice');
		let payValue = needPayment.innerHTML;
		let filtration = payValue.replace('원', '');
		let pureValue = filtration.replace(',', '');
		let myPoint = parseInt(pureValue);
		let finalProcess = document.querySelector('#finallyTicketPrice');
		let finalPrice = myPoint - revisedCurrent;
		if (parseInt(currentPoint) <= 0) {
			pointControl.innerHTML = 0;
		} else {
			pointControl.innerHTML = cumma;
			remainsPoint.innerHTML = lastPoint.toLocaleString('kr');
		}

		discountStartbutton.addEventListener('click', () => {
			mainBox.classList.remove('baseModal-open');
			grayPaper.classList.add('hidden');
			pointUse.innerHTML = `${pointControl.innerHTML} 원`;
			console.log(finalPrice);
			finalProcess.innerHTML = `${finalPrice.toLocaleString('kr')} 원`;
		});
	});
	maximumUse.addEventListener('click', () => {
		let pointComma2Value = pointComma2.innerHTML;
		let pointTostring = pointComma2Value.replace(',', '');
		let totalPoint = parseInt(pointTostring);
		let pointUse = document.querySelector('#discountTicketPrice');
		let needPayment = document.querySelector('#totalTicketPrice');
		let payValue = needPayment.innerHTML;
		let filtration = payValue.replace('원', '');
		let pureValue = filtration.replace(',', '');
		let myPoint = parseInt(pureValue);
		let lastPoint = totalPoint - myPoint;
		let finalProcess = document.querySelector('#finallyTicketPrice');
		let finalPrice = myPoint - totalPoint;
		let finalcomma = finalPrice.toLocaleString('kr');
		let finalcomma2 = lastPoint.toLocaleString('kr');
		pointControl.innerHTML = totalPoint >= myPoint ? myPoint : totalPoint;
		pointControl.innerHTML = pointControl.innerHTML.toLocaleString('kr');
		if (myPoint <= totalPoint) {
			remainsPoint.innerHTML = lastPoint.toLocaleString('kr');
			console.log(remainsPoint);
		} else {
			remainsPoint.innerHTML = 0;
			console.log(remainsPoint);
		}
		//pointUse.innerHTML = `${pointControl.innerHTML} 원`;
		discountStartbutton.addEventListener('click', () => {
			mainBox.classList.remove('baseModal-open');
			grayPaper.classList.add('hidden');
			pointUse.innerHTML = `${pointControl.innerHTML} 원`;
			if (myPoint - totalPoint > 0) {
				//	finalProcess.innerHTML = finalcomma.innerHTML;
				finalProcess.innerHTML = `${finalPrice.toLocaleString('kr')} 원`;
			} else {
				//finalProcess.innerHTML = finalcomma2.innerHTML;
				finalProcess.innerHTML = `${lastPoint.toLocaleString('kr')} 원`;
			}
		});
	});
})();
