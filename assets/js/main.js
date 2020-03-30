/* 

    EMAIL
    - Chiedi all’utente la sua email,
    - controlla che sia nella lista di chi può accedere,
    - stampa un messaggio appropriato sull’esito dell controllo 

*/

var emailList = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
console.table(emailList);


var buttonCheck = document.getElementById('buttonCheck');
var buttonCanc = document.getElementById('buttonCanc');
var userFound = false;


buttonCheck.addEventListener('click',
    function() {
        //Ottieni Email Utente 
        var userEmail = document.getElementById('email').value; 
        
        
        //Controllo Email
        for (var i = 0; i < emailList.length; i++) {
            var item = emailList[i];
            
            if (item == userEmail) {
                userFound = true;
            }      
        }
        console.log(userFound);
        
        // Response 

        if (userFound == true) {             
            document.getElementById('email-response').innerHTML = 'Email presente nel sistema';
        } else {
            document.getElementById('email-response').innerHTML = 'Email non presente nel sistema';
        }
    }    
);

buttonCanc.addEventListener('click',
    function() {
        var userEmail = document.getElementById('email').value = '';
        document.getElementById('email-response').innerHTML = '';
    }
);


/* 

    DADI
    generare un numero random da 1 a 6, sia per il giocatore sia per il computer
    Stabilire il vincitore, in base a chi fa il punteggio più alto

*/


var buttonRoll = document.getElementById('buttonRoll');
var buttonRetry = document.getElementById('buttonRetry');
var resultPlay

buttonRoll.addEventListener('click',
    function() {
        var userNum = Math.floor(Math.random() * 6) + 1;
        var pcNum = Math.floor(Math.random() * 6) + 1;
        document.getElementById('userNum').innerHTML = userNum;
        document.getElementById('pcNum').innerHTML = pcNum;

        if (userNum > pcNum) {
            var resultPlay = document.getElementById('resultPlay').innerHTML = 'YOU WIN!';
         } else if (userNum < pcNum) {
             var resultPlay = document.getElementById('resultPlay').innerHTML = 'YOU LOSE!';
         } else {
            var resultPlay = document.getElementById('resultPlay').innerHTML = 'DRAW - Retry!'; 
         }
    }
);    

buttonRetry.addEventListener('click',
    function() {
        document.getElementById('userNum').innerHTML = '';
        document.getElementById('pcNum').innerHTML = '';
        var resultPlay = document.getElementById('resultPlay').innerHTML = '';
    }
);




