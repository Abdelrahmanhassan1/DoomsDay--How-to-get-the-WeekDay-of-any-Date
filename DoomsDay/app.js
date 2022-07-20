const days = {
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
};

var day_input = document.getElementById("day");
var month_input = document.getElementById("month");
var year_input = document.getElementById("year");
var weekday = document.getElementById("weekday");
var day, month, year;

day_input.addEventListener("input", () => {
  day = parseInt(day_input.value);
});
month_input.addEventListener("input", () => {
  month = parseInt(month_input.value);
});
year_input.addEventListener("input", () => {
  year = parseInt(year_input.value);
});

function getWeekDay() {
  if (!(day && month && year)) {
    alert("Not all fields are filled");
    return;
  }
  if (day > 31 || day < 1 || month > 12 || month < 1 || year < 1000) {
    alert("Invalid date");
    return;
  }
  var first_two_numbers = year % 100;
  var number_of_leap_years = Math.floor(first_two_numbers / 4);
  var total_added_years = (first_two_numbers % 28) + number_of_leap_years;
  var actual_added_years = total_added_years % 7;
  var dooms_year = year - (year % 100);
  var dooms_day = 0;
  if ((dooms_year - 1700) % 400 == 0) {
    dooms_day = 0;
  } else if ((dooms_year - 1800) % 400 == 0) {
    dooms_day = 5;
  } else if ((dooms_year - 1900) % 400 == 0) {
    dooms_day = 3;
  } else if ((dooms_year - 2000) % 400 == 0) {
    dooms_day = 2;
  }
  var actual_dooms_day = (dooms_day + actual_added_years) % 7;
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
  var given_date =
    year.toString() + "/" + month.toString() + "/" + day.toString();

  const date1 = new Date(given_date);
  const date2 = new Date(dictionary[month]);
  const diffTime = date1.getTime() - date2.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  var day_ref = (diffDays + actual_dooms_day) % 7;
  if (day_ref < 0) {
    day_ref = day_ref + 7;
  }
  weekday.innerHTML = days[day_ref];
}
