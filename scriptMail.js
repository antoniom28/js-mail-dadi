let mailVerificate = ["antomarc@gmail.com", "megliopluto28@gmail.com",
"giacomoleopardi1@gmail.com","booleanno99@gmail.com","nonsidicejava@gmail.com"]

function verificaMail(){
    let erroreVerifica = 0;
    let erroreChiocciola = 0;
    let errorePunto = 0;
    const mail = document.getElementById('mail').value;

    for(let i=0; i<mail.length; i++){
        if(mail[i] == "@")
            erroreChiocciola++;
        else if(mail[i] == ".")
                errorePunto++;
    }

    if(erroreChiocciola == 1 && errorePunto == 1)
        for(let i=0; i<mailVerificate.length; i++){
            if(mailVerificate[i] == mail){
                erroreVerifica = 1;
                break;
            }
        }
    else{
        document.getElementById('esitoVerifica').innerHTML = "l'Email deve contenere @prova.com";
        document.getElementById('esitoVerifica').style.color="red";
    }
        
    if(erroreChiocciola == 1 && errorePunto == 1){
        if(erroreVerifica == 1){
            document.getElementById('esitoVerifica').innerHTML = "Email Confermata !!";
            document.getElementById('esitoVerifica').style.color="green";
        }
        else{
            document.getElementById('esitoVerifica').innerHTML = "Email non registrata !";
            document.getElementById('esitoVerifica').style.color="red";
        }
    }
}
