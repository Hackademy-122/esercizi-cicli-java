let voto = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

if (voto<18) {
    console.log("insufficiente");
} else if (voto>=18 && voto<21) {
    console.log("sufficiente");
} else if (voto>=21 && voto<24) {
    console.log("buono");
} else if (voto>=24 && voto<27) {
    console.log("distinto");
} else if (voto>=27 && voto<=29) {
    console.log("ottimo");
} else if (voto==30) {
    console.log("eccellente");
} console.log(voto);

switch (true) {
    case voto < 18:
        console.log("insufficiente");
        break;
    case voto >= 18 && voto < 21:
        console.log("sufficiente");
        break;
        case voto >= 21 && voto < 24:
        console.log("buono");
        break;
        case voto >= 24 && voto < 27:
        console.log("distintodiocan");
        break;
        case voto >= 27 && voto <= 29:
        console.log("ottimo");
        break;
        case voto == 30:
        console.log("eccellente");
        break;
    default:
        console.log("voto non valido");
}
console.log(voto);