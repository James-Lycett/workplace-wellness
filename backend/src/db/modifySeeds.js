const seeds = require("./seeds/00-healthData.json")
const bcrypt = require("bcrypt")
const fs = require('fs');

let salt = ""

async function modifySeeds(seeds) {
    let password = "1"

    salt = await bcrypt.genSalt(10)

    for (let i = 0; i < seeds.length; i++) {
        const passwordHash = await bcrypt.hash(password, salt)
        seeds[i].password_hash = passwordHash
        password = (Number(password) + 1).toString()
    }
    
    return seeds
}

async function main() {
    const modifiedSeeds = await modifySeeds(seeds)
    const filePath = "./modifiedUserSeeds.json"
    
    fs.writeFile(filePath, JSON.stringify(modifiedSeeds, null, 2), (error) => {
        if (error) {
            console.error('Error creating file:', error)
        } else {
            console.log('File created successfully:', filePath)
        }
    });
}

main()