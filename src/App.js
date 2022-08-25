import './App.css';
import NavBar from './components/NavBar';
import ListProduct from './pages/ListProduct';
import EditProduct from './pages/EditProduct'
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import { Container } from './style';

function App() {
  return (
    <Container>
      <NavBar/>
      <Home/>
      <ListProduct/>
      <EditProduct/>
      <CreateProduct/>
    </Container>
  );
}

export default App;
