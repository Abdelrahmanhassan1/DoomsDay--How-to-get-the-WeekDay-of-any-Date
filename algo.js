let days = {
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
};

var year = 1600;
var month = 7;
var day = 20;

// # find the dooms day of the year
var first_two_numbers = year % 100;

// console.log(first_two_numbers);
var number_of_leap_years = Math.floor(first_two_numbers / 4);

// console.log(number_of_leap_years);

var total_added_years = (first_two_numbers % 28) + number_of_leap_years;

// # print(total_added_years)
// console.log(total_added_years);

var actual_added_years = total_added_years % 7;

// # print(actual_added_years)
// console.log(actual_added_years);
// # check if the year is a leap year

var dooms_year = year - (year % 100);

// # print(dooms_year)
// console.log(dooms_year);

var dooms_day = 0;

// # check this
if ((dooms_year - 1700) % 400 == 0) {
  dooms_day = 0;
} else if ((dooms_year - 1800) % 400 == 0) {
  dooms_day = 5;
} else if ((dooms_year - 1900) % 400 == 0) {
  dooms_day = 3;
} else if ((dooms_year - 2000) % 400 == 0) {
  dooms_day = 2;
}

// # print(dooms_day)
// console.log(dooms_day);

var actual_dooms_day = (dooms_day + actual_added_years) % 7;

// console.log(actual_dooms_day);

if (first_two_numbers != 0 && first_two_numbers % 4 == 0) {
  // # leap year
  dictionary = {
    1: year.toString() + "/1/4",
    2: year.toString() + "/2/29",
    4: year.toString() + "/4/4",
    5: year.toString() + "/5/9",
    6: year.toString() + "/6/6",
    7: year.toString() + "/7/11",
    8: year.toString() + "/8/8",
    9: year.toString() + "/9/5",
    10: year.toString() + "/10/10",
    11: year.toString() + "/11/7",
    12: year.toString() + "/12/12",
  };
} else {
  dictionary = {
    1: year.toString() + "/1/3",
    2: year.toString() + "/2/28",
    4: year.toString() + "/4/4",
    5: year.toString() + "/5/9",
    6: year.toString() + "/6/6",
    7: year.toString() + "/7/11",
    8: year.toString() + "/8/8",
    9: year.toString() + "/9/5",
    10: year.toString() + "/10/10",
    11: year.toString() + "/11/7",
    12: year.toString() + "/12/12",
  };
}

// # print(dictionary[month])
// console.log(dictionary[month]);
// # convert string to date object
var given_date =
  year.toString() + "/" + month.toString() + "/" + day.toString();

const date1 = new Date(given_date);
const date2 = new Date(dictionary[month]);

// console.log(given_date);
// console.log(date1);
// console.log(date2);

// # difference between dates in timedelta

const diffTime = date1.getTime() - date2.getTime();
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// # print(delta)
var day_ref = (diffDays + actual_dooms_day) % 7;
// console.log(day_ref);
console.log(days[day_ref]);

// # print(-1 % 7)
