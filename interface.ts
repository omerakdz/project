import * as readline from 'readline-sync';
export interface CarModel {
    make: string;
    name: string;
    year: number;
    color: string;
  }
  
  export interface Car {
    id: number;
    name: string;
    description?: string;
    age?: number;
    isActive?: boolean;
    birthdate?: string;
    imageUrl?: string;
    status?: string;
    features?: string[];
    model?: CarModel;
  }

  export interface ownerCar {
    id: number;
    name: string;
}

export interface Owner {
    id: number;
    name: string;
    age: number;
    isVerified: boolean;
    profileImageUrl: string;
    cars: Car[];
}

//import { Car } from './interface';
let cars: Car[] = [
    {
        id: 1,
        name: "Toyota Camry",
        description: "A reliable sedan with good fuel efficiency.",
        age: 3,
        isActive: true,
        birthdate: "2019-08-15",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Toyota-Camri.jpg",
        status: "available",
        features: ["Bluetooth connectivity", "Backup camera", "Keyless entry"],
        model: {
            make: "Toyota",
            name: "Camry",
            year: 2019,
            color: "black"
        }
    },
    {
        id: 2,
        name: "Honda Civic",
        description: "A compact car known for its reliability and fuel efficiency.",
        age: 2,
        isActive: false,
        birthdate: "2020-05-20",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Honda-Civic.jpg",
        status: "sold",
        features: ["Apple CarPlay", "Android Auto", "Lane departure warning"],
        model: {
            make: "Honda",
            name: "Civic",
            year: 2020,
            color: "red"
        }
    },
    {
        id: 3,
        name: "Ford Mustang",
        description: "An iconic American muscle car with powerful performance.",
        age: 5,
        isActive: true,
        birthdate: "2017-11-10",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Ford-Mustang.jpg",
        status: "available",
        features: ["V8 engine", "Leather seats", "LED headlights"],
        model: {
            make: "Ford",
            name: "Mustang",
            year: 2017,
            color: "blue"
        }
    },
    {
        id: 4,
        name: "Tesla Model 3",
        description: "An electric sedan with advanced technology and impressive performance.",
        age: 1,
        isActive: true,
        birthdate: "2023-01-12",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Tesla-Model-3.jpg",
        status: "available",
        features: ["Autopilot", "Full self-driving capability", "Dual motor all-wheel drive"],
        model: {
            make: "Tesla",
            name: "Model 3",
            year: 2023,
            color: "white"
        }
    },
    {
        id: 5,
        name: "BMW 3 Series",
        description: "A luxury compact executive car with a perfect blend of performance and comfort.",
        age: 2,
        isActive: true,
        birthdate: "2022-03-28",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/BMW-3-Series.jpg",
        status: "available",
        features: ["Head-up display", "Wireless charging", "Gesture control"],
        model: {
            make: "BMW",
            name: "3 Series",
            year: 2022,
            color: "silver"
        }
    },
    {
        id: 6,
        name: "Mercedes-Benz E-Class",
        description: "A midsize luxury sedan known for its elegant design and advanced technology.",
        age: 4,
        isActive: false,
        birthdate: "2018-07-20",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Mercedes-Benz%20E-Class.jpg",
        status: "sold",
        features: ["MBUX infotainment system", "Active brake assist", "Evasive steering assist"],
        model: {
            make: "Mercedes-Benz",
            name: "E-Class",
            year: 2018,
            color: "gray"
        }
    },
    {
        id: 7,
        name: "Audi Q5",
        description: "A premium compact SUV with a luxurious interior and strong performance.",
        age: 3,
        isActive: true,
        birthdate: "2019-11-05",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Audi-Q5.jpg",
        status: "available",
        features: ["Virtual cockpit", "Bang & Olufsen sound system", "Quattro all-wheel drive"],
        model: {
            make: "Audi",
            name: "Q5",
            year: 2019,
            color: "black"
        }
    },
    {
        id: 8,
        name: "Toyota Prius",
        description: "A hybrid hatchback known for its exceptional fuel efficiency and eco-friendliness.",
        age: 5,
        isActive: true,
        birthdate: "2017-09-15",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Toyota-Prius.jpg",
        status: "available",
        features: ["Hybrid Synergy Drive", "Toyota Safety Sense", "Smart Key System"],
        model: {
            make: "Toyota",
            name: "Prius",
            year: 2017,
            color: "green"
        }
    },
    {
        id: 9,
        name: "Ford F-150",
        description: "A rugged full-size pickup truck with impressive towing and payload capacities.",
        age: 2,
        isActive: true,
        birthdate: "2022-02-10",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Ford-F-150.jpg",
        status: "available",
        features: ["Pro Trailer Backup Assist", "Sync 4 infotainment system", "Ford Co-Pilot360"],
        model: {
            make: "Ford",
            name: "F-150",
            year: 2022,
            color: "red"
        }
    },
    {
        id: 10,
        name: "Chevrolet Corvette",
        description: "An American sports car with breathtaking performance and iconic design.",
        age: 1,
        isActive: true,
        birthdate: "2023-06-30",
        imageUrl: "https://github.com/omerakdz/project-webont/blob/main/project-web/images/Chevrolet-Corvette.jpg",
        status: "available",
        features: ["LT2 V8 engine", "Magnetic Ride Control", "Performance Data Recorder"],
        model: {
            make: "Chevrolet",
            name: "Corvette",
            year: 2023,
            color: "yellow"
        }
    }
];


