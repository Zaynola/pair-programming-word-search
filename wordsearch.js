const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    // Check vertically
    for (let col = 0; col < letters[0].length; col++) {
        let verticalJoin = '';
        for (let row = 0; row < letters.length; row++) {
            verticalJoin += letters[row][col];
        }
        if (verticalJoin.includes(word)) return true;
    }

    return false;
}

module.exports = wordSearch