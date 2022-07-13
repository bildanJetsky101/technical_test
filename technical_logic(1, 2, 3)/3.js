let result = ''
let count = 5

const segitigaTerbalik = () => {
    for (let i = 0; i <= 4; i++) {
        for (let l = 0; l < i; l++) {
            result += ' ';
        }
        
        for(let c = 5; c > i; c--) {
            if(c%2 > 0) {
                if(count%2 == 0){
                        result += '+ '
                        count -1
                } 
                else {
                        result += '# '
                        count -1
                }
            } else {
                result += '+ '
                count -1
            }
            
        }
            result += '\n'
            count-=1
        
    }
    return console.log(result)

}

segitigaTerbalik()