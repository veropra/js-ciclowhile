/*chiedere all'utente il cognome*/
var surname = prompt ("Qual'è il tuo cognome?");
/*inserire l'utente con altri cognomi*/
var listSurname = ["Esposito","Greco","Conti","Costa"];
/*stampare la lista ordinata alfabeticamente*/
var inserito= false;
var i=0;
while (i<listSurname.lenght){
  /*console.log(listsurname[i]);*/
  if (listSurname[i] === surname){
    /*console.log("Cognome inserito");*/
    inserito= true;
  }
  console.log(i);
  i++;
}

if (inserito ==true){
  console.log("Cognome inserito!");
} else {
  console.log("Cognome non inserito!");
  listSurname.push(surname);
}

/*scrivere a che posizione si trova l'utente*/
