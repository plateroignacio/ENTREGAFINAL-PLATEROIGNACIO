import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a GameHub, tu tienda de Gaming!" />
    </div>
  );
}

export default App;

