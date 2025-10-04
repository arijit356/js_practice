
/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */

function dateFormation(incrementDate, incrementMonth, yearSeperate) { 
  if (incrementDate === "Invalid Date" || incrementMonth > 12) {
    return "Invalid Date";
  }

  let das = "-";
  let monthIncrementStirng = "" + incrementMonth;
  monthIncrementStirng = monthIncrementStirng.padStart(2,"0");

  let dateIncrrementString = "" + incrementDate;
  dateIncrrementString = dateIncrrementString.padStart(2,"0"); 

 return dateIncrrementString + das + monthIncrementStirng + das + yearSeperate;
}

function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isNotDivisibleBy100 = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;

  return (isDivisibleBy4 && isNotDivisibleBy100) || isDivisibleBy400;
}

function monthOf29ForDate(dateSeperate) {
  if (dateSeperate === 29) {
    return 1;
  }
  if (dateSeperate < 29) {
    return dateSeperate + 1;
  }
  return "Invalid Date";
}

function monthOf28ForDate(dateSeperate) {
  if (dateSeperate === 28) {
    return 1;
  }
  if (dateSeperate < 28) {
    return dateSeperate + 1;
  }
  return "Invalid Date";
}

function IdentifyMonthTypeForDate(monthSeperate, dateSeperate, yearSeperate) {
  let month31String = " 1 3 5 7 8 10 12 ";
  if (month31String.includes(" " + monthSeperate + " ")) {
    return monthOf31ForDate(dateSeperate);
  }
  if (monthSeperate === 2) {
    if (isLeapYear(yearSeperate)) {
      return monthOf29ForDate(dateSeperate);
    }
    return monthOf28ForDate(dateSeperate);
  }
  return monthOf30ForDate(dateSeperate);
}

function monthOf30ForDate(dateSeperate) {
  if (dateSeperate === 30) {
    return 1;
  }
  if (dateSeperate < 30) {
    return dateSeperate + 1;
  }
  return "Invalid Date";
}

function monthOf31ForDate(dateSeperate) {
  if (dateSeperate === 31) {
    return 1
  }
  if (dateSeperate < 31) {
    return dateSeperate + 1;
  }
  return "Invalid Date";
}

function monthOf29ForMonth(monthSeperate, dateSeperate) {
  return dateSeperate === 29 ? monthSeperate + 1 : monthSeperate;
}

function monthOf28ForMonth(monthSeperate, dateSeperate) {
  return dateSeperate === 28 ? monthSeperate + 1 : monthSeperate;
}

function IdentifyMonthTypeForMonth(monthSeperate, dateSeperate, yearSeperate) {
  let month31String = " 1 3 5 7 8 10 12 ";
  if (month31String.includes(" " + monthSeperate + " ")) {
    return monthOf31ForMonth(monthSeperate, dateSeperate);
  }

  if (monthSeperate === 2) {
    if (isLeapYear(yearSeperate)) {
      return monthOf29ForMonth(monthSeperate, dateSeperate);
    }
    return monthOf28ForMonth(monthSeperate, dateSeperate);
  }

  return monthOf30ForMonth(monthSeperate, dateSeperate)
}

function monthOf31ForMonth(monthSeperate, dateSeperate) {
  return dateSeperate === 31 ? monthSeperate + 1 : monthSeperate;
}

function monthOf30ForMonth(monthSeperate, dateSeperate) {
  return dateSeperate === 30 ? monthSeperate + 1 : monthSeperate;
}

function nextDate(date) {

  const dateSeperate = parseInt(date.slice(0, 2));
  const monthSeperate = parseInt(date.slice(3, 5));
  const yearSeperate = parseInt(date.slice(-4));

  let incrementDate = IdentifyMonthTypeForDate(monthSeperate, dateSeperate, yearSeperate);
  let incrementMonth = IdentifyMonthTypeForMonth(monthSeperate, dateSeperate, yearSeperate);
  return dateFormation(incrementDate, incrementMonth, yearSeperate);

}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, inputSection, actualSection, expectedSection, purpose) {
  let message = symbol;
  message += " " + purpose;
  message += "\n\n | " + inputSection;
  message += "\n | " + actualSection;
  message += "\n | " + expectedSection;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(date, expectedValue, actualValue, purpose) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const inputSection = "date = [" + date + "]";
  const actualSection = "result = [" + actualValue + "]";
  const expectedSection = "expected value = [" + expectedValue + "]";
  if (expectedValue === actualValue) {
    return symbol + purpose;
  }
  return displayResult(symbol, inputSection, actualSection, expectedSection, purpose);
}

function testNextDate(date, expectedValue, purpose) {
  const actualValue = nextDate(date);
  console.log(composeMessage(date, expectedValue, actualValue, purpose));
}

function testAll() {
  testNextDate("15-03-2021", "16-03-2021", "Simple increment of a normal(15-03-2021 -> 16-03-2021) day");
  testNextDate("10-03-2021", "11-03-2021", "Simple increment of a normal(10-03-2021 -> 11-03-2021) day");
  testNextDate("29-03-2021", "30-03-2021", "Simple increment of a normal(29-03-2021 -> 30-03-2021) day");
  testNextDate("30-03-2021", "31-03-2021", "Simple increment of a normal(30-03-2021 -> 31-03-2021) day");
  testNextDate("01-03-2021", "02-03-2021", "Simple increment of a normal(01-03-2021 -> 02-03-2021) day");
  testNextDate("09-03-2021", "10-03-2021", "Simple increment of a normal(09-03-2021 -> 10-03-2021) day");
  testNextDate("32-03-2021", "Invalid Date", "Simple increment of a normal(32-03-2021 -> Invalid Date) day");
  testNextDate("35-03-2021", "Invalid Date", "Simple increment of a normal(32-03-2021 -> Invalid Date) day");
  testNextDate("15-13-2021", "Invalid Date", "Simple increment of a normal(15-13-2021 -> Invalid Date) day");
  testNextDate("31-04-2021", "Invalid Date", "Simple increment of a normal(31-04-2021 -> Invalid Date) day");
  testNextDate("31-03-2021", "01-04-2021", "Simple increment of a normal(31-03-2021 -> 01-04-2021) day");
  testNextDate("30-04-2021", "01-05-2021", "Simple increment of a normal(30-04-2021 -> 01-05-2021) day");
  testNextDate("28-04-2021", "29-04-2021", "Simple increment of a normal(28-04-2021 -> 29-04-2021) day");
  testNextDate("12-02-2021", "13-02-2021", "Simple increment of a normal(12-02-2021 -> 13-02-2021) day");
  testNextDate("27-02-2021", "28-02-2021", "Simple increment of a normal(27-02-2021 -> 28-02-2021) day");
  testNextDate("28-02-2021", "01-03-2021", "Simple increment of a normal(28-02-2021 -> 01-03-2021) day");
  testNextDate("29-02-2020", "01-03-2020", "Simple increment of a normal(29-02-2020 -> 01-03-2020) day");
  testNextDate("28-02-2020", "29-02-2020", "Simple increment of a normal(28-02-2020 -> 29-02-2020) day");
  testNextDate("30-02-2020", "Invalid Date", "Simple increment of a normal(30-02-2020 -> Invalid Date) day");
  testNextDate("29-02-2021", "Invalid Date", "Simple increment of a normal(29-02-2021 -> Invalid Date) day");
}

testAll();
