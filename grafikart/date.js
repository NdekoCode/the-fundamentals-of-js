function addDays(date, days) {
  const newDate = new Date(date.getTime());

  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

/**
 * Ajoute ou retire un interval à une date
 * @param {Date} date La date
 * @param {number} n
 * @param {string} unit
 */
function addIntervalInDate(date, n, unit) {
  const YEARS = "years";
  const MONTHS = "months";
  const DAYS = "days";
  const HOURS = "hours";
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

const YEARS = 0;
const MONTHS = 1;
const DAYS = 2;
const HOURS = 3;
const MINUTES = 4;
const SECONDS = 4;
/**
 * Ajoute un interval à une date
 * @param {Date} date L'objet date de débart
 * @param  {Object<{years:number,months:number,days:number,hours:number,minutes:number,seconds:number}>} interval Les intervals  des elements de la date à supprimer
 * @returns
 */
function addInterval(date, interval) {
  const intervalUnit = {
    years: 0,
    months: 1,
    days: 2,
    hours: 3,
    minutes: 4,
    seconds: 5,
    milliseconds: 6,
  };

  const partsDate = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];
  for (let [unit, value] of Object.entries(interval)) {
    if (unit in intervalUnit) {
      partsDate[intervalUnit[unit]] += value;
    }
  }
  return new Date(...partsDate);
}
const today = new Date();
const tomorrow = addDays(today, 1);
const future = addInterval(today);
// console.log(today.toLocaleString());
// console.log(tomorrow.toLocaleString());
console.log(future);
