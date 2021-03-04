const USER_LIST_MOCK = [
    {
        id: 1,
        name: "Shawna",
        surname: "Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "male",
        age: 25,
        title: "Assistant Media Planner"
    },
    {
        id: 2,
        name: "Odette",
        surname: "Demageard",
        email: "odemageard1@spotify.com",
        gender: "female",
        age: 35,
        title: "Account Coordinator"
    },
    {
        id: 3,
        name: "Vera",
        surname: "Taleworth",
        email: "vtaleworth2@google.ca",
        gender: "female",
        age: 18,
        title: "Community Outreach Specialist"
    },
    {
        id: 4,
        name: "Lonnie",
        surname: "Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "female",
        age: 28,
        title: "Operator"
    },
    {
        id: 5,
        name: "Thatcher",
        surname: "Stave",
        email: "tstave4@reference.com",
        gender: "male",
        age: 57,
        title: "Software Test Engineer III"
    },
    {
        id: 6,
        name: "Karim",
        surname: "Chipping",
        email: "kchipping5@scribd.com",
        gender: "male",
        age: 60,
        title: "Safety Technician II"
    },
    {
        id: 7,
        name: "Helge",
        surname: "Holyard",
        email: "hholyard6@howstuffworks.com",
        gender: "female",
        age: 20,
        title: "Internal Auditor"
    },
    {
        id: 8,
        name: "Rod",
        surname: "Titterton",
        email: "rtitterton7@nydailynews.com",
        gender: "male",
        age: 42,
        title: "Technical Writer"
    },
    {
        id: 9,
        name: "Gawen",
        surname: "Applewhite",
        email: "gapplewhite8@reverbnation.com",
        gender: "male",
        age: 38,
        title: "GIS Technical Architect"
    },
    {
        id: 10,
        name: "Nero",
        surname: "Mulgrew",
        email: "nmulgrew9@plala.or.jp",
        gender: "male",
        age: 30,
        title: "Staff Scientist"
    },
    {
        id: 11,
        name: "Cybill",
        surname: "Rimington",
        email: "crimingtona@usnews.com",
        gender: "female",
        age: 35,
        title: "Assistant Professor"
    },
    {
        id: 12,
        name: "Maureene",
        surname: "Eggleson",
        email: "megglesonb@elpais.com",
        gender: "female",
        age: 64,
        title: "Recruiting Manager"
    },
    {
        id: 13,
        name: "Cortney",
        surname: "Caulket",
        email: "ccaulketc@cbsnews.com",
        gender: "female",
        age: 48,
        title: "Safety Technician IV"
    },
    {
        id: 14,
        name: "Selig",
        surname: "Swynfen",
        email: "sswynfend@cpanel.net",
        gender: "male",
        age: 44,
        title: "Environmental Specialist"
    },
    {
        id: 15,
        name: "Ingar",
        surname: "Raggles",
        email: "iragglese@cbc.ca",
        gender: "female",
        age: 22,
        title: "VP Sales"
    },
    {
        id: 16,
        name: "Karmen",
        surname: "Mines",
        email: "kminesf@topsy.com",
        gender: "female",
        age: 40,
        title: "Administrative Officer"
    },
    {
        id: 17,
        name: "Salome",
        surname: "Judron",
        email: "sjudrong@jigsy.com",
        gender: "female",
        age: 39,
        title: "Staff Scientist"
    },
    {
        id: 18,
        name: "Clarinda",
        surname: "Marieton",
        email: "cmarietonh@theatlantic.com",
        gender: "female",
        age: 62,
        title: "Paralegal"
    },
    {
        id: 19,
        name: "Paxon",
        surname: "Lotterington",
        email: "plotteringtoni@netvibes.com",
        gender: "male",
        age: 67,
        title: "Marketing Assistant"
    },
    {
        id: 20,
        name: "Maura",
        surname: "Thoms",
        email: "mthomsj@webeden.co.uk",
        gender: "female",
        age: 60,
        title: "Actuary"
    }
];

const PRODUCT_LIST_MOCK = [
    {
        id: 1,
        title: "HP - PC 14s-fq0037nl",
        category: "laptop",
        condition: true,
        description: "HP - PC 14s-fq0037nl Notebook, AMD 3020e, RAM 4 GB, eMMC 64 GB, Grafica AMD Radeon, Windows 10 Home S, Schermo 14'' HD SVA, USB-C, HDMI, Webcam TrueVision 720p, RJ-45, Nero",
        image: "/img/pc.jpg",
        price: "$400"
    },
    {
        id: 2,
        title: "Samsung Galaxy M51, Smartphone",
        category: "smartphone",
        condition: true,
        description: "Samsung Galaxy M51, Smartphone, Display 6.7'' Super AMOLED Plus, 4 Fotocamere, 128GB Espandibili, RAM 6 GB, Batteria 7000 mAh, 4G, Dual Sim, Android 10, White",
        image: "/img/samsung.jpg",
        price: "$300"
    },
    {
        id: 3,
        title: "PlayStation 4 Slim 500GB",
        category: "games",
        condition: true,
        description: "PlayStation 4 Slim 500GB F Chassis, Jet Black + 2° Dualshock 4 [Edizione: EU]",
        image: "/img/ps4.jpg",
        price: "$450"
    },
    {
        id: 4,
        title: "LG UHD TV",
        category: "tv",
        condition: true,
        description: "LG UHD TV 55UN71006LB.APID, Smart TV 55'', LED 4K IPS Display, Versione 2020 [Classe di efficienza energetica A]",
        image: "/img/lgTv.jpg",
        price: "$600"
    },
    {
        id: 5,
        title: "HETOOSHI Tappeto Shaggy",
        category: "home",
        condition: true,
        description: "HETOOSHI Tappeto Shaggy - Tappeto Salotto A Pelo Lungo per Asilo Nido Home Room Decor - in Diversi Colori E Misure（Beige 80 x 120 cm）",
        image: "/img/shaggy.jpg",
        price: "$100"
    },
    {
        id: 6,
        title: "Yuson Girl Fiocchi di Neve",
        category: "christmas",
        condition: true,
        description: "Yuson Girl Fiocchi di Neve per Natale Decorazione Albero di Natale da Appendere Pendenti Ornamento per Le Vacanze Festival Partito Home Decorazione Natalizia Ornamenti Appesi",
        image: "/img/yusonFiocchi.jpg",
        price: "$80"
    },
    {
        id: 7,
        title: "Title",
        category: "technology",
        condition: true,
        description: "...............................",
        image: "/img/technology.jpg",
        price: "$---"
    },
    {
        id: 8,
        title: "Title",
        category: "technology",
        condition: true,
        description: "................................",
        image: "/img/smartphone.jpg"
    },
    {
        id: 9,
        title: "Title",
        category: "technology",
        condition: true,
        description: "...................................",
        image: "/img/photo.jpg"
    },
    {
        id: 10,
        title: "Title",
        category: "technology",
        condition: true,
        description: "........................................",
        image: "/img/photo.jpg"
    },
    {
        id: 11,
        title: "Title",
        category: "technology",
        condition: true,
        description: "..........................................",
        image: "/img/photo.jpg"
    }

];

exports.USERS = USER_LIST_MOCK;
exports.PRODUCTS = PRODUCT_LIST_MOCK;