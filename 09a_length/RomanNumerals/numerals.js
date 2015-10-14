//var number=prompt("What is your number?");

// I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1,000

    var roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5, 
        I: 1
    };
    var num = 526;
    var str = ''; // output DXXVI
    for(var letter in roman){
        var dummy = Math.floor(num/roman[letter])
        if(dummy > 0){
            for(var i = 1; i <= dummy; i++){
                str += letter;
                num -=roman[letter];
            };
        };
    };
console.log(str);


    
    
    
    
    
    //for (var letter in romans){
        //str += Math.floor(num / romans[letter]);
        
//    }
//}