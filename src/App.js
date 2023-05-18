import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
// import CakeContainer from './components/CakeContainer';
// import HookCakecontainner from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import DrinkContainer from './components/DrinkContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
{/* 
        <ItemContainer cake />
        <ItemContainer />
        <IceCreamContainer />
        <HookCakecontainner />
        <DrinkContainer />
        <CakeContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
