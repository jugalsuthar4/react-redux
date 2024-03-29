import './App.css';
import  {Provider}  from "react-redux";
import store from './store/store';
import CakeContainer from './components/cakeContainer';
import CupCakeContainer from './components/cupCakeContainer';
import IceCreamContainer from './components/icecreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/userContainer';
function App() {
  return (

  <Provider store={store}>
    <div className="App">
         {/* <CakeContainer/>
         <CupCakeContainer/>
         <IceCreamContainer/>
         <ItemContainer count={2}/> */}
    <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
