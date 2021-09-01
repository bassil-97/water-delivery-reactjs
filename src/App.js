import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import OrderForm from './components/OrderForm/OrderForm';
import AddProductsForm from './components/addProductsForm/AddProductsForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order-form" exact component={OrderForm} />
        <Route path="/add-product" exact component={AddProductsForm} />
      </Switch>
    </div>
  );
}

export default App;
