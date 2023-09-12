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

const points = [20,10,9,8]
points.forEach(point => console.log(point));


points.map(point=>console.log(point))

let carName = car.name
let carPh = car.ph;
let carMaker = car.maker;

const {name, ph, maker} = car;
console.log(name,carName);