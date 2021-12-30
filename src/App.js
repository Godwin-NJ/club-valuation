
import data from './data'
import Club from './components/Club'
import SingleClub from './components/singleClub'
import { Provider } from "react-redux";
import {createStore} from 'redux';
import reducer from './reducer'

const initialStore = {
    clubInfo : data,
    clubNumber : 0,
    clubsValuation : 0
    // total: 0
}

const store = createStore(reducer,initialStore)

function App() {
  return (
    <Provider store={store}>
      < Club />
      <SingleClub />
    </Provider>
  );
}

export default App;
