module.exports = function toReadable(number) {
   // Units
   units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

   // Tens
   tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   // Scales
   scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

   if (number === 0) {
      return 'zero';
   }

   if (number < 20) {
      return units[number];
   }

   if (number < 100) {
      const strNum = number.toString();

      if (number % 10 === 0) {
         return tens[number];
      } else {
         return tens[strNum[0]] + ' ' + units[strNum[1]];
      }

   }

   if (number < 1000) {
      const strNum = number.toString();

      if (number % 100 === 0) {
         return units[number] + ' hundred';
      } else if (number % 10 === 0) {
         return units[strNum[0]] + ' hundred ' + tens[strNum[1]];
      }
      else {
         return units[strNum[0]] + ' hundred ' + tens[strNum[1]] + ' ' + units[strNum[2]];
      }

   }

}
