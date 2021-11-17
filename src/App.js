import Navbar from './components/navbar/navBar'
import ItemListContainer from './components/itemlistcontainer/itemListContainer'
import ItemDetailContainer from './components/itemdetailcontainer/itemDetailContainer';
import Cart from './components/cartContainer/cartContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <div className='item-list-container'>
              <ItemListContainer />
            </div>
          </Route>
          <Route exact path='/categoria/:categoryId'>
            <div className='container-fluid my-3 '>
              <ItemListContainer />
            </div>
          </Route>
          <Route exact path='/detail/:detailId'>
            <div className='container my-3'>

              <ItemDetailContainer />
            </div>
          </Route>
          <Route exact path='/cart'>
            <div>
              <Cart />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
