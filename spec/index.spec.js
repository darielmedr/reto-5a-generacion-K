const { removeAccentMark, formatMessage, decodeMessage } = require('../src/index');

describe('removeAccentMark', () => {

    it('should return a lowercase vowel without accent mark', () => {
        const accentMarkeVowels = 'áÁéÉíÍóÓúÚ'.split('');
        const vowelsResult = accentMarkeVowels.map(char => removeAccentMark(char));

        expect(vowelsResult.join('')).toEqual('aaeeiioouu');
    });

    it('should return the argument value if no accent mark vowel is given', () => {
        const accentMarkeVowels = 'aAbBcCdDeEfFgGiIoOuU'.split('');
        const vowelsResult = accentMarkeVowels.map(char => removeAccentMark(char));

        expect(vowelsResult.join('')).toBe('aAbBcCdDeEfFgGiIoOuU');
    });

});

describe('formatMessage', () => {


    it('should return an array', () => {
        expect(formatMessage('test'.split(''))).toBeInstanceOf(Array);
    });

    it('should return an array of characters without white spaces', () => {
        expect(formatMessage('w h i t e s p a c e s'.split('')))
            .toEqual('whitespaces'.split(''));
    });

    it('should return an array of characters without uppercases', () => {
        expect(formatMessage('UPPERCASES'.split('')))
            .toEqual('uppercases'.split(''));
    });

    it('should return an array of characters without white spaces, uppercases and accent marks', () => {
        expect(formatMessage('áÁéÉíÍóÓúÚ UPERCASE and s p a c e s'.split('')))
            .toEqual('aaeeiioouuupercaseandspaces'.split(''));
    });

});

describe('decodeMessage', () => {
    const encodedMsg = 'abcd'.split('');
    const keyCode = [1, 0, 3, 2];
    let decodedMsg = '';

    it('should the message array length be equal to the keyCode array lenght', () => {
        expect(encodedMsg.length).toBe(keyCode.length);
    });

    it('should sort a message array according to the keyCode array values', () => {
        decodedMsg = decodeMessage(encodedMsg, keyCode);
        expect(decodedMsg).toBe('badc');
    });

    it('should return a string', () => {
        expect(decodedMsg).toBeInstanceOf(String);
    });

});