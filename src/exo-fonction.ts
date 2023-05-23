// Greeting
// 2
// function greeting(){
//     console.log("Bonjour mon prénom");
// }

// greeting();
// -------------------------------------------------



// 3
// function greeting(prénom:string){
//     console.log("Bonjour "+ prénom);}

// greeting('Nisreen');
// -------------------------------------------------



// 4
// function greeting(prénom: string): string {
//     if(prénom.length === 0 ||prénom.length ===1 || prénom===''){
//         return("Ecrire bien votre prenom");
//     }
//     else{
//         return ("Bonjour " + prénom);
// return `Bonjour ${prénom}`;

//     }
// }

// console.log(greeting('Nisreen'));


// 5corrige
// function greeting(prénom: string): string {
//     if(prénom.length === 0 ||prénom.length ===1 || prénom===''){
// throw new Error('Error');
//     }
//     
//         return ("Bonjour " + prénom);

// }

// ----------------------------------------------------
// return `Bonjour ${prénom}`;
// ----------------------------------------------------


// console.log(greeting('Nisreen'));

// -------------------------------------------------



// Calculatrice
// 2
// function Calculatrice(a:number,b:number):number{
//     return a+b;

// }
// console.log(Calculatrice(2,3));


// -------------------

// 3
// function Calculatrice(a: number, b: number, operateur: string): number {
//     switch (operateur) {
//         case "+":
//             return (a + b);
//             
//         case "-":
//             return (a - b);

//         case "*":
//             return (a * b);

//         case "/":
//             if (b === 0) {
//                 throw new Error("Désolé, on peut pas diviser sur zero ");
//             }
//            
//              return (a / b);
//             

//         default:
//             throw new Error('Invalide Operateur');
//     }

// }

// console.log(Calculatrice(2, 0, "+"));
// --------------------------------------

// bonus2

// getPercentage

function Calcul(a: number, b: number,): string {
    if (b === 0) {
        throw new Error('c\'est pas possible');
    }
    else {
        let c = (b / a) + "%";
        return c;

    }

}
function getPercentage(a: number, b: number,) {
    return Calcul(a, b);

}

const element = document.getElementById("test");
if (element)
    element.innerHTML = getPercentage(100, 50);


