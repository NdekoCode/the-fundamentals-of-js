/**
 * @typedef IntervalDate
 * @type {object}
 * @property {number} years - L'Année de l'interval à ajouter ou à soustraire
 * @property {number} months -  Le mois de l'interval à ajouter ou à soustraire
 * @property {number} days - Les jours de l'interval à ajouter ou à soustraire
 * @property {number} hours - Les heures de l'interval à ajouter ou à soustraire
 * @property {number} minutes - Les minutes de l'interval à ajouter ou à soustraire
 * @property {number} seconds - Les secondes de l'interval à ajouter ou à soustraire
 * @property {number} milliseconds - Les millisecondes de l'interval à ajouter ou à soustraire
 */
/**
 * @description Permet de gerer les interractions entre les dates
 * @author NdekoCode
 * @export
 * @class NdekoMoment
 */
export default class NdekoMoment {
  /**
   * @type {number}
   * @description Le nombre de second dans une année
   * @static
   */
  static secondsInYear = 31536000;
  /**
   * @type {number}
   * @description Le nombre de second dans une année
   * @static
   */
  static secondsInMonth = 2628000;
  /**
   * @type {number}
   * @description Le nombre de second dans une année
   * @static
   */
  static secondsInWeek = 604800;

  /**
   * @type {number}
   * @description Le nombre de second dans une journée
   * @static
   */
  static secondsInDay = 86400;
  /**
   * @type {number}
   * @description Le nombre de second dans une heure
   * @static
   */
  static secondsInHour = 3600;
  /**
   * @type {number}
   * @description Le nombre de second dans une minute
   * @static
   */
  static secondsInMinute = 60;
  date;
  /**
   * Creates an instance of NdekoMoment.
   * @author NdekoCode
   * @param {Date} date
   * @memberof NdekoMoment
   */
  constructor(date) {
    this.date = date;
  }

  /**
   * @description Ajoute un interval à une date
   * @author NdekoCode
   * @param  {!IntervalDate} interval Les intervals  des elements de la date à supprimer
   * @param {Date} date L'objet date de débart
   * @return {*}
   * @memberof NdekoMoment
   */
  addInterval(interval, date) {
    const myDate = date ?? this.date;
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
      myDate.getFullYear(),
      myDate.getMonth(),
      myDate.getDate(),
      myDate.getHours(),
      myDate.getMinutes(),
      myDate.getSeconds(),
      myDate.getMilliseconds(),
    ];
    if (intervalUnit) {
      for (let [unit, value] of Object.entries(interval)) {
        if (unit in intervalUnit) {
          partsDate[intervalUnit[unit]] += value;
        }
      }
    }
    return new Date(...partsDate);
  }
  timeDiff() {
    return (Date.now() - this.date.getTime()) / 1000;
  }
  messageHuman(value, desc) {
    return `Il y a ${parseInt(this.timeDiff() / value)} ${
      this.timeDiff() / value > 1 ? desc + "s" : desc
    }`;
  }

  getIntervalSeconds() {
    return parseInt(this.timeDiff() / 60);
  }
  getIntervalMinutes() {
    return parseInt(this.timeDiff() / NdekoMoment.secondsInMinute);
  }
  getIntervalHours() {
    return parseInt(this.timeDiff() / NdekoMoment.secondsInHour);
  }
  getIntervalDays() {
    return parseInt(this.timeDiff() / NdekoMoment.secondsInDay);
  }
  getIntervalWeeks() {
    return parseInt(this.timeDiff() / NdekoMoment.secondsInWeek);
  }

  getIntervalMonths() {
    return parseInt(this.timeDiff() / NdekoMoment.secondsInMonth);
  }

  getIntervalYears() {
    return parseInt(this.timeDiff() / NdekoMoment.secondsInYear);
  }

  getHumanSeconds() {
    return this.messageHuman(60, "sec");
  }
  getHumanMinutes() {
    return this.messageHuman(NdekoMoment.secondsInMinute, "min");
  }
  getHumanHours() {
    return this.messageHuman(NdekoMoment.secondsInHour, "heure");
  }
  getHumanDays() {
    return this.messageHuman(NdekoMoment.secondsInDay, "jour");
  }
  getHumanWeeks() {
    return this.messageHuman(NdekoMoment.secondsInWeek, "semaine");
  }
  getHumanMonths() {
    return this.messageHuman(NdekoMoment.secondsInMonth, "moi");
  }

  getHumanYears() {
    return this.messageHuman(NdekoMoment.secondsInYear, "an");
  }
  viewInHumanDate() {
    if (this.getIntervalYears() < 1) {
      return this.getHumanMonths();
    } else if (this.getIntervalMonths() < 1) {
      return this.getHumanWeeks();
    } else if (this.getIntervalWeeks() < 1) {
      return this.getIntervalDays();
    } else if (this.getIntervalDays() < 1) {
      return this.getHumanHours();
    } else if (this.getIntervalHours() < 1) {
      return this.getHumanMinutes();
    } else if (this.getIntervalMinutes() < 1) {
      return this.getHumanSeconds();
    }
  }

  viewHumanDate() {
    if (this.getIntervalMinutes() < 1) {
      return this.getHumanSeconds();
    } else if (this.getIntervalHours() < 1) {
      return this.getHumanMinutes();
    } else if (this.getIntervalDays() < 1) {
      return this.getHumanHours();
    } else if (this.getIntervalWeeks() < 1) {
      return this.getHumanDays();
    } else if (this.getIntervalMonths() < 1) {
      return this.getHumanWeeks();
    } else if (this.getIntervalYears() < 1) {
      return this.getHumanMonths();
    }
    return this.getHumanYears();
  }
}
const today = new Date("10/15/2022");
const ndekoM = new NdekoMoment(today);
const future = ndekoM.viewHumanDate();
console.log(future);
