interface Dog {
    name: string,
    breed: string,
    hunger: number,
}
/** 
 * 
 * @param a le chien a nourrir  
 */
function feedDog(a: Dog) {

    if (a.hunger <= 25) {

        console.log(a.name + " dog is not hungry" + "  " + a.hunger);
        document.write(`<h3> ${a.name} </h3>`);
    }
    else {
        a.hunger -= 50;
        console.log(a.name + " is eating, good dog" + "  " + a.hunger);
        document.write(`<h3> ${a.name} </h3>`);

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
feedDog({
    name: "rex",
    breed: "dalmation",
    hunger: 0,
})