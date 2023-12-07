var scelta = prompt("Inserisci il numero corrispondente alla bevanda desiderata: \n1. Acqua\n2. Coca Cola\n3. Birra");

switch (scelta) {
  case '1':
    console.log("È stata selezionata l'Acqua");
    break;
  case '2':
    console.log("È stata selezionata Coca Cola");
    break;
  case '3':
    console.log("È stata selezionata la Birra");
    break;
  default:
    prompt("Scelta non valida. Riprova inserendo il numero corrispondente alla bevanda desiderata.");
    break;
} 