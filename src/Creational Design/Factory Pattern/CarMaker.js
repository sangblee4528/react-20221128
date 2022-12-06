// 팩토리 패턴 구현 예제
function CarMaker() {}
CarMaker.prototype.dirve = function () {
  return 'Vroom, I have ' + this.doors + 'doors';
};
CarMaker.factory = function (type) {
  var constr = type,
    newcar;

  //생성자 존재하지 않으면 에러발생
  if (typeof CarMaker[constr] !== 'function') {
    throw {
      name: 'Error',
      message: constr + "doesn't exist",
    };
  }

  // 생성자 존재 확인 후 부모 상속
  if (typeof CarMaker[constr].prototype.drive !== 'function') {
    CarMaker[constr].prototype = new CarMaker();
  }
  newcar = new CarMaker[constr]();

  return newcar;
};

CarMaker.Compact = function () {
  this.doors = 4;
};
CarMaker.Convertible = function () {
  this.dorrs = 2;
};
CarMaker.SUV = function () {
  this.doors = 24;
};

//위 패턴을 이용한 결과
var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
corolla.drive(); // Vroom, I have 4 doors
solstice.drive(); // Vroom, I have 2 doors
