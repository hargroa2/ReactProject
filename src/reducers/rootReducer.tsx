import pie from "../assets/shepherdspie.jpeg";
import fishandchips from "../assets/fishandchips.jpg";
import burger from "../assets/burger.jpg";
import chickenwings from "../assets/chickenwings.jpg";
import soupoftheday from "../assets/soupofday.jpg";
import potatoskins from "../assets/potatoskins.jpeg";
import friedpickles from "../assets/friedpickles.jpeg";
import mozzarellasticks from "../assets/mozzarellasticks.jpg";
import caesarsalad from "../assets/caesarsalad.jpeg";
import cobbsalad from "../assets/cobbsalad.jpg";
import housesalad from "../assets/housesalad.jpg";
import greeksalad from "../assets/greeksalad.jpg";
import potatosoup from "../assets/potatosoup.jpg";
import beefstew from "../assets/beefstew.jpeg";
import dublincoddle from "../assets/dublincoddle.jpeg";
import bangersandmash from "../assets/bangersandmash.jpg";
import cornedbeef from "../assets/cornedbeef.jpg";
import steak from "../assets/steak.jpg";
import bbburger from "../assets/bbburger.jpg";
import pubburger from "../assets/pubburger.jpg";
import veggieburger from "../assets/veggieburger.jpg";
import clubsandwich from "../assets/clubsandwich.jpg";
import buffalosandwich from "../assets/buffalosandwich.jpg";
import turkeysandwich from "../assets/turkeysandwich.jpg";
import fries from "../assets/fries.jpg";
import onionrings from "../assets/onionrings.jpg";
import chilifries from "../assets/chilifries.jpg";
import garlicfries from "../assets/garlicfries.jpg";
import sodabread from "../assets/sodabread.jpg";
import cheesecake from "../assets/cheesecake.jpg";
import "../App.tsx";

type Action = {
  type: string;
  payload?: any;
};

interface CommonFood {
  img: any;
  name: string;
  desc: string;
  price: string;
}

interface FoodDetail {
  section: string;
  list: Array<CommonFood>;
}

