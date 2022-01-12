const person = {
    // 데이터 프로퍼티
    // 데이터 프로퍼티의 어트리뷰트  [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
    firstName: 'Ungmo',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //접근자 프로퍼티는 [n[Get]], [[Set]], [[Enumerable]], [[Configurable]] 어트리뷰트를 갖는다.

    get fullName() {return `${this.firstName} ${this.lastName}`;},

    set fullName(name) {[this.firstName, this.lastName] = name.split(' ');}   
};
// ------------------------------------------------------------------------

    console.log(person.fullName);

   //setter함수
    person.fullName = 'Heegun Lee';
    console.log(person); // {firstName: "Heegun", lastName: "Lee"}


   // getter 함수
   console.log(person.fullName); // Heegun Lee
    

   //데이터 프로퍼티
    let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
    console.log(descriptor);
   // {value: "Heegun", writable: true, enumerable: true, configurable: true}

   //접근자 프로퍼티 
   descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
   console.log(descriptor);
   // {get: ƒ, set: ƒ, enumerable: true, configurable: true}