const pokemon = require('./data.js')

const game = {
    party: {
        pokemon: [],
        types: [],
        findTypes: function () {
            game.party.pokemon.forEach(pokemon => {
                if (!game.party.types.includes(pokemon.type))
                        game. party.types.push(pokemon.type)
                })
            }
        },
    pokemon: { 
            starters: [],
            types: [],
            findStarters: 
            function () {
                this.starters = pokemon.filter((pokemon) => pokemon.starter)
            },
            findTypes:
            function () {
                pokemon.forEach(pokemon => {              
                    if (!this.types.includes(pokemon.type))
                        this.types.push(pokemon.type)
                    })
            }},
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { 
            name: "potion", 
            quantity: 4 },
        { 
            name: "pokeball", 
            quantity: 8 },
        { 
            name: "rare candy", 
            quantity: 99 },
    ],
    changeQuantity: 
            function (itemName, quantityChange) {
                const item = game.items.find(i => i.name === itemName)
                if ((item) && ((item.quantity + quantityChange) >= 0)) {
                    item.quantity = item.quantity + quantityChange
                } else {
                    console.log(`There was an error changing the quantity of ${itemName} by ${quantityChange}`)
                }
        },
    difficulty: [
        {   options: ["Easy", "Medium", "Hard"]},
        {   selectedDifficultyIdx: 1},
        {   changeDifficulty:   
            function (newDifficultyIdx) {
                if (newDifficultyIdx < this.options.length) {
                    this.selectedDifficultysIdx = newDifficultyIdx
                    console.log(`Game difficulty has been set to ${this.options[this.selectedDifficultyIdx]}`)
                } else {
                    console.log(`Invalid difficulty level, plese try again`)
                }
        }}
    ],
  }

game.pokemon.findStarters()
game.party.pokemon.push(game.pokemon.starters[Math.floor(Math.random() * game.pokemon.starters.length)])
game.party.findTypes()
game.pokemon.findTypes()
console.log(`Greetings trainer!  You have chosen ${game.party.pokemon[0].name} to accompany you on your adventure!`)
console.log("")

// create an array of all the types of pokemon. Array will be kept in the pokemon object.
// create an array of all the types of pokemon in the party.  this is a function that can be reran whenever needed
game.party.findTypes()
console.log(`There are pokemon of the following type in the world: ${game.pokemon.types.join(', ')} types`)
console.log(`You already have ${game.party.types.join(', ')} in your party so we'll find ${(4 - game.party.pokemon.length)} new types for you.`)

// create list of availiable pokemon types that are NOT already in the party, this will be a list of unique values
let availablePokemonTypes = game.pokemon.types
game.party.types.forEach(element => {
    for (let i=0; i<availablePokemonTypes.length; i++) {
        if (availablePokemonTypes[i] === element) {
            availablePokemonTypes.splice(i,1)
        }
    }
})
console.log('Your availiable types are: '+availablePokemonTypes)

while (game.party.types.length < 4) {
    let newTypeIdx = Math.floor(Math.random() * availablePokemonTypes.length)
    game.party.types.push(availablePokemonTypes[newTypeIdx])
    availablePokemonTypes.splice(newTypeIdx,1)
}
console.log("You're going to have", game.party.types.join(', ')+'type pokemon!')
for (let i=1; i<game.party.types.length; i++) {
    let possiblePartyMembers = []
    pokemon.forEach(element => {
        if (element.type === game.party.types[i]) {
            possiblePartyMembers.push(element)
        }
    });
    game.party.pokemon.push(possiblePartyMembers[Math.floor(Math.random() * possiblePartyMembers.length)])
    }
const partyMembers = []
game.party.pokemon.forEach(element => {
    partyMembers.push(element.name)
})
console.log("You're party is complete!  You're training with "+partyMembers.join(', ',"."))

console.log("Wow! You're already strong enough to defeat the first two gyms!  LET'S GOOOOOOO!")

game.gyms.completeUpToLevel = function (level) {
    game.gyms.forEach(gym => {
        if (gym.difficulty <  level) {
            gym.completed = true
            console.log("You've completed the level", gym.difficulty,"gym in", gym.location+"!  Congratulations!")
        }
    })
}
game.gyms.completeUpToLevel(3)

let starter = game.party.pokemon[0].name
console.log(starter, "is feeling weird.  He's Evolving!!!")
for (let i=0; i<pokemon.length; i++) {
    if (pokemon[i].number === game.party.pokemon[0].number) {
        game.party.pokemon.shift()
        game.party.pokemon.unshift(pokemon[i+1])
        break
    }
}
console.log(starter, "has evolved into", game.party.pokemon[0].name)

while (partyMembers.length > 0) {
    partyMembers.pop()
}
game.party.pokemon.forEach(element => {
    partyMembers.push(element.name)
})
console.log("You're team is getting stronger!  You're now training with "+partyMembers.join(', ',"."))

const starterNames = []

game.pokemon.starters.forEach(element => {
    starterNames.push(element.name)
})

console.log("You've come a long way since you chose between", starterNames.join(', ')+".")

game.catchPokemon = function(pokemonObj) {
    game.party.pokemon.push(pokemonObj)
    console.log(`You caught a ${pokemonObj.name}!`)

}
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])

