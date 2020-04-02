/* class Car {
  constructor(speed) {
    this.speed = speed;
  }

  viewSpeed() {
    return `My speed is ${this.speed} km/h`;
  }
}

let audi = new Car('200');

let car1 = document.querySelector('.car1').innerText = audi.viewSpeed();

audi = new Car(300);

let car2 = document.querySelector('.car2').innerText = audi.viewSpeed();

$(function () {
  let x;
  const myFunc = num => {
    for (let i = 0; i < num; i++) console.log(i);
  };

  const result = (x = 3, x++, myFunc(x), x * 2);
  console.log(`result: ${result}`);
}); */

$(function () {
  // 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*   function greet(name, owner) {
      if (name === owner) {
        return 'Hello boss'
      } else {
        return 'Hello guest'
      }
    }
    greet('Daniel', 'Daniel');
    greet('Greg', 'Daniel'); */
  // 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*   function century(year) {
      let n;
      if (1 <= year && year <= 100) {
        n = 1;
      } else if (1601 <= year && year <= 1700) {
        n = 17;
      } else if (1701 <= year && year <= 1800) {
        n = 18;
      } else if (1801 <= year && year <= 1900) {
        n = 19;
      } else if (901 <= year && year <= 2000) {
        n = 20;
      } else {
        n = 'some else'
      }
      return n;
    }
    console.log(century(1705));
    console.log(century(1900));
    console.log(century(1601));
    console.log(century(2000));
    console.log(century(89)); */
  // second way
  /*   function century(year) {
      let n = (1 < year && year < 100) ? 1 :
        (1601 <= year && year <= 1700) ? 17 :
        (1701 <= year && year <= 1800) ? 18 :
        (1801 <= year && year <= 1900) ? 19 :
        (1901 <= year && year <= 2000) ? 20 : 'another year';
      return n;
    }
    console.log(century(1705));
    console.log(century(1900));
    console.log(century(1601));
    console.log(century(2000));
    console.log(century(89)); */
  // 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*     function monkeyCount(n) {
        let arr = new Array(),
          k = 0;
        for (let i = 1; i <= n; i++) {
          arr[k] = i;
          k++;
        }
        return arr;
      };
      console.log(monkeyCount(5));
      console.log(monkeyCount(3));
      console.log(monkeyCount(9));
      console.log(monkeyCount(10));
      console.log(monkeyCount(20)); */
  // 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*   function maps(x) {
      let arr = x;
      const arrMap = arr.map(x => x * 2);
      return arrMap;
    }

    console.log("map", maps([4, 1, 1, 1, 4])) */
  // 5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*     function invert(array) {
        let arr = array
        k = -1,
        i = 0;
        for (; i < array.length; i++) {
          arr[i] *= k;
        }
        return arr;
      }
      console.log("invert(1, 2, 3, 4, 5);", invert([1, 2, 3, 4, 5])); */
  // 6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*  class SmallestIntegerFinder {
     findSmallestInt(arr) {
       let minInt = arr[0];
       for (let i = 1; i < arr.length; i++) {
         if (arr[i] < minInt) {
           minInt = arr[i];
         }
       }
       return minInt;
     }
   }
   var sif = new SmallestIntegerFinder([78, 56, 232, 12, 8]);
   console.log();
   sif = new SmallestIntegerFinder([78, 56, 232, 12, 18]);
   sif = new SmallestIntegerFinder([78, 56, 232, 412, 228]);
   sif = new SmallestIntegerFinder([78, 56, 232, 12, 0]);
   sif = new SmallestIntegerFinder([1, 56, 232, 12, 8]); */
  // 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*     function well(x) {
        let arr = x,
          good = [],
          result,
          i = 0;
        for (; i < arr.length; i++) {
          if (arr[i] === 'good') {
            good.push(arr[i]);
          }
        }
        return (result = (good.length === 0 ? 'Fail!' : good.length === 1 || good.length === 2 ? 'Publish!' : 'I smell a series!'))
      }
      console.log(well(['bad', 'bad', 'bad']));
      console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
      console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); */
  // 8~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*   function countPositivesSumNegatives(input) {
      let pos, neg, empty = resArr = [],
        i = 0,
        j = 1;
      for (; i < input.length; i++) {
        if (input[i] > 0) {
          pos = j;
          j++
        } else if (input[i] < 0) {
          neg += input[i];
        } else {
          empty[0] = null;
        }
        return (resArr = (pos === true || neg === true) ? resArr.push(pos, neg) : resArr = empty)
      }
    }
    countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
    countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]); */
  // 9~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /* function generateRange(min, max, step) {
    let arr = [min],
      sum = min;
    for (;
      (sum + step) <= max;) {
      sum += step;
      arr.push(sum);
    }
    return arr
  }
  generateRange(2, 10, 2);
  generateRange(1, 10, 3) */
  // 10~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*   function abbrevName(name) {
      let nameList = name.split(' '),
        fName, SName
      i = 0;
      for (; i < nameList.length;) {
        fName = `${nameList[i].charAt(0).toUpperCase()}.`;
        i++
        SName = `${nameList[i].charAt(0).toUpperCase()}`;
        let fullName = `${fName}${SName}`;
        return fullName
      }
    }
    abbrevName("Sam Harris");
    abbrevName("Patrick Feenan");
    abbrevName("Evan Cole");
    abbrevName("P Favuzzi");
    abbrevName("David Mendieta"); */
  // 11~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*   function nthEven(n) {
      let resNum = i = 0,
        j = 0;
      if (n % 2 === 0) {
        for (; i <= n - 1; i++) {
          resNum += j * 2;
          j = 1;
        }
        console.log("nthEven -> resNum", resNum)
        return resNum
      } else {
        for (; i < n; i++) {
          resNum += j * 2;
          j = 1;
        }
        console.log("nthEven -> resNum", resNum)
        return resNum
      }
    }
    nthEven(1); // 0
    nthEven(2); // 2
    nthEven(3); // 4
    nthEven(100); // 198
    nthEven(1298734); // 2597466 */
  // 12~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /* function noSpace(x) {
    let string = x.replace(/\s/g, '');
    return string
  } */
  /* function noSpace(x) {
    let string = x.split(' ').join('');

    console.log("noSpace -> string", string)
    return string
  }
  noSpace('map user float') */
  // 13~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function removeChar(str) {
    let strCut = str.slice(1, str.length - 1);
    console.log("removeChar -> strCut", strCut);
    return strCut
  };
  removeChar('mercedes')
  // 14~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
привести к числу, к строке

});
