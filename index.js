var C = 30;
var NS = [0,0,0,0,0,0,0,0,0,0,0,0];
var NT = [0,0,0,0,0,0,0,0,0,0,0,0];
var T=0;
var TF=599;
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
       return 5 + 5 * Math.random();
    }
    case 0: {
       return 5 + 5 * Math.random();
    }
    case 1: {
       return 5 + 5 * Math.random();
    }
    case 2: {
       return 15 + 5 * Math.random();
    }
    case 3: {
       return 5 + 25 * Math.random();
    }
    case 4: {
       return 5 + 35 * Math.random();
    }
    case 5: {
       return 15 + 5 * Math.random();
    }
    case 6: {
       return 5 + 25 * Math.random();
    }
    case 7: {
       return 5 + 12 * Math.random();
    }
    case 8: {
       return 5 + 50 * Math.random();
    }
    case 9: {
       return 5 + 40 * Math.random();
    }
    case 10: {
       return 5 + 30 * Math.random();
    }
    case 11: {
       return 20 * Math.random();
    }
  }
}
function TA() {
  return 5 + C * Math.random();
}
function Simular(){
  var i=buscarMenor(TPLL,12);
  var j=buscarMenor(TPS,12);
  if(TPLL[i]<=TPS[j]){
      T= TPLL[i];
      IA = rutinaIA(i);
      TPLL[i]= T + IA;
      NS[i]++;
      if(NS[i] == 1){
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
      if((NS[0] >0 || NS[1] >0 || NS[2] >0 || NS[3] >0 || NS[4] >0 || NS[6] >0 || NS[6] >0 || NS[7] >0 || NS[8] >0 || NS[9] >0 || NS[10] >0 || NS[11] >0)){
      for(k=0;k<12;k++){
        TPLL[k] = Infinity;
      }
        Simular();
      }
      else{
        console.log((SS[0] - STA[0] - SLL[0]) / NT[0]);
        console.log((SS[1] - STA[1] - SLL[1]) / NT[1]);
        console.log((SS[2] - STA[2] - SLL[2]) / NT[2]);
        console.log((SS[3] - STA[3] - SLL[3]) / NT[3]);
        console.log((SS[4] - STA[4] - SLL[4]) / NT[4]);
        console.log((SS[5] - STA[5] - SLL[5]) / NT[5]);
        console.log((SS[6] - STA[6] - SLL[6]) / NT[6]);
        console.log((SS[7] - STA[7] - SLL[7]) / NT[7]);
        console.log((SS[8] - STA[8] - SLL[8]) / NT[8]);
        console.log((SS[9] - STA[9] - SLL[9]) / NT[9]);
        console.log((SS[10] - STA[10] - SLL[10]) / NT[10]);
        console.log((SS[11] - STA[11] - SLL[11]) / NT[11]);       
      }
    }
}
