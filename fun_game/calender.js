const CALENDAR = [];
const ALL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const WEEK_DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];

function getFirstDayOfYear(year) {
  const date = new Date(year, 0, 1);
  return WEEK_DAYS[date.getDay()];
}

function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const centuryYear = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;
  const isDivisibleBy4Not100 = isDivisibleBy4 && centuryYear;
  return isDivisibleBy4Not100 || isDivisibleBy400;
}

function getLastDayMonth(year, month) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return (((month - 1) % 7) % 2) === 0 ? 31 : 30;
}

function pushDates(year, firstDay) {
  let index = WEEK_DAYS.indexOf(firstDay);

  for (let month = 0; month < 12; month++) {
    CALENDAR.push([]);
    let day = 1;
    let lastDayOfMonth = getLastDayMonth(year, month + 1);
    for (let week = 0; week < 6; week++) {
      CALENDAR[month].push([]);
      while (index < 7 && day <= lastDayOfMonth) {
        CALENDAR[month][week][index] = day;
        index++;
        day++;
      }
      index = index === 7 ? 0 : index;
    }
  }
}

function dispCalender(year) {

  console.log(" ".repeat(40), year, "\n", " ".repeat(39), "-".repeat(4));
  for (let row = 0; row < 4; row++) {
    let startIndex = row * 3;

    let line = '';
    let underline = '';
    let weekHeader = '';
    for (let month = 0; month < 3; month++) {
      const monthIndex = startIndex + month;
      let monthName = ALL_MONTHS[monthIndex];
      line += monthName.padStart(15).padEnd(35);
      underline += "-".repeat(monthName.length).padStart(15).padEnd(35);
      weekHeader += WEEK_DAYS.join(" ") + "    ";
    }
    console.log(line);
    console.log(underline);
    console.log(weekHeader);

    for (let week = 0; week < 6; week++) {
      let weekRow = "";
      for (let index = 0; index < 3; index++) {
        const monthIndex = startIndex + index;
        for (let day = 0; day < 7; day++) {
          let thisDay = (CALENDAR[monthIndex][week][day] || " ");
          weekRow += thisDay.toString().padStart(2, " ").padEnd(3) + " ";
        }
        weekRow += "   ";
      }
      console.log(weekRow);
    }
    console.log("\n")
  }
}

function main(args) {
  const year = parseInt(args[0]) || 2025;
  const firstDay = getFirstDayOfYear(year);
  pushDates(year, firstDay);
  dispCalender(year);
}

main(Deno.args);
