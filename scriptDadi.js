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

function tiraDadiMigliore(){
    let punteggioUtente = (Math.random()*5+1).toFixed(0);
    let punteggioComputer = (Math.random()*5+1).toFixed(0);

        for(let i=1; i<=6; i++){
                document.getElementById(`faccia${i}`).style.zIndex = i; 
                document.getElementById(`faccia${i}-computer`).style.zIndex = i;
        }

        for(let i=1; i<=6; i++){
            setTimeout(function(){
                document.getElementById(`faccia${i}`).style.zIndex = i+6; 
                document.getElementById(`faccia${i}-computer`).style.zIndex = i+6; 
             }, 500*i);
        }
  
        setTimeout(function(){
            document.getElementById(`faccia${punteggioUtente}`).style.zIndex = 20; 
            document.getElementById(`faccia${punteggioComputer}-computer`).style.zIndex = 20; 
            if(punteggioUtente >= punteggioComputer){
                if(punteggioUtente == punteggioComputer)
                    document.getElementById('esitoPartita').innerHTML='Avete pareggiato !';
                else
                document.getElementById('esitoPartita').innerHTML='Hai vinto il tiro !';
            } else
                document.getElementById('esitoPartita').innerHTML='Hai perso !';
        }, 3500);
    
}

const dadoUtente = document.getElementById('dadoUtente');
const dadoComputer = document.getElementById('dadoComputer');
for(let i=1; i<=6; i++){
    dadoUtente.innerHTML +=`<div style="z-index : ${i}; background-image: url(img/die_face_${i}.png); background-size: 100px 100px;" id="faccia${i}">`;
    dadoComputer.innerHTML +=`<div style="z-index : ${i}; background-image: url(img/die_face_${i}.png); background-size: 100px 100px;" id="faccia${i}-computer">`;
    console.log(`'faccia${i}'`);
    console.log(`'faccia${i}-computer'`);
    let facciaDadoUtente = document.getElementById(`faccia${i}`);
    let facciaDadoComputer = document.getElementById(`faccia${i}-computer`);
    for(let j=0; j<i; j++){
        facciaDadoUtente.innerHTML += `<div class="punto"></div>`;
        facciaDadoComputer.innerHTML += `<div class="punto"></div>`;
    }
}

function attivaVersione2(){
    document.getElementById('contenitore2').style.display="flex";
    document.getElementById('contenitore').style.display="none";
}