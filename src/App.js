import './App.css';
import {NavigationBar} from './components/navbar/NavBar.js';
import {List} from './components/list/List.js';
import ItemCount from './components/ItemCount';


function App() {

  const products = [
    {
        title : 'Producto 1',
        price : '100uds',
        description : 'Provisorio ',
        stock: 4,
    },
    
];

  return(
    <div className="App">
      <NavigationBar />
      <List ListProducts = {products} />
      <ItemCount stock ={products[0].stock} initial='0'  />
      
    </div>
  )
}

export default App;
