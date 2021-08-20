const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
      let str = expr.substring(i, i + 10);
      let newStr = str.replace(/00/g, '');
      let newStr1 = newStr.replace(/10/g, '.');
      let newStr2 = newStr1.replace(/11/g, '-');
      let newStr3 = newStr2.replace(/[**,]+/g, ' ');
      arr = newStr3.split('  ,');
      result += arr[0] == ' ' ? ' ' : MORSE_TABLE[arr[0]];
      console.log(result);
  }
  return result;
}

// function decode(expr) {
//   let result = '';
//   let arr = [];
//     for (let i = 0; i < expr.length; i += 10){
//        let str = expr.substring(i, i + 10);
//         let newStr = str.replace(/00/g, '');
//         let newStr1 = newStr.replace(/10/g, '.');
//         let newStr2 = newStr1.replace(/11/g, '-');
//         let newStr3 = newStr2.replace(/[**,]+/g, '');  
//         arr = newStr3.split('  ,');
//         result += arr[0] == ' ' ? ' ' :  MORSE_TABLE[arr[0]];
//         console.log(result);
//     }
//     return result;
//   }
    
 //decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");
 
 module.exports = {
       decode
}