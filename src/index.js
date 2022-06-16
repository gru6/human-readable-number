module.exports = function toReadable(number) {
  let a1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let a2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let a3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let a4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  //number = 100*x + 10*y + z
  let x = (number - number % 100) / 100;
  let z = number % 10;
  let y = (number % 100 - z) / 10;


  if (number > 10 && number < 20) return a2[number - 11];
  if (((number % 100) > 10) && ((number % 100) < 20)) return a4[x - 1] + ' ' + a2[number - (number - number % 100) - 11];
  if (number < 10 && number !== 0) return a1[number - 1];
  if (number == 0) return 'zero';
  if (z == 0 && y == 0) return a4[x - 1];
  if (x == 0 && z == 0) return a3[y - 1];
  if (z == 0) return a4[x - 1] + ' ' + a3[y - 1];
  if (y == 0) return a4[x - 1] + ' ' + a1[z - 1];
  if (x == 0) return a3[y - 1] + ' ' + a1[z - 1];
  return a4[x - 1] + ' ' + a3[y - 1] + ' ' + a1[z - 1];
}
