/* 
 * bignumber-validator.js - v1.1
 * 
 * Error codes
 * 
 * ERROR_0: BIG-number not an integer
 * ERROR_1: BIG-number != 11 characters
 * ERROR_2: BIG-nummer has nonnumeric values
 * ERROR_3: Fixed number != 9
 * ERROR_4: Controle number incorrect
 */

function isNumeric(n) {
    
    "use strict";
    
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isValid_BIGNumber(strBIG) {
    
    "use strict";
    
    var calcControlegetal, controlegetal, vastgetal, getal1, getal2, getal3, getal4, getal5, getal6, getal7, getal8, getal9;
        
    if (isNumeric(strBIG) === false) {
        throw ("ERROR_0");
    }
    
    if (strBIG.length !== 11) {
        throw ("ERROR_1");
    } else {
        controlegetal = parseInt(strBIG.substr(0, 1), 10);
        vastgetal = strBIG.substr(1, 1);
        getal1 = strBIG.substr(2, 1);
        getal2 = strBIG.substr(3, 1);
        getal3 = strBIG.substr(4, 1);
        getal4 = strBIG.substr(5, 1);
        getal5 = strBIG.substr(6, 1);
        getal6 = strBIG.substr(7, 1);
        getal7 = strBIG.substr(8, 1);
        getal8 = strBIG.substr(9, 1);
        getal9 = strBIG.substr(10, 1);
        
        if (isNumeric(controlegetal) === false || isNumeric(vastgetal) === false || isNumeric(getal1) === false || isNumeric(getal2) === false || isNumeric(getal3) === false || isNumeric(getal4) === false || isNumeric(getal5) === false || isNumeric(getal6) === false || isNumeric(getal7) === false || isNumeric(getal8) === false || isNumeric(getal9) === false) {
            
            throw "ERROR_2";
            
        } else {
            
            if (vastgetal !== "9") {
                
                throw ("ERROR_3");
                
            } else {
                
                // Berekening controle getal
                calcControlegetal = 9;
                calcControlegetal = calcControlegetal + (6 * getal1);
                calcControlegetal = calcControlegetal + (3 * getal2);
                calcControlegetal = calcControlegetal + (7 * getal3);
                calcControlegetal = calcControlegetal + (9 * getal4);
                calcControlegetal = calcControlegetal + (10 * getal5);
                calcControlegetal = calcControlegetal + (5 * getal6);
                calcControlegetal = calcControlegetal + (8 * getal7);
                calcControlegetal = calcControlegetal + (4 * getal8);
                calcControlegetal = calcControlegetal + (2 * getal9);
                calcControlegetal = 11 - (calcControlegetal % 11);
                
                if (calcControlegetal === 11) {
                    calcControlegetal = 0;
                }
                if (calcControlegetal === 10) {
                    calcControlegetal = 1;
                }
               
                if (calcControlegetal !== controlegetal) {
                    
                    throw ("ERROR_4");
                } else {
                    return true;
                }
            }
        }
    }
}