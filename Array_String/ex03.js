class E03 {
    
    isAnagram(string1, string2) {

        let i,j = 0
        const array1 = string1.split('')
        let array2 = string2.split('')

        if ( string1.length != string2.length) {
            return console.log("False")
        }

        for (i = 0; i < array1.length; i++) { 
            for (j = 0; j < array2.length; j++) { 

                if (array1[i] == array2[j]){
                    array2.splice(array2.indexOf(array1[i]), 1)
                }
            }
        }

        if ( array2.length != 0) {
            return console.log("False")
        } else {
            return console.log("True")
        }
    }
}

module.exports = E03;
