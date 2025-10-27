function encodeForInteger(num) {
  return "i" + num + "e";
}

function encodeForString(str) {
  const lengthOfText = str.length;
  return lengthOfText + ":" + str;
}

function encodeForArray(arr) {
  let encodedString = "";
  for (let index = 0; index < arr.length; index++) {
    encodedString += encode(arr[index]);
  }
  return "l" + encodedString + "e";
}

function encode(value) {
  if (typeof (value) === "number") {
    return encodeForInteger(value);
  }
  if (typeof value === "string") {
    return encodeForString(value);
  }
  if (typeof value === "object") {
    return encodeForArray(value);
  }
}

function decodeForInteger(value) {
  if (value[1] === "0" && value.length > 3) {
    return "Invalid Input";
  }
  const indexOfLastE = value.indexOf("e");
  return parseInt(value.slice(1, indexOfLastE));
}

function decodeForString(str) {
  const indexOfColon = str.indexOf(":");
  return str.slice(indexOfColon + 1, str.length);
}

function decodeForArray(value) {
  const decodedArray = [];
  let index = 1;
  let indexOfLastE = value.lastIndexOf("e");
  if (index < indexOfLastE) {
    const toDecode = value.slice(index, value.length - 1);
    const decodedElement = decode(toDecode);

    decodedArray.push(decodedElement);

  }

  return decodedArray;
}

function decode(value) {
  if (value.startsWith("i")) {
    return decodeForInteger(value);
  }
  if (value.startsWith("l")) {
    return decodeForArray(value);
  }
  return decodeForString(value);
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
  testEncode(["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee", "nested aray");
  testEncode(["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee", "nested array");
  testEncode(["", 0, []], "l0:i0elee", "all edge cases in array");
  console.log("");
}

function testAllDecode() {
  underline("decode");

  testDecode("i123e", 123, "decode for positive number");
  testDecode("i-42e", -42, "decode for negetive number");
  testDecode("i0e", 0, "decode for zero value");
  testDecode("i01e", "Invalid Input", "decode for Invalid Input");
  testDecode("5:hello", "hello", "decode for string");
  testDecode("0:", "", "decode for zero length string");
  testDecode("11:hello world", "hello world", "decode for 2 word string");
  testDecode("14:special!@#$chars", "special!@#$chars", "decode for special character string");
  testDecode("le", [], "decode for array");
  testDecode("li123ee", [123], "decode integer for array");
  testDecode("li123ei-42ee", [123, -42], "decode integer for array");

  // testDecode("l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]], "decode for array");
}

function testAll() {
  testAllEncode();
  testAllDecode();
};

testAll();
