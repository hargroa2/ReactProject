type Action = {
  type: string;
  payload?: any;
};

type FoodDetail = {
  price: string;
  name: string;
};

const initialMenu = [
  {
    name: "Sheperd's Pie",
    price: "$17",
  },
  {
    name: "Irish Coddle",
    price: "$15",
  },
  {
    name: "Bangers & Mash",
    price: "$18",
  },
  {
    name: "Irish Food1",
    price: "$17",
  },
  {
    name: "Irish Food2",
    price: "$17",
  },
  {
    name: "Irish Food3",
    price: "$17",
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
