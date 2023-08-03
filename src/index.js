module.exports = function toReadable (number) {
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (number < 20) {return arr[number];}
  let arr2 = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number > 19) {
        let numSPL = number.toString().split('');
        if (numSPL.length == 2) {
          if (numSPL[1] == '0') {return arr2[+numSPL[0]];}
          return (arr2[+numSPL[0]] + ' ' + arr[+numSPL[1]]);
        }
        if (numSPL[1] == '0' && numSPL[2] == '0') {return arr[+numSPL[0]] + ' ' + 'hundred'}
        if (numSPL[1]  == '0') {return arr[+numSPL[0]] + ' ' + 'hundred' + ' ' + arr[+numSPL[2]]}
        if (numSPL[1] == '1') {return arr[+numSPL[0]] + ' ' + 'hundred' + ' ' + arr[+numSPL[2]+10]}
        if (numSPL[2] == '0') {return arr[+numSPL[0]] + ' ' + 'hundred' + ' ' + arr2[+numSPL[1]]}
        return arr[+numSPL[0]] + ' ' + 'hundred' + ' ' + arr2[+numSPL[1]] + ' ' + arr[+numSPL[2]];
    } 
  }

