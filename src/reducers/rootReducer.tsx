import { imagepackage } from "../constants";

type Action = {
  type: string;
  payload?: any;
};

type FoodDetail = {
  section?: string;
  img: any;
  name: string;
  desc: string;
  price: string;
};

const initialMenu = [
  {
    section: "Starters",
    img: imagepackage.chickenwings,
    name: "Chicken Pub Wings",
    desc: "Served with blue cheese dip and celery sticks. Choose your style plain and crispy, mild sticky barbecue or hot spicy Louisiana sauce",
    price: "$9",
  },
  {
    img: imagepackage.soupoftheday,
    name: "Soup of the Day",
    desc: "Served with Dublin Soda Bread",
    price: "$6",
  },
  {
    img: imagepackage.potatoskins,
    name: "Galway Potato Skins",
    desc: "Served with Irish bacon, cheddar and chives",
    price: "$9",
  },
  {
    img: imagepackage.friedpickles,
    name: "Fried Pickles",
    desc: "Thick-cut chips, beer battered, with house-made ranch",
    price: "$8",
  },
  {
    img: imagepackage.mozzarellasticks,
    name: "Mozzarella Sticks",
    desc: "Slightly breaded, golden fried and served with warm marinara sauce",
    price: "$8",
  },
  //SOUPS & SALADS
  {
    section: "Soups & Salads",
    img: imagepackage.caesarsalad,
    name: "Caesar Salad",
    desc: "Crisp romaine, parmesan cheese, brioche croutons, classic dressing",
    price: "$14",
  },
  {
    img: imagepackage.cobbsalad,
    name: "Cobb Salad",
    desc: "Romaine, tomato, egg, red onion, avocado, blue cheese, smoked bacon",
    price: "$15",
  },
  {
    img: imagepackage.housesalad,
    name: "House Salad",
    desc: "Mixed greens, tomato, cucumber, croutons, shredded cheese. Can add grilled or fried chicken for $3",
    price: "$10",
  },
  {
    img: imagepackage.greeksalad,
    name: "Greek Chicken Salad",
    desc: "Romaine, black olives, banana peppers, tomato, cucumber, feta, and greek feta dressing",
    price: "$11",
  },
  {
    img: imagepackage.potatosoup,
    name: "Loaded Potato Soup",
    desc: "Topped with cheese and crispy bacon and served with dipping bread",
    price: "$7",
  },
  {
    img: imagepackage.beefstew,
    name: "Guinness Beef Stew",
    desc: "Braised beef, root vegetables and potatoes simmered in a Guinness broth",
    price: "$14",
  },
  // Trad
  {
    section: "Traditional Classics",
    img: imagepackage.pie,
    name: "Shepherd's Pie",
    desc: "Choice of locally sourced and seasoned ground lamb or ground beef with sausage, peas, carrots and mashed potatoes",
    price: "$16",
  },
  {
    img: imagepackage.fishandchips,
    name: "Fish & Chips",
    desc: "Fresh fish of the day in a light O'Hara's Beer Batter with hand-cut fries and a lemon caper with choice of tartar or cocktail sauce",
    price: "$16",
  },
  {
    img: imagepackage.dublincoddle,
    name: "Irish Coddle",
    desc: "Hand-cut potatoes, sausages and caramelized onion, cooked with stout Guinness beer",
    price: "$16",
  },
  {
    img: imagepackage.bangersandmash,
    name: "Bangers & Mash",
    desc: "Irish sausage, seasoned mashed potatoes with Guinness gravy and baked breakfast beans",
    price: "$15",
  },
  {
    img: imagepackage.cornedbeef,
    name: "Corned Beef & Cabbage",
    desc: "Beef brisket and seasoned cabbage with a choice of 1 side",
    price: "$14",
  },
  {
    img: imagepackage.steak,
    name: "Irish Whiskey Steak",
    desc: "10oz dry aged, whiskey marinated, with a choice of 2 sides",
    price: "$18",
  },
  //Burgers and sandwiches
  {
    section: "Burgers & Sandwiches",
    img: imagepackage.burger,
    name: "Prime Irish Beef Burger",
    desc: "100% Irish beef with mayo, crisp lettuce, tomato and dill pickle served on a toasted brioche bun. Add melted cheese of choice or bacon for $1 each",
    price: "$15",
  },
  {
    img: imagepackage.bbburger,
    name: "Belfast Breakfast Burger",
    desc: "0.5lb steak burger, bacon, fried egg, lettuce, tomato, mayo, onion, Jameson mustard, toasted on a brioche bun",
    price: "$14",
  },
  {
    img: imagepackage.pubburger,
    name: "The Pub Burger",
    desc: "0.5lb steak burger, your choice of cheese, lettuce, tomato, onion, mayo, mustard, all on a brioche bun",
    price: "$12",
  },
  {
    img: imagepackage.veggieburger,
    name: "Vegetarian Burger",
    desc: "Falafel Burger with homemade tomato salsa, crisp lettuce and tomato served on a toasted brioche bun. Add melted cheddar cheese for $1",
    price: "$12",
  },
  {
    img: imagepackage.clubsandwich,
    name: "Kilkenny Chicken Club",
    desc: "Grilled chicken, bacon, Swiss cheese, crispy lettuce, tomato, mayo, and onion",
    price: "$11",
  },
  {
    img: imagepackage.buffalosandwich,
    name: "Buffalo Chicken Sandwich",
    desc: "Crispy chicken, crispy lettuce, tomato, red onion, or choice of cheese, toasted on a brioche bun and a side of house-made ranch",
    price: "$14",
  },
  {
    img: imagepackage.turkeysandwich,
    name: "Turkey Club Sandwich",
    desc: "Sliced turkey, bacon, our secret garlic sauce and Swiss cheese",
    price: "$12",
  },
  //Sides
  {
    section: "Sides",
    img: imagepackage.fries,
    name: "French Chips",
    desc: "Regular french fries with a choice of sauce for dipping",
    price: "$5",
  },
  {
    img: imagepackage.onionrings,
    name: "Onion Rings",
    desc: "Comes with an optional sauce of your choosing",
    price: "$5 for 6 rings, $8 for 12 rings",
  },
  {
    img: imagepackage.chilifries,
    name: "Beef Chili Cheese Chips",
    desc: "Potato fries with spicy chili beef, jalapeños and melted cheddar cheese with our secret garlic dip on the side",
    price: "$9",
  },
  {
    img: imagepackage.garlicfries,
    name: "Garlic Chips",
    desc: "Potato fries served with a side of our secret garlic dip",
    price: "$8",
  },
  {
    img: imagepackage.sodabread,
    name: "Dublin Soda Bread",
    desc: "Traditionally made buttermilk bread served by the slice",
    price: "$8",
  },
  //Drinks
  {
    section: "Drinks",
    img: imagepackage.whiskeysour,
    name: "Whiskey Sour",
    desc: "Whiskey sour info here",
    price: "$13",
  },
  {
    img: imagepackage.bloodymary,
    name: "Bloody Mary",
    desc: "A classic cocktail garnished with fresh and dried tomatoes",
    price: "$12",
  },
  {
    img: imagepackage.jackrose,
    name: "Jack Rose Cocktail",
    desc: "Jack Rose info here",
    price: "$12",
  },
  {
    img: imagepackage.irishcoffee,
    name: "Black Rose Irish Coffee",
    desc: "Jameson, Bailey's, cold brew and whipped cream",
    price: "$13",
  },
  {
    img: imagepackage.guinness,
    name: "Guinness",
    desc: "A stout with delicious foam on top",
    price: "$9",
  },
  {
    img: imagepackage.gintonic,
    name: "Gin & Tonic",
    desc: "Jack Rose info here",
    price: "$12",
  },
  {
    img: imagepackage.whiskey,
    name: "Jameson Whiskey",
    desc: "Jack Rose info here",
    price: "$12",
  },
  {
    img: imagepackage.irishmule,
    name: "Irish Mule",
    desc: "Smooth Jameson whiskey and bubbly ginger beer",
    price: "$12",
  },
  //Desserts
  {
    section: "Desserts",
    img: imagepackage.cheesecake,
    name: "Traditional Bailey's Irish Cream Cheesecake",
    desc: "Served with a crisp homemade graham cracker crust",
    price: "$9",
  },
  {
    img: imagepackage.applecrumble,
    name: "Homemade Apple Crumble",
    desc: "Caramelized apple butter filling and ground cinnamon",
    price: "$8",
  },
  {
    img: imagepackage.brownie,
    name: "Guinness Chocolate Brownie",
    desc: "Large chocolate sponge baked with Guinness stout",
    price: "$9",
  },
  {
    img: imagepackage.redvelvetcake,
    name: "Red Velvet Cake",
    desc: "Red velvet sponge with cream cheese buttercream",
    price: "$7",
  },
];

type State = {
  menu: FoodDetail[];
  items: FoodDetail[];
};

const initialState: State = {
  menu: initialMenu,
  items: [],
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItems = state.items;
      console.log(newItems);
      return { ...state, items: [...newItems, action?.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: [...state.items].filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