const initialMenu = [
  {
    section: "Starters",
    list: [
      {
        img: chickenwings,
        name: "Chicken Pub Wings",
        desc: "Served with blue cheese dip and celery sticks. Choose your style plain and crispy, mild sticky barbecue or hot spicy Louisiana sauce",
        price: "$9 for 6 wing basket, $14 for 12 wing basket",
      },
      {
        img: soupoftheday,
        name: "Soup of the Day",
        desc: "Served with Dublin Soda Bread",
        price: "$6",
      },
      {
        img: potatoskins,
        name: "Galway Potato Skins",
        desc: "Served with Irish bacon, cheddar and chives",
        price: "$9",
      },
      {
        img: friedpickles,
        name: "Fried Pickles",
        desc: "Thick-cut chips, beer battered, with house-made ranch",
        price: "$8",
      },
      {
        img: mozzarellasticks,
        name: "Mozzarella Sticks",
        desc: "Slightly breaded, golden fried and served with warm marinara sauce",
        price: "$8",
      },
    ],
  },
  {
    section: "Soups & Salads",
    list: [
      {
        img: caesarsalad,
        name: "Caesar Salad",
        desc: "Crisp romaine, parmesan cheese, brioche croutons, classic dressing",
        price: "$14",
      },
      {
        img: cobbsalad,
        name: "Cobb Salad",
        desc: "Romaine, tomato, egg, red onion, avocado, blue cheese, smoked bacon",
        price: "$15",
      },
      {
        img: housesalad,
        name: "House Salad",
        desc: "Mixed greens, tomato, cucumber, croutons, shredded cheese. Can add grilled or fried chicken for $3",
        price: "$10",
      },
      {
        img: greeksalad,
        name: "Greek Chicken Salad",
        desc: "Romaine, black olives, banana peppers, tomato, cucumber, feta, and greek feta dressing",
        price: "$11",
      },
      {
        img: potatosoup,
        name: "Loaded Potato Soup",
        desc: "Topped with cheese and crispy bacon and served with dipping bread",
        price: "$7",
      },
      {
        img: beefstew,
        name: "Guinness Beef Stew",
        desc: "Braised beef, root vegetables and potatoes simmered in a Guinness broth",
        price: "$14",
      },
    ],
  },
  {
    section: "Traditional Classics",
    list: [
      {
        img: pie,
        name: "Shepherd's Pie",
        desc: "Choice of locally sourced and seasoned ground lamb or ground beef with sausage, peas, carrots and mashed potatoes",
        price: "$16",
      },
      {
        img: fishandchips,
        name: "Fish & Chips",
        desc: "Fresh fish of the day in a light O'Hara's Beer Batter with hand-cut fries and a lemon caper with choice of tartar or cocktail sauce",
        price: "$16",
      },
      {
        img: dublincoddle,
        name: "Irish Coddle",
        desc: "Hand-cut potatoes, sausages and caramelized onion, cooked with stout Guinness beer",
        price: "$16",
      },
      {
        img: bangersandmash,
        name: "Bangers & Mash",
        desc: "Irish sausage, seasoned mashed potatoes with Guinness gravy and baked breakfast beans",
        price: "$15",
      },
      {
        img: cornedbeef,
        name: "Corned Beef & Cabbage",
        desc: "Beef brisket and seasoned cabbage with a choice of 1 side",
        price: "$14",
      },
      {
        img: steak,
        name: "Irish Whiskey Steak",
        desc: "10oz dry aged, whiskey marinated, with a choice of 2 sides",
        price: "$18",
      },
    ],
  },
  {
    section: "Burgers & Sandwiches",
    list: [
      {
        img: burger,
        name: "Prime Irish Beef Burger",
        desc: "100% Irish beef with mayo, crisp lettuce, tomato and dill pickle served on a toasted brioche bun. Add melted cheese of choice or bacon for $1 each",
        price: "$15",
      },
      {
        img: bbburger,
        name: "Belfast Breakfast Burger",
        desc: "0.5lb steak burger, bacon, fried egg, lettuce, tomato, mayo, onion, Jameson mustard, toasted on a brioche bun",
        price: "$14",
      },
      {
        img: pubburger,
        name: "The Pub Burger",
        desc: "0.5lb steak burger, your choice of cheese, lettuce, tomato, onion, mayo, mustard, all on a brioche bun",
        price: "$12",
      },
      {
        img: veggieburger,
        name: "Vegetarian Burger",
        desc: "Falafel Burger with homemade tomato salsa, crisp lettuce and tomato served on a toasted brioche bun. Add melted cheddar cheese for $1",
        price: "$12",
      },
      {
        img: clubsandwich,
        name: "Kilkenny Chicken Club",
        desc: "Grilled chicken, bacon, Swiss cheese, crispy lettuce, tomato, mayo, and onion",
        price: "$11",
      },
      {
        img: buffalosandwich,
        name: "Buffalo Chicken Sandwich",
        desc: "Crispy chicken, crispy lettuce, tomato, red onion, or choice of cheese, toasted on a brioche bun and a side of house-made ranch",
        price: "$14",
      },
      {
        img: turkeysandwich,
        name: "Turkey Club Sandwich",
        desc: "Sliced turkey, bacon, our secret garlic sauce and Swiss cheese",
        price: "$12",
      },
    ],
  },
  {
    section: "Sides",
    list: [
      {
        img: fries,
        name: "French Chips",
        desc: "Regular french fries with a choice of sauce for dipping",
        price: "$5",
      },
      {
        img: onionrings,
        name: "Onion Rings",
        desc: "Comes with an optional sauce of your choosing",
        price: "$5 for 6 rings, $8 for 12 rings",
      },
      {
        img: chilifries,
        name: "Beef Chili Cheese Chips",
        desc: "Potato fries with spicy chili beef, jalapeños and melted cheddar cheese with our secret garlic dip on the side",
        price: "$9",
      },
      {
        img: garlicfries,
        name: "Garlic Chips",
        desc: "Potato fries served with a side of our secret garlic dip",
        price: "$8",
      },
      {
        img: sodabread,
        name: "Dublin Soda Bread",
        desc: "Traditionally made buttermilk bread served by the slice",
        price: "$8",
      },
    ],
  },
  {
    section: "Drinks",
    list: [
      {
        img: "dd",
        name: "Whiskey Sour",
        desc: "Whiskey sour info here",
        price: "$13",
      },
      {
        img: "drink2.jpg",
        name: "Bloody Mary",
        desc: "Bloody Mary info here",
        price: "$12",
      },
      {
        img: "drink2.jpg",
        name: "Jack Rose Cocktail",
        desc: "Jack Rose info here",
        price: "$12",
      },
      {
        img: "drink2.jpg",
        name: "Irish Spring",
        desc: "Jack Rose info here",
        price: "$12",
      },
      {
        img: "drink2.jpg",
        name: "Clover Club",
        desc: "Jack Rose info here",
        price: "$12",
      },
      {
        img: "drink2.jpg",
        name: "Gin & Tonic",
        desc: "Jack Rose info here",
        price: "$12",
      },
      {
        img: "drink2.jpg",
        name: "Loch Lomond",
        desc: "Jack Rose info here",
        price: "$12",
      },
      {
        img: "drink2.jpg",
        name: "Tom Collins",
        desc: "Jack Rose info here",
        price: "$12",
      },
    ],
  },
  {
    section: "Desserts",
    list: [
      {
        img: cheesecake,
        name: "Traditional Bailey's Irish Cream Cheesecake",
        desc: "Served with a crisp homemade graham cracker crust",
        price: "$9",
      },
      {
        img: "drink2.jpg",
        name: "Homemade Apple Crumble",
        desc: "Caramelized apple butter filling and ground cinnamon",
        price: "$8",
      },
      {
        img: "drink2.jpg",
        name: "Guinness Chocolate Brownie",
        desc: "Large chocolate sponge baked with Guinness stout",
        price: "$9",
      },
      {
        img: "drink2.jpg",
        name: "Red Velvet Cake",
        desc: "Red velvet sponge with cream cheese buttercream",
        price: "$7",
      },
    ],
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
