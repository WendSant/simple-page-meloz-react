import './App.css';
import NavBar from './components/NavBar';
import ListProduct from './pages/ListProduct';
import EditProduct from './pages/EditProduct'
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import { Container } from './style';
import { useState } from 'react';
import { PAGE_CREATE,PAGE_EDIT,PAGE_HOME,PAGE_LIST } from './support/constants'

function App() {


  const [atualPage, setAtualPage] = useState(PAGE_HOME);

  const handleNavigationClick = (pageNumber) => {
    setAtualPage(pageNumber);
 }

  return (
    <Container>
      <NavBar handleNavigationClick = {handleNavigationClick} />
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
