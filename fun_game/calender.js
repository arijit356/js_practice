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

function monthFragment(month) {
  const monthContent = [];
  for (let week = 0; week < 6; week++) {
    let thisWeek = '';
    for (let day = 0; day < 7; day++) {
      let thisDay = (CALENDAR[month][week][day] || ' ') + " ";
      thisWeek += thisDay.padEnd(4, " ");
    }
    monthContent.push(thisWeek);
  }
  return monthContent.join("\n");
}

function dispCalender(year) {
  console.log(" ".repeat(11), year, "\n", " ".repeat(10), "-".repeat(4));
  for (let month = 0; month < 12; month++) {
    console.log(" ".repeat(9), ALL_MONTHS[month]);
    console.log(" ".repeat(9), "-".repeat(ALL_MONTHS[month].length));
    console.log(WEEK_DAYS.join(" "));
    let thisMonth = monthFragment(month);
    console.log(thisMonth);
  }
}

function main(args) {
  const year = parseInt(args[0]) || 2025;
  const firstDay = getFirstDayOfYear(year);
  pushDates(year, firstDay);
  dispCalender(year);
}

main(Deno.args);