const owners: Owner[] = [
    {
        id: 101,
        name: "John Doe",
        age: 35,
        isVerified: true,
        profileImageUrl: "https://example.com/john_doe.jpg",
        cars: [
            {
                id: 1,
                name: "Toyota Camry"
            }
        ]
    },
    {
        id: 102,
        name: "Alice Smith",
        age: 28,
        isVerified: true,
        profileImageUrl: "https://example.com/alice_smith.jpg",
        cars: [
            {
                id: 2,
                name: "Honda Civic"
            }
        ]
    },
    {
        id: 103,
        name: "Michael Johnson",
        age: 40,
        isVerified: false,
        profileImageUrl: "https://example.com/michael_johnson.jpg",
        cars: [
            {
                id: 3,
                name: "Ford Mustang"
            }
        ]
    },
    {
        id: 104,
        name: "Emily Brown",
        age: 32,
        isVerified: true,
        profileImageUrl: "https://example.com/emily_brown.jpg",
        cars: [
            {
                id: 4,
                name: "Tesla Model 3"
            }
        ]
    },
    {
        id: 105,
        name: "David Wilson",
        age: 45,
        isVerified: true,
        profileImageUrl: "https://example.com/david_wilson.jpg",
        cars: [
            {
                id: 5,
                name: "BMW 3 Series"
            }
        ]
    },
    {
        id: 106,
        name: "Sophia Lee",
        age: 38,
        isVerified: true,
        profileImageUrl: "https://example.com/sophia_lee.jpg",
        cars: [
            {
                id: 6,
                name: "Mercedes-Benz E-Class"
            }
        ]
    },
    {
        id: 107,
        name: "Oliver Miller",
        age: 41,
        isVerified: false,
        profileImageUrl: "https://example.com/oliver_miller.jpg",
        cars: [
            {
                id: 7,
                name: "Audi Q5"
            }
        ]
    },
    {
        id: 108,
        name: "Emma Johnson",
        age: 36,
        isVerified: true,
        profileImageUrl: "https://example.com/emma_johnson.jpg",
        cars: [
            {
                id: 8,
                name: "Toyota Prius"
            }
        ]
    },
    {
        id: 109,
        name: "Noah Taylor",
        age: 39,
        isVerified: true,
        profileImageUrl: "https://example.com/noah_taylor.jpg",
        cars: [
            {
                id: 9,
                name: "Ford F-150"
            }
        ]
    },
    {
        id: 110,
        name: "Mia Garcia",
        age: 34,
        isVerified: false,
        profileImageUrl: "https://example.com/mia_garcia.jpg",
        cars: [
            {
                id: 10,
                name: "Chevrolet Corvette"
            }
        ]
    }
];

function viewAllData(): void{
    for (let car of cars) {
        console.log(`ID: ${car.id}`);
        console.log(`Name: ${car.name}`);
        console.log(`Description: ${car.description}`);
        console.log(`Age: ${car.age}`);
        console.log(`Status: Active`);
        console.log(`Birthdate: ${car.birthdate}`);
        console.log(`Image URL: ${car.imageUrl}`);
        console.log(`Status: ${car.status}`);  
        console.log(`features: ${car.features}`)
        console.log(`Make: ${car.model?.make}`);
        console.log(`Model: ${car.model?.name}`);
        console.log(`Year: ${car.model?.year}`);
        console.log(`Color: ${car.model?.color}`);
        console.log("-------------------------------------")
}
}

function filterById(): void {
  let id: number = parseInt(readline.question("Please enter the ID you want to filter by: "));
  let car = cars.find(car => car.id === id);

  if (car) {
    console.log(`Car filtered by ID: ${id}`)
    console.log(`ID: ${car.id}`);
    console.log(`Name: ${car.name}`);
    console.log(`Description: ${car.description}`);
    console.log(`Age: ${car.age}`);
    console.log(`Status: Active`);
    console.log(`Birthdate: ${car.birthdate}`);
    console.log(`Image URL: ${car.imageUrl}`);
    console.log(`Status: ${car.status}`);  
    console.log(`features: ${car.features}`)
    console.log(`Make: ${car.model?.make}`);
    console.log(`Model: ${car.model?.name}`);
    console.log(`Year: ${car.model?.year}`);
    console.log(`Color: ${car.model?.color}`);
    console.log("-------------------------------------")
  }
  else{
    console.log("No car found with that ID.")
  }
}


let running = true;
while (running) {

console.log("Welcome to the JSON data viewer!")
console.log('1. View all data');
console.log('2. Filter by ID');
console.log('3. Exit');

let choices : string[] = ["View all data", "Filter by ID", "Exit"];
let index : number = readline.keyInSelect(choices, "Please enter your choice");


if (index !== -1) {
    let chosenOption: string = choices[index];
    console.log(`You chose: ${chosenOption}`);

    switch (chosenOption) {
        case "View all data":
            console.log("Viewing all data...");
            viewAllData();
            break;
        case "Filter by ID":
            filterById();
            break;
        case "Exit":
            console.log("Exiting...");
            running = false;
            break;
        default:
            console.log("Invalid choice.");
            break;
    }
}
}

