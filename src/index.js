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
    let resultString = '';
    let exprArr = expr.split('');  
    let exprArrEx = [];
    let exprArrExRed = [];
    let exprArrExRedResult = []; 
    let exprArrExRedResultString = [];

    
    for (let i = 0; i < exprArr.length; i += 10) {
        exprArrEx.push(exprArr.slice(i, i + 10).join(''));
    }

    for (let i = 0; i < exprArrEx.length; i++) {
        exprArrExRed.push('*');
        for (let j = 0; j < 10; j += 2) {
            if (`${exprArrEx[i][j]}${exprArrEx[i][j+1]}` === '10') {
                exprArrExRed.push('.');
            } else if (`${exprArrEx[i][j]}${exprArrEx[i][j+1]}` === '11') {
                exprArrExRed.push('-');
            } else if (`${exprArrEx[i][j]}${exprArrEx[i][j+1]}${exprArrEx[i][j+2]}${exprArrEx[i][j+3]}${exprArrEx[i][j+4]}${exprArrEx[i][j+5]}${exprArrEx[i][j+6]}${exprArrEx[i][j+7]}${exprArrEx[i][j+8]}${exprArrEx[i][j+9]}` === '**********') {
                exprArrExRed.push(' ');
                j += 8;
            }
        }
    }
    
    
    while (exprArrExRed.length > 0) {

        for (let i = exprArrExRed.length; i >= 0; i--)

        if (exprArrExRed[i] === '*') {
            exprArrExRedResult.unshift(exprArrExRed.splice(i));
        }
    }
    
    
    for (let i = 0; i < exprArrExRedResult.length; i++) {
        exprArrExRedResult[i].shift();
        
        exprArrExRedResultString.push(exprArrExRedResult[i].join(''));
        
    }
    
    
    for (let i = 0; i < exprArrExRedResultString.length; i++) {
        for (let j = 0; j < Object.keys(MORSE_TABLE).length; j++){
        if (exprArrExRedResultString[i] === Object.keys(MORSE_TABLE)[j]) {
            resultString += MORSE_TABLE[Object.keys(MORSE_TABLE)[j]];
            }
        }
        if (exprArrExRedResultString[i] === ' ') {
            resultString += ' ';
        }
    }

    return resultString;
}

module.exports = {
    decode
}