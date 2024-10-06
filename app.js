const pokemon = require('./data.js')

const game = {
    party: [],
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
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
//   console.dir(pokemon, { maxArrayLength: null })
//   console.log(game)

  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

const difficultyOptions = ["Easy", "Medium", "Hard"]
let difficultySelected = 1
game.difficulty = difficultyOptions[difficultySelected]


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starters = []

    // Adds all availiable starters to the starters array
pokemon.forEach(element => {
    if (element.starter) {
        starters.push(element)
    }
});

    // Adds a random starter from starters array to players party.  Can change to selection later
game.party.push(starters[Math.floor(Math.random() * starters.length)]) 

console.log(`Greetings trainer!  You have chosen ${game.party[0].name} to accompany you on your adventure!`)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

console.log('We have decided to randomly give you 3 more Pokemon to help you on your way.')

const pokemonTypes = []

pokemon.forEach(element => {
    if (!pokemonTypes.includes(element.type))
        pokemonTypes.push(element.type)
})
console.log("We have the following types availiable: "+pokemonTypes.join(', '))

const partyPokemonTypes = []

game.party.forEach(element => {
    if (!partyPokemonTypes.includes(element.type))
        partyPokemonTypes.push(element.type)
})

console.log('You already have '+partyPokemonTypes.join(', ')+" so we'll pick "+(4 - game.party.length)+" different types for you.")

let availablePokemonTypes = pokemonTypes

partyPokemonTypes.forEach(element => {
    for (let i=0; i<availablePokemonTypes.length; i++) {
        if (availablePokemonTypes[i] === element) {
            availablePokemonTypes.splice(i,1)
        }
    }
})

console.log('Your availiable types are: '+availablePokemonTypes)

while (partyPokemonTypes.length < 4) {
    let newTypeIdx = Math.floor(Math.random() * availablePokemonTypes.length)
    partyPokemonTypes.push(availablePokemonTypes[newTypeIdx])
    availablePokemonTypes.splice(newTypeIdx,1)
}

console.log("You're going to have", partyPokemonTypes.join(', ')+'type pokemon!')

for (let i=1; i<partyPokemonTypes.length; i++) {
    let possiblePartyMembers = []
    pokemon.forEach(element => {
        if (element.type === partyPokemonTypes[i]) {
            possiblePartyMembers.push(element)
        }
    });
    game.party.push(possiblePartyMembers[Math.floor(Math.random() * possiblePartyMembers.length)])
    }

const partyMembers = []
game.party.forEach(element => {
    partyMembers.push(element.name)
})
console.log("You're party is complete!  You're training with "+partyMembers.join(', ',"."))

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

console.log("Wow! You're already strong enough to defeat the first two gyms!  LET'S GOOOOOOO!")
game.gyms.forEach(element => {
    if (element.difficulty < 3) {
        element.completed = true
        console.log("You've completed the level", element.difficulty,"gym in", element.location+"!  Congratulations!")
    }
})

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working 
with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

let starter = game.party[0].name

console.log(starter, "is feeling weird.  He's Evolving!!!")

for (let i=0; i<pokemon.length; i++) {
    if (pokemon[i].number === game.party[0].number) {
        game.party.shift()
        game.party.unshift(pokemon[i+1])
        break
    }
}
console.log(starter, "has evolved into", game.party[0].name)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

while (partyMembers.length > 0) {
    partyMembers.pop()
}

game.party.forEach(element => {
    partyMembers.push(element.name)
})
console.log("You're team is getting stronger!  You're now training with "+partyMembers.join(', ',"."))

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
const starterNames = []

starters.forEach(element => {
    starterNames.push(element.name)
})

console.log("You've come a long way since you chose between", starterNames.join(', ')+".")

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj)
    console.log(`You caught a ${pokemonObj.name}!`)

}

game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj)
    game.items.forEach(item =>{
        if (item.name === "pokeball") {
            item.quantity--
            console.log(`You caught a ${pokemonObj.name}! You have ${item.quantity} pokeballs left.`)
        }
    })
}

game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)])


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

console.log("Holy Cow!! You've racked up enough power to defeat the gyms through level 5!  LET'S GOOOOOOO!")
game.gyms.forEach(element => {
    if (element.difficulty < 6 && !element.completed) {
        element.completed = true
        console.log("You've completed the level", element.difficulty,"gym in", element.location+"!  Congratulations!")
    }
})

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their 
`completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
    const gymTally = {
        'completed' : 0,
        'incomplete' : 0
    }

    game.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed++
        }
    })

    console.log(gymTally)
}

game.gymStatus()

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
    const count = game.party.length

    console.log(`You're party is growing! You're up to ${count} pokemon!`)   
}

game.partyCount()

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(element => {
    if (element.difficulty < 8 && !element.completed) {
        element.completed = true
        console.log("You've completed the level", element.difficulty,"gym in", element.location+"!  Congratulations!")
    }
})

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

// console.log(game)

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a, b) => b.hp - a.hp)
// console.log(game.party)

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = []

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
game.catchPokemon(pokemon[Math.floor(Math.random() * pokemon.length)]) // gives us enough pokemon to put one in collection AND run out of pokeballs

game.party.forEach(pokemon => {
    console.log(`You have a ${pokemon.hp} HP ${pokemon.name} in your party`)
})

game.collection.forEach(pokemon => {
    console.log(`You have a ${pokemon.hp} HP ${pokemon.name} in your collection`)
})

//console.log(game)


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/


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

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/


game.catchPokemon = function(name) {
    const pokemonName = name.toLowerCase()
    const pokemonObj = pokemon.find(i => i.name.toLowerCase() === pokemonName)

    const pokeballs = game.items.find(i => i.name === "pokeball")
    if (pokemonObj) {
        console.log(`You requested information for "${name}":`)
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

            game.items.forEach(item =>{
                if (item.name === "pokeball") {
                    item.quantity--
                    console.log(`You caught a ${pokemonObj.name}! You have ${item.quantity} pokeballs left.`)
                }
            })
        } else {
            console.log(`You found a ${pokemonObj.name}, but you're out of pokeballs so you can't catch 'em all right now`)
        }
    } else {
        console.log(`You requested information for "${name}":`)
        console.log(`Sorry, we couldn't find a pokemon named "${name}"`)
    }
}

game.catchPokemon('SnoRlax')
game.catchPokemon('Yoda')

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/
pokemon.forEach(element => {
    if (!pokemonTypes.includes(element.type))
        pokemonTypes.push(element.type)
})

const pokemonByType ={}
pokemonTypes.forEach(element => pokemonByType[element] = [])

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