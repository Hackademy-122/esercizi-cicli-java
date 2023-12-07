let t = Math.floor(Math.random() * (40 - -30 + 1)) -10;


if (t < 20) {
  console.log("Non ci sono piu' le mezze stagioni");
} else if (t >= 30) {
  console.log("Lu mare, lu sole, lu ientu");
} else if (t < 30) {
  console.log("Mi dia una PERONI sudata");
} else if (t < 0) {
  console.log("Non e' tanto il freddo quanto l'umidità");
} else { (t < -10)
  console.log("Copriti… ancora ti raffreddi");
}
console.log(t)




switch (true) {
    case t < 20:
        console.log("Non ci sono piu' le mezze stagioni");
        break;
    case t >= 30:
        console.log("Lu mare, lu sole, lu ientu");
        break;
    case t < 30:
        console.log("Mi dia una PERONI sudata");
        break;
    case t < 0:
        console.log("Non e' tanto il freddo quanto l'umidità");
        break;
    case t < -10:
        console.log("Ottimo");
        break;
    default:
        console.log("Copriti… ancora ti raffreddi");
}
console.log(t);