const STARTBYI = "i";
const STARTBYL = "l";
const ENDBYE = "e";
const COLON = ":";

function encodeInteger(num) {
  return STARTBYI + num + ENDBYE;
}

function encodeString(str) {
  const lengthOfText = str.length;
  return lengthOfText + COLON + str;
}

function encodeList(arr) {
  let encodedString = "";
  for (let index = 0; index < arr.length; index++) {
    encodedString += encode(arr[index]);
  }
  return STARTBYL + encodedString + ENDBYE;
}

function encode(value) {
  if (typeof (value) === "number") {
    return encodeInteger(value);
  }
  if (typeof value === "string") {
    return encodeString(value);
  }

  return encodeList(value);
}

function decodeInteger(value) {
  const endIndex = value.indexOf(ENDBYE);
  return parseInt(value.slice(1, endIndex));
}

function decodeString(str) {
  const indexOfColon = str.indexOf(COLON);
  const length = parseInt(str.slice(0, indexOfColon));
  return str.slice(indexOfColon + 1, length + indexOfColon + 1);
}

function getNextParseIndex(index, decodedElement) {
  const encodedElement = encode(decodedElement);
  return index + encodedElement.length;
}

function getNextIndexOfChar(data, index, char = ENDBYE) {
  while (index < data.length) {
    if (data[index] === char) {
      return index;
    }
    index++;
  }
}

function getLastIndexofString(data, index) {
  const colonIndex = getNextIndexOfChar(data, index, COLON);
  const lengthOfString = parseInt(data.slice(index, colonIndex));
  const startIndex = colonIndex + 1;
  const endIndex = startIndex + lengthOfString;

  return endIndex;
}

function getIndexOfE(bencoded, index) {
  while (index < bencoded.length) {
    switch (bencoded[index]) {
      case ENDBYE: return index;
      case STARTBYI: {
        index = getNextIndexOfChar(bencoded, index + 1) + 1;
        break;
      }
      case STARTBYL: {
        index = getIndexOfE(bencoded, index + 1) + 1;
        break;
      }
      default: {
        index = getLastIndexofString(bencoded, index);
      }
    }
  }
}

function decodeList(bencoded) {
  const decodedArray = [];          
  let index = 1;
  const indexOfLastE = getIndexOfE(bencoded, index);
  while (index < indexOfLastE) {
    const toDecode = bencoded.slice(index, indexOfLastE);
    const decodedItem = decode(toDecode);

    decodedArray.push(decodedItem);
    index = getNextParseIndex(index,decodedItem);
  }
  return decodedArray;
}

function decode(value) {
  if (value.startsWith(STARTBYI)) {
    return decodeInteger(value);
  }
  if (value.startsWith(STARTBYL)) {
    return decodeList(value);
  }
  return decodeString(value);
}

function areDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

function areEqual(firstValue, secondValue) {
  if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
    return areDeepEqual(firstValue, secondValue);
  }
  return firstValue === secondValue;
}

function displayResult(input, actual, expected, purpose) {
  let message = "❌";
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(text, expectedValue, actualValue, purpose) {
  const input = `array = [${text}]`;
  const actual = `result = [${actualValue}]`;
  const expected = `expected value = [${expectedValue}]`;

  if (areEqual(expectedValue, actualValue)) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

function testEncode(text, expectedValue, purpose) {
  const actualValue = encode(text);
  console.log(
    composeMessage(text, expectedValue, actualValue, purpose),
  );
}
function testDecode(text, expectedValue, purpose) {
  const actualValue = decode(text);
  console.log(
    composeMessage(text, expectedValue, actualValue, purpose),
  );
}

function underline(text) {
  console.log(text);
  console.log("-".repeat(text.length));
}

function testAllEncode() {
  underline("encode")
  testEncode(123, "i123e", "integer value");
  testEncode(-42, "i-42e", "negative integer value");
  testEncode(0, "i0e", "zero integer value");
  testEncode(1, "i1e", "zero integer value");
  testEncode("hello", "5:hello", "string as an input");
  testEncode("", "0:", "empty string as an input");
  testEncode("hello world", "11:hello world", "in btw space of string as an input");
  testEncode("special!@#$chars", "16:special!@#$chars", "some special cherecter string as an input");
  testEncode([], "le", "empty array");
  testEncode([1], "li1ee", "array with integer");
  testEncode([1, "hello"], "li1e5:helloe", "array mix types");
  testEncode(["apple", 123], "l5:applei123ee", "array with string + integer");
  testEncode(["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee", "nested array");
  testEncode([0, "", ["test"]], "li0e0:l4:testee", "integer and string and array all are in array");
  testEncode(["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee", "multi nested array");
  testEncode(["", 0, []], "l0:i0elee", "all edge cases");
  console.log("");
}

function testAllDecode() {
  underline("decode");

  testDecode("i123e", 123, "decode for positive number");
  testDecode("i-42e", -42, "decode for negetive number");
  testDecode("i0e", 0, "decode for zero value");
  testDecode("6:hellow", "hellow", "decode for string");
  testDecode("0:", "", "decode for zero length string");
  testDecode("11:hello world", "hello world", "decode for 2 word string");
  testDecode("16:special!@#$chars", "special!@#$chars", "decode for special character string");
  testDecode("le", [], "decode for array");
  testDecode("li123ee", [123], "decode integer for array");
  testDecode("li123ei-42ee", [123, -42], "decode multiple integer for array");
  testDecode("li123ei-42ei0ee", [123, -42, 0], "decode multiple integer with 0 for array");
  testDecode("l6:hellowe", ["hellow"], "decode string for array");
  testDecode("l5:hello11:hello worlde", ["hello", "hello world"], "decode multiple string for array");
  testDecode("l5:hello11:hello world6:arijite", ["hello", "hello world", "arijit"], "decode multiple string for array");
  testDecode("li123ei-42e6:hellowe", [123, -42, "hellow"], "decode integer for array");
  testDecode("l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]], "decode for nested array");
  testDecode("li0e0:l4:testee", [0, "", ["test"]], "decode for nested array");
  testDecode("l0:i0elee", ["", 0, []], "all edge cases");
  testDecode("l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]], "multi nested array");
  testDecode("li1eli123eei4ee", [1, [123], 4], "multi nested array");
  testDecode("llllli123e3:abeeeeee", [[[[[123, "abe"]]]]], "multi nested array");
}

function testAll() {
  testAllEncode();
  testAllDecode();
};

testAll();
