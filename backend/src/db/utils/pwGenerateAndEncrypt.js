const bcrypt = require("bcrypt")
const fs = require('fs');

// Input
const seeds = require("../seeds/00-healthData.json")


let salt = ""

// Generates passwords that match userId, encrypts them, and adds the encrypted password to each user object as password_hash
async function pwGenerateAndEncrypt(seeds) {
    let password = "1"

    salt = await bcrypt.genSalt(10)

    for (let i = 0; i < seeds.length; i++) {
        const passwordHash = await bcrypt.hash(password, salt)
        seeds[i].password_hash = passwordHash
        password = (Number(password) + 1).toString()
    }
    
    return seeds
}

// Saves the updated seeds in a new .json file
async function main() {
    const modifiedSeeds = await pwGenerateAndEncrypt(seeds)

    // Output
    const filePath = "../seeds/modifiedUserSeeds.json"
    
    fs.writeFile(filePath, JSON.stringify(modifiedSeeds, null, 4), (error) => {
        if (error) {
            console.error('Error creating file:', error)
        } else {
            console.log('File created successfully:', filePath)
        }
    });
}

main()