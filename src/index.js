module.exports = function toReadable(number) {
   // Units
   units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

   // Tens
   tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   function addSpace(string) {
      if (string) {
         return ' ' + string
      }
      return string
   }

   if (number === 0) {
      return 'zero';
   }
   if (number < 20) {
      return units[number];
   }
   if (number % 100 === 0 && (number / 100) < 20) {
      return units[number / 100] + ' hundred';
   }
   const strNum = number.toString();
   const lastNum = units[Math.trunc(Number(strNum.slice(-1)))];
   const tenthPart = Number(strNum.slice(-2));
   let thousantPart = units[Math.trunc(Number(strNum.slice(-3)) / 100)];

   if (thousantPart) {
      thousantPart = `${thousantPart} hundred`;
   }
   if (tenthPart < 20 && tenthPart >= 10) {
      return thousantPart + ' ' + units[tenthPart];
   }

   const result = thousantPart + addSpace(tens[Math.trunc(tenthPart / 10)]) + addSpace(lastNum);

   return result.trim()
}
