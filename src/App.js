import Navbar from './components/navbar/navBar'
import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemListContainer'
import ItemDetailContainer from './components/itemdetailcontainer/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {



  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='/menu'>
          <main className='container-fluid my-3'>
            <ItemListContainer />
          </main>
        </Route>
        <Route exact path='/detail/:detailId'>
          <main className='container-fluid my-3'>
            <ItemDetailContainer />
          </main>

        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
