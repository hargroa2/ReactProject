type Action = {
  type: string;
  payload?: any;
};

type ProductDetail = {
  description: string;
  price: string;
};

type State = {
  products: ProductDetail[];
  user: string;
  items: ProductDetail[];
};

const initialProducts = [
  {
    description: "Dragon Pool Floatie",
    price: "$2",
  },
  {
    description: "Shiny gold keychain",
    price: "$3",
  },
  {
    description: "Ping pong ball pack",
    price: "$4",
  },
  {
    description: "Walking harness",
    price: "$5",
  },
  {
    description: "Jingle ball",
    price: "$3",
  },
  {
    description: "Driftwood",
    price: "$10",
  },
];

const initialState: State = {
  products: initialProducts,
  user: "Amanda",
  items: [],
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItems = state.items;
      console.log(newItems);
      return { ...state, items: [...newItems, action?.payload] };
    case "REMOVE_FROM_CART":
      return { ...state };
    default:
      return state;
  }
};

export default rootReducer;
