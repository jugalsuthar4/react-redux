import './App.css';
import  {Provider}  from "react-redux";
import store from './store/store';
import CakeContainer from './components/cakeContainer';
import CupCakeContainer from './components/cupCakeContainer';
import IceCreamContainer from './components/icecreamContainer';
function App() {
  return (

  <Provider store={store}>
    <div className="App">
         <CakeContainer/>
         <CupCakeContainer/>
         <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
