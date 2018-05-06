var C = 45;
var NS = [0,0,0,0,0,0,0,0,0,0,0,0];
var NT = [0,0,0,0,0,0,0,0,0,0,0,0];
var T=0;
var TF=50000;
var TPLL = [0,0,0,0,0,0,0,0,0,0,0,0]
var TPS = [Infinity, Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,
Infinity,Infinity,Infinity,Infinity,Infinity];
var STA = [0,0,0,0,0,0,0,0,0,0,0,0];
var SLL = [0,0,0,0,0,0,0,0,0,0,0,0];
var SS = [0,0,0,0,0,0,0,0,0,0,0,0];
function buscarMenor(array,n){
  var pos=0;
  var min = array[0];
  for(i=0;i<n;i++){
    if(array[i]<min){
      min = array[i];
      pos =i;
    }
  }
  return pos;
}
function rutinaIA(i) {
  switch(i) {
    case 0: {
       return 10 + 22 * Math.random();
    }
    case 1: {
       return 17 + 7.333 * Math.random();
    }
    case 2: {
       return 15 + 12.333 * Math.random();
    }
    case 3: {
       return 10 + 20.666 * Math.random();
    }
    case 4: {
       return 11 + 20.666 * Math.random();
    }
    case 5: {
       return 15 + 11 * Math.random();
    }
    case 6: {
       return 10 + 20 * Math.random();
    }
    case 7: {
       return 5 + 32.33 * Math.random();
    }
    case 8: {
       return 18 + 5 * Math.random();
    }
    case 9: {
       return 13 + 15.6666 * Math.random();
    }
    case 10: {
       return 4 + 33.333 * Math.random();
    }
    case 11: {
       return 4 + 33.333 * Math.random();
    }
  }
}
function TA() {
  return 5 + (C - 5) * Math.random();
}
function Simular(){
  var i=buscarMenor(TPLL,12);
  var j=buscarMenor(TPS,12);
  if(TPLL[i]<=TPS[j]){
      T= TPLL[i];
      IA = rutinaIA(i);
      TPLL[i]= T + IA;
      NS[i]++;
      if(NS[i] === 1){
        var ta = TA(C);
        TPS[i]= T + ta;
        STA[i]+=ta;
      }
      SLL[i]+=T;
    }
    else{
      T=TPS[j];
      NS[j]--;
      if(NS[j]>=1){
        var ta = TA();
        TPS[j]= T + ta;
        STA[j]+=ta;
      }
      else{
        TPS[j] = Infinity;
      }
      NT[j]++;
      SS[j]+=T;
    }
    if(T<=TF){
      Simular();
    }
    else
    {
      if((NS[0] >0 || NS[1] >0 || NS[2] >0 || NS[3] >0 || NS[4] >0 || NS[5] >0 || NS[6] >0 || NS[7] >0 || NS[8] >0 || NS[9] >0 || NS[10] >0 || NS[11] >0)){
      for(k=0;k<12;k++){
        TPLL[k] = Infinity;
      }
        Simular();
      }
      else{
	console.log("Tiempo maximo de consulta:", C, " minutos");
        console.log("PPS CONSULTURIO: ", Math.round(SS[0] - STA[0] - SLL[0]) / NT[0], " minutos");
        console.log("PPS CONTEO: ", Math.round(SS[1] - STA[1] - SLL[1]) / NT[1], " minutos");
        console.log("PPS CVC: ", Math.round(SS[2] - STA[2] - SLL[2]) / NT[2], " minutos");
        console.log("PPS ECOGRAFIA: ", Math.round(SS[3] - STA[3] - SLL[3]) / NT[3], " minutos");
        console.log("PPS HRT: ", Math.round(SS[4] - STA[4] - SLL[4]) / NT[4], " minutos");
        console.log("PPS NEURO: ", Math.round(SS[5] - STA[5] - SLL[5]) / NT[5], " minutos");
        console.log("PPS OCT: ", Math.round(SS[6] - STA[6] - SLL[6]) / NT[6], " minutos");
        console.log("PPS OIL MASTER: ", Math.round(SS[7] - STA[7] - SLL[7]) / NT[7], " minutos");
        console.log("PPS RFG: ", Math.round(SS[8] - STA[8] - SLL[8]) / NT[8], " minutos");
        console.log("PPS SPECTRALIS: ", Math.round(SS[9] - STA[9] - SLL[9]) / NT[9], " minutos");
        console.log("PPS TODO PAQUI: ", Math.round(SS[10] - STA[10] - SLL[10]) / NT[10], " minutos");
        console.log("PPS UBM: ", Math.round(SS[11] - STA[11] - SLL[11]) / NT[11], " minutos");       
      }
    }
}

Simular();

//  /bin/bash -c "ulimit -s 65500; exec /home/user/.nvm/versions/node/v8.9.4/bin/node --stack-size=65500 index.js"
