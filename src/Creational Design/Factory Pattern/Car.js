const factory = function (param) {
  return {
    name: param.name,
    price: param.price,
    getInfo: function () {
      return this.name + '의 가격은 ' + this.price + ' 입니다.';
    },
  };
};
const car1 = factory({ name: '아반떼', price: '1,570 ~ 2,453만원' });
const car2 = factory({ name: '쏘나타', price: '2,386 ~ 3,367만원' });
console.log(car1, car2);

/*
위 코드의 문제점:
getInfo() 함수가 반복됨.
*/

/*
아래 코드는 getInfo() 함수를 Car  에서 생성
getInfo() 함수가 반복지 않음.
getInfo() 함수가 없다는 것이 아니라 Prototype 밑에 있음.
*/
class Car {
  constructor(info) {
    this.name = info.name;
    this.price = info.price;
  }
  getInfo() {
    return this.name + '의 가격은 ' + this.price + ' 입니다.';
  }
  static factory(name) {
    if (name === 'Avante') {
      return new Avante();
    } else if (name === 'Sonata') {
      return new Sonata();
    }
  }
}

class Avante extends Car {
  constructor() {
    super({ name: '아반떼', price: '1,570 ~ 2,453만원' });
  }
}

class Sonata extends Car {
  constructor() {
    super({ name: '쏘나타', price: '2,386 ~ 3,367만원' });
  }
}

const avante = Car.factory('Avante');
const sonata = Car.factory('Sonata');
console.log(avante, sonata);
