// 페이지가 로드되었을때 실행
let movieDiscountPrice = 0; // 영화 할인 금액

window.addEventListener('load', function () {
	hideAllPages();
	showStoreSelectPage();
	//this.alert('포트폴리오용 키오스크 페이지입니다');
	//movieDiscountPrice = Number(this.prompt("임시로 할인 적용할 금액"));
});