// featured cupcake flavors array
let featuredFlavors = [
  {
    dayCode: 0,
    dayName: "sunday",
    name: "Blueberry Pie",
    img: "assets/blueberry-pie.jpg",
  },
  {
    dayCode: 1,
    dayName: "monday",
    name: "Matcha",
    img: "assets/matcha.jpg",
  },
  {
    dayCode: 2,
    dayName: "tuesday",
    name: "Reeses",
    img: "assets/reeses.jpg",
  },
  {
    dayCode: 3,
    dayName: "wednesday",
    name: "Strawberry Shortcake",
    img: "assets/strawberry.jpg",
  },
  {
    dayCode: 4,
    dayName: "thursday",
    name: "Smores",
    img: "assets/smores.jpg",
  },
  {
    dayCode: 5,
    dayName: "friday",
    name: "Banana Split",
    img: "assets/banana-split.jpg",
  },
  {
    dayCode: 6,
    dayName: "saturday",
    name: "Cannoli",
    img: "assets/cannoli.jpg",
  },
];

// find flavor object based on weekday using a loop
function findFlavorObject() {
  let todayCode = new Date().getDay();
  console.log(`Today's day code is: ${todayCode}`);
  for (let i = 0; i < featuredFlavors.length; i++) {
    if (featuredFlavors[i].dayCode === todayCode) {
      return featuredFlavors[i];
    }
  }
}

// Dev Shop code
