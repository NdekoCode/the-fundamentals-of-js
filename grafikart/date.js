function addDays(date, days) {
  const newDate = new Date(date.getTime());

  newDate.setDate(newDate.getDate() + days);
  return newDate;
}
const YEARS = "years";
const MONTHS = "months";
const WEEKS = "weeks";
const DAYS = "days";
const HOURS = "hours";

/**
 *
 * @param {Date} date La date
 * @param {number} n
 * @param {string} unit
 */
function addIntervalInDate(date, n, unit) {
  const newDate = new Date(date.getTime());
  switch (unit) {
    case HOURS:
      newDate.setHours(date.getHours() + n);
      break;
    case DAYS:
      newDate.setDate(date.getDate() + n);
      break;
    case MONTHS:
      newDate.setMonth(date.getMonth() + n);
      break;
    case YEARS:
      newDate.setFullYear(date.getFullYear() + n);
      break;
  }
  return newDate;
}
const today = new Date();
const tomorrow = addDays(today, 1);
const future = addIntervalInDate(today, 1, YEARS);
// console.log(today.toLocaleString());
// console.log(tomorrow.toLocaleString());
console.log(future);
