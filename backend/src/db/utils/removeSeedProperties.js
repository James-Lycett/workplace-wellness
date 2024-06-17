const fs = require('fs');

// Input
const seeds = require("../seeds/modifiedUserSeeds.json")


// Loops through seeds array and copies it into a new array of user objects with only the desired properties
async function removeSeedProperties(seeds) {

    const propsToKeep = ["username", "admin", "age", "gender", "occupation", "password_hash"]

    const modifiedSeeds = seeds.map((seed) => {
        const newUserObject = {}

        propsToKeep.forEach(key => {newUserObject[key] = seed[key]})

        return newUserObject
    })

    return modifiedSeeds
}

// Saves the updated seeds in a new .json file
async function main() {
    const modifiedSeeds = await removeSeedProperties(seeds)

    // Output
    const filePath = "../seeds/modifiedUserSeeds2.json"
    
    fs.writeFile(filePath, JSON.stringify(modifiedSeeds, null, 4), (error) => {
        if (error) {
            console.error('Error creating file:', error)
        } else {
            console.log('File created successfully:', filePath)
        }
    });
}

main()