import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import OrderForm from './components/OrderForm/OrderForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order-form" exact component={OrderForm} />
      </Switch>
    </div>
  );
}

export default App;
