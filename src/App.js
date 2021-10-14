import Navbar from './components/navbar/navbar'
import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
function App() {



  return (
    <>
      <Navbar />
      <main className='container-fluid my-3'>
        <ItemListContainer />
      </main>



    </>
  );
}

export default App;
