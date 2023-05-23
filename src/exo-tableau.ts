// let Ages:numbers[]=[20,18,40,50];
// for (const item of Ages) {
//     if(item >= 18)
//     console.log("WELCOME");
//     else{
//     console.log(item + "you is too young");

// }

// }

let Ages = [20, 18, 30, 40];
for (let i = 0; i < Ages.length; i++) {
    const item = Ages[i];
    if (item > 18) {
        console.log("WELCOME");
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("WELCOME");
        newDiv.appendChild(newContent);
        document.body.append(newDiv);
    }

    else {
        console.log("you is too young");
        const newSpan = document.createElement("span");
        const newContent = document.createTextNode("you is too young");
        newSpan.appendChild(newContent);
        document.body.append(newSpan);


    }
}