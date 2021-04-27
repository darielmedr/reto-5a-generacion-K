const formatMessage = (msg) => {
    return msg
        .filter(char => char !== ' ')           // remove white spaces
        .map(char => {
            const lowerCaseChar = char.toLowerCase();
            const noAccentMarkChar = removeAccentMark(lowerCaseChar);
            return noAccentMarkChar;
        });
}

const removeAccentMark = (char) => {
    const accentMarksMapper = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'Á': 'a',
        'É': 'e',
        'Í': 'i',
        'Ó': 'o',
        'Ú': 'u'
    };

    const mappedChar = accentMarksMapper[char];
    return (mappedChar) ? mappedChar : char;
};

const decodeMessage = (encryptedMessage, keyCode) => {

    const decodedChars = new Array(encryptedMessage.length);

    keyCode.forEach((charPosition, index) => {
        const currentChar = encryptedMessage[index];
        decodedChars[charPosition] = currentChar;
    });

    return decodedChars.join('');
};

const init = () => {
    const messageTranslated = "Cómo será dar con Nekgikis V...";
    const keyCode = [23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3,
        12, 2, 16, 14, 9, 21, 0, 1, 13, 22];

    const messageChars = messageTranslated.split('');
    const cleanedMsgChars = formatMessage(messageChars);

    if (cleanedMsgChars.length !== keyCode.length) {
        console.log('The message formated has different length of the secret code.');
        return;
    }

    const decodedMsg = decodeMessage(cleanedMsgChars, keyCode);
    console.log(decodedMsg);
};

init();

module.exports = { formatMessage, removeAccentMark, decodeMessage }