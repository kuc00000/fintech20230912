let car = {
    name: "쏘나타",
    ph : 300,
    start: () =>{
        console.log("engine start");
    },
    stop : () => {
        console.log("engine Stop");
    }
};

console.log(car.name);
car.start();
car.stop();

let array = ["sonata",1234,car];
console.log(array)