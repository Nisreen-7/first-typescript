// let etoile = "*";
// for (let i = 0; i < 5; i++) {
//     if ((i % 2) !== 0) {
//         for (let j = 0; j < i; j++) {
//             console.log('' +'' +  etoile + '');
//             etoile += "**";
//         }
//     }
// }


//code nisreen
// function Pyramid(r) {

//     for (let i = 0; i < r; i++) {

//         var put = '';

//         for (let j = 0; j < r - i; j++)

//             put += ' ';
//         for (let k = 0; k <= i * 2; k++)

//             put += '*';

//         console.log(put);


//     }
// }
// Pyramid(5);




// avec while
// let etage = 0;
// let nbEtoile = 1;
// while (etage < 5) {

//     console.log(nbEtoile)
//     nbEtoile += 2;
//     etage++;
// }
// 1 facon 
// let nbEtoile = 1;
// for (let i = 0; i < 5; i++){
//     console.log(nbEtoile)
//     nbEtoile+=2;
// }

// 2 facon

// let nbEtoile = 1;
// for (let i = 0; i < 5; i++){
//     let etoiles ='';
//     for (let j = 0; j < nbEtoile; j++){
//         etoiles += '*';
//     }
//     console.log(etoiles);
//     nbEtoile+=2;
// }


//avec numbre espaces

// let etoiles ='*';
// let nbEspaces=4;
// for (let i = 0; i < 5; i++){
//     console.log(nbEspaces, etoiles);
//     etoiles += '**';
//     nbEspaces--;
// }


let etoiles = '*';

for (let i = 0; i < 5; i++) {

    let espaces = '';
    for (let j = 0; j < 4 - i; j++) {
        espaces += ' ';
    }
    console.log(espaces + etoiles);
    etoiles += '**';

}





