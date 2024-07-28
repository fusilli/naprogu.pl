const { format } = require("date-fns");
const polishLocale = require('date-fns/locale/pl');

module.exports = function(dateObj) {
  return `${format(dateObj, "d MMMM yyyy", { locale: polishLocale })} r.`;
}