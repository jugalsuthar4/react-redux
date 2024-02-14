import { CakeActions } from "../actions/cake";
import { BUY_CAKE } from "../actions/types/cake";

interface ICakeState {
  numOfCakes: number;
}

const initialCakeState: ICakeState = {
  numOfCakes: 20,
};

export const cakeReducer = (
  state: ICakeState = initialCakeState,
  action: CakeActions
) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