game.catchPokemon = function(pokemonObj) {
    game.party.pokemon.push(pokemonObj)
    game.items.forEach(item =>{
        if (item.name === "pokeball") {
            item.quantity--
            console.log(`You caught a ${pokemonObj.name}! You have ${item.quantity} pokeballs left.`)
        }
    })
}
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])

console.log("Holy Cow!! You've racked up enough power to defeat the gyms through level 5!  LET'S GOOOOOOO!")
game.gyms.completeUpToLevel(6)

game.gyms.gymStatus = function () {
    this.tally = {
        'completed' : 0,
        'incomplete' : 0
    }
    this.forEach(gym => {
        if (gym.completed) {
            this.tally.completed++
        } else {
            this.tally.incomplete++

        }
    })
    console.log(`You've completed ${this.tally.completed} gyms and have ${this.tally.incomplete} left to go!`) 
}
game.gyms.gymStatus()

game.partyCount = function () {
    const count = game.party.length

    console.log(`You're party is growing! You're up to ${count} pokemon!`)   
}

game.partyCount()

game.gyms.completeUpToLevel(8)

game.party.pokemon.sort((a, b) => b.hp - a.hp)
game.collection = []

game.catchPokemon = function(pokemonObj) {
    const pokeballs = game.items.find(i => i.name === "pokeball")

    if (pokeballs && pokeballs.quantity > 0){
        if (game.party.pokemon.length <= 6) {
            game.party.pokemon.push(pokemonObj)    
        } else {
            game.party.pokemon.sort((a, b) => b.hp - a.hp)
            if (game.party.pokemon[6].hp < pokemonObj.hp) {
                game.collection.push(game.party[6])
                game.party.pokemon[6] = pokemonObj
            } else {
            game.collection.push(pokemonObj)
            }
        }

        game.items.forEach(item =>{
            if (item.name === "pokeball") {
                item.quantity--
                console.log(`You caught a ${pokemonObj.name}! You have ${item.quantity} pokeballs left.`)
            }
        })
    } else {
        console.log(`You're out of pokeballs, you can't catch 'em all right now`)
    }
}

game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])

game.party.pokemon.forEach(pokemon => {
    console.log(`You have a ${pokemon.hp} HP ${pokemon.name} in your party`)
})
game.collection.forEach(pokemon => {
    if (pokemon) {
        console.log(`You have a ${pokemon.hp} HP ${pokemon.name} in your collection`)
    }
})

game.catchPokemon = function(pokemonObj) {
    const pokeballs = game.items.find(i => i.name === "pokeball")

    if (pokeballs && pokeballs.quantity > 0){
        if (game.party.length <= 6) {
            game.party.push(pokemonObj)    
        } else {
            game.party.sort((a, b) => b.hp - a.hp)
            if (game.party[6].hp < pokemonObj.hp) {
                game.collection.push(game.party[6])
                game.party[6] = pokemonObj
            } else {
            game.collection.push(pokemonObj)
            }
        }
        game.changeQuantity('pokeballs', -1)
    } else {
        console.log(`You're out of pokeballs, you can't catch 'em all right now`)
    }
}


game.catchPokemon = function(name) {
    const pokemonName = name.toLowerCase()
    const pokemonObj = pokemon.find(i => i.name.toLowerCase() === pokemonName)

    if (pokemonObj) {
        console.log(`You requested information for "${name}":`)
        game.changeQuantity('pokeballs', -1);
        game.party.pokemon.sort((a, b) => b.hp - a.hp)
            if (game.party.pokemon[6].hp < pokemonObj.hp) {
                game.collection.push(game.party[6])
                game.party.pokemon[6] = pokemonObj
            } else {
                game.collection.push(pokemonObj)
            }
        } else {
        console.log(`You requested information for "${name}":`)
        console.log(`Sorry, we couldn't find a pokemon named "${name}"`)
    }
}

game.catchPokemon('SnoRlax')
game.catchPokemon('Yoda')

const pokemonByType ={}
game.pokemon.findTypes()

game.pokemon.types.forEach(type => pokemonByType[type] = [])

for (let i=0; i<pokemon.length; i++) {
    pokemonByType[pokemon[i].type].push(pokemon[i])
}


for (let type in pokemonByType) {
    console.log('')
    console.log(`-------------------${type.toUpperCase()} pokemon-------------------`)
    for (let pokemon in pokemonByType[type]) {
        console.log(`No. ${pokemonByType[type][pokemon].number}: ${pokemonByType[type][pokemon].name} is a ${pokemonByType[type][pokemon].type} type with an HP of ${pokemonByType[type][pokemon].hp}`)
    }
}


console.log(``)
console.log(``)
console.log(`Congratulations trainer!`)
console.log(``)
console.log(`You are now the very best!`)
console.log(`Like no one ever was`)
console.log(`You caught them all and passed the test`)
console.log(`You trained them for the cause`)
console.log(`You traveled all across the land`)
console.log(`You search them far and wide`)
console.log(`You taught them and you understand`)
console.log(`The power that's inside!`)
console.log(``)
console.log(`Pokemon!`)