import Navbar from './components/navbar/navbar'
import './App.css';
//import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcontainer';
//import ItemDetail from './components/itemdetail/itemdetail';
function App() {



  return (
    <>
      <Navbar />
      <main className='container-fluid my-3'>
        <ItemDetailContainer />
      </main>



    </>
  );
}

export default App;
