const consonants = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z', 's', 'ch', 'sh', 'th', 'th', 'ng', 'y', 'bb', 'dd', 'ff', 'gg', 'wh', 'ge', 'c', 'll', 'mm', 'nn,kn', 'pp', 'rr', 'ss', 'tt', 'f', 'wh', 'zz', 'si', 'tch', 'ce', 'n', 'i', 'ed', 'ph', 'gh', 'g', 'ch', 'mb', 'gn', 'wr', 'c', 'th', 'ph', 'u', 's', 'z', 'tu', 's', 'ngue', 'j', 'gh', 'gu', 'dge', 'cc', 'mn', 'pn', 'rh', 'sc', 'ed', 've', 'o', 'ss', 'ti', 'ci', 'lf', 'gue', 'di', 'lk', 'lm', 'ps', 'x', 'te', 'si', 'ft', 'gg', 'qu', 'st', 'ze', 'ch', 'q', 'ce', 'se', 'sci', 'ck', 'se', 'ti']
const vowels = ['a', 'a', 'e', 'e', 'i', 'i', 'a', 'o', 'o', 'u', 'o', 'oi', 'ow', 'a', 'air', 'a', 'ir', 'aw', 'ear', 'ure', 'ai', 'ai', 'ea', 'ee', 'e', 'y', 'ho', 'oa', 'oo', 'o', 'oo', 'oy', 'ou', 'er', 'are', 'er', 'a', 'eer', 'our', 'au', 'eigh', 'u', 'ea', 'o', 'igh', 'au', 'u,ou', 'oo', 'ew', 'uoy', 'ough', 'i', 'ear', 'ur', 'or', 'ere', 'aigh', 'ie', 'y', 'u', 'ie', 'aw', 'oe', 'ou', 'ue', 'ar', 'ere', 'ear', 'oor', 'ier', 'ay', 'ai', 'ey', 'ui', 'uy', 'ough', 'ow', 'our', 'eir', 'or', 'ore', 'er', 'a', 'oe', 'y', 'ye', 'ough', 'oe', 'ur', 'ayer', 'our', 'oar', 'et', 'eo', 'ie', 'ie', 'ai', 'eau', 'ough', 'yr', 'our', 'ei', 'ei', 'i', 'is', 'oo', 'ui', 'augh', 'au', 'ae', 'ei', 'eigh', 'ew', 'oew', 'ar', 'eo', 'ou', 'ough', 'ea', 'ay', 'au']
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '', '|', '/', '?', ',', '.', '<', '>']
const terminators = ['.', '?', '!']
const seperators = ['spaces', 'numbers', 'symbols']

function buildWord(minLen, maxLen, wordEntries) {
    // Return an alternating set of consonants and vowels until you hit the correct length
    var newWord = ''

    var selectConsonant = true
    var entries = 0
    while (true) {
        var toAttach = ''

        // First grab the next thing to attach
        if (selectConsonant) {
            toAttach = getRandomConsonant()
        } else {
            toAttach = getRandomVowel()
        }

        // If you can attach the next entry without going over length, do so
        if ((newWord + toAttach).length < maxLen) {
            newWord += toAttach

            // Now switch vowel vs consonant
            selectConsonant = !selectConsonant

            // Increase your entry counter
            entries++
        }

        // If you've hit the requsite number of word entries, exit
        if (entries == wordEntries) {
            return newWord
        }
    }
}

function getRandomConsonant() {
    return consonants[getRandomInt(consonants.length)]
}

function getRandomVowel() {
    return vowels[getRandomInt(vowels.length)]
}

function getRandomSeperator(selectedSeperators) {
    // Grab a random seperator type
    const seperatorType = seperators[getRandomInt(selectedSeperators.length)]

    if (seperatorType == 'spaces') {
        return ' '
    } else if (seperatorType == 'numbers') {
        return getRandomInt(10)
    } else {
        return symbols[getRandomInt(symbols.length)]
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function buildPassword(options) {
    const passwordWordLength = options.passwordWordLength || 3
    const minWordLength = options.minWordLength || 1
    const maxWordLength = options.maxWordLength || 100
    const wordEntries = options.wordEntries || 2
    const selectedSeperators = options.selectedSeperators || ['spaces']

    var password = ''
    var numberOfWords = 1
    while (true) {
        // First grab a word
        var newWord = buildWord(minWordLength, maxWordLength, wordEntries)

        password += newWord

        if (numberOfWords == passwordWordLength) {
            // If you're at the end, just return
            return password
        } else {
            // Otherwise attach a seperator

            // Grab a random seperator
            const seperator = getRandomSeperator(selectedSeperators)

            password += seperator
        }

        numberOfWords++
    }
}

const pass = buildPassword({
    passwordWordLength: 3,
    wordEntries: 3
})

console.log(pass)











