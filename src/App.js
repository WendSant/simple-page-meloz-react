import './App.css';
import NavBar from './components/NavBar';
import ListProduct from './pages/ListProduct';
import EditProduct from './pages/EditProduct'
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import { Container } from './style';
import { useState } from 'react';

function App() {

  const PAGE_HOME = 1;
  const PAGE_CREATE= 2;
  const PAGE_EDIT = 3;
  const PAGE_LIST= 4;

  const [atualPage, setAtualPage] = useState(PAGE_HOME);

  return (
    <Container>
      <NavBar/>
      {
        atualPage === PAGE_HOME && <Home />
      }
      {
        atualPage === PAGE_CREATE ? <CreateProduct/> : <></>
      }
      {
        atualPage === PAGE_EDIT && <EditProduct/>
      }
      {
        atualPage === PAGE_LIST && <ListProduct/>
      }
    </Container>
  );
}

export default App;
