let info_about_technology = {
    types: {
        phones: ['Iphone', 'Samsung', 'Redmi'] ,
        tv: ['LG', 'Samsung', 'Neos'] ,
        car : ['Malibu', 'Gentra', 'Lamba'],
        laptops : ['Macbook', 'Acer', 'Netbook'],
        planshets: ['Ipad', 'Galaxy', 'Xiaomi Pad']
    },
    in_what_year : {
        phones: [1997, 1998, 2000],
        tv: [1800, 1900, 2001] ,
        car : [1841, 2016, 1998],
        laptops : [2000, 2001, 2035],
        planshets: [2001, 2003, 2012]
    },
    founder: {
        phones:['Stiv Jobs', 'Someone', 'Somebody'],
        tv: ['Sombody', 'Someone', 'Somebody'] ,
        car : ['Someone', 'Somebody', 'Someone'],
        laptops : ['Someone', 'Somebody', 'Someone'],
        planshets: ['Someone', 'Somebody', 'Someone']
    },
    about_my_choices: {
        my_phone: 'Iphone',
        my_laptop: 'Mackbook',
        my_car: 'Lamba',
        my_planshet: undefined,
        their_age:{
            my_phone: 2017,
            my_laptop: 2023,
            my_car: 2026,
            my_planshet: NaN
        }
    }
    
}
let food = {
    types: {
        food_by_mom: ['Plov', 'Soup', 'Samsa'],
        national: ['Mantu', 'Bichak', 'Golubhe'],
        fast_food: ['Burger', 'Shaurma', 'Pizza'],
        cakes: ['Napalion', 'Midavik', 'Spartak'],
        snackes: ['Chips', 'Pop - corn', 'Cookie'],
    },
    how_many_times_in_a_week: {
        food_by_mom: [1, 2, 2],
        national: [2, 1, 3],
        fast_food: [1, 3, 1],
        cakes: [1, 1, 1],
        snackes:[2, 2, 5]
    },
    what_i_love: ['food by mom', 'national', 'cakes']
}
let for_tick = Object.assign({}, info_about_technology, {food})
console.log(for_tick)
let clue = Object.keys(for_tick)
console.log(clue)
let meaning = Object.values(for_tick)
console.log(meaning)
let assign = Object.assign({}, clue,meaning )
console.log(assign)
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}
for (let key  in for_tick) {
    if (typeof for_tick [key]=== 'string') {
        types.string[key] = for_tick[key]
    }
}
for (let key  in for_tick) {
    if (typeof for_tick [key]=== 'number') {
        types.number[key] = for_tick[key]
    }
}
for (let key  in for_tick) {
    if (typeof for_tick [key]=== 'boolean') {
        types.boolean[key] = for_tick[key]
    }
}
for (let key  in for_tick) {
    if (typeof for_tick [key]=== 'object') {
        types.object[key] = for_tick[key]
    }
}
console.log(
    types.string,
    types.object,
    types.boolean,
    types.number
)