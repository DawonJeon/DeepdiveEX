const person = {};
// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
 value: 'Ungmo',
 writable: true,
 enumerable: true,
 configurable: true
});
Object.defineProperty(person, 'lastName', {
 value: 'Lee'
});

