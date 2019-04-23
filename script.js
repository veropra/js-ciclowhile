/*chiedere all'utente il cognome*/
var surname = prompt ("Qualè il tuo cognome?");
/*inserire l'utente con altri cognomi*/
var listSurname = [" ESPOSITO "," GRECO "," CONTI "," COSTA "," DEL DUCA "," ROSSI "," BIANCHI "];
/*verifica se il cognome è stato aggiunto oppure no*/
var inserito= false;
var i=0;
while (i<listSurname.length){
  if (listSurname[i] === surname){
    inserito= true;
  }
  console.log(i);
  i++;
}

if (inserito ==true){
  console.log("Cognome aggiunto!");
} else {
  console.log("Cognome non aggiunto!");
  listSurname.push(surname);
}
/*stampare la lista ordinata alfabeticamente*/
listSurname.sort();
document.getElementById("elenco-cognomi").innerHTML = listSurname ;
/*scrivere a che posizione si trova l'utente*/
var a = listSurname.indexOf(surname) +1;
document.getElementById("posizione-utente").innerHTML = "Il tuo cognome è al posto n°: " + a;
