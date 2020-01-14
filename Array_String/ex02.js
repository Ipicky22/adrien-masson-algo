class E02 {
    
    isReverse(string) {

        let i = 0
        let newString = ""
        const array = string.split('')

        for (i = array.length - 1; i >= 0; i--) { 
            newString += array[i];
        }

        return console.log(newString)
    }
}

module.exports = E02;
