
let cars = [{
        model: 'cobalt',
        company: 'general motors',
        engine: 1.5,
        price: 15000,
        beatan: true,
        year: 2022,
        mileage: 13000,

tech_passport: {
            date: 2022,
            exp_date: 2032,
        }
    },
    {
        model: "malibu",
        company: "general motors",
        color: "dry asphalt",
        engine: 2.4,
        price: 30000,
        beaten: false,
        year: 2022,
        mileage: 1000,
        tech_passport: {
            date: 2022,
            exp_date: 2032,
        }
    },
    {
        model: "tracker",
        company: "general motors",
        color: "black",
        engine: "2.2",
        price: 22000,
        beaten: false,
        year: 2021,
        mileage: 2000,
        tech_passport: {
            date: 2021,
            exp_date: 3031
        }
    },
    {
        model: "gentra",
        company: "general motors",
        color: "black",
        engine: 1.5,
        price: 17000,
        beaten: false,
        year: 2021,
        mileage: 6000,
        tech_passport: {
            date: 2021,
            exp_date: 2031,
        }
    },
    {
        model: 'Damas',
        company: 'Chevrolet',
        color: 'White',
        engine: 2.4,
        price: 10000,
        beaten: false,
        year: 2023,
        mileage: 100,
        tech_pasport: {
            date: 2023,
            exp_date: 2033
        }
    },
    {
        model: "Spark",
        company: "general motors",
        color: "dirtygreen",
        engine: 1.250,
        price: 7000,
        beaten: true,
        year: 2008,
        mileage: 328000,
        tech_passport: {
            date: 2008,
            exp_date: 2023,
        }
    },
    {
        model: "Labo",
        company: "GM ",
        color: "white",
        engine: 0.8,
        price: 10000,
        beaten: false,
        year: 2023,
        mileage: 0,
        tech_passport: {
            date: 2023,
            exp_date: 2033,
        }
    },
    {
        model: "tico",
        company: "daewoo",
        color: "black",
        engine: 1.5,
        price: 10000,
        beaten: true,
        year: 2010,
        mileage: 1000,
        tech_passport: {
            date: 2022,
            exp_date: 2025,
        }
    }, {
        model: 'traverse',
        company: 'chevrolet',
        color: 'black',
        engine: 3.6,
        price: 60000,
        beaten: false,
        year: 2023,
        mileage: 500,
        tech_passport: {
            date: 2023,
            exp_date: 2033
        }
    }, {
        model: "volga",
        company: "uaz",
        color: "white",
        engine: 0.4,
        price: 700000,
        beaten: true,
        year: 1964,
        mileage: 3000000,
        tech_passport: {
            year: 1964,
            exp_date: 2023,
        }
    }, {
        model: "velik",
        company: "Philips",
        color: "red",
        engine: "v12",
        price: 12000,
        beaten: false,
        year: 2009,
        mileage: 0,
        tech_passport: {
            date: 2022,
            exp_date: 2032,
        }
    }, {
        model: "Porter",
        company: "Hyundai",
        color: "black",
        engine: 2.5,
        hp: 145,
        price: 31000,
        beaten: false,
        fuel_comsumption: 10.2,
        year: 2023,
        mileage: 100,
        tech_passport: {
            date: 2023,
            exp_date: 2033,
        }
    }, {
        model: 'Tahoe',
        company: 'CHEVROLET',
        color: 'black',
        engine: {
            capacity: '5.3',
            horsePower: '343hp'
        },
        price: 110000,
        beaten: false,
        year: 2022,
        mileage: 0,
        tech_passport: {
            date: 2022,
            expDate: 2032
        }
    }, {
        model: "Mercedes-Benz CLS",
        company: "Mercedes-Benz",
        color: "black",
        engine: 3.0,
        price: 110000,
        beaten: false,
        year: 2023,
        mileage: 200,
        tech_passport: {
            date: 2023,
            exp_date: 2033,
        }
    }, {
        model: "malibu",
        company: "Chevrolet",
        color: "sky rim",
        engine: 2.4,
        price: 15000,
        year: 2022,
    }
]
let current_year = 2023
if(current_year - cars.year >= 2){
    console.log(cars)
}