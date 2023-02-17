const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let x = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

//Conjuction Function//
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")


//Mod Squad//

{
    var modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: '',
        get "series"() {
            return this["_series"]
        },
        set "series"(value) {
            this["series"] = value
        },
            start: "1968",
            end: "1973"
        }
    }

    const HTMLRepresentation = `${modSquad.members}`

    modSquad.members.forEach(member => {
    })


console.log(HTMLRepresentation)

//Simon Says//

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (var location of locations) {

    if (locations[0] > 2) {
        var invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}
    console.log(locations)

    //Advanced Challange: Lambda Llama//

    const llamaNamer = () => {
        const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
        const randomizer = Math.floor(Math.random() * 7)
        const names = possibleNames[randomizer]
        const namer = (name) => {
            return `${name} the Llama`
        }
        const fullName = namer(`${names}`)   
        return fullName
     }
    
    let nameMaker = llamaNamer()
    console.log(nameMaker)
