let weather = "snow"

switch (weather) {
    case "sunny": 
        console.log("Lets go for a walk!")
        break;
        case "rainy":
            console.log("Make sure to grab your umbrella!")
            break;
            case "snow":
                console.log("Make sure to bundle up!")
                break
                default:
                    console.log("Can you check the weather?")

}

let x = 4

if (x <= 5) {
    console.log("X is less than 5")
} else {
    console.log("X isn't greater than 5")
}


let systems = ["Xbox", "Playstation", "Nintendo Switch", "PC"]
let titles = ["Hades", "Doom", "Sonic", "Pokemon"]
let brands = ["Microsoft", "Sony", "Nintendo"]
let developers = ["Fromsoft", "Supergiant", "Sega", "Capcom"]

console.log(systems[1])
console.log(developers[3])
console.log(brands[2])
console.log(titles[0])

function hello() {
    console.log("Hello, World!")
}
hello()