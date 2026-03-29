const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((elem) => elem.id !== action.payload.id);
    case "COMPLETE": {
      state.forEach((element) => {
        if (element.id === action.payload.id) {
          element.complete = !element.complete;
        }
      });
      return [...state];
    }
    default:
      return state;
  }
};

export default ReducerFunction;
