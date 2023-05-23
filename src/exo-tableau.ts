// let Ages:numbers[]=[20,18,40,50];
// for (const item of Ages) {
//     if(item >= 18)
//     console.log("WELCOME");
//     else{
//     console.log(item + "you is too young");

// }

// }




//  mon eesai
// let Ages = [20, 18, 30, 40];
// for (let i = 0; i < Ages.length; i++) {
//     const item = Ages[i];
//     if (item > 18) {
//         console.log("WELCOME");
//         const newDiv = document.createElement("div");
//         const newContent = document.createTextNode("WELCOME");
//         newDiv.appendChild(newContent);
//         document.body.append(newDiv);
//     }

//     else {
//         console.log("you is too young");
//         const newSpan = document.createElement("span");
//         const newContent = document.createTextNode("you is too young");
//         newSpan.appendChild(newContent);
//         document.body.append(newSpan);


//     }
// }




// Exo liste prompt
// let tab = [];

// let n = parseInt(prompt('Ecrire les numbres les prénoms'));
// for (let i = 0; i < n; i++) {
//     tab[i] = window.prompt('Ecrire les prenoms');
// }

// console.log(tab);

let list: string[] = [];
while (true) {
    let valeur = prompt('Ecrire les prenoms');
    if (valeur == "exit") {
        break;
    }
    list.push(valeur);

    dispaly();



}

function dispaly() {
    for (const item of list) {
        console.log(item, item.length);

    }
    console.log('-----------------------------');

}


