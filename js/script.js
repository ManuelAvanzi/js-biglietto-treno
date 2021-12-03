let kM=prompt("quanti chilometri devi percorrere ?");
let eta=prompt("quanti anni hai ?");
let prezzo = kM * 0.21;
let scontoMinorenni=0;
let scontoAnziani=0;


console.log(`chilometri da percorrere : ${kM}`);
console.log(`età della persona : ${eta}`);

console.log(prezzo+" "+"euro");

if(eta<=18){
    scontoMinorenni=(prezzo/100)*20;
    prezzo=prezzo-scontoMinorenni;
    console.log("sconto minorenni");

    console.log(`${kM*2.1} euro - ${scontoMinorenni.toFixed(2)} = ${prezzo.toFixed(2)} euro`);

    //stampo in pagina 
    document.getElementById("prezzoContainer").innerHTML=
    `${kM*2.1} euro - sconto minorenni =  ${scontoMinorenni.toFixed(2)} = ${prezzo.toFixed(2)} euro`;

}else if(eta>=65){
    scontoAnziani=(prezzo/100)*40;
    prezzo=prezzo-scontoAnziani;
    console.log("sconto anziani");

    console.log(`${kM*2.1} euro - ${scontoAnziani.toFixed(2)} = ${prezzo.toFixed(2)} euro`);

     //stampo in pagina 
     document.getElementById("prezzoContainer").innerHTML=
     `${kM*2.1} euro - sconto anziani =  ${scontoAnziani.toFixed(2)} = ${prezzo.toFixed(2)} euro`;
}else{

    // stampo in pagina prezzo senza nessuno sconto 
    document.getElementById("prezzoContainer").innerHTML=
    `totale da pagare ${kM * 0.21} euro`;
}
