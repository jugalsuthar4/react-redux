import './App.css';
import  {Provider}  from "react-redux";
import store from './store/store';
import CakeContainer from './components/cakeContainer';
import CupCakeContainer from './components/cupCakeContainer';
function App() {
  return (

  <Provider store={store}>
    <div className="App">
         <CakeContainer/>
         <CupCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
