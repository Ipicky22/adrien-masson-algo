class E01 {
    
    isUnique(string) {

        let i, j = 0
        const array = string.split('')

        for( i=0; i<array.length; i++){
            
            for( j=i+1; j<array.length; j++){

                if(array[i] == array[j]) {
                    return "Is not unique !"
                }
            }
        }

        return "Is unique !"
    }
}

module.exports = E01;
