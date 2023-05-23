// let Ages=[20,18,40,50];
// for (const item of Ages) {
//     if(item > 18)
//     console.log("WELCOME");
//     else
//     console.log("you is too young");

// }

let Ages = [20, 18, 40, 50];
for (let i = 0; i < Ages.length; i++) {
    if (Ages[i] > 18) {
        console.log("WELCOME");
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("WELCOME");
        newDiv.appendChild(newContent);
    }

    else {
        console.log("you is too young");
        const newSpan = document.createElement("span");
        const newContent = document.createTextNode("you is too young");
        newSpan.appendChild(newContent);

    }
}