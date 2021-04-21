import './App.css';
import {NavigationBar} from './components/navbar/NavBar.js';
import {List} from './components/list/list.js';


function App() {

  const products = [
    {
        title : 'Producto 1',
        price : '100uds',
        description : 'Provisorio '
    },
    {
        title : 'Producto 2',
        price : '200uds',
        description : 'Provisorio'
    }
];

  return(
    <div className="App">
      <NavigationBar />
      <List listProducts = {products} />
      
    </div>
  )
}

export default App;
