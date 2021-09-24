import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './views/Home'
import Presale from './views/Presale'

import './App.css';

const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/presale" component={Presale} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;