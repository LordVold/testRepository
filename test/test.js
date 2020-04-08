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
}); */

$(function () {
  // Change text on page~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function car(text) {
    let carElem = document.querySelector('.car2');
    text += '\nAnother\ntext';
    carElem.innerHTML = text;
  }
  car('Some\r\ntext');
  // 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function greet(name, owner) {
    if (name === owner) {
      return 'Hello boss'
    } else {
      return 'Hello guest'
    }
  }
  // greet('Daniel', 'Daniel');
  // greet('Greg', 'Daniel');
  // 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function century(year) {
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
  // second way
  function century(year) {
    let n = (1 < year && year < 100) ? 1 :
      (1601 <= year && year <= 1700) ? 17 :
      (1701 <= year && year <= 1800) ? 18 :
      (1801 <= year && year <= 1900) ? 19 :
      (1901 <= year && year <= 2000) ? 20 : 'another year';
    return n;
  }
  // console.log(century(1705));
  // console.log(century(1900));
  // console.log(century(1601));
  // console.log(century(2000));
  // console.log(century(89));
  // 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function monkeyCount(n) {
    let arr = new Array(),
      k = 0;
    for (let i = 1; i <= n; i++) {
      arr[k] = i;
      k++;
    }
    return arr;
  };
  // console.log(monkeyCount(5));
  // console.log(monkeyCount(20));
  // 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function maps(x) {
    arrMap = x.map(x => x * 2);
    return arrMap;
  }
  // console.log("  maps(5)", maps([5, 2, 3, 4]));
  // 5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function invert(array) {
    let arr = array
    k = -1,
      i = 0;
    for (; i < array.length; i++) {
      arr[i] *= k;
    }
    return arr;
  }
  // console.log("invert([5,6,7,5,4,])", invert([5,6,7,5,4,]))
  // 6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  class SmallestIntegerFinder {
    findSmallestInt(arr) {
      let minInt = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minInt) {
          minInt = arr[i];
        }
      }
      console.log("SmallestIntegerFinder -> findSmallestInt -> minInt", minInt)
      return minInt;
    }
  }
  let sif = new SmallestIntegerFinder([78, 56, 232, 12, 8]);
  //  sif = new SmallestIntegerFinder([78, 56, 232, 12, 0]);
  //  sif = new SmallestIntegerFinder([1, 56, 232, 12, 8]);
  // 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function well(x) {
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
  // console.log(well(['bad', 'bad', 'bad']));
  // console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
  // console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
  // 8~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function countPositivesSumNegatives(input) {
    let pos, emptyArr = [],
      neg = 0,
      resArr = [],
      i = 0,
      j = 1;
    if (input.length === 0 || input.reduce(function (total, num) {
        return total + num;
      }) === 0) {
      console.log("countPositivesSumNegatives -> empty", emptyArr)
      return emptyArr
    } else {
      for (; i < input.length; i++) {
        if (input[i] > 0) {
          pos = j;
          j++
        } else if (input[i] < 0) {
          neg += input[i];
        }
      }
      resArr[0] = pos;
      resArr[1] = neg;
      console.log("countPositivesSumNegatives -> resArr", resArr)
      return resArr
    }
  }
  // countPositivesSumNegatives([])
  // countPositivesSumNegatives([0, 0, 0, 0, 0, 0])
  // countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
  // 9~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function generateRange(min, max, step) {
    let arr = [min],
      sum = min;
    for (;
      (sum + step) <= max;) {
      sum += step;
      arr.push(sum);
    }
    return arr
  }
  // console.log("  generateRange(1, 10, 3)", generateRange(1, 10, 3))
  // 10~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function abbrevName(name) {
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
  // console.log("abbrevName('Sam Harris')", abbrevName('Sam Harris'))
  // 11~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function nthEven(n) {
    let resNum = i = 0,
      j = 0;
    if (n % 2 === 0) {
      for (; i <= n - 1; i++) {
        resNum += j * 2;
        j = 1;
      }
      return resNum
    } else {
      for (; i < n; i++) {
        resNum += j * 2;
        j = 1;
      }
      return resNum
    }
  }
  // console.log("nthEven(1)", nthEven(1))
  // console.log("nthEven(3)", nthEven(3))
  // console.log("nthEven(1298734)", nthEven(1298734))
  // 12~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function noSpace(x) {
    let string = x.replace(/\s/g, '');
    return string
  }
  // another way
  /*   function noSpace(x) {
      let string = x.split(' ').join('');
      return string
    } */
  // console.log("noSpace('map user float')", noSpace('map user float'))
  // 13~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function removeChar(str) {
    let strCut = str.slice(1, str.length - 1);
    return strCut
  };
  // console.log("removeChar('mercedes')", removeChar('mercedes'))
  // 14~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function solution(str) {
    return str.split("").reverse().join("");
  }
  // another way
  function solution(str) {
    let rev = '',
      i = (str.length);
    while (i) {
      rev += str.slice(str.length - 1);
      str = str.slice(0, str.length - 1);
      i--;
    }
    return rev;
  }
  // console.log("solution('lord')", solution('lord'))
  // 15~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function divisibleBy(numbers, divisor) {
    let resArr = []
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        resArr.push(numbers[i]);
      }
    }
    return resArr
  }
  // console.log("divisibleBy([1, 2, 3, 4, 5, 6], 2)", divisibleBy([1, 2, 3, 4, 5, 6], 2))
  // 16~max result~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function expressionMatter(a, b, c) {
    let arr = [a, b, c],
      moreThanOne = [],
      lessThanOne = [],
      i = j = k = 0,
      sumOfLess = 0,
      multiplyOfMore = 1;
    for (; i < arr.length; i++) {
      if (arr[i] > 1) {
        moreThanOne.push(arr[i]);
      } else {
        lessThanOne.push(arr[i]);
      }
    }
    if (moreThanOne.length === 0) {
      for (; k < lessThanOne.length; k++) {
        sumOfLess += lessThanOne[k];
      }
      return sumOfLess
    } else if (lessThanOne.length === 0) {
      for (; j < moreThanOne.length; j++) {
        multiplyOfMore *= moreThanOne[j];
      }
      return multiplyOfMore
    } else {
      moreThanOne = moreThanOne.sort(function (a, b) {
        return b - a
      });
      let minInt = moreThanOne[moreThanOne.length - 1];
      moreThanOne.pop(moreThanOne.length - 1);
      for (; k < lessThanOne.length; k++) {
        sumOfLess += lessThanOne[k];
      }
      let sumPlusMinInt = sumOfLess + minInt;
      for (; j < moreThanOne.length; j++) {
        multiplyOfMore *= moreThanOne[j];
      }
      return multiplyOfMore * sumPlusMinInt
    }
  }

  function expressionMatter(a, b, c) {
    let mul = a * b * c,
      sum = a + b + c,
      mulSum = a * b + c,
      sumMul = a + b * c,
      mulSumBra = a * (b + c),
      sumMulBra = (a + b) * c,
      arr = [mul, sum, mulSum, sumMul, mulSumBra, sumMulBra].sort(function (a, b) {
        return b - a
      });
    return arr[0]
  }
  // console.log("expressionMatter(1,2,3)", expressionMatter(1,2,3))
  // 17~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function calculateTip(amount, rating) {
    let tips;
    rating = rating.toLowerCase();
    if (rating == 'terrible') {
      tips = amount * 0
      return tips
    } else if (rating == 'poor') {
      tips = Math.round(amount * 5 / 100)
      return tips
    } else if (rating == 'good') {
      tips = Math.round(amount * 10 / 100)
      return tips
    } else if (rating == 'great') {
      tips = Math.round(amount * 15 / 100)
      return tips
    } else if (rating == 'excellent') {
      tips = Math.round(amount * 20 / 100)
      return tips
    }
  }
  // console.log("calculateTip(20, 'Excellent')", calculateTip(20, 'Excellent'));
  // 18~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function stringToArray(string) {
    let arr = string.split(' ');
    return arr
  }
  // console.log("stringToArray('Robin Singh')", stringToArray('Robin Singh'))
  // 19~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function digitize(n) {
    n = n + "";
    n = n.split('').reverse();
    for (let i = 0; i < n.length; i++) {
      n[i] = +n[i]
    }
    return n
  }
  // console.log("digitize(35231)", digitize(35231))
  // 20~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function twoSort(s) {
    s.sort();
    let str = s[0],
      resultStr = str[0];
    for (let i = 1; i < str.length; i++) {
      resultStr += '***' + str[i];
    }
    return resultStr
  }
  // console.log("twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])", twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']))
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~ TEST ~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~ #01    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function fakeBin(input) {
    input = input + '';
    let oneZero = '';
    let j = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 5) {
        oneZero += '0';
        j++;
      } else {
        oneZero += '1';
        j++;
      }
    }
    return oneZero
  }
  // console.log("fakeBin(1256)", fakeBin(12562));
  //~~~ #02    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function hasOnlyPositiveNumbers(numbers) {
    function lessZero(element) {
      return element > 0;
    }
    return numbers.every(lessZero)
  }
  console.log("hasOnlyPositiveNumbers([1,2,3])", hasOnlyPositiveNumbers([1, 2, 3]));
  //~~~ #03    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function findSmallestElement(arr) {
    let minInt = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minInt) {
        minInt = arr[i];
      }
    }
    return minInt;
  }
  //~~~ #04    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function calculateAverageCountryPopulation(countries) {
    let sum = null,
      res = null,
      iter;
    if (countries.length === 0) {
      return 0
    } else {
      for (i = 0; i < countries.length; i++) {
        sum += countries[i].population
        iter = i + 1
      }
      res = sum / iter;
      return res
    }
  }
  //~~~ #05    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function hasNoneLetters(blacklist, phrase) {
    phrase = phrase.toLowerCase();
    blacklist = blacklist.toLowerCase();
    for (let i = 0; i < phrase.length; i++) {
      for (let j = 0; j < blacklist.length; j++) {
        if (phrase[i] === blacklist[j]) {
          return false;
        }
      }
    }
    return true;
  };
  // console.log("hasNoneLetters('blacklist', 'phrase')", hasNoneLetters('blacklist', 'phrase'))
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~ KATA ~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~ #01   (6 kyu) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function solution(number) {
    let num = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        num += i;
      }
    }
    return num
  }
  // console.log("solution(10)", solution(10));
  //~~~ #02    (6 kyu)~Decode the Morse code 1/3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  decodeMorse = function (morseCode) {
    const morse = {
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '......': '.',
      '.-.-.-': '.', //  ','
      '-.-.-.': ';',
      '---...': ':',
      '..--..': '?',
      '--..--': '!',
      '-.-.--': '!', //  '???'
      '-....-': '-',
      '.-..-.': '"',
      '...---...': 'SOS',
    };
    let morseCodeArr = morseCode.trim().split('   ');
    let morseWorld = [];
    let j = 0;
    let text = '';
    for (let i = 0; i < morseCodeArr.length; i++) {
      morseWorld[j] = morseCodeArr[i].split(' ').map((c) => morse[c] || c).join('');
      j++;
    }
    return text = morseWorld.join(' ');
  }
  // console.log("decodeMorse('.... . -.--   .--- ..- -.. .')", decodeMorse('.... . -.--   .--- ..- -.. .'));
  //   another way
  decodeMorse = function (morseCode) {
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }

    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }
  //~~~ #03    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  String.prototype.toAlternatingCase = function () {
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i].toLowerCase() === this[i]) {
        newStr += this[i].toUpperCase();
      } else {
        newStr += this[i].toLowerCase();
      }
    }
    return newStr;
  }
  // console.log("'hello WORLD'.toAlternatingCase()", 'hello WORLD'.toAlternatingCase())
  //~~~ #04    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  String.prototype.isUpperCase = function () {
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== this[i].toUpperCase()) {
        return false
      }
    }
    return true
  }
  // console.log("'hello I AM DONALD'.isUpperCase();", 'hello I AM DONALD'.isUpperCase());
  //~~~ #05    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function arrayMadness(a, b) {
    let sumA = 0,
      sumB = 0;
    for (let i = 0; i < a.length; i++) {
      sumA += Math.pow(a[i], 2);
    }
    for (let i = 0; i < b.length; i++) {
      sumB += Math.pow(b[i], 3);
    }
    if (sumA > sumB) {
      return true
    } else {
      return false
    }
  }
  // console.log("arrayMadness([5, 6, 7], [4, 5, 6])", arrayMadness([5, 6, 7], [4, 5, 6]));
  //~~~ #06    (8 kyu)~Polish alphabet~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function correctPolishLetters(text) {
    const polishLetters = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
    const englishLetters = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
    let translatedText = text;
    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < polishLetters.length; j++) {
        if (translatedText[i] === polishLetters[j]) {
          translatedText = translatedText.replace(translatedText[i], englishLetters[j]);
        } else if (translatedText[i] === polishLetters[j].toUpperCase()) {
          translatedText = translatedText.replace(translatedText[i], englishLetters[j].toUpperCase());
        }
      }
    }
    return translatedText
  }
  // console.log("correctPolishLetters('Jędrzej Błądziński')", correctPolishLetters('Jędrzej Błądziński'));

  function correctPolishLetters(string) {
    let letters = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z"
    };
    // ~~~   task solution options   ~~~
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
    // OR
    for (let i in letters) {
      string = string.split('').map(e => e == i ? letters[i] : e).join('');
    }
    return string;
    // OR
    return text.split('').map(c => mapping[c] || c).join('');
  }
  //~~~ #07    (8 kyu)~Beginner Series #1 School Paperwork~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function paperwork(n, m) {
    // if (n < 0 || m < 0) {
    //   return 0
    // }
    return amount = m * n
  }
  // console.log("paperwork(5, 5)", paperwork(5, 5));
  //~~~ #08    (7 kyu)~Computer problem series #1: Fill the Hard Disk Drive~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function save(sizes, hd) {
    let filesSum = 0;
    let amount = 0;
    const reducer = (a, b) => a + b;
    if (sizes.length === 0) {
      return 0
    }
    const arrElemSum = sizes.reduce(reducer);
    if (arrElemSum <= hd) {
      return sizes.length
    } else {
      for (let i = 0; i < sizes.length; i++) {
        if ((filesSum + sizes[i]) <= hd) {
          filesSum += sizes[i];
          ++amount;
        } else {
          return amount
        }
      }
    }
  }
  // console.log("save([])", save([]));
  // console.log("save([4, 4, 4, 3, 3], 12)", save([4, 4, 4, 3, 3], 12));
  // console.log("save([7, 19, 18, 17, ..., 18, 15], 35)",
  // save([7, 19, 18, 17, 8, 2, 6, 2, 11, 18, 19, 16, 3, 9, 4, 13, 15, 18, 7, 18, 15, 10, 15, 14, 12, 17, 10, 0, 12, 14, 17, 8, 8, 20, 12, 6, 1, 18, 15], 35));
  //~~~ #04    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~ #04    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~ #04    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~ #04    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~ #04    (8 kyu)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
});
