import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import ContactReducer from './reducers/ContactReducer';
import Contact from './contact';
import {Provider} from 'react-redux'

const allReducer = combineReducers({
  contacts : ContactReducer
});
const store = createStore(allReducer);
export default class App extends Component {
  constructor(){
    super();
  }

  render (){
    return (
      <div>
        <Provider store={store}>
          <Contact/>
        </Provider>
      </div>
    )
  }

}

ReactDOM.render(<App/>,document.getElementById("root"));
