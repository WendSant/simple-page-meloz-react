import { Container, NavButton } from "./style";
import { PAGE_CREATE, PAGE_EDIT, PAGE_HOME, PAGE_LIST } from '../../support/constants'
const NavBar = ({ handleNavigationClick }) => {

    return (
        <Container>
            <NavButton onClick={() => { handleNavigationClick(PAGE_HOME) }} href="#">Home</NavButton>
            <NavButton onClick={() => { handleNavigationClick(PAGE_LIST) }} href="#">Lista de produtos</NavButton>
            <NavButton onClick={() => { handleNavigationClick(PAGE_CREATE) }} href="#">Criar produto</NavButton>
            <NavButton onClick={() => { handleNavigationClick(PAGE_EDIT) }} href="#">Editar produto</NavButton>
        </Container>
    )
}

export default NavBar;