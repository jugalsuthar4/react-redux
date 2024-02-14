import { buyCake } from "../actions/cake";
import { connect } from "react-redux";
import { IGlobalState } from "../actions/types/globalState";
const CakeContainer = ({ numOfCakes, buyCake }: any) => {
  return (
    <>
      <h2>cake container</h2>
      <p>{numOfCakes}</p>
      <button onClick={buyCake}>buy cake</button>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
