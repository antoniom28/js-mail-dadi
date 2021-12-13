function tiraDadi(){
    let punteggioUtente = (Math.random()*5+1).toFixed(0);
    let punteggioComputer = (Math.random()*5+1).toFixed(0);
    document.getElementById('punteggioUtente').innerHTML=punteggioUtente;
    document.getElementById('punteggioComputer').innerHTML=punteggioComputer;
    if(punteggioUtente >= punteggioComputer){
        if(punteggioUtente == punteggioComputer)
            document.getElementById('esitoTiro').innerHTML='Avete pareggiato !';
        else
        document.getElementById('esitoTiro').innerHTML='Hai vinto il tiro !';
    } else
        document.getElementById('esitoTiro').innerHTML='Hai perso !';
}