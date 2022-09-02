type Action = {
  type: string;
  payload?: any;
};

type SignDetail = {
  text: string;
};

type State = {
  thankyou: SignDetail[];
  response: SignDetail[];
};

const initialSignup = [
  {
    text: "Thanks! An email will be sent to you shortly.",
  },
];

const initialState: State = {
  thankyou: initialSignup,
  response: [],
};

const signupReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SIGN_UP_EMAIL":
      const newResponse = state.response;
      return { ...state, response: [...newResponse, action?.payload] };
    default:
      return state;
  }
};

export default signupReducer;
