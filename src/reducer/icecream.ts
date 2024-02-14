import { CakeActions } from "../actions/cake";
import { IceCreamActions } from "../actions/icecream";
import { BUY_CAKE } from "../actions/types/cake";
import { BUY_ICECREAM } from "../actions/types/icecream";

interface IIceCreamState {
  numOfIceCreams: number;
}

const initialIcecreamState: IIceCreamState = {
    numOfIceCreams: 30,
};

export const iceCreamReducer = (
  state: IIceCreamState = initialIcecreamState,
  action: IceCreamActions
) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
