# 0 -> SUNDAY
# 1 -> MONDAY
# 2 -> TUESDAY
# 3 -> WEDNESDAY
# 4 -> THURSDAY
# 5 -> FRIDAY
# 6 -> SATURDAY


from datetime import datetime

from more_itertools import first

days = {0: 'SUNDAY', 1: 'MONDAY', 2: 'TUESDAY',
        3: 'WEDNESDAY', 4: 'THURSDAY', 5: 'FRIDAY', 6: 'SATURDAY'}

year = 1000
month = 8
day = 27
# find the dooms day of the year

first_two_numbers = year % 100

# print(first_two_numbers)
number_of_leap_years = first_two_numbers // 4

total_added_years = first_two_numbers % 28 + number_of_leap_years

# print(total_added_years)

actual_added_years = total_added_years % 7

# print(actual_added_years)

# check if the year is a leap year

dooms_year = year - year % 100

# print(dooms_year)
dooms_day = 0

# check this
if (dooms_year - 1700) % 400 == 0:
    dooms_day = 0
elif (dooms_year - 1800) % 400 == 0:
    dooms_day = 5
elif (dooms_year - 1900) % 400 == 0:
    dooms_day = 3
elif (dooms_year - 2000) % 400 == 0:
    dooms_day = 2

# print(dooms_day)

actual_dooms_day = (dooms_day + actual_added_years) % 7


if first_two_numbers != 0 and (first_two_numbers % 4) == 0:
    # leap year
    dictionary = {
        1: str(year)+"/1/4",
        2: str(year)+"/2/29",
        4: str(year)+"/4/4",
        5: str(year)+"/5/9",
        6: str(year)+"/6/6",
        7: str(year)+"/7/11",
        8: str(year)+"/8/8",
        9: str(year)+"/9/5",
        10: str(year)+"/10/10",
        11: str(year)+"/11/7",
        12: str(year)+"/12/12",
    }
else:
    dictionary = {
        1: str(year)+"/1/3",
        2: str(year)+"/2/28",
        4: str(year)+"/4/4",
        5: str(year)+"/5/9",
        6: str(year)+"/6/6",
        7: str(year)+"/7/11",
        8: str(year)+"/8/8",
        9: str(year)+"/9/5",
        10: str(year)+"/10/10",
        11: str(year)+"/11/7",
        12: str(year)+"/12/12",
    }

# print(dictionary[month])

# convert string to date object
given_date = str(year)+"/"+str(month)+"/"+str(day)
date1 = datetime.strptime(given_date, "%Y/%m/%d")
date2 = datetime.strptime(dictionary[month], "%Y/%m/%d")

# difference between dates in timedelta
delta = date1 - date2
# print(delta)
day_ref = (delta.days + actual_dooms_day) % 7

print(f'Day is {days[day_ref]}')

# print(-1 % 7)
