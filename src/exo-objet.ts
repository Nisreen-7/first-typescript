interface Dog {
    name: string,
    breed: string,
    hunger: number,
}

function feedDog(a: Dog) {

    if (a.hunger <= 0) {

        console.log(a.name + " dog is not hungry" + "  " + a.hunger);

    }
    else {
        a.hunger += -50;
        console.log(a.name + " is eating, good dog" + "  " + a.hunger);

    }

}

let chien: Dog = {
    name: "gigi",
    breed: "good",
    hunger: 100
};
feedDog(chien);
feedDog(chien);
feedDog(chien);
feedDog(chien);
feedDog(chien);
feedDog(chien);
feedDog(chien);
feedDog(chien); 