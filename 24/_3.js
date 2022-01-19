const x = 1;
// ①
function outer() {
 const x = 10;
 const inner = function () { console.log(x); }; // ②
 return inner;
}
// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10


/**
 * 
 * outer함수의 실행 컨텍스트는 실행 컨텍스트 스텍에서 제거되지만
 * outer함수의 렉시컬 환경까지 소멸하는 것은 아니다 
 * 
 * outer함수의 렉시컬 환경은 innergkatndml [[environment]]내부 슬롯에 의해 참조되고 이ㅣㅆ고
 * inner 함수는 전역변수 innerFunc에 의해 참조되고 있으므로 가비지 컬렉션의 대상이 되지 않는다.
 * 
 * 가비지 컬렉터는 누군가가 참조하고 있는 메모리 공간을 함부로 해제 하지 않는다. 
 */



