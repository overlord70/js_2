let arr = [
    {
        name: 'Sardor',
        age: 15,
        ismarried: false
    },
    {
        name: 'Ismail',
        age: 12,
        ismarried:false
    },
    {
        name: 'Allayor',
        age: 14,
        ismarried: false
    },
    {
        name: 'Tangir',
        age: 15,
        ismarried: true
    },
    {
        name: 'Sardor.X',
        age: 17,
        ismarried: true
    },
    {
        name: 'Ruslan',
        age: 16,
        ismarried: false
    },
    {
        name: 'Amira',
        age: 16,
        ismarried: false
    },
    {
        name: 'Dilruh',
        age: 16,
        ismarried: false
    },
    {
        name: 'Samir',
        age: 21,
        ismarried: true
    },
    {
        name: 'MuhamadDamir',
        age: 19,
        ismarried: true
    }
]
let married = []
let alone = []
console.log(
    arr.forEach((item) => {
        if (item.ismarried === true){
            married.push(arr.ismarried)
        } else if(item === false) {
            alone.push(arr.ismarried)
        }
    })
)



let average_age = 0
arr.forEach(person => {
    average_age += person.age
})
average_age = average_age / arr.length

console.log(average_age)