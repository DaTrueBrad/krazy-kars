const User = require("./models/user");
const Kar = require("./models/kars");
const db = require("./db");

const users = [
  {
    username: "Speedy Speedster",
    password: "iamsofast123$$",
  },
  {
    username: "Baha Beach Bum",
    password: "thereissandinmyeye",
  },
  {
    username: "DevMountain Racer",
    password: "bugfreesince23",
  },
];

const vehicles = [
  {
    name: "Sunrise Cruiser",
    make: "Orion",
    model: "Expanse",
    year: 2020,
    miles: 15000,
    price: 23000.0,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Road Runner",
    make: "Falcon",
    model: "Flash",
    year: 2018,
    miles: 25000,
    price: 18000.5,
    userId: 2,
    image_url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "City Explorer",
    make: "Urban",
    model: "Voyager",
    year: 2019,
    miles: 10000,
    price: 21000.99,
    userId: 3,
    image_url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Mountain Climber",
    make: "Alpine",
    model: "Ridge",
    year: 2021,
    miles: 5000,
    price: 27000.3,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Ocean Breeze",
    make: "Mariner",
    model: "Wave",
    year: 2017,
    miles: 30000,
    price: 16000.75,
    userId: 2,
    image_url: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Desert Hawk",
    make: "Sahara",
    model: "Dune",
    year: 2022,
    miles: 2000,
    price: 29000.4,
    userId: 3,
    image_url: 'https://images.unsplash.com/photo-1583384991161-62fd8054e2c6?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Night Sky",
    make: "Galactic",
    model: "Star",
    year: 2016,
    miles: 35000,
    price: 14000.6,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1610374634235-b51ef357f905?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Eco Friend",
    make: "Green",
    model: "Leaf",
    year: 2021,
    miles: 8000,
    price: 25000.0,
    userId: 2,
    image_url: 'https://images.unsplash.com/photo-1617130471410-72724fcc5f6b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Winter Wolf",
    make: "Frost",
    model: "Snow",
    year: 2019,
    miles: 22000,
    price: 19000.2,
    userId: 3,
    image_url: 'https://images.unsplash.com/photo-1597220542065-dbd32fb169f9?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Summer Sun",
    make: "Sol",
    model: "Heat",
    year: 2020,
    miles: 12000,
    price: 22000.85,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1570299437522-f66ff98d52e7?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Rain Forest",
    make: "Jungle",
    model: "Greenery",
    year: 2018,
    miles: 28000,
    price: 17000.95,
    userId: 2,
    image_url: 'https://images.unsplash.com/photo-1604353625270-908c9a886738?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Urban Legend",
    make: "Metro",
    model: "Myth",
    year: 2022,
    miles: 1000,
    price: 30000.5,
    userId: 3,
    image_url: 'https://images.unsplash.com/photo-1620822270727-fcae4fba42e3?q=80&w=2985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Country Roads",
    make: "Rural",
    model: "Field",
    year: 2017,
    miles: 32000,
    price: 15000.4,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1620071628712-379d473f2e0c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Sky Pilot",
    make: "Cloud",
    model: "Flyer",
    year: 2016,
    miles: 37000,
    price: 13000.3,
    userId: 2,
    image_url: 'https://images.unsplash.com/photo-1532751203793-812308a10d8e?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Golden Gate",
    make: "Bay",
    model: "Bridge",
    year: 2021,
    miles: 7000,
    price: 26000.65,
    userId: 3,
    image_url: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Wild Mustang",
    make: "Prairie",
    model: "Horse",
    year: 2019,
    miles: 18000,
    price: 20000.0,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Quiet Stream",
    make: "River",
    model: "Flow",
    year: 2018,
    miles: 26000,
    price: 17500.8,
    userId: 2,
    image_url: 'https://images.unsplash.com/photo-1471479917193-f00955256257?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Lunar Lander",
    make: "Moon",
    model: "Crater",
    year: 2020,
    miles: 11000,
    price: 24000.9,
    userId: 3,
    image_url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Storm Chaser",
    make: "Tornado",
    model: "Gust",
    year: 2021,
    miles: 6000,
    price: 28000.25,
    userId: 1,
    image_url: 'https://images.unsplash.com/photo-1559038465-e0ca2910a5b1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Dawn Patrol",
    make: "Horizon",
    model: "Light",
    year: 2017,
    miles: 31000,
    price: 15500.55,
    userId: 2,
    image_url: 'https://unsplash.com/photos/white-mercedes-benz-coupe-parked-near-building-during-daytime-F3v6OP0cl8g'
  },
];

const seed = async (req, res) => {
  await db.sync({ force: true });
  await User.bulkCreate(users);
  await Kar.bulkCreate(vehicles);
  res.sendStatus(200);
};

module.exports = seed;
