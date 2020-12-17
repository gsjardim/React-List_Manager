import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeScreen } from './view/screens/HomeScreen';
import { LoginScreen } from './view/screens/LoginScreen';
import { SignUpScreen } from './view/screens/SignupScreen';
import  ListsMainScreen from './view/screens/ListsMainScreen';
import { ErrorScreen } from './view/screens/ErrorScreen';
import { ListViewScreen } from './view/screens/ListViewScreen';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/Store';

const store = ConfigureStore();

ReactDOM.render(
  /**
   * The BrowserRouter must wrap the whole app to make navigation possible
   */
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')//The render function renders whatever is in the first argument inside the 'root'
  //element, which is the second parameter here.
);

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} exact />
      <Route path="/signup" component={SignUpScreen} exact />
      <Route path="/lists" component={ListsMainScreen} exact />
      <Route path="/my-list" component={ListViewScreen} exact />
      <Route component={ErrorScreen} />
    </Switch>
  )
}
