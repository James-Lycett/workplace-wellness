const moment = require("moment")

// Random generator to create daily entries for 3 users from (current date) to (current date + n days)
function generator(n) {
    let entries = []
    let currentDate = moment()

    // Got this straight off of MDN, random number between two values (e.g. 4 - 10) rather than 0 - max
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }


    for (let i = 0; i < n; i++) {
        const tomorrow = moment(currentDate).add(1, 'days')
        const formattedTomorrow = moment(tomorrow).format("YYYY-MM-DD")

        // If desired, person_id value can be set to:
        // Math.floor(Math.random() * (total number of users))
        // in order to generate entries for every user
        const generatedEntry1 = {
            person_id: 1,
            date: formattedTomorrow,
            sleep_duration: Math.round(getRandomArbitrary(3, 12)),
            quality_of_sleep: Math.round(getRandomArbitrary(1, 10)),
            physical_activity_level: Math.floor(Math.random() * 10),
            stress_level: Math.floor(Math.random() * 10),
            bmi_category: "Normal",
            blood_pressure: `${Math.round(getRandomArbitrary(80, 160))}/${Math.round(getRandomArbitrary(50, 90))}`,
            heart_rate: Math.round(getRandomArbitrary(40, 120)),
            daily_steps: Math.round(getRandomArbitrary(500, 20000)),
            sleep_disorder: "None"
        }

        const generatedEntry2 = {
            person_id: 2,
            date: formattedTomorrow,
            sleep_duration: Math.round(getRandomArbitrary(3, 12)),
            quality_of_sleep: Math.round(getRandomArbitrary(1, 10)),
            physical_activity_level: Math.floor(Math.random() * 10),
            stress_level: Math.floor(Math.random() * 10),
            bmi_category: "Overweight",
            blood_pressure: `${Math.round(getRandomArbitrary(100, 180))}/${Math.round(getRandomArbitrary(60, 90))}`,
            heart_rate: Math.round(getRandomArbitrary(60, 140)),
            daily_steps: Math.round(getRandomArbitrary(500, 10000)),
            sleep_disorder: "None"
        }

        const generatedEntry3 = {
            person_id: 3,
            date: formattedTomorrow,
            sleep_duration: Math.round(getRandomArbitrary(3, 12)),
            quality_of_sleep: Math.round(getRandomArbitrary(1, 10)),
            physical_activity_level: Math.floor(Math.random() * 10),
            stress_level: Math.floor(Math.random() * 10),
            bmi_category: "Underweight",
            blood_pressure: `${Math.round(getRandomArbitrary(80, 140))}/${Math.round(getRandomArbitrary(50, 80))}`,
            heart_rate: Math.round(getRandomArbitrary(40, 120)),
            daily_steps: Math.round(getRandomArbitrary(500, 25000)),
            sleep_disorder: "None"
        }

        entries.push(generatedEntry1)
        entries.push(generatedEntry2)
        entries.push(generatedEntry3)

        currentDate = tomorrow
    }

    return entries
}

module.exports = {
    generator,
}