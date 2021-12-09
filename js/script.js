// di default sono zero;

let kM=0;
let eta=0;

const start=document.getElementById("calcola");
const restart=document.getElementById("restart");


start.addEventListener("click",function(){

    kM=document.getElementById("kmValue").value;
    eta=document.getElementById("ageValue").value;


    // devo aggiungere una funzione che controlla l'età
    let prezzo = kM * 0.21;
    let sconto=0;


    console.log(`chilometri da percorrere : ${kM}`);
    console.log(`età della persona : ${eta}`);
    console.log(prezzo+" "+"euro");



    if(eta<=18){
        sconto=(prezzo/100)*20;
        prezzo=prezzo-sconto;
        console.log("sconto minorenni");

        console.log(`${kM*2.1} euro - ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`);

        //stampo in pagina 
        document.getElementById("prezzoContainer").append
        (`${kM*2.1} euro - sconto minorenni =  ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`);
         
    }else if(eta>=65){

        
        sconto=(prezzo/100)*40;
        prezzo=prezzo-sconto;
        console.log("sconto anziani");

        console.log(`${kM*2.1} euro - ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`);

        //stampo in pagina 
        document.getElementById("prezzoContainer").append
        (`${kM*2.1} euro - sconto anziani =  ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`);
    }else{

        // stampo in pagina prezzo senza nessuno sconto 
        document.getElementById("prezzoContainer").append
        (`totale da pagare ${kM * 0.21} euro`);
    }

});

restart.addEventListener("click",function(){
    console.log("restart");
    location.reload();
     
})