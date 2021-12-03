
let kM=0;
let eta=0;

const start=document.getElementById("calcola").addEventListener("click",function(){



kM=document.getElementById("kmValue").value;
eta=document.getElementById("ageValue").value;
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
    document.getElementById("prezzoContainer").innerHTML=
    `${kM*2.1} euro - sconto minorenni =  ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`;

}else if(eta>=65){
    sconto=(prezzo/100)*40;
    prezzo=prezzo-sconto;
    console.log("sconto anziani");

    console.log(`${kM*2.1} euro - ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`);

     //stampo in pagina 
     document.getElementById("prezzoContainer").innerHTML=
     `${kM*2.1} euro - sconto anziani =  ${sconto.toFixed(2)} = ${prezzo.toFixed(2)} euro`;
}else{

    // stampo in pagina prezzo senza nessuno sconto 
    document.getElementById("prezzoContainer").innerHTML=
    `totale da pagare ${kM * 0.21} euro`;
}

});