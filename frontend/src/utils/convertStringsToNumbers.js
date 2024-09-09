export default function convertStringsToNumbers(object, propsToConvert) {
    for (let prop in object) {
        if (propsToConvert.includes(prop)) {
            object[prop] = Number(object[prop])
        }
    }
}